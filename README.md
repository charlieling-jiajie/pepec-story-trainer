# PEPEC 故事复诵训练器（ICAO Level 5 · Part 4 Story Retelling）

听标准音 → 用自己的话复述录音 → 立刻给出**信息点覆盖评分**：哪些关键信息说到、哪些漏了、数字对不对、有没有把别的故事混进来。给备考 ICAO5 / PEPEC Part 4 的飞行员与管制学员用。

**不联网、不上传录音、不调用任何大模型**：标准音离线预合成，语音识别（Whisper-tiny）在浏览器本地推理，评分逻辑纯前端。

姊妹项目：[pepec900-trainer](https://github.com/charlieling-jiajie/pepec900-trainer)（900 句复诵，逐词发音比对）。

作者：**CharlieL**

---

## 两种用法

**在线用（免安装）**
https://charlieling-jiajie.github.io/pepec-story-trainer/
手机浏览器可"添加到主屏幕"，体验接近 App。

**本地用**
1. 双击 `start.bat`（需要 Python 3.7+，仅用来起一个本地静态服务器）
2. 服务就绪后浏览器自动打开 `http://127.0.0.1:8080/`

> 不要直接双击 `web/index.html`：浏览器会因安全限制拒绝读取音频文件与模型，评分不可用。

---

## 功能

| 功能 | 说明 |
|---|---|
| 20 篇题库 | PEPEC Part 4 故事复述题目（中英对照），带篇目选择器 |
| 标准音 | 每篇一条离线合成音（Kokoro-82M，24 kHz，男声），整篇带标点停顿 |
| 录音 | 一键录/停，计时，最长 180 秒（复述一篇约 60–120 秒） |
| 信息点评分 | 本地 Whisper 转写 → 与**信息点清单**逐条比对（含同义说法/数字归一），给覆盖分 |
| 数字核对 | 高度/距离/编码等数值单独核对（FL350、7600、37,000…） |
| 流利度 | 语速（词/分）与录音时长 |
| 串题探针 | 说出其他故事的标志性内容会提示"疑似串题"（如本篇雷暴却提鸟击） |
| 自查清单 | 不用识别的兜底：英文信息点清单勾选算覆盖率（微信内置浏览器可用） |
| 训练记录 | 练习次数、最好分、错题本（<70 分自动收录，≥85 分自动移出），存浏览器 localStorage |

## 评分怎么算（路线 A：信息点覆盖）

复述是自由表达，措辞语序因人而异，所以**不做逐词声学比对**（那是 pepec900 的句子复诵模式），改为"内容覆盖"评分：

1. **建库时**给每篇标注 10–15 个信息点（背景/问题/处置/事件/结局），每个点带权重、中文说明、英文提示、**可接受的说法变体**（如 rejected takeoff ≈ aborted takeoff ≈ takeoff rejected）；
2. **运行时**把录音用 Whisper-tiny 本地转写，归一化（数字读法 tree≈three≈3、字母 A 读法 ei≈ay≈a、缩写展开）后与每个信息点做模糊匹配（词干 + 编辑距离）；
3. **总分** = 信息点覆盖 70% + 数字命中 15% + 语速合理 15% − 串题惩罚 5 分/处。

每个信息点显示命中了哪种说法，漏掉的点给中文提示——可解释，像教练批改。

## 读法标准（考试发音要点）

| 原文 | 应读 | 说明 |
|---|---|---|
| `three`（任何位置） | **tree** | 全量替换，含数词（three hundred → tree hundred） |
| `FL350` | `flight level tree five zero` | 高度层逐位读 |
| `7600` | `seven six zero zero` | 应答机编码逐位读 |
| `37,000 / 12,000 feet` | `tree seven thousand / one two thousand feet` | ≥10000 整千逐位 + thousand |
| `800 kg / 300 m` | `eight hundred kilograms / tree hundred metres` | 数量用数词（three 仍读 tree） |
| `Boeing 737` | `Boeing seven tree seven` | 保留制造商名，不读出 B |
| `Airbus A320` | `Airbus ei tree two zero` | A 读本音 ei（/eɪ/） |
| `GPS` | `G P S` | 字母直读，不用 ICAO 拼读词 |

> TTS 实现注记：sherpa-onnx 的 espeak 分支把 `ei`/`ay` 读成 /aɪ/（"I"），只有 `eh` 稳定读 /eɪ/，故合成文本内部把 `ei` 写作 `eh`（piper espeak 音素 oracle 实测），界面与比对仍显示 `ei`。

## 目录结构

```
pepec-story-trainer/
├─ web/                     # 纯静态站点，可直接托管
│  ├─ index.html            # 训练器页面（篇目选择 + 录音 + 评分 + 自查 + 记录）
│  ├─ app.js                # 交互 + 录音 + Route A 评分引擎
│  ├─ styles.css
│  ├─ data/stories.js       # 20 篇数据（原文/应读/信息点/串题主题）
│  ├─ audio/s01..s20.mp3    # 参考音（约 5 MB）
│  └─ lib/                  # asr.js（Whisper 本地识别）+ diff.js（归一化/比对）+ transformers 运行时
│     └─ models/…（识别模型 whisper-tiny.en，约 43MB，随站点发布）
├─ data/
│  ├─ stories_pron.json     # 20 篇应读文本 + 发音替换记录
│  ├─ annotations.json      # 信息点标注（评分核心）
│  └─ audio_meta.json       # 参考音时长/大小
├─ tools/
│  ├─ build_audio.py        # 应读文本 → 参考音（Kokoro 离线合成）
│  ├─ build_web.py          # 数据合并 → web/data/stories.js
│  ├─ serve.py              # 本地静态服务器（start.bat 调用）
│  └─ build_stories_pron.py 原始文本 → 应读（读法替换，见 docs/HANDOVER.md）
├─ models/                  # TTS 语音（不入库，脚本下载）
├─ docs/HANDOVER.md         # 交接文档（换人/换设备维护先读）
└─ start.bat
```

## 维护语料与标注

改标注只动 `data/annotations.json`（每篇 10–15 个信息点，字段说明见 `tools/build_web.py` 头部与样例），然后：

```bash
python tools/build_web.py     # 重新生成 web/data/stories.js
```

改读法后重生成应读与音频：

```bash
python tools/build_stories_pron.py    # 原文 → 应读（tree/ei/GPS 规则）
python tools/build_audio.py --force   # 重生成 20 篇标准音（约 2 分钟）
python tools/build_web.py
```

> 标准音合成需要 `models/kokoro-multi-lang-v1_0/`（不入库）：
> `https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_0.tar.bz2`
> Python 环境需 `sherpa-onnx`、`lameenc`、`numpy`。

## 部署到 GitHub Pages

仓库已含 `.github/workflows/pages.yml`，推送到 `main` 后自动把 `web/` 发布（自带 HTTPS）。

```bash
git add -A && git commit -m "..." && git push
# 1–2 分钟后 https://charlieling-jiajie.github.io/pepec-story-trainer/ 自动更新
```

**更新流程**：改完推送即可。页面与资源带 `?v=N` 版本号，改版后记得把 `v` 加一，避免浏览器用旧缓存。

## 能力边界（务必知情）

1. **识别是 Whisper-tiny**：嘈杂环境、口音重时转写会有错，评分是"辅助自测"不是考官判分；自查清单是可靠兜底。
2. **同义说法靠变体表**：正常改述大多能兜住，但不能像人一样理解语义；漏判时以自查清单为准。
3. **参考音是合成音**，不是考试原声，语速语调仅作示范。
4. **手机端识别较慢**（90 秒录音约转 1–3 分钟），建议电脑识别、手机听录；微信内置浏览器跑不动识别模型（会提示"在浏览器打开"），但录音与自查清单可用。

> 语料为民航局公开发布的考试题材改编，仅用于学习交流；商用或再分发请自行确认授权。

## 路线图

| 版本 | 内容 |
|---|---|
| **v1.0（当前）** | 20 篇 + 标准音 + 信息点评分 + 自查清单 + 训练记录 |
| v1.1 | 更多故事题材；评分阈值按真实练习数据校准 |
| v1.2 | 音素级发音判定（复用 pepec900 的 wav2vec2/GOP 路线） |
| v2.0 | 可选联网 LLM 语义评分（填 API key 才启用，默认仍离线） |

## 许可

代码 MIT。题材内容仅作学习用途，不作商业分发。
