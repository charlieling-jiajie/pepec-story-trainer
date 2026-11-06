# -*- coding: utf-8 -*-
"""批量合成 20 篇故事标准音（demo 版验证过的读法方案）。
用法（workbuddy python，已装 sherpa-onnx/lameenc）：
  python tools/build_audio.py [--sid 24] [--speed 0.97] [--only 2 5]
读 data/stories_pron.json 的 tts 字段，按标点插停顿（逗号 0.16s / 句号 0.42s），
单字母 TTS 可读化（ei→eh=字母A本音/eɪ/，G P S→gee pee ess），输出 web/audio/sNN.mp3。
"""
import json, os, re, sys, time
import numpy as np
import sherpa_onnx
import lameenc

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KOKORO_DIR = os.path.join(ROOT, "models", "kokoro-multi-lang-v1_0")
DATA = os.path.join(ROOT, "data", "stories_pron.json")
OUT_DIR = os.path.join(ROOT, "web", "audio")
META = os.path.join(ROOT, "data", "audio_meta.json")
GAP_COMMA, GAP_STOP = 0.16, 0.42

# 单字母可读化（仅 TTS 用；spoken/比对不受影响）
# 音素实测（piper espeak oracle）：espeak 把 ei/ay/ey 都读成 /aɪ/（"I"），
# 只有 eh/eigh 读 /eɪ/；句中 "a" 会弱化。故 TTS 把词 "ei" 替换为 "eh"。
LETTER_TTS = [
    ("G P S", "gee pee ess"),
]

def tts_letters(text):
    for a, b in LETTER_TTS:
        text = text.replace(a, b)
    text = re.sub(r'\bei\b', 'eh', text)   # 字母 A 本音 /eɪ/
    return text

def make_kokoro(sid):
    cfg = sherpa_onnx.OfflineTtsConfig(
        model=sherpa_onnx.OfflineTtsModelConfig(
            kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(
                model=os.path.join(KOKORO_DIR, "model.onnx"),
                voices=os.path.join(KOKORO_DIR, "voices.bin"),
                tokens=os.path.join(KOKORO_DIR, "tokens.txt"),
                data_dir=os.path.join(KOKORO_DIR, "espeak-ng-data"),
                dict_dir=os.path.join(KOKORO_DIR, "dict"),
                lexicon=os.path.join(KOKORO_DIR, "lexicon-us-en.txt"),
                length_scale=1.0,
            ),
            num_threads=6, provider="cpu",
        ),
        max_num_sentences=1,
    )
    return sherpa_onnx.OfflineTts(cfg), sid

def synth_with_pauses(tts, text, sid, speed):
    pieces, sr = [], 24000
    for chunk, p in re.findall(r"([^,;:.?!]+)([,;:.?!]?)", text):
        chunk = chunk.strip()
        if not chunk:
            continue
        a = tts.generate(chunk, sid=sid, speed=speed)
        if len(a.samples) == 0:
            continue
        sr = a.sample_rate
        pieces.append(np.asarray(a.samples, dtype=np.float32))
        if p:
            gap = GAP_STOP if p in ".?!" else GAP_COMMA
            pieces.append(np.zeros(int(gap * sr), dtype=np.float32))
    if not pieces:
        return np.zeros(0, dtype=np.float32), sr
    while pieces and not pieces[-1].any():
        pieces.pop()
    return np.concatenate(pieces), sr

def encode_mp3(samples, sr, path, bitrate=64):
    pcm = np.clip(np.asarray(samples) * 32767, -32768, 32767).astype(np.int16)
    enc = lameenc.Encoder()
    enc.set_bit_rate(bitrate)
    enc.set_in_sample_rate(sr)
    enc.set_channels(1)
    enc.set_quality(3)
    data = enc.encode(pcm.tobytes()) + enc.flush()
    with open(path, "wb") as f:
        f.write(data)

def main():
    sid, speed = 24, 0.97
    only = None
    if "--sid" in sys.argv:
        sid = int(sys.argv[sys.argv.index("--sid") + 1])
    if "--speed" in sys.argv:
        speed = float(sys.argv[sys.argv.index("--speed") + 1])
    if "--only" in sys.argv:
        i = sys.argv.index("--only")
        only = set(sys.argv[i + 1:])

    data = json.load(open(DATA, encoding="utf-8"))
    tts, sid = make_kokoro(sid)
    os.makedirs(OUT_DIR, exist_ok=True)
    meta = json.load(open(META, encoding="utf-8")) if os.path.exists(META) else {}

    t0 = time.time()
    for s in data["stories"]:
        key = str(s["id"])
        if only and key not in only:
            continue
        out = os.path.join(OUT_DIR, f"s{int(key):02d}.mp3")
        if os.path.exists(out) and key in meta and "--force" not in sys.argv:
            continue
        samples, sr = synth_with_pauses(tts, tts_letters(s["tts"]), sid, speed)
        if len(samples) == 0:
            print("EMPTY", key, flush=True)
            continue
        encode_mp3(samples, sr, out)
        meta[key] = {"dur": round(len(samples) / sr, 3),
                     "kb": round(os.path.getsize(out) / 1024, 1)}
        print(f"S{int(key):02d} ok {meta[key]['dur']}s {meta[key]['kb']}KB", flush=True)
        json.dump(meta, open(META, "w", encoding="utf-8"), ensure_ascii=False)

    total = sum(v["kb"] for v in meta.values())
    print(f"DONE {len(meta)} files, {total/1024:.1f} MB, {time.time()-t0:.0f}s", flush=True)

if __name__ == "__main__":
    main()
