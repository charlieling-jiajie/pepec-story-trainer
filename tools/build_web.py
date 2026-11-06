# -*- coding: utf-8 -*-
"""合并数据 → web/data/stories.js（前端故事模块）。
输入：data/stories_pron.json（应读文本）+ data/annotations.json（信息点标注，键=故事id字符串）
输出：web/data/stories.js
用法：python tools/build_web.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRON = os.path.join(ROOT, "data", "stories_pron.json")
ANNO = os.path.join(ROOT, "data", "annotations.json")
OUT = os.path.join(ROOT, "web", "data", "stories.js")

CAT_EN = {'背景': 'background', '问题': 'problem', '细节': 'detail',
          '处置': 'action', '事件': 'event', '结局': 'outcome'}

# 串题主题：每篇的标志性内容（小写英文）。评分时，出现「别的故事」的主题词 → 疑似串题。
# 注意：避免跨篇共用的泛词（grass/fire/turbulence 裸词会误伤）。
THEMES = {
    1:  ('起落架指示灯', ['landing gear', 'nose gear', 'indicator light', 'indicator bulb', 'low pass']),
    2:  ('雷暴绕飞', ['thunderstorm', 'weather radar', 'deviation to the south', 'detour', 'dispatcher']),
    3:  ('鸟击中断起飞', ['bird', 'birds', 'flock', 'rejected takeoff', 'aborted takeoff', 'fan blades']),
    4:  ('座舱释压', ['cabin altitude', 'oxygen mask', 'emergency descent', 'door seal', 'cabin pressure']),
    5:  ('车辆占道复飞', ['maintenance vehicle', 'go around', 'went around', 'runway without clearance', 'vehicle']),
    6:  ('旅客急病备降', ['chest pain', 'doctor on board', 'ambulance', 'satellite phone', 'divert to']),
    7:  ('液压低', ['hydraulic', 'hydraulics', 'pan-pan', 'pan pan']),
    8:  ('浓雾备降', ['heavy fog', 'visibility', 'holding pattern', 'alternate airport', 'divert to']),
    9:  ('发动机失效', ['engine failure', 'engine failed', 'left engine', 'one engine', 'turbine blade']),
    10: ('风切变', ['windshear', 'wind shear', 'full thrust']),
    11: ('燃油不平衡', ['fuel imbalance', 'crossfeed', 'cross-feed', 'fuel pump']),
    12: ('湿跑道冲出', ['wet runway', 'tailwind', 'slid onto', 'evacuated', 'slides', 'overran', 'touchdown long']),
    13: ('雷击', ['lightning', 'struck by lightning', 'burn marks']),
    14: ('通信失效', ['7600', 'transponder code', 'lost communication', 'lost radio contact', 'radio switch']),
    15: ('烤箱冒烟', ['smoke', 'oven', 'extinguisher', 'burning plastic', 'galley']),
    16: ('尾流', ['wake turbulence', 'wake']),
    17: ('滑错滑行道', ['wrong turn', 'taxiway', 'construction', 'follow-me', 'follow me', 'airport chart']),
    18: ('空速不可靠', ['pitot', 'unreliable airspeed', 'airspeed indicator', 'pitch attitude']),
    19: ('无人机', ['drone', 'uav', 'unmanned aircraft']),
    20: ('除冰', ['de-icing', 'deicing', 'de-ice', 'holdover', 'de-icing fluid']),
}

REQUIRED = {"id", "cat", "label", "en", "w", "num", "variants"}


def main():
    pron = json.load(open(PRON, encoding="utf-8"))
    anno = json.load(open(ANNO, encoding="utf-8"))

    stories = []
    for s in pron["stories"]:
        sid = s["id"]
        units = anno.get(str(sid))
        if not units:
            raise SystemExit(f"missing annotations for story {sid}")
        for i, u in enumerate(units):
            miss = REQUIRED - set(u)
            if miss:
                raise SystemExit(f"S{sid} unit {i} missing {miss}")
            if u["cat"] not in CAT_EN:
                raise SystemExit(f"S{sid} unit {i} bad cat {u['cat']}")
            if not isinstance(u["w"], int) or u["w"] < 1:
                raise SystemExit(f"S{sid} unit {i} bad w")
            if not u["variants"]:
                raise SystemExit(f"S{sid} unit {i} empty variants")

        label, words = THEMES[sid]
        probes = [{"label": THEMES[t][0], "words": THEMES[t][1]}
                  for t in sorted(THEMES) if t != sid]
        ref_words = len(re.findall(r"[A-Za-z0-9']+", s["text"]))

        stories.append({
            "id": sid,
            "title": f"Story {sid} · {label}",
            "text": s["text"],
            "zh": s["zh"],
            "spoken": s["spoken"],
            "audio": f"audio/s{sid:02d}.mp3",
            "refWords": ref_words,
            "refWpm": [85, 150],
            "units": units,
            "probes": probes,
        })

    js = []
    js.append("// 由 tools/build_web.py 生成 — 请勿手改（改 data/annotations.json 后重新生成）")
    js.append(f"export const CAT_EN = {json.dumps(CAT_EN, ensure_ascii=False)};")
    js.append("export const STORIES = " + json.dumps(stories, ensure_ascii=False, indent=1) + ";")
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(js) + "\n")

    n_units = sum(len(s["units"]) for s in stories)
    print(f"OK {len(stories)} stories, {n_units} units -> {OUT}")


if __name__ == "__main__":
    main()
