# -*- coding: utf-8 -*-
"""原始故事文本 → 应读文本（读法替换）。
用法：python tools/build_stories_pron.py
输入：data/stories_raw.json（docx 提取的段落数组）
输出：data/stories_pron.json（每篇 text/zh/tts/spoken/hints/conversions）

读法规则（2026-11-06 决议，详见 docs/HANDOVER.md）：
  1. 机型保留制造商名：Boeing 737 → Boeing seven tree seven；Airbus A320 → Airbus ei tree two zero
  2. ≥10000 整千高度逐位+thousand：12,000 → one two thousand
  3. PAN-PAN 按原文（不加）
  4. 全局：所有 three 读 tree（含数词）
  5. GPS 字母直读 G-P-S
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "stories_raw.json")
OUT = os.path.join(ROOT, "data", "stories_pron.json")

paras = json.load(open(SRC, encoding="utf-8"))
stories = {}
cur = None
for p in paras:
    m = re.match(r'^Story (\d+)$', p)
    if m:
        cur = int(m.group(1))
        stories[cur] = {}
    elif cur and not p.startswith('PEPEC'):
        if 'text' not in stories[cur]:
            stories[cur]['text'] = p
        else:
            stories[cur]['zh'] = p

# 每篇的替换表（顺序敏感）：(原文写法, 应读写法)
REPL = {
    1:  [('A Boeing 737', 'A Boeing seven tree seven')],
    2:  [('An Airbus A320', 'An Airbus ei tree two zero'),
         ('flight level 350', 'flight level tree five zero')],
    3:  [('three hundred metres', 'tree hundred metres')],
    4:  [('37,000 feet', 'tree seven thousand feet'),
         ('10,000 feet', 'one zero thousand feet')],
    7:  [('5,000 feet', 'five thousand feet')],
    8:  [('300 metres', 'tree hundred metres')],
    10: [('400 feet', 'four hundred feet')],
    11: [('800 kilograms', 'eight hundred kilograms')],
    12: [('600 metres', 'six hundred metres')],
    13: [('12,000 feet', 'one two thousand feet')],
    14: [('7600', 'seven six zero zero')],
    18: [('GPS', 'G P S')],
    19: [('100 metres', 'one hundred metres'),
         ('1,500 feet', 'one thousand five hundred feet')],
}

HINT_TEXT = {
    'tree': '3 读 TREE（非 three）',
    'letter': '字母读法：A320 的 A 读本音 ei（/eɪ/）；GPS 直读 G-P-S',
}

result = {'meta': {'hintText': HINT_TEXT,
                   'rules': {
                       'three': '所有 three 一律读 tree（含数词）',
                       'digits': '逐位读数 3→tree（机型/高度层/编码）',
                       'thousands': '≥10000 整千高度逐位+thousand',
                       'letters': '字母直读，不用 ICAO 拼读词',
                       'models': 'B737→Boeing seven tree seven；A320→Airbus ei tree two zero'}},
          'stories': []}

for sid in sorted(stories):
    text = stories[sid]['text']
    zh = stories[sid]['zh']
    tts = text
    conversions = []
    for old, new in REPL.get(sid, []):
        if old in tts:
            tts = tts.replace(old, new)
            conversions.append({'from': old, 'to': new})
        else:
            print(f'WARN S{sid}: pattern not found: {old}')
    # 全局规则：所有 three → tree（数词也改）
    if re.search(r'\bthree\b', tts):
        tts = re.sub(r'\bthree\b', 'tree', tts)
        conversions.append({'from': 'three', 'to': 'tree（全局规则）'})
    spoken = re.sub(r'[^a-zA-Z0-9 ]+', ' ', tts.lower())
    spoken = re.sub(r'\s+', ' ', spoken).strip()
    hints = []
    if re.search(r'\btree\b', spoken):
        hints.append('tree')
    if any(re.search(r'\bei\b', c['to']) or 'G P S' in c['to'] for c in conversions):
        hints.append('letter')
    result['stories'].append({'id': sid, 'text': text, 'zh': zh,
                              'tts': tts, 'spoken': spoken,
                              'hints': hints, 'conversions': conversions})

json.dump(result, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('saved', OUT)
for s in result['stories']:
    print(f"S{s['id']:02d} hints={s['hints']} conv={len(s['conversions'])}")
