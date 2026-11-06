// PEPEC Part 4 故事复诵训练 — 交互 + 录音 + Route A 信息点评分 + 训练记录
import { STORIES, CAT_EN } from './data/stories.js';
import { asrEnv, loadASR, transcribe } from './lib/asr.js';
import { toUnits, expandAbbr } from './lib/diff.js';

const $ = (id) => document.getElementById(id);
const ABBR = { fl: 'flight level', ils: 'i l s', vor: 'v o r', gps: 'g p s' };
const LS_KEY = 'pepec-story-progress-v1';

/* ---------------- 进度存储 ---------------- */
function loadProgress() {
  try {
    const p = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    return { perStory: p.perStory || {}, wrongBook: p.wrongBook || [], lastIdx: p.lastIdx || 0 };
  } catch { return { perStory: {}, wrongBook: [], lastIdx: 0 }; }
}
function saveProgress(p) { localStorage.setItem(LS_KEY, JSON.stringify(p)); }
const progress = loadProgress();

/* ---------------- 篇目选择 ---------------- */
let idx = 0;
function shortTitle(story) { return story.title.replace(/^Story \d+ · /, ''); }

$('picker').innerHTML = STORIES.map((s, i) =>
  `<button class="pick" data-i="${i}">${s.id}. ${shortTitle(s)}</button>`).join('');
$('picker').addEventListener('click', (e) => {
  const b = e.target.closest('.pick');
  if (b) selectStory(+b.dataset.i);
});

function selectStory(i) {
  idx = i;
  progress.lastIdx = i;
  saveProgress(progress);
  renderStory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------- 渲染当前篇 ---------------- */
function renderStory() {
  const s = STORIES[idx];
  $('storyTitle').textContent = `— ${s.title}`;
  $('refAudio').src = s.audio + '?v=2';
  $('origText').textContent = s.text;
  $('zhText').textContent = s.zh;
  $('spokenText').textContent = s.spoken;
  $('textPanel').classList.add('hidden');
  $('result').innerHTML = '';
  $('asrProgress').textContent = '';
  $('selfResult').innerHTML = '';
  $('recState').textContent = '未录音';
  $('btnPlayMine').disabled = true;
  $('btnAsr').disabled = true;
  recBlob = null; recDur = 0;
  $('selfCheck').innerHTML = s.units.map(u =>
    `<label class="selfItem"><input type="checkbox" data-w="${u.w}" data-num="${u.num || ''}">
     <span>${u.en}</span><em>${CAT_EN[u.cat] || u.cat} · ${u.w} pts</em></label>`).join('');
  document.querySelectorAll('.pick').forEach((b, j) =>
    b.classList.toggle('active', j === idx));
  renderStats();
}

$('btnText').onclick = () => $('textPanel').classList.toggle('hidden');

const env = asrEnv();
if (!env.ok) {
  $('envWarn').innerHTML = `⚠️ ${env.reason}`;
  $('btnAsr').title = env.reason;
} else if (env.warn) {
  $('envWarn').innerHTML = `⚠️ ${env.warn}`;
}

/* ---------------- 录音 ---------------- */
let rec = null, recChunks = [], recBlob = null, recDur = 0;
let recTimer = null, recStart = 0, stream = null;

$('btnRec').onclick = async () => {
  if (rec && rec.state === 'recording') { rec.stop(); return; }
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (e) {
    $('recState').textContent = '无法访问麦克风：' + e.message;
    return;
  }
  recChunks = []; recBlob = null;
  rec = new MediaRecorder(stream);
  rec.ondataavailable = (e) => { if (e.data.size) recChunks.push(e.data); };
  rec.onstop = () => {
    clearInterval(recTimer);
    recDur = (Date.now() - recStart) / 1000;
    recBlob = new Blob(recChunks, { type: rec.mimeType || 'audio/webm' });
    stream.getTracks().forEach(t => t.stop());
    $('btnRec').textContent = '● 开始录音';
    $('recState').textContent = `已录 ${recDur.toFixed(1)} 秒（点「识别我说的」评分）`;
    $('btnPlayMine').disabled = false;
    $('btnAsr').disabled = !env.ok;
  };
  rec.start();
  recStart = Date.now();
  $('btnRec').textContent = '■ 停止';
  $('btnAsr').disabled = true;
  $('result').innerHTML = '';
  $('recState').textContent = '录音中… 0 秒';
  recTimer = setInterval(() => {
    const s = (Date.now() - recStart) / 1000;
    $('recState').textContent = `录音中… ${s.toFixed(0)} 秒`;
    if (s >= 180) rec.stop();
  }, 500);
};

$('btnPlayMine').onclick = () => {
  if (!recBlob) return;
  new Audio(URL.createObjectURL(recBlob)).play();
};

/* ---------------- 录音 → 16kHz Float32 ---------------- */
async function blobToSamples(blob) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const buf = await ctx.decodeAudioData(await blob.arrayBuffer());
  const ch = buf.getChannelData(0);
  const target = 16000;
  if (buf.sampleRate === target) { ctx.close(); return new Float32Array(ch); }
  const ratio = buf.sampleRate / target;
  const out = new Float32Array(Math.floor(ch.length / ratio));
  for (let i = 0; i < out.length; i++) out[i] = ch[Math.floor(i * ratio)];
  ctx.close();
  return out;
}

/* ---------------- 匹配引擎（Route A） ---------------- */
const STOP = new Set(['the', 'a', 'an', 'of', 'to', 'and', 'or', 'was', 'were', 'is', 'in',
  'on', 'for', 'with', 'that', 'it', 'its', 'would', 'be', 'been', 'he', 'she', 'they',
  'his', 'her', 'their', 'this', 'at', 'from', 'as', 'but', 'so', 'by', 'about', 'during',
  'after', 'before', 'when', 'had', 'has', 'have', 'could', 'should', 'there']);

function stem(w) {
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 4 && w.endsWith('es')) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
  return w;
}

function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++)
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}

// 文本 → 匹配单元：词（去停用词+词干）/ 数值 / 字母组
// 字母 A 的读法归一：ei / eh / ay / a（单独成词）视为同一单元
function matchUnits(text) {
  const t = String(text || '').replace(/\b(ei|eh|ay)\b/gi, 'a');
  return toUnits(expandAbbr(t, ABBR))
    .filter(u => u.kind !== 'word' || !STOP.has(u.s))
    .map(u => u.kind === 'word' ? { ...u, s: stem(u.s) } : u);
}

function unitMatch(vu, tu) {
  if (vu.s === tu.s) return true;
  if (vu.kind === 'word' && tu.kind === 'word' && vu.s.length >= 5 && lev(vu.s, tu.s) <= 1) return true;
  return false;
}

function hitVariant(vUnits, tUnits, used) {
  for (let i = 0; i < vUnits.length; i++) {
    let found = -1;
    for (let j = 0; j < tUnits.length; j++) {
      if (used[j]) continue;
      if (unitMatch(vUnits[i], tUnits[j])) { found = j; break; }
    }
    if (found < 0) return false;
    used[found] = true;
  }
  return true;
}

function compact(units) { return units.map(u => u.s).join(''); }

// 英文数词 → 数值（补 diff.js 只认 0–9 的缺口：teens/tens + 复合）
const W2N = { ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30,
  forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const UNIT1 = { one: 1, two: 2, three: 3, tree: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, niner: 9 };

function numCandidates(text) {
  const set = new Set();
  for (const u of toUnits(text)) if (u.kind === 'num') set.add(u.s);
  const w = String(text || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  for (let i = 0; i < w.length; i++) {
    let v = null;
    if (w[i] in W2N) {
      v = W2N[w[i]];
      if (w[i + 1] in UNIT1) { v += UNIT1[w[i + 1]]; i++; }         // thirty seven → 37
    } else if (w[i] in UNIT1) {
      v = UNIT1[w[i]];
    } else continue;
    if (w[i + 1] === 'hundred') { v = (v || 1) * 100; i++; }         // fifteen hundred → 1500
    if (w[i + 1] === 'thousand') { v = (v || 1) * 1000; i++; }       // twelve thousand → 12000
    set.add(String(v));
  }
  return set;
}

function matchUnit(u, tUnits, tCompact) {
  for (const v of u.variants) {
    const vUnits = matchUnits(v);
    if (vUnits.length && hitVariant(vUnits, tUnits, new Array(tUnits.length).fill(false)))
      return v;
    const cv = compact(vUnits);
    if (cv.length >= 3 && tCompact.includes(cv)) return v;
  }
  return null;
}

function findProbes(text, probes) {
  const t = ' ' + text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ') + ' ';
  return probes
    .map(p => ({ label: p.label, hits: p.words.filter(w => t.includes(' ' + w.replace(/[^a-z0-9 ]/g, '') + ' ') || t.includes(w)) }))
    .filter(p => p.hits.length);
}

function countWords(text) {
  return String(text || '').trim().split(/\s+/).filter(Boolean).length;
}

function scoreAll(hypText) {
  const s = STORIES[idx];
  const tUnits = matchUnits(hypText);
  const tCompact = compact(tUnits);
  const tNums = numCandidates(hypText);
  let wHit = 0, wAll = 0;
  const rows = [];
  let numOk = 0, numAll = 0;
  for (const u of s.units) {
    const via = matchUnit(u, tUnits, tCompact);
    let numOkU = null;
    if (u.num) {
      numAll++;
      numOkU = tNums.has(u.num) || tCompact.includes(u.num);
      if (numOkU) numOk++;
    }
    if (via) wHit += u.w;
    wAll += u.w;
    rows.push({ ...u, hit: !!via, via, numOkU });
  }
  const probes = findProbes(hypText, s.probes);
  const words = countWords(hypText);
  const wpm = recDur > 0 ? Math.round(words / (recDur / 60)) : 0;
  const [lo, hi] = s.refWpm;
  const flu = wpm >= lo && wpm <= hi ? 1 : 0.5;
  const cov = wAll ? wHit / wAll : 0;
  const num = numAll ? numOk / numAll : 1;
  let total = Math.round(70 * cov + 15 * num + 15 * flu - 5 * probes.length);
  total = Math.max(0, Math.min(100, total));
  return { rows, probes, words, wpm, cov, num, flu, total, numOk, numAll, wHit, wAll };
}

/* ---------------- 识别 + 结果渲染 ---------------- */
$('btnAsr').onclick = async () => {
  if (!recBlob) return;
  $('btnAsr').disabled = true;
  $('asrProgress').textContent = '准备中…';
  try {
    const samples = await blobToSamples(recBlob);
    const hyp = await transcribe(samples, (p) => {
      if (p && p.status === 'progress') {
        $('asrProgress').textContent = `模型加载 ${p.progress || 0}%`;
      } else if (p && p.status === 'running') {
        $('asrProgress').textContent = '识别中…（手机约 1–3 分钟，请勿锁屏）';
      }
    });
    $('asrProgress').textContent = '识别完成';
    const r = scoreAll(hyp);
    renderResult(r, hyp);
    recordScore(r.total);
  } catch (e) {
    $('asrProgress').textContent = '识别失败：' + e.message;
  } finally {
    $('btnAsr').disabled = false;
  }
};

function renderResult(r, hyp) {
  const covPct = Math.round(r.cov * 100);
  const cls = r.total >= 80 ? 'good' : r.total >= 60 ? 'mid' : 'bad';
  let html = `<div class="score ${cls}">
    <div class="big">${r.total}<span>分</span></div>
    <div class="detail">
      信息点覆盖 <b>${covPct}%</b>（${r.wHit}/${r.wAll} 权重）
      · 数字 <b>${r.numOk}/${r.numAll}</b>
      · 语速 <b>${r.wpm}</b> 词/分（${recDur.toFixed(0)} 秒 / ${r.words} 词）
      ${r.probes.length ? `· <b class="bad">疑似串题 ${r.probes.length} 处</b>` : ''}
    </div></div>`;
  html += '<table class="units"><tr><th>信息点</th><th>类别</th><th>结果</th></tr>';
  for (const u of r.rows) {
    const mark = u.hit ? '✅' : '❌';
    const num = u.num ? (u.numOkU ? ' 数字✓' : ' <b class="bad">数字✗</b>') : '';
    const via = u.via ? `<span class="via">命中说法：${u.via}</span>` : '';
    html += `<tr class="${u.hit ? 'ok' : 'no'}"><td>${u.label}${via}</td><td>${u.cat}</td><td>${mark}${num}</td></tr>`;
  }
  html += '</table>';
  if (r.probes.length) {
    html += '<div class="warn">⚠️ 疑似把其他故事的内容混进来了：'
      + r.probes.map(p => `${p.label}（${p.hits.join('/')}）`).join('；') + '</div>';
  }
  html += `<details><summary>识别原文（点开核对）</summary><p class="mono">${hyp}</p></details>`;
  html += `<details><summary>漏掉的信息点（中文提示）</summary><p>${
    r.rows.filter(u => !u.hit).map(u => u.label).join('；') || '无，全命中'}</p></details>`;
  $('result').innerHTML = html;
}

/* ---------------- 自查清单 ---------------- */
$('btnSelf').onclick = () => {
  const boxes = [...$('selfCheck').querySelectorAll('input')];
  let wHit = 0, wAll = 0, numOk = 0, numAll = 0;
  for (const b of boxes) {
    const w = +b.dataset.w;
    wAll += w;
    if (b.checked) wHit += w;
    if (b.dataset.num) { numAll++; if (b.checked) numOk++; }
  }
  const cov = Math.round((wHit / wAll) * 100);
  $('selfResult').innerHTML = `自查覆盖率 <b>${cov}%</b>（${wHit}/${wAll} 权重，数字点 ${numOk}/${numAll}）`
    + (cov >= 80 ? ' 👏 关键信息基本齐了' : cov >= 50 ? ' 👍 主线有了，再补细节' : ' 💪 多听一遍，注意问题→处置→结局的链条');
};

/* ---------------- 训练记录 ---------------- */
function recordScore(total) {
  const key = String(STORIES[idx].id);
  const st = progress.perStory[key] || { count: 0, best: 0 };
  st.count++;
  st.best = Math.max(st.best, total);
  st.last = total;
  progress.perStory[key] = st;
  const wid = STORIES[idx].id;
  if (total < 70 && !progress.wrongBook.includes(wid)) progress.wrongBook.push(wid);
  if (total >= 85) progress.wrongBook = progress.wrongBook.filter(x => x !== wid);
  saveProgress(progress);
  renderStats();
}

function renderStats() {
  const entries = Object.entries(progress.perStory);
  const totalPrac = entries.reduce((a, [, v]) => a + v.count, 0);
  let html = totalPrac
    ? `共练习 <b>${totalPrac}</b> 次：<br>` + entries.map(([k, v]) => {
        const s = STORIES.find(x => String(x.id) === k);
        return `<span class="statChip">${s ? shortTitle(s) : k} · ${v.count}次 · 最高${v.best}</span>`;
      }).join(' ')
    : '还没有练习记录。';
  $('stats').innerHTML = html;
  $('wrongBook').innerHTML = progress.wrongBook.length
    ? '<div class="wrongTitle">错题本（低于 70 分自动收录，85 分以上自动移出）：</div>'
      + progress.wrongBook.map(id => {
          const s = STORIES.find(x => x.id === id);
          return `<button class="wrongChip" data-i="${STORIES.indexOf(s)}">${s ? shortTitle(s) : id}</button>`;
        }).join(' ')
    : '';
}

$('wrongBook').addEventListener('click', (e) => {
  const b = e.target.closest('.wrongChip');
  if (b) selectStory(+b.dataset.i);
});

$('btnClear').onclick = () => {
  if (!confirm('确定清空全部训练记录？')) return;
  progress.perStory = {}; progress.wrongBook = [];
  saveProgress(progress);
  renderStats();
};

$('btnReset').onclick = () => renderStory();

/* ---------------- 启动 ---------------- */
(function init() {
  const m = location.hash.match(/^#s(\d+)$/);
  let start = progress.lastIdx || 0;
  if (m) {
    const id = +m[1];
    const j = STORIES.findIndex(s => s.id === id);
    if (j >= 0) start = j;
  }
  idx = Math.min(Math.max(0, start), STORIES.length - 1);
  renderStory();
})();
