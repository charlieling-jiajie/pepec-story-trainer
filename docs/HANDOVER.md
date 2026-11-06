# 交接文档 — PEPEC 故事复诵训练器

换设备继续维护、或让 AI 接手，先读本文。姊妹项目 pepec900-trainer 的读法表/比对思路在此复用。

## 一句话

纯静态前端：20 篇 ICAO5 故事复诵，Kokoro 预合成标准音 + 浏览器本地 Whisper 转写 + **信息点覆盖评分**（Route A）。零后端、零 API、录音不上传。

## 评分设计（Route A）——为什么这样打分

复述是自由表达，逐词声学比对（pepec900 的做法）会把正常改述判错。改为：

- `data/annotations.json`：每篇 10–15 个信息点（cat 中文类别 / label 中文 / en 英文提示 / w 权重 / num 数字要求 / variants 可接受说法列表）。
- 运行时：Whisper 转写 → 归一化 → 逐点匹配（variants 里任一说法的全部词干单元被命中即算命中，顺序无关；另有紧凑串回退兜数字粘连如 a320）。
- 总分 = 70%覆盖 + 15%数字 + 15%语速(85–150 词/分) − 5×串题处。
- 串题探针：`tools/build_web.py` 的 THEMES 表，每篇的主题词表，评分时排除本篇主题，命中其他篇主题 → 警告（软性扣分）。

改标注 → `python tools/build_web.py` 重新生成 `web/data/stories.js`。

## 读法规则（用户拍板，2026-11-06）

1. **所有 three 读 tree**（含数词）；9/niner 与小数点在 20 篇中未出现。
2. ≥10000 整千高度逐位+thousand（12,000 → one two thousand）；<10000 数量用数词（800 kg → eight hundred kilograms）。
3. 机型保留制造商名：Boeing 737 → `Boeing seven tree seven`（不读出 B）；Airbus A320 → `Airbus ei tree two zero`（A 读本音 /eɪ/）。
4. 字母直读：GPS → `G P S`；不用 ICAO 拼读词。
5. 应答机编码逐位：7600 → `seven six zero zero`。
6. 数字的归一化匹配复用 pepec900 的 `web/lib/diff.js`（toUnits：three≈tree≈3、千百合并、字母合并）；app.js 额外把 ei/eh/ay 归一为字母 a。

## TTS 管道（坑已踩完，别改回去）

- 引擎：Kokoro-82M `kokoro-multi-lang-v1_0`（sherpa-onnx），**sid=24**（128Hz 男声），speed=0.97，24kHz，lameenc 64kbps。
- 停顿：Kokoro 不理会标点，按标点切段合成后插静音（逗号 0.16s、句号 0.42s）——`tools/build_audio.py` 的 `synth_with_pauses`。
- **字母 A 本音 /eɪ/ 的实现**：sherpa-onnx 的 Kokoro 永远走 espeak 转音素（模型元数据 `voice=en-us` 烤死，`KokoroMultiLangLexicon` 的词典分支不可达——k2-fsa/sherpa-onnx `scripts/kokoro/7m-distill/README.md` 记载的已知缺陷，空 voice 被宏默认值兜底成 en-us）。espeak 把 `ei`/`ay`/`ey` 全部读成 /aɪ/"I"，只有 `eh`/`eigh` 稳定读 /eɪ/（句中不弱化；"a" 句中会弱化成 schwa 不能用）。故 **TTS 文本把词 `ei` 替换为 `eh`**（`build_audio.py` 的 `tts_letters`），界面/比对仍显示 `ei`。验证工具：`piper-tts` 包的 `EspeakPhonemizer.phonemize('en-us', text)` 可查任意文本的音素。
- GPS：TTS 文本写 `gee pee ess`（同理保证字母读音），界面显示 `G P S`。
- 词典 `models/kokoro-multi-lang-v1_0/lexicon-us-en.txt` 里加过 `ei A`/`ay A` 条目——目前无效果（词典分支不可达）但无害，留给未来 sherpa 修复。

## 数据流水线

```
PEPEC_故事复述题目_中英对照.docx（20 篇原文）
  → stories_raw.json（提取）
  → tools/build_stories_pron.py → data/stories_pron.json   # 文字→应读替换（tree/机型/数字）
  → tools/build_audio.py → web/audio/s01..s20.mp3           # Kokoro 合成
  → data/annotations.json（人工/LLM 标注信息点）
  → tools/build_web.py → web/data/stories.js                # 前端数据模块
```

## 已知边界

- Whisper-tiny 转写在嘈杂/重口音下有错，评分是自测辅助；自查清单是兜底。
- variants 变体表兜同义改述，不能替代语义理解。
- 手机 WASM 推理慢（90 秒录音 1–3 分钟）；微信内置浏览器不支持 WASM 识别（asrEnv 检测并提示），录音/自查清单不受限。
- 训练记录存 localStorage（键 `pepec-story-progress-v1`），换浏览器/清缓存即丢。

## 环境备忘（本机构建用）

- 合成 Python：`C:\Users\31383\.workbuddy\binaries\python\envs\default\Scripts\python.exe`（已装 sherpa-onnx 1.13.8、lameenc、numpy、piper-tts）。
- Kokoro 模型下载：`https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_0.tar.bz2`（约 350MB）→ 解压到 `models/`。
- 仓库发布体积：web/ 约 53MB（音频 5MB + Whisper 模型 43MB + transformers 运行时 5MB）；`models/` 不入库。

## 版本号机制

页面与静态资源带 `?v=N`；改了 app.js/data 后把 index.html 里的 `?v` 与 app.js 里 `?v=2`（音频）加一，避免浏览器旧缓存。
