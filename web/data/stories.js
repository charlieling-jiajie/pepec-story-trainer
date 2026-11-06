// 由 tools/build_web.py 生成 — 请勿手改（改 data/annotations.json 后重新生成）
export const CAT_EN = {"背景": "background", "问题": "problem", "细节": "detail", "处置": "action", "事件": "event", "结局": "outcome"};
export const STORIES = [
 {
  "id": 1,
  "title": "Story 1 · 起落架指示灯",
  "text": "A Boeing 737 was approaching a regional airport on a clear morning. When the crew selected the landing gear down, the nose gear indicator light did not illuminate. The captain asked the first officer to check the checklist, while he continued to fly the aircraft. The crew informed the tower and requested a low pass so that the controller could visually check the gear. The controller reported that all three landing gear appeared to be extended. The crew then landed normally. After landing, maintenance found that the indicator bulb was faulty, and the landing gear itself was working properly.",
  "zh": "一个晴朗的早晨，一架波音737正在进近一个支线机场。机组放下起落架时，前起落架指示灯没有亮。机长让副驾驶查阅检查单，自己继续操纵飞机。机组通知了塔台，并请求低空通过，以便管制员目视检查起落架。管制员报告三个起落架看起来都已放下。随后机组正常着陆。着陆后，维修人员发现是指示灯灯泡故障，起落架本身工作正常。",
  "spoken": "a boeing seven tree seven was approaching a regional airport on a clear morning when the crew selected the landing gear down the nose gear indicator light did not illuminate the captain asked the first officer to check the checklist while he continued to fly the aircraft the crew informed the tower and requested a low pass so that the controller could visually check the gear the controller reported that all tree landing gear appeared to be extended the crew then landed normally after landing maintenance found that the indicator bulb was faulty and the landing gear itself was working properly",
  "audio": "audio/s01.mp3",
  "refWords": 99,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "机型：波音737",
    "en": "Boeing 737",
    "w": 2,
    "num": null,
    "variants": [
     "boeing 737",
     "boeing seven three seven",
     "boeing seven tree seven",
     "b737",
     "b 737",
     "b seven three seven",
     "b seven tree seven",
     "a boeing 737",
     "boeing jet",
     "boeing aircraft"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "进近一个支线机场",
    "en": "approaching a regional airport",
    "w": 2,
    "num": null,
    "variants": [
     "approaching a regional airport",
     "approaching regional airport",
     "approach to a regional airport",
     "on approach to a regional airport",
     "regional airport",
     "final approach to a regional airport",
     "inbound to a regional airport",
     "approaching a regional aerodrome"
    ]
   },
   {
    "id": "u3",
    "cat": "背景",
    "label": "时间：晴朗的早晨",
    "en": "on a clear morning",
    "w": 2,
    "num": null,
    "variants": [
     "on a clear morning",
     "a clear morning",
     "clear morning",
     "in a clear morning",
     "in the morning",
     "one morning",
     "on a fine morning",
     "in the early morning"
    ]
   },
   {
    "id": "u4",
    "cat": "问题",
    "label": "放起落架时前起落架指示灯不亮",
    "en": "nose gear indicator light did not illuminate",
    "w": 3,
    "num": null,
    "variants": [
     "nose gear indicator light did not illuminate",
     "nose gear light did not come on",
     "nose gear indicator did not light up",
     "the nose gear light did not illuminate",
     "no nose gear light",
     "nose gear light off",
     "indicator light did not illuminate",
     "nose gear indication light failed",
     "nose gear light was not on",
     "no green light for the nose gear",
     "when they selected the gear down the nose gear light did not illuminate",
     "the light for the nose gear did not work",
     "no light for the nose gear"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "机长让副驾驶查阅检查单",
    "en": "captain asked the first officer to check the checklist",
    "w": 2,
    "num": null,
    "variants": [
     "asked the first officer to check the checklist",
     "first officer checked the checklist",
     "the fo checked the checklist",
     "check the checklist",
     "run the checklist",
     "ran the checklist",
     "consult the checklist",
     "told the fo to check the checklist",
     "the captain asked the fo to run the checklist",
     "refer to the checklist"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "机长继续操纵飞机",
    "en": "captain continued to fly the aircraft",
    "w": 2,
    "num": null,
    "variants": [
     "the captain continued to fly",
     "captain continued flying the aircraft",
     "he continued to fly the aircraft",
     "continued to fly the aircraft",
     "the captain kept flying",
     "captain flew the aircraft",
     "the captain handled the flying",
     "one pilot flew the aircraft",
     "while the captain flew the plane",
     "the captain continued flying"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "通知塔台",
    "en": "informed the tower",
    "w": 2,
    "num": null,
    "variants": [
     "informed the tower",
     "contacted the tower",
     "notified the tower",
     "told the tower",
     "reported to the tower",
     "called the tower",
     "informed atc",
     "contacted atc",
     "reported to atc",
     "advised the tower"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "请求低空通过，让管制员目视检查起落架",
    "en": "requested a low pass for a visual gear check",
    "w": 3,
    "num": null,
    "variants": [
     "requested a low pass",
     "asked for a low pass",
     "low pass",
     "a low approach",
     "requested a low approach",
     "fly a low pass",
     "low pass so the controller could check the gear",
     "visual check of the gear",
     "for a visual check of the landing gear",
     "so the controller could visually check the gear",
     "requested a flyover",
     "asked the controller to check the gear visually",
     "low pass over the runway"
    ]
   },
   {
    "id": "u9",
    "cat": "事件",
    "label": "管制员报告三个起落架都已放下",
    "en": "controller reported all three gear appeared extended",
    "w": 2,
    "num": "3",
    "variants": [
     "all three landing gear appeared to be extended",
     "all three gear were down",
     "three landing gear were extended",
     "tree landing gear",
     "all three gears",
     "three gears",
     "3 landing gear",
     "the controller reported the gear was down",
     "the gear appeared to be extended",
     "all three landing gear were down",
     "the tower reported the gear looked down",
     "all the gear appeared extended",
     "three gear appeared extended"
    ]
   },
   {
    "id": "u10",
    "cat": "结局",
    "label": "机组正常着陆",
    "en": "landed normally",
    "w": 2,
    "num": null,
    "variants": [
     "landed normally",
     "the crew landed normally",
     "normal landing",
     "landed without any problem",
     "landed safely",
     "the aircraft landed normally",
     "made a normal landing",
     "landed as normal",
     "landed uneventfully"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "维修发现是指示灯灯泡故障",
    "en": "maintenance found the indicator bulb was faulty",
    "w": 2,
    "num": null,
    "variants": [
     "the indicator bulb was faulty",
     "maintenance found the bulb was faulty",
     "the bulb was faulty",
     "a faulty bulb",
     "the indicator bulb had failed",
     "it was the bulb",
     "the light bulb was defective",
     "maintenance found a faulty indicator bulb",
     "faulty indicator bulb"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "起落架本身工作正常",
    "en": "the landing gear itself was working properly",
    "w": 2,
    "num": null,
    "variants": [
     "the landing gear was working properly",
     "the gear itself was fine",
     "the gear was working normally",
     "the landing gear was ok",
     "the gear was down properly",
     "no problem with the gear",
     "the landing gear functioned normally",
     "the gear was not faulty",
     "the gear worked properly"
    ]
   }
  ],
  "probes": [
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 2,
  "title": "Story 2 · 雷暴绕飞",
  "text": "An Airbus A320 was flying from Chengdu to Shanghai at flight level 350. About one hundred kilometres ahead, the weather radar showed a line of thunderstorms. The crew asked air traffic control for a deviation to the south, and the request was approved. The detour was longer than planned, so the captain checked the remaining fuel and calculated that it would still be sufficient to reach the destination with the required reserve. Nevertheless, he decided to inform the company dispatcher. During the descent, the aircraft encountered moderate turbulence, and the cabin crew were told to stop the service and sit down. The flight finally landed in Shanghai without any injuries.",
  "zh": "一架空客A320从成都飞往上海，飞行高度层350。前方约一百公里处，气象雷达显示有一条雷暴带。机组向空管申请向南绕飞，获得批准。绕飞航程比计划更长，机长检查了剩余燃油，计算后认为仍足以带着规定的备份油量到达目的地。尽管如此，他还是决定通知公司签派员。下降过程中，飞机遇到中度颠簸，乘务员被告知停止服务并就座。该航班最终在上海安全落地，无人受伤。",
  "spoken": "an airbus ei tree two zero was flying from chengdu to shanghai at flight level tree five zero about one hundred kilometres ahead the weather radar showed a line of thunderstorms the crew asked air traffic control for a deviation to the south and the request was approved the detour was longer than planned so the captain checked the remaining fuel and calculated that it would still be sufficient to reach the destination with the required reserve nevertheless he decided to inform the company dispatcher during the descent the aircraft encountered moderate turbulence and the cabin crew were told to stop the service and sit down the flight finally landed in shanghai without any injuries",
  "audio": "audio/s02.mp3",
  "refWords": 110,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "机型：Airbus A320（A 读本音 ei /eɪ/）",
    "en": "Airbus A320",
    "w": 2,
    "num": null,
    "variants": [
     "airbus ei tree two zero",
     "airbus a tree two zero",
     "airbus ay tree two zero",
     "airbus a320",
     "airbus a three twenty",
     "airbus a three two zero",
     "airbus",
     "a320",
     "a tree two zero",
     "a three twenty",
     "a three two zero"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "航线：成都 → 上海",
    "en": "Chengdu to Shanghai",
    "w": 2,
    "num": null,
    "variants": [
     "chengdu to shanghai",
     "from chengdu to shanghai",
     "chengdu shanghai",
     "flying from chengdu",
     "to shanghai"
    ]
   },
   {
    "id": "u3",
    "cat": "背景",
    "label": "高度层：FL350",
    "en": "flight level 350",
    "w": 2,
    "num": "350",
    "variants": [
     "flight level 350",
     "flight level tree five zero",
     "flight level three five zero",
     "flight level three fifty",
     "fl350",
     "fl 350",
     "flight level"
    ]
   },
   {
    "id": "u4",
    "cat": "问题",
    "label": "气象雷达显示雷暴带（前方）",
    "en": "thunderstorms on the weather radar",
    "w": 3,
    "num": null,
    "variants": [
     "thunderstorms",
     "thunderstorm",
     "line of thunderstorms",
     "storms",
     "storm",
     "weather radar",
     "convective weather",
     "cb"
    ]
   },
   {
    "id": "u5",
    "cat": "细节",
    "label": "前方约 100 公里",
    "en": "about 100 km ahead",
    "w": 1,
    "num": "100",
    "variants": [
     "100 kilometres",
     "one hundred kilometres",
     "a hundred kilometres",
     "100 km",
     "one hundred km",
     "hundred kilometres"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "申请向南绕飞并获批准",
    "en": "deviation to the south, request approved",
    "w": 3,
    "num": null,
    "variants": [
     "deviation to the south",
     "deviate to the south",
     "deviation south",
     "detour to the south",
     "detour",
     "deviation",
     "deviated",
     "deviate",
     "turn to the south",
     "go to the south",
     "avoid to the south",
     "avoidance to the south",
     "request deviation",
     "asked for deviation",
     "approved"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "检查剩余燃油，足够带备份油量",
    "en": "checked remaining fuel, sufficient with reserve",
    "w": 2,
    "num": null,
    "variants": [
     "checked the fuel",
     "check the fuel",
     "checked the remaining fuel",
     "remaining fuel",
     "fuel check",
     "enough fuel",
     "sufficient fuel",
     "fuel was sufficient",
     "fuel reserve",
     "required reserve",
     "with the reserve",
     "enough to reach",
     "sufficient to reach"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "通知公司签派员",
    "en": "informed the company dispatcher",
    "w": 2,
    "num": null,
    "variants": [
     "dispatcher",
     "company dispatcher",
     "inform the company",
     "informed the company",
     "inform the dispatcher",
     "contact the company",
     "notify the company"
    ]
   },
   {
    "id": "u9",
    "cat": "事件",
    "label": "下降中遇到中度颠簸",
    "en": "moderate turbulence during descent",
    "w": 2,
    "num": null,
    "variants": [
     "turbulence",
     "moderate turbulence",
     "encountered turbulence",
     "bumpy",
     "bumpiness",
     "rough air"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "乘务员停止服务并就座",
    "en": "cabin crew stopped service and sat down",
    "w": 2,
    "num": null,
    "variants": [
     "stop the service",
     "stop service",
     "stopped the service",
     "cabin crew sit down",
     "cabin crew sat down",
     "sit down",
     "sat down",
     "take their seats",
     "took their seats",
     "service was stopped"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "在上海安全落地",
    "en": "landed safely in Shanghai",
    "w": 2,
    "num": null,
    "variants": [
     "landed in shanghai",
     "landed shanghai",
     "landed safely",
     "landed safely in shanghai",
     "arrived in shanghai",
     "landed",
     "touchdown in shanghai"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "无人受伤",
    "en": "no injuries",
    "w": 1,
    "num": null,
    "variants": [
     "no injuries",
     "without injuries",
     "no injury",
     "no one injured",
     "no one was injured",
     "nobody injured",
     "unhurt",
     "no one was hurt",
     "everyone was safe"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 3,
  "title": "Story 3 · 鸟击中断起飞",
  "text": "A cargo aircraft was accelerating on the runway for takeoff when a flock of birds suddenly rose from the grass beside the runway. Just before rotation, the crew felt a strong vibration and heard a loud bang from the right engine. The captain immediately rejected the takeoff, applied maximum braking and brought the aircraft to a stop with about three hundred metres of runway remaining. The fire services were sent to the scene, and no fire was found. Later inspection showed that several fan blades of the right engine had been damaged by bird strike. The airport suspended operations for thirty minutes to clear the runway and chase away the birds.",
  "zh": "一架货机在跑道上加速起飞时，一群鸟突然从跑道旁的草地上飞起。就在抬轮之前，机组感到强烈震动，并听到右发动机传来一声巨响。机长立即中断起飞，施加最大刹车，使飞机在跑道剩余约三百米处停住。消防人员赶到现场，没有发现起火。随后检查显示，右发动机的数片风扇叶片被鸟击损坏。机场暂停运行三十分钟，以清理跑道并驱赶鸟群。",
  "spoken": "a cargo aircraft was accelerating on the runway for takeoff when a flock of birds suddenly rose from the grass beside the runway just before rotation the crew felt a strong vibration and heard a loud bang from the right engine the captain immediately rejected the takeoff applied maximum braking and brought the aircraft to a stop with about tree hundred metres of runway remaining the fire services were sent to the scene and no fire was found later inspection showed that several fan blades of the right engine had been damaged by bird strike the airport suspended operations for thirty minutes to clear the runway and chase away the birds",
  "audio": "audio/s03.mp3",
  "refWords": 111,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "货机在跑道上加速起飞",
    "en": "cargo aircraft accelerating for takeoff",
    "w": 2,
    "num": null,
    "variants": [
     "a cargo aircraft",
     "cargo aircraft",
     "cargo plane",
     "a freighter",
     "cargo flight",
     "was accelerating on the runway for takeoff",
     "accelerating for takeoff",
     "the cargo aircraft was taking off",
     "a cargo aircraft was accelerating on the runway",
     "cargo aircraft on the takeoff roll"
    ]
   },
   {
    "id": "u2",
    "cat": "事件",
    "label": "鸟群突然从跑道旁草地飞起",
    "en": "a flock of birds rose from the grass beside the runway",
    "w": 2,
    "num": null,
    "variants": [
     "a flock of birds",
     "birds rose from the grass",
     "a flock of birds rose from the grass beside the runway",
     "birds flew up from the grass",
     "bird flock",
     "birds on the runway",
     "a flock of birds appeared",
     "birds suddenly rose",
     "birds beside the runway",
     "a flock of birds came up"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "抬轮前强烈震动并听到右发巨响",
    "en": "strong vibration and loud bang from the right engine",
    "w": 3,
    "num": null,
    "variants": [
     "a strong vibration",
     "felt a strong vibration",
     "a loud bang from the right engine",
     "loud bang",
     "vibration and a bang",
     "heard a bang from the right engine",
     "strong vibration and a loud bang",
     "the right engine made a loud bang",
     "felt vibration and heard a bang",
     "just before rotation they felt vibration",
     "a big vibration and a bang from the engine",
     "bang from the right engine"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "机长立即中断起飞",
    "en": "captain immediately rejected the takeoff",
    "w": 3,
    "num": null,
    "variants": [
     "rejected the takeoff",
     "rejected takeoff",
     "aborted the takeoff",
     "aborted takeoff",
     "takeoff rejected",
     "takeoff aborted",
     "the captain rejected the takeoff",
     "decided to reject the takeoff",
     "stopped the takeoff",
     "interrupted the takeoff",
     "rejected take off",
     "aborted take off",
     "rto"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "施加最大刹车",
    "en": "applied maximum braking",
    "w": 2,
    "num": null,
    "variants": [
     "maximum braking",
     "max braking",
     "applied maximum braking",
     "applied max brakes",
     "heavy braking",
     "full braking",
     "braked hard",
     "maximum brakes",
     "used maximum braking",
     "applied the brakes fully"
    ]
   },
   {
    "id": "u6",
    "cat": "细节",
    "label": "在剩余约 300 米跑道处停住",
    "en": "stopped with about 300 metres remaining",
    "w": 1,
    "num": "300",
    "variants": [
     "300 metres",
     "three hundred metres",
     "tree hundred metres",
     "300 meters",
     "three hundred meters",
     "tree hundred meters",
     "300 m",
     "about three hundred metres",
     "300 metres of runway remaining",
     "three hundred metres remaining",
     "with about 300 metres remaining",
     "stopped with about three hundred metres left"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "消防人员赶到现场",
    "en": "fire services were sent to the scene",
    "w": 2,
    "num": null,
    "variants": [
     "fire services",
     "the fire service",
     "fire fighters",
     "firefighters",
     "the fire trucks came",
     "crash fire rescue",
     "the fire services were sent",
     "the fire crew arrived",
     "emergency services attended",
     "arff"
    ]
   },
   {
    "id": "u8",
    "cat": "结局",
    "label": "未发现起火",
    "en": "no fire was found",
    "w": 2,
    "num": null,
    "variants": [
     "no fire",
     "no fire was found",
     "there was no fire",
     "nothing was on fire",
     "no signs of fire",
     "no fire occurred",
     "the aircraft did not catch fire",
     "without any fire",
     "no fire damage"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "检查发现右发数片风扇叶片被鸟击损坏",
    "en": "fan blades of the right engine damaged by bird strike",
    "w": 2,
    "num": null,
    "variants": [
     "fan blades were damaged",
     "several fan blades",
     "fan blades damaged by bird strike",
     "bird strike damage to the fan blades",
     "the right engine fan blades were damaged",
     "damaged by bird strike",
     "bird ingestion",
     "the inspection showed damaged fan blades",
     "blades of the right engine were damaged",
     "bird strike in the right engine"
    ]
   },
   {
    "id": "u10",
    "cat": "细节",
    "label": "机场暂停运行 30 分钟",
    "en": "airport suspended operations for thirty minutes",
    "w": 1,
    "num": "30",
    "variants": [
     "thirty minutes",
     "30 minutes",
     "for thirty minutes",
     "for 30 minutes",
     "suspended operations for thirty minutes",
     "closed for thirty minutes",
     "thirty minutes to clear the runway",
     "half an hour",
     "30 mins",
     "operations suspended for thirty minutes"
    ]
   },
   {
    "id": "u11",
    "cat": "处置",
    "label": "清理跑道并驱赶鸟群",
    "en": "clear the runway and chase away the birds",
    "w": 2,
    "num": null,
    "variants": [
     "clear the runway",
     "clear the runway and chase away the birds",
     "chase away the birds",
     "scare the birds away",
     "chased the birds away",
     "clean the runway",
     "remove the birds",
     "bird dispersal",
     "drive the birds away",
     "clear the runway of birds"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 4,
  "title": "Story 4 · 座舱释压",
  "text": "While cruising over mountainous terrain at 37,000 feet, the crew received a cabin altitude warning. The captain and the first officer put on their oxygen masks and confirmed that the cabin altitude was climbing rapidly. They declared an emergency, and began an emergency descent to 10,000 feet, taking into account the minimum safe altitude over the mountains. Meanwhile, the passenger oxygen masks dropped automatically. After the aircraft levelled off, the crew diverted to the nearest suitable airport. The investigation later found that a door seal had failed, which allowed air to leak out of the cabin.",
  "zh": "飞机在山区上空以37000英尺巡航时，机组收到座舱高度警告。机长和副驾驶戴上氧气面罩，确认座舱高度正在快速上升。他们宣布紧急情况，并开始紧急下降至10000英尺，同时考虑了山区上空的最低安全高度。与此同时，旅客氧气面罩自动脱落。飞机改平后，机组备降到最近的合适机场。调查后来发现，一个舱门密封件失效，导致空气从客舱泄漏。",
  "spoken": "while cruising over mountainous terrain at tree seven thousand feet the crew received a cabin altitude warning the captain and the first officer put on their oxygen masks and confirmed that the cabin altitude was climbing rapidly they declared an emergency and began an emergency descent to one zero thousand feet taking into account the minimum safe altitude over the mountains meanwhile the passenger oxygen masks dropped automatically after the aircraft levelled off the crew diverted to the nearest suitable airport the investigation later found that a door seal had failed which allowed air to leak out of the cabin",
  "audio": "audio/s04.mp3",
  "refWords": 98,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "山区上空巡航",
    "en": "cruising over mountainous terrain",
    "w": 2,
    "num": null,
    "variants": [
     "cruising over mountainous terrain",
     "over mountainous terrain",
     "over the mountains",
     "cruising over the mountains",
     "in the cruise over mountains",
     "over a mountainous area",
     "flying over mountains",
     "over high terrain"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "巡航高度 37,000 英尺",
    "en": "at 37,000 feet",
    "w": 1,
    "num": "37000",
    "variants": [
     "37000 feet",
     "37,000 feet",
     "thirty seven thousand feet",
     "tree seven thousand feet",
     "three seven thousand feet",
     "37000 ft",
     "at 37000",
     "flight level 370",
     "fl370",
     "flight level tree seven zero",
     "flight level three seven zero"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "收到座舱高度警告",
    "en": "received a cabin altitude warning",
    "w": 3,
    "num": null,
    "variants": [
     "cabin altitude warning",
     "received a cabin altitude warning",
     "a cabin altitude warning",
     "cabin pressurisation warning",
     "cabin pressurization warning",
     "cabin pressure warning",
     "pressurisation warning",
     "got a cabin altitude warning",
     "cabin altitude alert",
     "warning that the cabin altitude was high"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "正副驾驶戴上氧气面罩",
    "en": "put on their oxygen masks",
    "w": 2,
    "num": null,
    "variants": [
     "put on their oxygen masks",
     "donned oxygen masks",
     "the pilots put on oxygen masks",
     "oxygen masks on",
     "crew oxygen masks",
     "they put on their masks",
     "donned their masks",
     "the captain and the first officer put on oxygen masks",
     "used the oxygen masks"
    ]
   },
   {
    "id": "u5",
    "cat": "事件",
    "label": "确认座舱高度快速上升",
    "en": "cabin altitude was climbing rapidly",
    "w": 2,
    "num": null,
    "variants": [
     "cabin altitude was climbing rapidly",
     "the cabin altitude was rising",
     "cabin altitude climbing",
     "the altitude in the cabin increased quickly",
     "confirmed the cabin altitude was climbing",
     "rapid climb of cabin altitude",
     "the cabin altitude went up quickly",
     "cabin altitude rising fast"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "宣布紧急情况",
    "en": "declared an emergency",
    "w": 2,
    "num": null,
    "variants": [
     "declared an emergency",
     "declared emergency",
     "emergency declared",
     "announced an emergency",
     "they declared an emergency",
     "declared mayday",
     "mayday",
     "told atc it was an emergency",
     "informed atc of the emergency"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "开始紧急下降",
    "en": "began an emergency descent",
    "w": 3,
    "num": null,
    "variants": [
     "emergency descent",
     "began an emergency descent",
     "started an emergency descent",
     "made an emergency descent",
     "initiated an emergency descent",
     "emergency descend",
     "descended rapidly",
     "began to descend quickly",
     "emergency descent to 10000",
     "the emergency descent"
    ]
   },
   {
    "id": "u8",
    "cat": "细节",
    "label": "紧急下降至 10,000 英尺",
    "en": "descended to 10,000 feet",
    "w": 1,
    "num": "10000",
    "variants": [
     "10000 feet",
     "10,000 feet",
     "ten thousand feet",
     "one zero thousand feet",
     "10000 ft",
     "to ten thousand feet",
     "10000",
     "ten thousand",
     "flight level 100",
     "fl100",
     "flight level one zero zero",
     "down to 10000 feet"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "考虑山区最低安全高度",
    "en": "taking into account the minimum safe altitude",
    "w": 2,
    "num": null,
    "variants": [
     "minimum safe altitude",
     "msa",
     "took into account the minimum safe altitude",
     "considered the minimum safe altitude",
     "the minimum safe altitude over the mountains",
     "kept above the minimum safe altitude",
     "avoided the terrain",
     "clear of the mountains",
     "terrain clearance",
     "safe altitude over the mountains"
    ]
   },
   {
    "id": "u10",
    "cat": "事件",
    "label": "旅客氧气面罩自动脱落",
    "en": "passenger oxygen masks dropped automatically",
    "w": 2,
    "num": null,
    "variants": [
     "passenger oxygen masks dropped",
     "the oxygen masks dropped automatically",
     "oxygen masks fell",
     "the passenger masks came down",
     "cabin oxygen masks dropped",
     "oxygen masks deployed automatically",
     "masks dropped from the ceiling",
     "the masks dropped",
     "passenger masks dropped automatically"
    ]
   },
   {
    "id": "u11",
    "cat": "处置",
    "label": "改平后备降到最近的合适机场",
    "en": "diverted to the nearest suitable airport",
    "w": 2,
    "num": null,
    "variants": [
     "diverted to the nearest suitable airport",
     "diverted to the nearest airport",
     "diversion to the nearest airport",
     "divert to another airport",
     "the crew diverted",
     "decided to divert to the nearest suitable airport",
     "divert to the closest airport",
     "after levelling off they diverted",
     "the nearest suitable aerodrome",
     "diverted after levelling off"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "调查发现舱门密封件失效导致客舱漏气",
    "en": "investigation found a failed door seal caused air leakage",
    "w": 2,
    "num": null,
    "variants": [
     "a door seal had failed",
     "door seal failure",
     "the door seal failed",
     "a failed door seal",
     "seal failure",
     "air leaked out of the cabin",
     "the investigation found a door seal",
     "air leak from the cabin",
     "a leaking door seal",
     "pressurisation leak from a door seal"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 5,
  "title": "Story 5 · 车辆占道复飞",
  "text": "A passenger aircraft was on final approach when the tower noticed that a maintenance vehicle had entered the runway without clearance. The controller immediately instructed the crew to go around. The captain applied takeoff power, retracted the flaps one step and established a positive rate of climb. The aircraft passed about eighty feet above the vehicle. After the second approach, the flight landed normally. The airport later reported that the driver had misunderstood a radio instruction and had not read it back correctly. As a result, the airport introduced additional training on radiotelephony for all vehicle drivers.",
  "zh": "一架客机正在最后进近，这时塔台发现一辆维修车辆未经许可进入了跑道。管制员立即指示机组复飞。机长加起飞推力，将襟翼收上一格，并建立了正上升率。飞机在车辆上方约八十英尺处飞过。第二次进近后，该航班正常着陆。机场随后报告，驾驶员误解了一条无线电指令，也没有正确复诵。因此，机场对所有车辆驾驶员增加了陆空通话培训。",
  "spoken": "a passenger aircraft was on final approach when the tower noticed that a maintenance vehicle had entered the runway without clearance the controller immediately instructed the crew to go around the captain applied takeoff power retracted the flaps one step and established a positive rate of climb the aircraft passed about eighty feet above the vehicle after the second approach the flight landed normally the airport later reported that the driver had misunderstood a radio instruction and had not read it back correctly as a result the airport introduced additional training on radiotelephony for all vehicle drivers",
  "audio": "audio/s05.mp3",
  "refWords": 97,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "客机在最后进近",
    "en": "passenger aircraft on final approach",
    "w": 2,
    "num": null,
    "variants": [
     "on final approach",
     "final approach",
     "passenger aircraft on final approach",
     "the aircraft was on final approach",
     "the passenger jet was on final approach",
     "on approach",
     "approaching to land",
     "on short final",
     "a passenger aircraft"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "维修车辆未经许可进入跑道",
    "en": "maintenance vehicle entered the runway without clearance",
    "w": 3,
    "num": null,
    "variants": [
     "maintenance vehicle on the runway",
     "a vehicle entered the runway",
     "vehicle on the runway",
     "a maintenance vehicle had entered the runway",
     "runway incursion by a vehicle",
     "a vehicle on the runway without clearance",
     "a truck on the runway",
     "maintenance truck entered the runway",
     "vehicle entered the runway without clearance",
     "unauthorised vehicle on the runway",
     "unauthorized vehicle on the runway"
    ]
   },
   {
    "id": "u3",
    "cat": "处置",
    "label": "管制员立即指示机组复飞",
    "en": "controller instructed the crew to go around",
    "w": 3,
    "num": null,
    "variants": [
     "go around",
     "go-around",
     "instructed the crew to go around",
     "the controller told them to go around",
     "ordered a go around",
     "go around instruction",
     "the tower told the crew to go around",
     "instructed to go around",
     "told them to abort the approach",
     "execute a go around",
     "go around was instructed"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "机长加起飞推力",
    "en": "applied takeoff power",
    "w": 2,
    "num": null,
    "variants": [
     "takeoff power",
     "applied takeoff power",
     "applied toga power",
     "toga",
     "toga thrust",
     "full power",
     "applied full thrust",
     "added takeoff power",
     "set takeoff power",
     "takeoff thrust"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "襟翼收上一格",
    "en": "retracted the flaps one step",
    "w": 2,
    "num": null,
    "variants": [
     "retracted the flaps one step",
     "flaps one step",
     "retracted flaps one notch",
     "flaps up one step",
     "retracted the flaps",
     "moved the flaps up one position",
     "flap retraction one step",
     "raised the flaps one setting",
     "selected flaps one stage up",
     "selected flaps up one"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "建立正上升率",
    "en": "established a positive rate of climb",
    "w": 2,
    "num": null,
    "variants": [
     "positive rate of climb",
     "established a positive rate",
     "a positive rate of climb",
     "positive climb",
     "established positive rate",
     "positive rate",
     "climbing with a positive rate",
     "climbed away with a positive rate",
     "a positive rate of climb was established"
    ]
   },
   {
    "id": "u7",
    "cat": "细节",
    "label": "从车辆上方约 80 英尺飞过",
    "en": "passed about 80 feet above the vehicle",
    "w": 1,
    "num": "80",
    "variants": [
     "80 feet",
     "eighty feet",
     "eighty foot",
     "80 ft",
     "about 80 feet above the vehicle",
     "eighty feet above the vehicle",
     "80 feet above the vehicle",
     "eighty feet over the vehicle",
     "80 feet over the vehicle",
     "about eighty feet"
    ]
   },
   {
    "id": "u8",
    "cat": "结局",
    "label": "第二次进近后正常着陆",
    "en": "landed normally after the second approach",
    "w": 2,
    "num": null,
    "variants": [
     "after the second approach the flight landed normally",
     "landed normally on the second approach",
     "landed normally after the second approach",
     "the second approach",
     "landed on the second attempt",
     "landed normally on the second try",
     "the second approach and landing",
     "landed safely after going around"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "调查：驾驶员误解无线电指令",
    "en": "the driver misunderstood a radio instruction",
    "w": 2,
    "num": null,
    "variants": [
     "the driver misunderstood a radio instruction",
     "misunderstood the instruction",
     "the driver had misunderstood",
     "misunderstood a radio call",
     "the vehicle driver misunderstood",
     "misunderstood the radio message",
     "the driver did not understand correctly",
     "wrong understanding of the instruction"
    ]
   },
   {
    "id": "u10",
    "cat": "结局",
    "label": "调查：驾驶员未正确复诵",
    "en": "the driver had not read it back correctly",
    "w": 2,
    "num": null,
    "variants": [
     "not read it back correctly",
     "did not read back correctly",
     "no correct readback",
     "readback was not correct",
     "failed to read back",
     "did not read the instruction back",
     "incorrect readback",
     "had not read back the instruction",
     "read it back wrongly",
     "improper readback"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "机场增加车辆驾驶员陆空通话培训",
    "en": "airport introduced radiotelephony training for vehicle drivers",
    "w": 2,
    "num": null,
    "variants": [
     "additional training on radiotelephony",
     "radiotelephony training",
     "radio telephony training",
     "more training for the drivers",
     "introduced additional training",
     "training on radio communication",
     "the airport introduced training",
     "r/t training for vehicle drivers",
     "additional driver training",
     "training for all vehicle drivers"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 6,
  "title": "Story 6 · 旅客急病备降",
  "text": "Two hours after departure, a passenger on a long-haul flight complained of severe chest pain. The cabin crew gave him oxygen and asked over the public address system if there was a doctor on board. A doctor came forward and advised that the passenger should be taken to hospital as soon as possible. The captain contacted the company medical service by satellite phone and, after a short discussion, decided to divert. The aircraft needed to burn fuel to reach the maximum landing weight, so the crew chose a holding pattern near the diversion airport. An ambulance was waiting when the aircraft landed, and the passenger was taken to hospital, where he recovered.",
  "zh": "一架长途航班起飞两小时后，一名旅客称胸口剧烈疼痛。乘务员给他吸氧，并通过客舱广播询问机上是否有医生。一位医生走上前来，建议应尽快将该旅客送医。机长通过卫星电话联系了公司医疗服务部门，经过简短讨论后决定备降。飞机需要消耗燃油以降到最大着陆重量，因此机组选择在备降机场附近进入等待航线。飞机落地时救护车已在等候，旅客被送往医院，并在那里康复。",
  "spoken": "two hours after departure a passenger on a long haul flight complained of severe chest pain the cabin crew gave him oxygen and asked over the public address system if there was a doctor on board a doctor came forward and advised that the passenger should be taken to hospital as soon as possible the captain contacted the company medical service by satellite phone and after a short discussion decided to divert the aircraft needed to burn fuel to reach the maximum landing weight so the crew chose a holding pattern near the diversion airport an ambulance was waiting when the aircraft landed and the passenger was taken to hospital where he recovered",
  "audio": "audio/s06.mp3",
  "refWords": 113,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "长途航班",
    "en": "a long-haul flight",
    "w": 2,
    "num": null,
    "variants": [
     "long haul flight",
     "long-haul flight",
     "long haul",
     "long-haul",
     "a long flight",
     "long distance flight",
     "long haul service",
     "a long-haul trip"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "起飞后两小时",
    "en": "two hours after departure",
    "w": 1,
    "num": "2",
    "variants": [
     "two hours after departure",
     "2 hours after departure",
     "two hours after takeoff",
     "2 hours after takeoff",
     "two hours into the flight",
     "after two hours",
     "2 hours",
     "two hours",
     "two hour",
     "after 2 hours"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "旅客剧烈胸痛",
    "en": "passenger complained of severe chest pain",
    "w": 3,
    "num": null,
    "variants": [
     "chest pain",
     "severe chest pain",
     "complained of chest pain",
     "the passenger had chest pain",
     "a passenger complained of severe chest pain",
     "pain in the chest",
     "severe pain in the chest",
     "chest pains",
     "the passenger felt severe chest pain",
     "the passenger was in severe chest pain"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "乘务员给旅客吸氧",
    "en": "cabin crew gave him oxygen",
    "w": 2,
    "num": null,
    "variants": [
     "gave him oxygen",
     "gave the passenger oxygen",
     "oxygen was given",
     "the cabin crew gave oxygen",
     "administered oxygen",
     "gave oxygen to the passenger",
     "the passenger was given oxygen",
     "cabin crew gave him oxygen",
     "the cabin crew gave the passenger oxygen"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "广播询问机上是否有医生",
    "en": "asked over the PA if there was a doctor on board",
    "w": 2,
    "num": null,
    "variants": [
     "asked if there was a doctor on board",
     "doctor on board",
     "announced for a doctor",
     "made a pa announcement for a doctor",
     "asked over the public address system",
     "is there a doctor on board",
     "called for a doctor",
     "asked for a doctor on board",
     "pa announcement for a doctor",
     "any doctor on board"
    ]
   },
   {
    "id": "u6",
    "cat": "事件",
    "label": "医生上前建议尽快送医",
    "en": "a doctor advised the passenger should go to hospital quickly",
    "w": 2,
    "num": null,
    "variants": [
     "a doctor came forward",
     "a doctor advised that the passenger should be taken to hospital",
     "the doctor said he should go to hospital",
     "a doctor was on board",
     "the doctor advised hospital",
     "the doctor recommended going to hospital",
     "taken to hospital as soon as possible",
     "doctor advised immediate hospital treatment",
     "a passenger who was a doctor came forward"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "机长卫星电话联系公司医疗部门",
    "en": "captain contacted the company medical service by satellite phone",
    "w": 2,
    "num": null,
    "variants": [
     "contacted the company medical service",
     "satellite phone",
     "called the company medical service",
     "medical service by satellite phone",
     "contacted the company doctors",
     "the captain called the medical service",
     "satellite call to the company medical",
     "contacted company medical",
     "called the company medical centre",
     "consulted the company medical service"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "决定备降",
    "en": "decided to divert",
    "w": 3,
    "num": null,
    "variants": [
     "decided to divert",
     "decide to divert",
     "divert",
     "diverted",
     "diversion",
     "the captain decided to divert",
     "chose to divert",
     "made a diversion",
     "divert to another airport",
     "decided on a diversion"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "消耗燃油以达到最大着陆重量",
    "en": "burn fuel to reach the maximum landing weight",
    "w": 2,
    "num": null,
    "variants": [
     "burn fuel",
     "burn off fuel",
     "needed to burn fuel",
     "fuel burn to reach maximum landing weight",
     "maximum landing weight",
     "reduce the weight by burning fuel",
     "burn fuel to get to the max landing weight",
     "the aircraft was too heavy",
     "heavy for landing",
     "burned fuel first"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "在备降机场附近进入等待航线",
    "en": "chose a holding pattern near the diversion airport",
    "w": 2,
    "num": null,
    "variants": [
     "holding pattern",
     "entered a holding pattern",
     "a hold",
     "holding near the diversion airport",
     "the crew chose a holding pattern",
     "in the hold",
     "holding before landing",
     "waited in a holding pattern",
     "circled while burning fuel",
     "hold before diversion"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "落地时救护车已在等候",
    "en": "an ambulance was waiting when the aircraft landed",
    "w": 2,
    "num": null,
    "variants": [
     "an ambulance was waiting",
     "ambulance was waiting",
     "an ambulance waited",
     "the ambulance was there when they landed",
     "an ambulance on arrival",
     "ambulance on standby",
     "an ambulance was at the airport",
     "an ambulance met the aircraft",
     "medical services were waiting"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "旅客送医后康复",
    "en": "the passenger was taken to hospital and recovered",
    "w": 2,
    "num": null,
    "variants": [
     "taken to hospital",
     "the passenger was taken to hospital",
     "he recovered",
     "the passenger recovered",
     "taken to hospital and recovered",
     "went to hospital and recovered",
     "the passenger was sent to hospital",
     "recovered in hospital",
     "was taken to hospital where he recovered"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 7,
  "title": "Story 7 · 液压低",
  "text": "A twin-engine jet was climbing out of an airport when the crew received a low hydraulic pressure warning for the left system. The crew stopped the climb at 5,000 feet and ran the checklist. They found a leak near the left main landing gear. The captain declared an urgency and asked for vectors to return to the airport. Because the flaps would move more slowly, they planned a longer final approach and a higher landing speed. The aircraft landed safely and stopped on the runway, where the fire service checked the brakes for overheating.",
  "zh": "一架双发喷气飞机离场爬升时，机组收到左液压系统压力低的警告。机组在5000英尺停止爬升并执行检查单，发现左主起落架附近有渗漏。机长宣布紧急情况（紧急程度较低的 PAN-PAN），并要求雷达引导返场。由于襟翼动作会变慢，他们计划了较长的最后进近和较大的着陆速度。飞机安全着陆并停在跑道上，消防人员检查了刹车是否过热。",
  "spoken": "a twin engine jet was climbing out of an airport when the crew received a low hydraulic pressure warning for the left system the crew stopped the climb at five thousand feet and ran the checklist they found a leak near the left main landing gear the captain declared an urgency and asked for vectors to return to the airport because the flaps would move more slowly they planned a longer final approach and a higher landing speed the aircraft landed safely and stopped on the runway where the fire service checked the brakes for overheating",
  "audio": "audio/s07.mp3",
  "refWords": 96,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "双发喷气飞机离场爬升",
    "en": "twin-engine jet climbing out",
    "w": 2,
    "num": null,
    "variants": [
     "twin engine jet",
     "twin-engine jet",
     "a twin jet",
     "two engine jet",
     "twin engine aircraft",
     "climbing out",
     "climbing out of the airport",
     "was climbing out",
     "during the climb out",
     "twin jet climbing"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "左液压系统压力低警告",
    "en": "low hydraulic pressure warning for the left system",
    "w": 3,
    "num": null,
    "variants": [
     "low hydraulic pressure",
     "hydraulic pressure low",
     "a low hydraulic pressure warning",
     "left hydraulic system",
     "low pressure in the left hydraulic system",
     "hydraulic warning",
     "the left hydraulic system had low pressure",
     "hydraulic pressure warning",
     "low hydraulic pressure on the left system",
     "left system hydraulic low pressure"
    ]
   },
   {
    "id": "u3",
    "cat": "处置",
    "label": "停止爬升",
    "en": "stopped the climb",
    "w": 2,
    "num": null,
    "variants": [
     "stopped the climb",
     "stopped climbing",
     "levelled off",
     "leveled off",
     "level off",
     "the crew stopped the climb",
     "they levelled the aircraft",
     "held the altitude",
     "ceased the climb",
     "they stopped climbing"
    ]
   },
   {
    "id": "u4",
    "cat": "细节",
    "label": "在 5,000 英尺停止爬升",
    "en": "level at 5,000 feet",
    "w": 1,
    "num": "5000",
    "variants": [
     "5000 feet",
     "5,000 feet",
     "five thousand feet",
     "5000 ft",
     "at 5000 feet",
     "five thousand foot",
     "5000",
     "five thousand",
     "flight level 50",
     "fl50",
     "level at five thousand feet"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "执行检查单",
    "en": "ran the checklist",
    "w": 2,
    "num": null,
    "variants": [
     "ran the checklist",
     "run the checklist",
     "performed the checklist",
     "the checklist was run",
     "followed the checklist",
     "did the checklist",
     "executed the checklist",
     "worked the checklist",
     "carried out the checklist",
     "consulted the checklist"
    ]
   },
   {
    "id": "u6",
    "cat": "事件",
    "label": "发现左主起落架附近有渗漏",
    "en": "found a leak near the left main landing gear",
    "w": 2,
    "num": null,
    "variants": [
     "a leak near the left main gear",
     "found a leak",
     "hydraulic leak",
     "a leak near the left main landing gear",
     "leakage near the left main gear",
     "they found a hydraulic leak",
     "a fluid leak",
     "the leak was near the left main gear",
     "leaking near the main gear",
     "a leak by the left gear"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "机长宣布紧急情况（PAN-PAN）",
    "en": "declared an urgency",
    "w": 2,
    "num": null,
    "variants": [
     "declared an urgency",
     "declared urgency",
     "pan pan",
     "pan-pan",
     "declared pan pan",
     "announced pan pan",
     "a pan pan",
     "an urgency was declared",
     "reported an urgency",
     "declared a pan"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "请求雷达引导返场",
    "en": "asked for vectors to return to the airport",
    "w": 3,
    "num": null,
    "variants": [
     "vectors back to the airport",
     "asked for vectors",
     "requested vectors to return",
     "vectors to return",
     "asked for vectors back",
     "requested radar vectors",
     "return vectors",
     "vectors for the return",
     "the captain asked for vectors back to the airport",
     "radar vectors back to the airport",
     "return to the airport"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "计划较长的最后进近",
    "en": "planned a longer final approach",
    "w": 2,
    "num": null,
    "variants": [
     "longer final approach",
     "a longer final",
     "planned a longer final approach",
     "a longer approach",
     "long final",
     "planned a long final",
     "longer approach",
     "extended the final approach",
     "a longer final approach was planned",
     "planned a longer final"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "计划较高的着陆速度",
    "en": "planned a higher landing speed",
    "w": 2,
    "num": null,
    "variants": [
     "higher landing speed",
     "a higher landing speed",
     "planned a higher landing speed",
     "higher approach speed",
     "a higher approach speed",
     "faster landing speed",
     "land at a higher speed",
     "increased landing speed",
     "higher speed for landing",
     "land faster than normal"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "安全着陆并停在跑道上",
    "en": "landed safely and stopped on the runway",
    "w": 2,
    "num": null,
    "variants": [
     "landed safely and stopped on the runway",
     "the aircraft landed safely",
     "landed and stopped on the runway",
     "stopped on the runway",
     "landed safely on the runway",
     "the aircraft stopped on the runway after landing",
     "safe landing and stop on the runway",
     "landed and stopped on the runway safely"
    ]
   },
   {
    "id": "u12",
    "cat": "处置",
    "label": "消防检查刹车是否过热",
    "en": "fire service checked the brakes for overheating",
    "w": 2,
    "num": null,
    "variants": [
     "checked the brakes for overheating",
     "brakes checked",
     "fire service checked the brakes",
     "checked for overheating brakes",
     "the fire service checked the brakes",
     "brake check",
     "hot brakes check",
     "checked the brakes",
     "fire crew checked the brakes",
     "inspect the brakes for overheating"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 8,
  "title": "Story 8 · 浓雾备降",
  "text": "Heavy fog reduced visibility at a coastal airport to 300 metres, which was below the minimum required for landing. An inbound flight entered a holding pattern for twenty minutes, hoping that the weather would improve. As the fuel reserve was decreasing, the captain decided to divert to an alternate airport eighty kilometres away. After landing, the passengers were taken to the terminal, and the airline arranged buses to the original destination. The fog cleared four hours later, and flights resumed.",
  "zh": "浓雾使一个沿海机场的能见度降至300米，低于着陆所需的最低标准。一架进港航班进入等待航线二十分钟，希望天气好转。由于备份油量在减少，机长决定备降到八十公里外的备降机场。落地后旅客被带到航站楼，航空公司安排大巴把他们送往原目的地。四小时后雾散，航班恢复运行。",
  "spoken": "heavy fog reduced visibility at a coastal airport to tree hundred metres which was below the minimum required for landing an inbound flight entered a holding pattern for twenty minutes hoping that the weather would improve as the fuel reserve was decreasing the captain decided to divert to an alternate airport eighty kilometres away after landing the passengers were taken to the terminal and the airline arranged buses to the original destination the fog cleared four hours later and flights resumed",
  "audio": "audio/s08.mp3",
  "refWords": 80,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "沿海机场",
    "en": "a coastal airport",
    "w": 2,
    "num": null,
    "variants": [
     "coastal airport",
     "a coastal airport",
     "an airport on the coast",
     "a seaside airport",
     "coastal aerodrome",
     "an airport near the sea",
     "airport on the coast",
     "the airport by the sea"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "浓雾使能见度低于着陆最低标准",
    "en": "heavy fog reduced visibility below landing minimum",
    "w": 3,
    "num": null,
    "variants": [
     "heavy fog",
     "visibility below minimum",
     "visibility was below the minimum",
     "below the minimum for landing",
     "fog reduced visibility",
     "the visibility was too low to land",
     "below landing minimum",
     "fog below minimums",
     "weather below minima",
     "visibility below the minima",
     "reduced visibility below the landing minimum"
    ]
   },
   {
    "id": "u3",
    "cat": "细节",
    "label": "能见度降至 300 米",
    "en": "visibility reduced to 300 metres",
    "w": 1,
    "num": "300",
    "variants": [
     "300 metres",
     "three hundred metres",
     "tree hundred metres",
     "300 meters",
     "three hundred meters",
     "tree hundred meters",
     "300 m",
     "visibility of 300 metres",
     "300 metres visibility",
     "visibility 300",
     "reduced to 300 metres"
    ]
   },
   {
    "id": "u4",
    "cat": "事件",
    "label": "进港航班进入等待航线",
    "en": "the inbound flight entered a holding pattern",
    "w": 2,
    "num": null,
    "variants": [
     "entered a holding pattern",
     "holding pattern",
     "the inbound flight held",
     "went into the hold",
     "entered the hold",
     "the flight entered a hold",
     "they held",
     "waited in a hold",
     "inbound flight entered a holding pattern",
     "holding"
    ]
   },
   {
    "id": "u5",
    "cat": "细节",
    "label": "等待约 20 分钟盼天气好转",
    "en": "held for twenty minutes hoping for improvement",
    "w": 1,
    "num": "20",
    "variants": [
     "twenty minutes",
     "20 minutes",
     "twenty minute",
     "for twenty minutes",
     "for 20 minutes",
     "about twenty minutes",
     "held for twenty minutes",
     "20 mins",
     "twenty minutes hoping",
     "after twenty minutes"
    ]
   },
   {
    "id": "u6",
    "cat": "事件",
    "label": "备份油量不断减少",
    "en": "fuel reserve was decreasing",
    "w": 2,
    "num": null,
    "variants": [
     "fuel reserve was decreasing",
     "fuel reserve decreasing",
     "the fuel was getting low",
     "fuel reserve",
     "the reserve fuel was reducing",
     "fuel was decreasing",
     "the fuel reserve went down",
     "fuel getting low",
     "running out of fuel reserve",
     "low fuel"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "机长决定备降",
    "en": "captain decided to divert",
    "w": 3,
    "num": null,
    "variants": [
     "decided to divert",
     "decide to divert",
     "divert",
     "diverted",
     "diversion",
     "the captain decided to divert",
     "decided to divert to an alternate",
     "chose to divert",
     "divert to the alternate airport",
     "decided on diversion"
    ]
   },
   {
    "id": "u8",
    "cat": "细节",
    "label": "备降机场在 80 公里外",
    "en": "alternate airport eighty kilometres away",
    "w": 1,
    "num": "80",
    "variants": [
     "80 kilometres",
     "eighty kilometres",
     "80 kilometers",
     "eighty kilometers",
     "80 km",
     "eighty km",
     "80 kilometres away",
     "eighty kilometres away",
     "80 km away",
     "an alternate 80 km away"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "落地后旅客被带到航站楼",
    "en": "passengers were taken to the terminal after landing",
    "w": 2,
    "num": null,
    "variants": [
     "taken to the terminal",
     "passengers were taken to the terminal",
     "went to the terminal",
     "the passengers were taken to the terminal",
     "brought to the terminal",
     "the passengers went to the terminal",
     "taken into the terminal",
     "passengers disembarked to the terminal"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "航司安排大巴送往原目的地",
    "en": "airline arranged buses to the original destination",
    "w": 2,
    "num": null,
    "variants": [
     "arranged buses",
     "buses to the original destination",
     "the airline arranged buses",
     "bus service",
     "buses to the destination",
     "coach to the original destination",
     "the airline sent buses",
     "arranged coaches",
     "bus to the original destination",
     "transport by bus"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "雾散后航班恢复运行",
    "en": "flights resumed after the fog cleared",
    "w": 2,
    "num": null,
    "variants": [
     "the fog cleared",
     "flights resumed",
     "the fog cleared and flights resumed",
     "the fog lifted",
     "operations resumed",
     "fog cleared and flights continued",
     "flights restarted",
     "the visibility improved and flights resumed",
     "the weather cleared"
    ]
   },
   {
    "id": "u12",
    "cat": "细节",
    "label": "雾散在四小时后",
    "en": "the fog cleared four hours later",
    "w": 1,
    "num": "4",
    "variants": [
     "four hours later",
     "4 hours later",
     "four hours",
     "4 hours",
     "after four hours",
     "after 4 hours",
     "four hour",
     "four hours afterwards",
     "in four hours",
     "4 hours afterwards"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 9,
  "title": "Story 9 · 发动机失效",
  "text": "Shortly after takeoff, a twin-engine aircraft suffered a failure of its left engine. The captain took control from the first officer and kept the aircraft on the runway heading. They followed the engine failure procedure, retracted the landing gear and climbed to the safe altitude before cleaning up the aircraft. Air traffic control gave them radar vectors back to the airport. The aircraft landed on one engine, and the passengers left the aircraft normally. The engine was later found to have been damaged by a broken turbine blade.",
  "zh": "一架双发飞机起飞后不久，左发动机失效。机长从副驾驶手中接过操纵，并保持飞机沿跑道航向飞行。他们执行发动机失效程序，收起起落架，爬升到安全高度后再收襟翼、整理构型。空管给他们提供雷达引导返回机场。飞机单发着陆，旅客正常下机。后来发现发动机是因涡轮叶片断裂而受损。",
  "spoken": "shortly after takeoff a twin engine aircraft suffered a failure of its left engine the captain took control from the first officer and kept the aircraft on the runway heading they followed the engine failure procedure retracted the landing gear and climbed to the safe altitude before cleaning up the aircraft air traffic control gave them radar vectors back to the airport the aircraft landed on one engine and the passengers left the aircraft normally the engine was later found to have been damaged by a broken turbine blade",
  "audio": "audio/s09.mp3",
  "refWords": 89,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "双发飞机",
    "en": "a twin-engine aircraft",
    "w": 2,
    "num": null,
    "variants": [
     "twin engine aircraft",
     "twin-engine aircraft",
     "twin engine",
     "two engine aircraft",
     "twin jet",
     "a twin engine aeroplane",
     "twin-engine plane",
     "a twin-engine aircraft"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "起飞后不久",
    "en": "shortly after takeoff",
    "w": 2,
    "num": null,
    "variants": [
     "shortly after takeoff",
     "soon after takeoff",
     "just after takeoff",
     "after takeoff",
     "not long after takeoff",
     "right after takeoff",
     "moments after takeoff",
     "shortly after departure",
     "after departure"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "左发动机失效",
    "en": "failure of the left engine",
    "w": 3,
    "num": null,
    "variants": [
     "left engine failure",
     "the left engine failed",
     "failure of the left engine",
     "the left engine quit",
     "lost the left engine",
     "left engine problem",
     "engine failure on the left",
     "suffered a failure of the left engine",
     "the left engine stopped working",
     "left engine out"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "机长从副驾驶手中接过操纵",
    "en": "captain took control from the first officer",
    "w": 2,
    "num": null,
    "variants": [
     "took control",
     "the captain took control",
     "took over the controls",
     "captain took over",
     "the captain took control from the first officer",
     "took the controls",
     "captain assumed control",
     "took over flying",
     "the captain took the aircraft"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "保持跑道航向",
    "en": "kept the aircraft on the runway heading",
    "w": 2,
    "num": null,
    "variants": [
     "runway heading",
     "kept on the runway heading",
     "maintained the runway heading",
     "flying the runway heading",
     "kept the aircraft on the runway heading",
     "stayed on the runway heading",
     "followed the runway heading",
     "maintained runway heading",
     "kept straight on the runway heading",
     "the runway heading"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "执行发动机失效程序",
    "en": "followed the engine failure procedure",
    "w": 3,
    "num": null,
    "variants": [
     "engine failure procedure",
     "followed the engine failure procedure",
     "the engine failure checklist",
     "engine out procedure",
     "followed the engine out procedure",
     "ran the engine failure procedure",
     "the engine failure procedures",
     "followed the procedure for engine failure",
     "engine failure drills",
     "the engine failure non normal checklist"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "收起起落架",
    "en": "retracted the landing gear",
    "w": 2,
    "num": null,
    "variants": [
     "retracted the landing gear",
     "gear up",
     "raised the gear",
     "the gear was retracted",
     "retracted the gear",
     "selected gear up",
     "the landing gear up",
     "put the gear up",
     "gear retraction"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "爬升至安全高度",
    "en": "climbed to the safe altitude",
    "w": 2,
    "num": null,
    "variants": [
     "climbed to the safe altitude",
     "safe altitude",
     "climbed to a safe altitude",
     "reached the safe altitude",
     "climbing to the safe altitude",
     "up to the safe altitude",
     "climbed to the safety altitude",
     "the safe altitude"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "安全高度后再收襟翼、整理构型",
    "en": "cleaned up the aircraft after the safe altitude",
    "w": 2,
    "num": null,
    "variants": [
     "cleaning up the aircraft",
     "cleaned up",
     "clean up the aircraft",
     "before cleaning up",
     "clean up after the safe altitude",
     "cleaned up the aircraft after the safe altitude",
     "retracted the flaps after the safe altitude",
     "the flaps were retracted later",
     "configuration clean up",
     "tidied up the aircraft"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "空管提供雷达引导返场",
    "en": "ATC gave radar vectors back to the airport",
    "w": 2,
    "num": null,
    "variants": [
     "radar vectors back",
     "vectors back to the airport",
     "atc gave vectors",
     "radar vectors",
     "vectors back",
     "atc vector them back",
     "given radar vectors",
     "vectors to the airport",
     "radar vectors to return",
     "atc provided radar vectors"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "单发着陆",
    "en": "landed on one engine",
    "w": 2,
    "num": null,
    "variants": [
     "landed on one engine",
     "single engine landing",
     "landed with one engine",
     "landed on the remaining engine",
     "one engine landing",
     "landed single engine",
     "landed with one engine out",
     "landed with only one engine",
     "landed using one engine"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "旅客正常下机",
    "en": "passengers left the aircraft normally",
    "w": 2,
    "num": null,
    "variants": [
     "passengers left normally",
     "the passengers disembarked normally",
     "passengers left the aircraft normally",
     "normal disembarkation",
     "the passengers got off normally",
     "the passengers left the aircraft",
     "everyone got off normally",
     "passengers deplaned normally"
    ]
   },
   {
    "id": "u13",
    "cat": "结局",
    "label": "调查发现涡轮叶片断裂损坏发动机",
    "en": "engine damaged by a broken turbine blade",
    "w": 2,
    "num": null,
    "variants": [
     "broken turbine blade",
     "a turbine blade broke",
     "turbine blade failure",
     "the engine was damaged by a broken turbine blade",
     "a broken turbine blade",
     "the turbine blade had broken",
     "blade failure",
     "a fractured turbine blade",
     "the engine had a broken turbine blade",
     "turbine blade damage"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 10,
  "title": "Story 10 · 风切变",
  "text": "While on final approach in strong winds, a passenger aircraft encountered windshear at 400 feet. The warning system gave an audible alert, and the airspeed suddenly dropped. The captain applied full thrust and pitched up to go around. The aircraft climbed away safely, and the crew reported the windshear to the tower so that other aircraft could be warned. After holding for thirty minutes, the wind became weaker and the aircraft landed normally.",
  "zh": "一架客机在强风中进近时，在400英尺遇到风切变。告警系统发出语音警告，空速突然下降。机长推满油门并拉杆复飞。飞机安全爬升，机组向塔台报告了风切变，以便提醒其他飞机。等待三十分钟后风力减弱，飞机正常着陆。",
  "spoken": "while on final approach in strong winds a passenger aircraft encountered windshear at four hundred feet the warning system gave an audible alert and the airspeed suddenly dropped the captain applied full thrust and pitched up to go around the aircraft climbed away safely and the crew reported the windshear to the tower so that other aircraft could be warned after holding for thirty minutes the wind became weaker and the aircraft landed normally",
  "audio": "audio/s10.mp3",
  "refWords": 73,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "强风中最后进近",
    "en": "final approach in strong winds",
    "w": 2,
    "num": null,
    "variants": [
     "final approach in strong winds",
     "strong winds",
     "on final approach in strong winds",
     "approaching in strong winds",
     "strong wind",
     "in strong wind",
     "gusty conditions",
     "windy conditions",
     "the aircraft was on final approach",
     "final approach with strong winds"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "遇到风切变",
    "en": "encountered windshear",
    "w": 3,
    "num": null,
    "variants": [
     "windshear",
     "wind shear",
     "encountered windshear",
     "hit windshear",
     "experienced windshear",
     "a windshear encounter",
     "windshear encounter",
     "ran into windshear",
     "the aircraft encountered wind shear",
     "wind shear event"
    ]
   },
   {
    "id": "u3",
    "cat": "细节",
    "label": "风切变发生在 400 英尺",
    "en": "windshear at 400 feet",
    "w": 1,
    "num": "400",
    "variants": [
     "400 feet",
     "four hundred feet",
     "400 ft",
     "at 400 feet",
     "four hundred foot",
     "at four hundred feet",
     "400",
     "four hundred",
     "400 feet height",
     "at 400 feet height"
    ]
   },
   {
    "id": "u4",
    "cat": "事件",
    "label": "告警系统发出语音警告",
    "en": "the warning system gave an audible alert",
    "w": 2,
    "num": null,
    "variants": [
     "audible alert",
     "the warning system gave an alert",
     "windshear warning",
     "the system warned",
     "an audible warning",
     "the warning sounded",
     "alert from the warning system",
     "the windshear warning system alerted",
     "voice alert",
     "the system gave a warning"
    ]
   },
   {
    "id": "u5",
    "cat": "事件",
    "label": "空速突然下降",
    "en": "the airspeed suddenly dropped",
    "w": 2,
    "num": null,
    "variants": [
     "airspeed dropped",
     "the airspeed suddenly dropped",
     "airspeed decreased",
     "the speed dropped suddenly",
     "loss of airspeed",
     "the airspeed fell",
     "airspeed loss",
     "the indicated airspeed dropped",
     "speed suddenly reduced",
     "sudden drop in airspeed"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "推满油门",
    "en": "applied full thrust",
    "w": 2,
    "num": null,
    "variants": [
     "full thrust",
     "applied full thrust",
     "applied toga",
     "toga power",
     "full power",
     "applied max thrust",
     "the captain applied full thrust",
     "thrust to maximum",
     "firewalled the throttles",
     "applied maximum thrust",
     "full throttle"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "拉杆复飞",
    "en": "pitched up to go around",
    "w": 3,
    "num": null,
    "variants": [
     "pitched up to go around",
     "go around",
     "went around",
     "pitched up and went around",
     "initiated a go around",
     "the captain pitched up",
     "pitched up and executed a go around",
     "carried out a go around",
     "performed a go around",
     "go around from windshear",
     "the go around"
    ]
   },
   {
    "id": "u8",
    "cat": "结局",
    "label": "飞机安全爬升脱离",
    "en": "the aircraft climbed away safely",
    "w": 2,
    "num": null,
    "variants": [
     "climbed away safely",
     "the aircraft climbed away",
     "climbed away",
     "climbed out safely",
     "the aircraft climbed away safely",
     "safely climbed away from the windshear",
     "climbed out of the windshear",
     "the aircraft climbed safely",
     "the aircraft escaped safely"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "向塔台报告风切变以警示其他飞机",
    "en": "reported the windshear to the tower",
    "w": 2,
    "num": null,
    "variants": [
     "reported the windshear",
     "reported the windshear to the tower",
     "told the tower about the windshear",
     "reported wind shear",
     "advised the tower of windshear",
     "informed the tower about the windshear",
     "passed a windshear report",
     "warned other aircraft",
     "so that other aircraft could be warned",
     "reported the windshear to atc"
    ]
   },
   {
    "id": "u10",
    "cat": "细节",
    "label": "等待约 30 分钟",
    "en": "holding for thirty minutes",
    "w": 1,
    "num": "30",
    "variants": [
     "thirty minutes",
     "30 minutes",
     "for thirty minutes",
     "for 30 minutes",
     "held for thirty minutes",
     "thirty minute",
     "after thirty minutes",
     "half an hour",
     "30 mins",
     "for 30 mins"
    ]
   },
   {
    "id": "u11",
    "cat": "事件",
    "label": "风力减弱",
    "en": "the wind became weaker",
    "w": 2,
    "num": null,
    "variants": [
     "the wind became weaker",
     "the wind dropped",
     "wind decreased",
     "the wind eased",
     "the wind got weaker",
     "the wind died down",
     "the wind reduced",
     "the wind weakened",
     "wind became weaker",
     "the wind lessened"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "飞机正常着陆",
    "en": "the aircraft landed normally",
    "w": 2,
    "num": null,
    "variants": [
     "landed normally",
     "the aircraft landed normally",
     "the flight landed normally",
     "normal landing",
     "landed safely",
     "landed without any problem",
     "landed as normal",
     "made a normal landing",
     "landed uneventfully"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 11,
  "title": "Story 11 · 燃油不平衡",
  "text": "During cruise, the first officer noticed that the left fuel tank contained about 800 kilograms less fuel than the right one. The crew checked for a leak but found that the total fuel was decreasing normally. They concluded that it was a fuel imbalance caused by a pump problem, and used the crossfeed to balance the tanks according to the checklist. The tanks were soon balanced. The flight continued to its destination, and engineers repaired the pump after landing.",
  "zh": "巡航期间，副驾驶注意到左油箱比右油箱少约800公斤燃油。机组检查是否有漏油，但发现总油量正常减少。他们判断这是燃油泵问题造成的燃油不平衡，于是按检查单使用交输供油来平衡油箱。油箱很快平衡。航班继续飞往目的地，落地后工程师修复了油泵。",
  "spoken": "during cruise the first officer noticed that the left fuel tank contained about eight hundred kilograms less fuel than the right one the crew checked for a leak but found that the total fuel was decreasing normally they concluded that it was a fuel imbalance caused by a pump problem and used the crossfeed to balance the tanks according to the checklist the tanks were soon balanced the flight continued to its destination and engineers repaired the pump after landing",
  "audio": "audio/s11.mp3",
  "refWords": 79,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "飞行阶段：巡航中",
    "en": "during cruise",
    "w": 2,
    "num": null,
    "variants": [
     "during cruise",
     "while cruising",
     "in the cruise",
     "during the cruise phase",
     "in the cruise phase",
     "cruising",
     "at cruise",
     "during the cruise"
    ]
   },
   {
    "id": "u2",
    "cat": "细节",
    "label": "副驾驶发现左油箱油量偏低",
    "en": "the first officer noticed the left tank had less fuel",
    "w": 1,
    "num": null,
    "variants": [
     "the first officer noticed",
     "the first officer observed",
     "the fo noticed",
     "the copilot noticed",
     "the co-pilot noticed",
     "the first officer spotted",
     "noticed by the first officer",
     "the first officer saw that the left tank had less fuel"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "燃油不平衡：左右油箱油量不一致",
    "en": "a fuel imbalance",
    "w": 3,
    "num": null,
    "variants": [
     "fuel imbalance",
     "a fuel imbalance",
     "an imbalance between the tanks",
     "the fuel imbalance",
     "imbalanced fuel tanks",
     "the tanks were imbalanced",
     "an imbalance in the fuel tanks",
     "left and right tank imbalance",
     "the fuel was unbalanced between the tanks"
    ]
   },
   {
    "id": "u4",
    "cat": "细节",
    "label": "油量差约800公斤（左少于右）",
    "en": "about 800 kilograms less fuel",
    "w": 1,
    "num": "800",
    "variants": [
     "800 kilograms",
     "eight hundred kilograms",
     "800 kilos",
     "800 kg",
     "eight hundred kilos",
     "eight hundred kg",
     "about 800 kilograms",
     "approximately 800 kilograms",
     "800 kilograms less fuel",
     "eight hundred kilograms less"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "检查是否漏油",
    "en": "checked for a leak",
    "w": 2,
    "num": null,
    "variants": [
     "checked for a leak",
     "checked for leaks",
     "checked for a fuel leak",
     "looked for a leak",
     "looked for fuel leaks",
     "searched for a leak",
     "checked for leakage",
     "checked the aircraft for a leak"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "确认总油量正常消耗，排除漏油",
    "en": "the total fuel was decreasing normally",
    "w": 2,
    "num": null,
    "variants": [
     "the total fuel was decreasing normally",
     "total fuel was decreasing normally",
     "the fuel was decreasing normally",
     "the total fuel quantity was decreasing normally",
     "the total fuel was reducing normally",
     "the fuel burn was normal",
     "fuel was being consumed normally"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "判断原因为燃油泵故障导致的不平衡",
    "en": "concluded it was caused by a pump problem",
    "w": 2,
    "num": null,
    "variants": [
     "a pump problem",
     "caused by a pump problem",
     "a faulty fuel pump",
     "a problem with the fuel pump",
     "the pump was faulty",
     "caused by a fuel pump failure",
     "a pump failure",
     "a pump issue",
     "it was a fuel imbalance caused by a pump problem"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "使用交输供油平衡两侧油箱",
    "en": "used the crossfeed to balance the tanks",
    "w": 3,
    "num": null,
    "variants": [
     "used the crossfeed",
     "crossfeed",
     "cross feed",
     "used crossfeed to balance the tanks",
     "opened the crossfeed",
     "used the crossfeed valve",
     "balanced the tanks with the crossfeed",
     "crossfed the fuel",
     "used cross-feed to balance the tanks",
     "fuel crossfeed"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "按检查单执行处置",
    "en": "according to the checklist",
    "w": 2,
    "num": null,
    "variants": [
     "according to the checklist",
     "following the checklist",
     "as per the checklist",
     "in accordance with the checklist",
     "followed the checklist",
     "using the checklist",
     "per the checklist",
     "following the qrh",
     "according to the qrh"
    ]
   },
   {
    "id": "u10",
    "cat": "结局",
    "label": "两侧油箱很快恢复平衡",
    "en": "the tanks were soon balanced",
    "w": 2,
    "num": null,
    "variants": [
     "the tanks were soon balanced",
     "the tanks were balanced",
     "the tanks were quickly balanced",
     "the fuel was balanced",
     "the imbalance was corrected",
     "the imbalance was resolved",
     "fuel balance was restored"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "航班继续飞往目的地",
    "en": "the flight continued to its destination",
    "w": 2,
    "num": null,
    "variants": [
     "the flight continued to its destination",
     "the flight continued to destination",
     "the flight proceeded to its destination",
     "the aircraft continued to its destination",
     "the flight went on to its destination",
     "continued to the destination",
     "the flight continued normally to its destination"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "落地后工程师修复燃油泵",
    "en": "engineers repaired the pump after landing",
    "w": 2,
    "num": null,
    "variants": [
     "engineers repaired the pump after landing",
     "the pump was repaired after landing",
     "engineers fixed the pump after landing",
     "the pump was fixed after landing",
     "engineers repaired the fuel pump after landing",
     "the fuel pump was repaired after landing",
     "the pump was replaced after landing",
     "engineers replaced the pump after landing"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 12,
  "title": "Story 12 · 湿跑道冲出",
  "text": "After a long flight, an aircraft touched down on a wet runway about 600 metres beyond the threshold, which was farther than planned because of a tailwind on final approach. The braking action was poor, and the aircraft could not stop before the end of the runway and slid onto the grass. No one was injured, and the passengers were evacuated using the slides. The investigation concluded that the crew should have gone around when the touchdown was long, and recommended that airlines place more emphasis on stabilized approach criteria.",
  "zh": "长途飞行后，飞机在湿滑跑道上接地，位置在跑道入口后约600米，比计划更远，原因是最后进近时有顺风。刹车效应很差，飞机未能在跑道尽头前停住，滑入了草地。无人受伤，旅客通过滑梯撤离。调查认为接地过远时机组本应复飞，并建议航空公司更加强调稳定进近标准。",
  "spoken": "after a long flight an aircraft touched down on a wet runway about six hundred metres beyond the threshold which was farther than planned because of a tailwind on final approach the braking action was poor and the aircraft could not stop before the end of the runway and slid onto the grass no one was injured and the passengers were evacuated using the slides the investigation concluded that the crew should have gone around when the touchdown was long and recommended that airlines place more emphasis on stabilized approach criteria",
  "audio": "audio/s12.mp3",
  "refWords": 90,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "长航线飞行后着陆",
    "en": "after a long flight",
    "w": 2,
    "num": null,
    "variants": [
     "after a long flight",
     "following a long flight",
     "after the long flight",
     "at the end of a long flight",
     "after a long-haul flight",
     "following the long flight",
     "after the long journey"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "在湿跑道上着陆",
    "en": "a wet runway",
    "w": 2,
    "num": null,
    "variants": [
     "a wet runway",
     "on a wet runway",
     "the runway was wet",
     "wet runway",
     "the wet runway",
     "the runway surface was wet",
     "landing on a wet runway"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "接地过长，接地点超出计划",
    "en": "touched down farther than planned",
    "w": 2,
    "num": null,
    "variants": [
     "touched down farther than planned",
     "a long touchdown",
     "touched down long",
     "the touchdown was long",
     "landed long",
     "a long landing",
     "landed beyond the planned touchdown point",
     "touched down past the touchdown zone"
    ]
   },
   {
    "id": "u4",
    "cat": "细节",
    "label": "接地点在接地区后约600米",
    "en": "about 600 metres beyond the threshold",
    "w": 1,
    "num": "600",
    "variants": [
     "600 metres",
     "600 meters",
     "600 m",
     "six hundred metres",
     "six hundred meters",
     "about 600 metres",
     "600 metres beyond the threshold",
     "six hundred metres beyond the threshold",
     "approximately 600 metres"
    ]
   },
   {
    "id": "u5",
    "cat": "问题",
    "label": "原因：五边顺风",
    "en": "a tailwind on final approach",
    "w": 2,
    "num": null,
    "variants": [
     "a tailwind on final approach",
     "because of a tailwind",
     "due to a tailwind",
     "a tailwind",
     "the tailwind on final",
     "there was a tailwind on final approach",
     "due to the tailwind",
     "a tailwind during the approach"
    ]
   },
   {
    "id": "u6",
    "cat": "问题",
    "label": "刹车效应差",
    "en": "the braking action was poor",
    "w": 2,
    "num": null,
    "variants": [
     "the braking action was poor",
     "poor braking action",
     "the braking action was bad",
     "braking action was poor",
     "reduced braking action",
     "braking performance was poor",
     "poor braking performance",
     "the brakes were not effective"
    ]
   },
   {
    "id": "u7",
    "cat": "问题",
    "label": "未能在跑道内停住，冲出跑道滑入草地",
    "en": "could not stop and slid onto the grass",
    "w": 3,
    "num": null,
    "variants": [
     "could not stop before the end of the runway",
     "slid onto the grass",
     "could not stop and slid onto the grass",
     "went off the runway onto the grass",
     "the aircraft overran the runway",
     "ran off the end of the runway",
     "a runway excursion onto the grass",
     "departed the end of the runway",
     "slid off the runway onto the grass",
     "overran the runway and ended up on the grass"
    ]
   },
   {
    "id": "u8",
    "cat": "结局",
    "label": "无人员受伤",
    "en": "no one was injured",
    "w": 2,
    "num": null,
    "variants": [
     "no one was injured",
     "nobody was injured",
     "no injuries",
     "there were no injuries",
     "no one was hurt",
     "all occupants were uninjured",
     "no injuries to passengers or crew",
     "everyone was unhurt"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "使用滑梯疏散旅客",
    "en": "the passengers were evacuated using the slides",
    "w": 3,
    "num": null,
    "variants": [
     "the passengers were evacuated using the slides",
     "evacuated using the slides",
     "the passengers evacuated via the slides",
     "used the slides to evacuate",
     "evacuation slides were used",
     "passengers evacuated down the slides",
     "an evacuation using the slides",
     "the aircraft was evacuated via the slides"
    ]
   },
   {
    "id": "u10",
    "cat": "事件",
    "label": "调查结论：接地过长时应复飞",
    "en": "the crew should have gone around",
    "w": 2,
    "num": null,
    "variants": [
     "should have gone around",
     "the crew should have gone around",
     "they should have performed a go-around",
     "should have executed a go-around",
     "should have made a go-around",
     "the crew should have aborted the landing",
     "should have performed a missed approach",
     "gone around when the touchdown was long"
    ]
   },
   {
    "id": "u11",
    "cat": "事件",
    "label": "调查建议：强化稳定进近标准",
    "en": "place more emphasis on stabilized approach criteria",
    "w": 2,
    "num": null,
    "variants": [
     "stabilized approach criteria",
     "stabilised approach criteria",
     "more emphasis on stabilized approach criteria",
     "emphasis on the stabilized approach",
     "stabilized approach",
     "place more emphasis on stabilized approaches",
     "the recommendation on stabilized approach"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 13,
  "title": "Story 13 · 雷击",
  "text": "A passenger jet was climbing through 12,000 feet when it was struck by lightning. The crew heard a loud bang and saw a flash, but the flight instruments were working normally. The captain asked the cabin crew to check the cabin and decided to return as a precaution. After landing, engineers inspected the aircraft and found small burn marks on the nose and on one wingtip. The aircraft was taken out of service for repairs, and the passengers took another flight.",
  "zh": "一架客机爬升穿过12000英尺时遭遇雷击。机组听到一声巨响并看到闪光，但飞行仪表工作正常。机长要求乘务员检查客舱，并出于预防决定返航。落地后工程师检查飞机，发现机头和一侧翼尖有轻微烧蚀痕迹。该飞机停飞修理，旅客改乘其他航班。",
  "spoken": "a passenger jet was climbing through one two thousand feet when it was struck by lightning the crew heard a loud bang and saw a flash but the flight instruments were working normally the captain asked the cabin crew to check the cabin and decided to return as a precaution after landing engineers inspected the aircraft and found small burn marks on the nose and on one wingtip the aircraft was taken out of service for repairs and the passengers took another flight",
  "audio": "audio/s13.mp3",
  "refWords": 82,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "客运喷气式客机",
    "en": "a passenger jet",
    "w": 2,
    "num": null,
    "variants": [
     "a passenger jet",
     "a passenger aircraft",
     "the passenger jet",
     "a passenger airplane",
     "the airliner",
     "a jet airliner",
     "a commercial jet",
     "the passenger airplane"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "处于爬升阶段",
    "en": "was climbing",
    "w": 2,
    "num": null,
    "variants": [
     "was climbing",
     "during the climb",
     "in the climb",
     "while climbing",
     "during the climb phase",
     "the aircraft was climbing",
     "climbing out",
     "on the climb"
    ]
   },
   {
    "id": "u3",
    "cat": "细节",
    "label": "高度：12000英尺",
    "en": "climbing through 12,000 feet",
    "w": 1,
    "num": "12000",
    "variants": [
     "12,000 feet",
     "12000 feet",
     "twelve thousand feet",
     "12,000 ft",
     "12000 ft",
     "through 12,000 feet",
     "at 12,000 feet",
     "passing 12,000 feet",
     "twelve thousand ft",
     "climbing through 12,000 feet"
    ]
   },
   {
    "id": "u4",
    "cat": "问题",
    "label": "飞机遭雷击",
    "en": "was struck by lightning",
    "w": 3,
    "num": null,
    "variants": [
     "was struck by lightning",
     "struck by lightning",
     "a lightning strike",
     "hit by lightning",
     "lightning struck the aircraft",
     "the aircraft was hit by lightning",
     "suffered a lightning strike",
     "a lightning hit",
     "a strike by lightning"
    ]
   },
   {
    "id": "u5",
    "cat": "细节",
    "label": "听到巨响并看到闪光",
    "en": "heard a loud bang and saw a flash",
    "w": 1,
    "num": null,
    "variants": [
     "heard a loud bang",
     "saw a flash",
     "a loud bang and a flash",
     "heard a bang and saw a flash",
     "a loud noise and a flash of light",
     "there was a loud bang",
     "a big flash",
     "heard a loud noise and saw a flash"
    ]
   },
   {
    "id": "u6",
    "cat": "细节",
    "label": "飞行仪表工作正常",
    "en": "the flight instruments were working normally",
    "w": 1,
    "num": null,
    "variants": [
     "the flight instruments were working normally",
     "the instruments were working normally",
     "flight instruments worked normally",
     "the instruments were normal",
     "all instruments were working normally",
     "the flight instruments were normal",
     "the instruments were functioning normally",
     "no instrument problems"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "机长让乘务组检查客舱",
    "en": "asked the cabin crew to check the cabin",
    "w": 2,
    "num": null,
    "variants": [
     "asked the cabin crew to check the cabin",
     "the captain asked the cabin crew to check",
     "requested the cabin crew to inspect the cabin",
     "told the cabin crew to check the cabin",
     "asked the flight attendants to check the cabin",
     "instructed the cabin crew to check the cabin",
     "the cabin crew was asked to check the cabin"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "决定预防性返航",
    "en": "decided to return as a precaution",
    "w": 3,
    "num": null,
    "variants": [
     "decided to return as a precaution",
     "returned as a precaution",
     "precautionary return",
     "decided to return",
     "decided to turn back",
     "a return as a precaution",
     "they returned as a precaution",
     "opted to return",
     "a precautionary return to the departure airport"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "落地后工程师检查机体",
    "en": "engineers inspected the aircraft",
    "w": 2,
    "num": null,
    "variants": [
     "engineers inspected the aircraft",
     "the aircraft was inspected by engineers",
     "engineers checked the aircraft",
     "engineers examined the aircraft",
     "the engineers inspected the airplane",
     "the aircraft was checked after landing",
     "post-flight inspection by engineers"
    ]
   },
   {
    "id": "u10",
    "cat": "细节",
    "label": "机头和一侧翼尖有小面积烧蚀痕迹",
    "en": "small burn marks on the nose and on one wingtip",
    "w": 1,
    "num": null,
    "variants": [
     "small burn marks",
     "burn marks on the nose",
     "burn marks on one wingtip",
     "small burn marks on the nose and on one wingtip",
     "burn marks on the nose and wingtip",
     "small scorch marks",
     "small burns on the nose and a wingtip",
     "burn damage on the nose and wingtip"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "飞机停场维修",
    "en": "the aircraft was taken out of service for repairs",
    "w": 2,
    "num": null,
    "variants": [
     "taken out of service for repairs",
     "the aircraft was taken out of service",
     "the aircraft was grounded for repairs",
     "the airplane was withdrawn from service",
     "the aircraft was removed from service for repairs",
     "grounded for repair",
     "out of service for repairs"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "旅客改乘另一航班",
    "en": "the passengers took another flight",
    "w": 2,
    "num": null,
    "variants": [
     "the passengers took another flight",
     "the passengers took another aircraft",
     "passengers were put on another flight",
     "the passengers flew on another flight",
     "passengers took a different flight",
     "the passengers were rebooked on another flight",
     "the passengers continued on another flight"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 14,
  "title": "Story 14 · 通信失效",
  "text": "A flight was cruising normally when the crew lost radio contact with the control centre. They tried the frequency again and used the backup radio, but received no reply. The captain set the transponder code to 7600 to show that the communication had failed, and the crew followed the lost communication procedure. The controllers saw the code and cleared other traffic away from the aircraft. After a few minutes, the crew re-established contact on a new frequency, and the flight continued normally. The cause was a faulty radio switch.",
  "zh": "一个航班正常巡航时，机组与管制中心失去无线电联系。他们重新尝试该频率并使用备用电台，但没有回应。机长将应答机编码设为7600，表明通信失效，机组按通信失效程序飞行。管制员看到该编码，把其他飞机调离该航班。几分钟后，机组在新频率上重新建立联系，航班正常继续。原因是一个无线电开关故障。",
  "spoken": "a flight was cruising normally when the crew lost radio contact with the control centre they tried the frequency again and used the backup radio but received no reply the captain set the transponder code to seven six zero zero to show that the communication had failed and the crew followed the lost communication procedure the controllers saw the code and cleared other traffic away from the aircraft after a few minutes the crew re established contact on a new frequency and the flight continued normally the cause was a faulty radio switch",
  "audio": "audio/s14.mp3",
  "refWords": 90,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "正常巡航中",
    "en": "was cruising normally",
    "w": 2,
    "num": null,
    "variants": [
     "was cruising normally",
     "cruising normally",
     "in normal cruise",
     "the flight was cruising normally",
     "during normal cruise",
     "the aircraft was in the cruise",
     "cruising",
     "normal cruise"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "与管制中心失去无线电联络",
    "en": "lost radio contact with the control centre",
    "w": 3,
    "num": null,
    "variants": [
     "lost radio contact with the control centre",
     "lost radio contact with the control center",
     "lost radio communication with atc",
     "lost contact with the control centre",
     "radio contact was lost",
     "lost communication with the control centre",
     "lost the radio link with the control centre",
     "lost contact with atc",
     "they lost radio contact"
    ]
   },
   {
    "id": "u3",
    "cat": "处置",
    "label": "再次尝试原频率",
    "en": "tried the frequency again",
    "w": 2,
    "num": null,
    "variants": [
     "tried the frequency again",
     "tried the frequency",
     "called again on the same frequency",
     "retried the frequency",
     "tried the same frequency again",
     "attempted the frequency again",
     "called on the frequency again",
     "tried the assigned frequency again"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "使用备用无线电（仍无回复）",
    "en": "used the backup radio",
    "w": 2,
    "num": null,
    "variants": [
     "used the backup radio",
     "the backup radio",
     "used the standby radio",
     "tried the backup radio",
     "used the second radio",
     "switched to the backup radio",
     "used the alternate radio",
     "used the reserve radio",
     "the backup radio was used",
     "used the backup radio but received no reply"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "将应答机设为7600（核心处置）",
    "en": "set the transponder code to 7600",
    "w": 3,
    "num": null,
    "variants": [
     "set the transponder code to 7600",
     "squawk 7600",
     "set the transponder to 7600",
     "selected 7600 on the transponder",
     "changed the transponder code to 7600",
     "set squawk 7600",
     "dialed 7600 on the transponder",
     "put 7600 in the transponder",
     "set the code 7600",
     "the transponder code was set to 7600"
    ]
   },
   {
    "id": "u6",
    "cat": "细节",
    "label": "应答机编码7600（表示通信失效）",
    "en": "the transponder code 7600",
    "w": 1,
    "num": "7600",
    "variants": [
     "7600",
     "seven six zero zero",
     "seven thousand six hundred",
     "squawk 7600",
     "transponder code 7600",
     "the code 7600",
     "code 7600",
     "7600 code",
     "seven six zero zero squawk"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "执行通信失效程序",
    "en": "followed the lost communication procedure",
    "w": 2,
    "num": null,
    "variants": [
     "followed the lost communication procedure",
     "the lost communication procedure",
     "followed the lost comms procedure",
     "carried out the lost communication procedure",
     "followed the radio failure procedure",
     "executed the lost communication procedure",
     "followed the comms failure procedure",
     "followed the lost communication checklist"
    ]
   },
   {
    "id": "u8",
    "cat": "事件",
    "label": "管制员看到编码并引导其他飞机避让",
    "en": "the controllers saw the code and cleared other traffic away",
    "w": 2,
    "num": null,
    "variants": [
     "the controllers saw the code",
     "cleared other traffic away",
     "cleared other traffic away from the aircraft",
     "the controllers cleared other traffic",
     "controllers moved other traffic away",
     "atc saw the code and cleared the traffic",
     "other traffic was cleared away from the aircraft",
     "the controllers kept other traffic clear"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "数分钟后在新频率恢复联络",
    "en": "re-established contact on a new frequency",
    "w": 2,
    "num": null,
    "variants": [
     "re-established contact on a new frequency",
     "re-established contact",
     "established contact on a new frequency",
     "regained contact on a new frequency",
     "contact was re-established on a new frequency",
     "communication was re-established on a new frequency",
     "re-established radio contact on another frequency",
     "made contact again on a new frequency"
    ]
   },
   {
    "id": "u10",
    "cat": "结局",
    "label": "航班正常继续",
    "en": "the flight continued normally",
    "w": 2,
    "num": null,
    "variants": [
     "the flight continued normally",
     "the flight continued",
     "the flight proceeded normally",
     "the rest of the flight was normal",
     "the flight went on normally",
     "continued the flight normally",
     "the flight continued without further problems",
     "the flight proceeded without further incident"
    ]
   },
   {
    "id": "u11",
    "cat": "事件",
    "label": "原因：无线电开关故障",
    "en": "the cause was a faulty radio switch",
    "w": 2,
    "num": null,
    "variants": [
     "a faulty radio switch",
     "the cause was a faulty radio switch",
     "a radio switch failure",
     "the radio switch was faulty",
     "a defective radio switch",
     "caused by a faulty radio switch",
     "a failed radio switch",
     "a problem with the radio switch",
     "a broken radio switch"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 15,
  "title": "Story 15 · 烤箱冒烟",
  "text": "Half an hour after departure, a flight attendant smelled burning plastic in the rear galley and found smoke coming from an oven. She switched off the power, used a fire extinguisher and informed the captain. The captain told air traffic control that they would return and prepared the cabin for landing. The fire was out within a few minutes, and the smoke slowly cleared. The aircraft landed forty minutes later. The oven was found to have an electrical fault.",
  "zh": "起飞半小时后，一名乘务员在后厨房闻到塑料烧焦的气味，发现烤箱冒烟。她关闭电源，使用灭火器，并通知了机长。机长告知空管将返航，并让客舱做好着陆准备。几分钟内火被扑灭，烟雾慢慢散去。飞机四十分钟后落地。烤箱被发现有电气故障。",
  "spoken": "half an hour after departure a flight attendant smelled burning plastic in the rear galley and found smoke coming from an oven she switched off the power used a fire extinguisher and informed the captain the captain told air traffic control that they would return and prepared the cabin for landing the fire was out within a few minutes and the smoke slowly cleared the aircraft landed forty minutes later the oven was found to have an electrical fault",
  "audio": "audio/s15.mp3",
  "refWords": 79,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "时间节点：起飞后约半小时",
    "en": "half an hour after departure",
    "w": 1,
    "num": null,
    "variants": [
     "half an hour after departure",
     "thirty minutes after departure",
     "30 minutes after departure",
     "half an hour into the flight",
     "30 minutes into the flight",
     "thirty minutes into the flight",
     "half an hour after takeoff",
     "thirty minutes after takeoff",
     "30 minutes after takeoff"
    ]
   },
   {
    "id": "u2",
    "cat": "细节",
    "label": "乘务员闻到烧焦塑料味",
    "en": "smelled burning plastic",
    "w": 1,
    "num": null,
    "variants": [
     "smelled burning plastic",
     "smelt burning plastic",
     "a smell of burning plastic",
     "noticed a burning plastic smell",
     "smelled burning plastic in the rear galley",
     "smelled something burning like plastic",
     "the smell of burning plastic",
     "smelled smoke and burning plastic"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "后厨房烤箱冒烟",
    "en": "smoke coming from an oven",
    "w": 3,
    "num": null,
    "variants": [
     "smoke coming from an oven",
     "smoke from the oven",
     "the oven was smoking",
     "found smoke in the oven",
     "smoke in the rear galley oven",
     "an oven in the rear galley was smoking",
     "smoke coming from an oven in the rear galley",
     "the galley oven emitted smoke",
     "smoke was coming out of the oven"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "切断烤箱电源",
    "en": "switched off the power",
    "w": 2,
    "num": null,
    "variants": [
     "switched off the power",
     "turned off the power",
     "cut the power to the oven",
     "switched off the oven",
     "turned off the oven",
     "switched off the oven power",
     "disconnected the power",
     "shut off the power",
     "switched the power off"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "使用灭火器灭火（核心处置）",
    "en": "used a fire extinguisher",
    "w": 3,
    "num": null,
    "variants": [
     "used a fire extinguisher",
     "used the fire extinguisher",
     "used an extinguisher",
     "discharged a fire extinguisher",
     "used the extinguisher on the fire",
     "put out the fire with a fire extinguisher",
     "extinguished the fire with a fire extinguisher",
     "grabbed the fire extinguisher",
     "deployed a fire extinguisher"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "通知机长",
    "en": "informed the captain",
    "w": 2,
    "num": null,
    "variants": [
     "informed the captain",
     "told the captain",
     "notified the captain",
     "advised the captain",
     "reported to the captain",
     "called the captain",
     "informed the flight deck",
     "reported the fire to the captain"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "机长通知管制将返航",
    "en": "told air traffic control that they would return",
    "w": 2,
    "num": null,
    "variants": [
     "told air traffic control that they would return",
     "informed atc that they would return",
     "told atc they would return",
     "advised atc of the return",
     "told air traffic control they were returning",
     "notified atc that they would return",
     "told the controller they would return",
     "declared their intention to return to atc"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "做好着陆客舱准备",
    "en": "prepared the cabin for landing",
    "w": 2,
    "num": null,
    "variants": [
     "prepared the cabin for landing",
     "prepared the cabin",
     "the cabin was prepared for landing",
     "got the cabin ready for landing",
     "made the cabin ready for landing",
     "secured the cabin for landing",
     "carried out cabin preparation for landing"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "火情数分钟内被扑灭",
    "en": "the fire was out within a few minutes",
    "w": 2,
    "num": null,
    "variants": [
     "the fire was out within a few minutes",
     "the fire was extinguished within a few minutes",
     "the fire went out within a few minutes",
     "the fire was out in a few minutes",
     "the fire was put out quickly",
     "the fire was extinguished quickly",
     "the fire was out after a few minutes"
    ]
   },
   {
    "id": "u10",
    "cat": "细节",
    "label": "烟雾逐渐消散",
    "en": "the smoke slowly cleared",
    "w": 1,
    "num": null,
    "variants": [
     "the smoke slowly cleared",
     "the smoke cleared",
     "the smoke gradually cleared",
     "the smoke slowly dissipated",
     "the smoke cleared slowly",
     "the smoke disappeared gradually",
     "the smoke slowly cleared up"
    ]
   },
   {
    "id": "u11",
    "cat": "细节",
    "label": "40分钟后着陆",
    "en": "the aircraft landed forty minutes later",
    "w": 1,
    "num": "40",
    "variants": [
     "forty minutes later",
     "40 minutes later",
     "the aircraft landed forty minutes later",
     "landed forty minutes later",
     "the aircraft landed 40 minutes later",
     "landed 40 minutes later",
     "forty minutes after the fire",
     "after forty minutes the aircraft landed"
    ]
   },
   {
    "id": "u12",
    "cat": "事件",
    "label": "原因：烤箱电气故障",
    "en": "the oven was found to have an electrical fault",
    "w": 2,
    "num": null,
    "variants": [
     "an electrical fault in the oven",
     "the oven had an electrical fault",
     "the oven was found to have an electrical fault",
     "an electrical problem with the oven",
     "the oven suffered an electrical fault",
     "caused by an electrical fault in the oven",
     "an electrical fault in the galley oven",
     "the oven had an electrical failure"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 16,
  "title": "Story 16 · 尾流",
  "text": "A light aircraft was cleared for takeoff from a runway shortly after a large jet had departed from it. The controller had warned the pilot of possible wake turbulence, but the pilot did not wait long enough. Soon after rotation, the small aircraft suddenly rolled to the right and lost height. The pilot recovered control just above the trees and landed back on the runway. The report recommended that controllers keep a minimum time interval of two minutes in such cases.",
  "zh": "一架大型喷气机从某跑道起飞后不久，一架轻型飞机获得了同一跑道的起飞许可。管制员已提醒飞行员可能有尾流，但飞行员等待的时间不够。抬轮后不久，小飞机突然向右滚转并掉高度。飞行员在树梢上方才恢复操纵，并返回跑道着陆。报告建议管制员在这类情况下保持至少两分钟的时间间隔。",
  "spoken": "a light aircraft was cleared for takeoff from a runway shortly after a large jet had departed from it the controller had warned the pilot of possible wake turbulence but the pilot did not wait long enough soon after rotation the small aircraft suddenly rolled to the right and lost height the pilot recovered control just above the trees and landed back on the runway the report recommended that controllers keep a minimum time interval of two minutes in such cases",
  "audio": "audio/s16.mp3",
  "refWords": 81,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "机型：轻型飞机",
    "en": "a light aircraft",
    "w": 2,
    "num": null,
    "variants": [
     "light aircraft",
     "small aircraft",
     "a light aircraft",
     "a small aircraft",
     "light airplane",
     "small airplane",
     "light plane",
     "small plane",
     "light aeroplane",
     "small aeroplane"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "前机：大型喷气式飞机",
    "en": "a large jet",
    "w": 2,
    "num": null,
    "variants": [
     "large jet",
     "big jet",
     "heavy jet",
     "a large jet",
     "large aircraft",
     "heavy aircraft",
     "large airplane",
     "big aircraft",
     "big airplane",
     "large aeroplane"
    ]
   },
   {
    "id": "u3",
    "cat": "事件",
    "label": "轻型飞机获准从跑道起飞",
    "en": "cleared for takeoff from the runway",
    "w": 2,
    "num": null,
    "variants": [
     "cleared for takeoff",
     "cleared to take off",
     "cleared for takeoff from the runway",
     "cleared for takeoff from a runway",
     "given takeoff clearance",
     "received takeoff clearance",
     "cleared for departure",
     "was cleared for takeoff",
     "cleared to take off from the runway",
     "got takeoff clearance"
    ]
   },
   {
    "id": "u4",
    "cat": "背景",
    "label": "时机：大型喷气机刚从同一跑道离场",
    "en": "shortly after a large jet had departed",
    "w": 2,
    "num": null,
    "variants": [
     "shortly after a large jet had departed",
     "shortly after the large jet had departed",
     "soon after the jet departed",
     "just after the large jet departed",
     "shortly after the jet took off",
     "right after the large jet departed",
     "soon after the jet had departed",
     "a short time after the jet departed",
     "shortly after the heavy aircraft departed",
     "soon after the large jet left"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "管制员警告可能有尾流湍流",
    "en": "warned the pilot of possible wake turbulence",
    "w": 2,
    "num": null,
    "variants": [
     "warned the pilot of possible wake turbulence",
     "warned of possible wake turbulence",
     "possible wake turbulence",
     "wake turbulence warning",
     "caution wake turbulence",
     "wake turbulence advisory",
     "advised the pilot of wake turbulence",
     "warned about wake turbulence",
     "informed the pilot of possible wake turbulence",
     "cautioned the pilot about wake turbulence"
    ]
   },
   {
    "id": "u6",
    "cat": "问题",
    "label": "飞行员未等待足够时间",
    "en": "the pilot did not wait long enough",
    "w": 2,
    "num": null,
    "variants": [
     "did not wait long enough",
     "did not wait long enough before takeoff",
     "didn't wait long enough",
     "failed to wait long enough",
     "did not wait for enough time",
     "waited too short a time",
     "did not wait long enough after the jet departed",
     "not wait long enough",
     "waited insufficiently",
     "did not allow enough time"
    ]
   },
   {
    "id": "u7",
    "cat": "问题",
    "label": "抬轮后飞机突然右滚并掉高度（核心问题）",
    "en": "suddenly rolled to the right and lost height",
    "w": 3,
    "num": null,
    "variants": [
     "suddenly rolled to the right",
     "rolled to the right and lost height",
     "rolled to the right",
     "rolled right and lost height",
     "rolled to the right and lost altitude",
     "suddenly rolled right and lost height",
     "banked sharply to the right and lost height",
     "rolled to the right and descended",
     "suddenly rolled to the right and lost altitude",
     "rolled to the right and lost height after rotation"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "在树梢上方改出（核心处置）",
    "en": "recovered control just above the trees",
    "w": 3,
    "num": null,
    "variants": [
     "recovered control just above the trees",
     "recovered just above the trees",
     "regained control just above the trees",
     "recovered control above the trees",
     "regained control above the trees",
     "recovered just above the tree tops",
     "recovered control just above the tree line",
     "regained control just above the treetops",
     "pulled out just above the trees",
     "recovered above the trees"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "返场降落回原跑道",
    "en": "landed back on the runway",
    "w": 2,
    "num": null,
    "variants": [
     "landed back on the runway",
     "landed back on the same runway",
     "landed safely back on the runway",
     "landed back on the departure runway",
     "returned and landed on the runway",
     "made it back to the runway",
     "landed back on the runway safely",
     "returned to the runway and landed",
     "landed back on the runway it had taken off from",
     "landed back on the runway without damage"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "报告建议：此类情况保持最少时间间隔",
    "en": "the report recommended a minimum time interval",
    "w": 2,
    "num": null,
    "variants": [
     "the report recommended a minimum time interval",
     "recommended that controllers keep a minimum time interval",
     "controllers should keep a minimum time interval",
     "recommended keeping a minimum time interval",
     "a minimum time interval should be kept",
     "recommended that a minimum time interval be kept",
     "controllers keep a minimum time interval",
     "suggested a minimum time interval",
     "recommended a minimum separation time",
     "advised controllers to keep a minimum time interval"
    ]
   },
   {
    "id": "u11",
    "cat": "细节",
    "label": "数字：最少时间间隔2分钟",
    "en": "two minutes",
    "w": 1,
    "num": "2",
    "variants": [
     "two minutes",
     "2 minutes",
     "two minute",
     "2 min",
     "a minimum of two minutes",
     "a minimum of 2 minutes",
     "two minutes interval",
     "2 minutes interval",
     "minimum interval of two minutes",
     "minimum interval of 2 minutes"
    ]
   },
   {
    "id": "u12",
    "cat": "细节",
    "label": "时机：抬轮后不久",
    "en": "soon after rotation",
    "w": 1,
    "num": null,
    "variants": [
     "soon after rotation",
     "shortly after rotation",
     "just after rotation",
     "right after rotation",
     "after rotation",
     "just after liftoff",
     "soon after liftoff",
     "shortly after takeoff",
     "right after takeoff",
     "soon after becoming airborne"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 17,
  "title": "Story 17 · 滑错滑行道",
  "text": "At night, a crew taxiing towards the runway took a wrong turn and entered a taxiway that was closed for construction. The tower noticed this on the ground radar and told them to stop immediately. The aircraft stopped about fifty metres before the construction area, and a follow-me vehicle led it back to the correct route. The investigation found that the crew had not checked the airport chart carefully, and that the taxiway lights were hard to see in the rain.",
  "zh": "夜间，一个机组向跑道滑行时走错路口，进入了一条因施工关闭的滑行道。塔台在地面雷达上发现后，立即让他们停止。飞机在距施工区约五十米处停住，引导车把飞机带回正确路线。调查发现机组没有仔细核对机场图，且雨中滑行道灯光很难看清。",
  "spoken": "at night a crew taxiing towards the runway took a wrong turn and entered a taxiway that was closed for construction the tower noticed this on the ground radar and told them to stop immediately the aircraft stopped about fifty metres before the construction area and a follow me vehicle led it back to the correct route the investigation found that the crew had not checked the airport chart carefully and that the taxiway lights were hard to see in the rain",
  "audio": "audio/s17.mp3",
  "refWords": 82,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "时间：夜间",
    "en": "at night",
    "w": 2,
    "num": null,
    "variants": [
     "at night",
     "during the night",
     "in the night",
     "at nighttime",
     "at night time",
     "during the night hours",
     "during nighttime",
     "in darkness",
     "during the hours of darkness",
     "night time"
    ]
   },
   {
    "id": "u2",
    "cat": "背景",
    "label": "机组滑行前往跑道",
    "en": "a crew taxiing towards the runway",
    "w": 2,
    "num": null,
    "variants": [
     "taxiing towards the runway",
     "taxiing to the runway",
     "taxing towards the runway",
     "taxing to the runway",
     "taxiing out to the runway",
     "taxiing to the takeoff runway",
     "taxiing towards the takeoff runway",
     "taxiing to the runway for departure",
     "taxing out towards the runway",
     "taxiing towards the runway for departure"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "转错弯进入关闭的滑行道（核心问题）",
    "en": "took a wrong turn and entered a closed taxiway",
    "w": 3,
    "num": null,
    "variants": [
     "took a wrong turn",
     "took a wrong turn and entered a taxiway",
     "entered a closed taxiway",
     "took a wrong turn onto the taxiway",
     "turned onto the wrong taxiway",
     "entered the wrong taxiway",
     "made a wrong turn and entered a closed taxiway",
     "turned the wrong way and entered a taxiway",
     "went the wrong way and entered a closed taxiway",
     "took the wrong turn onto a closed taxiway"
    ]
   },
   {
    "id": "u4",
    "cat": "问题",
    "label": "该滑行道因施工关闭",
    "en": "the taxiway was closed for construction",
    "w": 2,
    "num": null,
    "variants": [
     "closed for construction",
     "closed due to construction",
     "taxiway closed for construction",
     "under construction",
     "closed for construction work",
     "taxiway was under construction",
     "closed because of construction work",
     "construction work on the taxiway",
     "work in progress on the taxiway",
     "the taxiway was closed for construction work"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "塔台在地面雷达上发现",
    "en": "the tower noticed it on the ground radar",
    "w": 2,
    "num": null,
    "variants": [
     "noticed on the ground radar",
     "the tower noticed on the ground radar",
     "ground radar",
     "ground movement radar",
     "surface movement radar",
     "tower saw it on the ground radar",
     "detected on the ground radar",
     "noticed it on ground radar",
     "tower noticed it on the ground radar",
     "observed on the ground radar"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "塔台指令立即停止（核心处置）",
    "en": "the tower told them to stop immediately",
    "w": 3,
    "num": null,
    "variants": [
     "told them to stop immediately",
     "stop immediately",
     "instructed to stop immediately",
     "instructed the crew to stop immediately",
     "ordered to stop immediately",
     "told the crew to stop at once",
     "commanded to stop immediately",
     "ordered them to stop straight away",
     "told them to stop at once",
     "instructed them to stop at once"
    ]
   },
   {
    "id": "u7",
    "cat": "细节",
    "label": "数字：停在施工区前约50米",
    "en": "about fifty metres",
    "w": 1,
    "num": "50",
    "variants": [
     "fifty metres",
     "50 metres",
     "fifty meters",
     "50 meters",
     "about fifty metres",
     "about 50 metres",
     "fifty metres before the construction area",
     "50 metres before the construction area",
     "50 m",
     "fifty metre"
    ]
   },
   {
    "id": "u8",
    "cat": "结局",
    "label": "飞机停在施工区前，未进入",
    "en": "the aircraft stopped before the construction area",
    "w": 2,
    "num": null,
    "variants": [
     "stopped before the construction area",
     "stopped short of the construction area",
     "stopped before the construction zone",
     "stopped short of the construction zone",
     "halted before the construction area",
     "stopped before the work area",
     "stopped just before the construction area",
     "came to a stop before the construction area",
     "stopped short of the construction work",
     "stopped in front of the construction area"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "引导车带回正确路线",
    "en": "a follow-me vehicle led it back to the correct route",
    "w": 2,
    "num": null,
    "variants": [
     "follow-me vehicle",
     "follow me vehicle",
     "a follow-me vehicle led it back",
     "follow-me vehicle led it back to the correct route",
     "led back to the correct route",
     "guided back to the correct route",
     "follow-me car",
     "escorted back to the correct route",
     "guided back to the correct taxi route",
     "a follow-me vehicle led the aircraft back"
    ]
   },
   {
    "id": "u10",
    "cat": "问题",
    "label": "调查结论：机组未仔细检查机场航图",
    "en": "the crew had not checked the airport chart carefully",
    "w": 2,
    "num": null,
    "variants": [
     "had not checked the airport chart carefully",
     "not checked the airport chart carefully",
     "did not check the airport chart",
     "failed to check the airport chart carefully",
     "had not consulted the airport chart",
     "had not studied the airport chart carefully",
     "had not reviewed the airport chart",
     "did not refer to the airport chart",
     "had not checked the airport diagram carefully",
     "not checked the aerodrome chart carefully"
    ]
   },
   {
    "id": "u11",
    "cat": "问题",
    "label": "调查结论：雨天滑行道灯光难以看清",
    "en": "the taxiway lights were hard to see in the rain",
    "w": 2,
    "num": null,
    "variants": [
     "taxiway lights were hard to see in the rain",
     "lights were hard to see in the rain",
     "taxiway lights difficult to see in the rain",
     "taxiway lights were difficult to see in the rain",
     "taxiway lighting was hard to see in the rain",
     "the lights were difficult to see because of the rain",
     "poor visibility of the taxiway lights in the rain",
     "taxiway lights hard to see in rainy conditions",
     "wet weather made the taxiway lights hard to see",
     "the rain made the taxiway lights hard to see"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 18,
  "title": "Story 18 · 空速不可靠",
  "text": "During the climb, the captain's airspeed indicator suddenly showed an increase, while the standby indicator showed a different value. The crew suspected that the pitot tube was blocked by ice. They disconnected the autopilot, set a fixed pitch attitude and power setting, and followed the unreliable airspeed procedure. They used the GPS ground speed as a reference and informed air traffic control. The flight continued to a nearby airport, where maintenance staff found ice in the pitot tube.",
  "zh": "爬升期间，机长的空速表读数突然增大，而备用空速表显示的是另一个数值。机组怀疑皮托管被冰堵塞。他们断开自动驾驶，设定固定的俯仰姿态和功率，并执行空速不可靠程序。他们参考GPS地速，并通知了空管。航班继续飞往附近机场，维修人员在那里发现皮托管中有冰。",
  "spoken": "during the climb the captain s airspeed indicator suddenly showed an increase while the standby indicator showed a different value the crew suspected that the pitot tube was blocked by ice they disconnected the autopilot set a fixed pitch attitude and power setting and followed the unreliable airspeed procedure they used the g p s ground speed as a reference and informed air traffic control the flight continued to a nearby airport where maintenance staff found ice in the pitot tube",
  "audio": "audio/s18.mp3",
  "refWords": 78,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "阶段：爬升中",
    "en": "during the climb",
    "w": 2,
    "num": null,
    "variants": [
     "during the climb",
     "in the climb",
     "during the climb out",
     "while climbing",
     "whilst climbing",
     "during climb",
     "in the climb out phase",
     "during the climbing phase",
     "while the aircraft was climbing",
     "during the ascent"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "机长空速表指示突然增大（核心问题）",
    "en": "the captain's airspeed indicator suddenly showed an increase",
    "w": 3,
    "num": null,
    "variants": [
     "the captain's airspeed indicator showed an increase",
     "captain's airspeed indicator suddenly showed an increase",
     "airspeed indicator showed a sudden increase",
     "the airspeed indicator showed an increase",
     "captain's airspeed reading increased suddenly",
     "indicated airspeed increased suddenly",
     "airspeed indication went up suddenly",
     "the captain's airspeed increased unexpectedly",
     "airspeed showed an unexpected increase",
     "captain's airspeed indicator showed an unexpected rise"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "备用空速表指示不一致",
    "en": "the standby indicator showed a different value",
    "w": 2,
    "num": null,
    "variants": [
     "the standby indicator showed a different value",
     "standby airspeed indicator showed a different value",
     "standby indicator showed a different reading",
     "standby gauge showed a different value",
     "the two airspeed indications disagreed",
     "disagreement between the airspeed indicators",
     "standby instrument showed a different value",
     "the standby airspeed showed a different reading",
     "the two airspeed indications did not match",
     "different values on the airspeed indicators"
    ]
   },
   {
    "id": "u4",
    "cat": "问题",
    "label": "怀疑空速管被冰堵塞",
    "en": "suspected the pitot tube was blocked by ice",
    "w": 2,
    "num": null,
    "variants": [
     "pitot tube was blocked by ice",
     "suspected the pitot tube was blocked by ice",
     "pitot tube blocked by ice",
     "suspected a blocked pitot tube",
     "pitot tube icing",
     "pitot blocked by ice",
     "pitot tube was obstructed by ice",
     "iced up pitot tube",
     "suspected pitot tube blockage",
     "pitot tube blocked with ice"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "断开自动驾驶",
    "en": "disconnected the autopilot",
    "w": 2,
    "num": null,
    "variants": [
     "disconnected the autopilot",
     "disconnected autopilot",
     "the autopilot was disconnected",
     "switched off the autopilot",
     "turned off the autopilot",
     "disengaged the autopilot",
     "the autopilot was disengaged",
     "cancelled the autopilot",
     "switched the autopilot off",
     "the autopilot was switched off"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "设定固定俯仰姿态",
    "en": "set a fixed pitch attitude",
    "w": 2,
    "num": null,
    "variants": [
     "set a fixed pitch attitude",
     "fixed pitch attitude",
     "set and held a fixed pitch attitude",
     "maintained a fixed pitch attitude",
     "selected a fixed pitch attitude",
     "set a constant pitch attitude",
     "held a fixed pitch attitude",
     "pitch attitude was set and held",
     "set a fixed pitch",
     "kept a fixed pitch attitude"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "设定固定推力/功率",
    "en": "set a fixed power setting",
    "w": 2,
    "num": null,
    "variants": [
     "set a fixed power setting",
     "fixed power setting",
     "set a fixed thrust setting",
     "set and held a fixed power setting",
     "maintained a fixed power setting",
     "selected a fixed power setting",
     "fixed thrust setting",
     "set a constant power setting",
     "thrust was set to a fixed value",
     "set a fixed engine power"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "执行不可靠空速程序（核心处置）",
    "en": "followed the unreliable airspeed procedure",
    "w": 3,
    "num": null,
    "variants": [
     "followed the unreliable airspeed procedure",
     "unreliable airspeed procedure",
     "carried out the unreliable airspeed procedure",
     "performed the unreliable airspeed procedure",
     "executed the unreliable airspeed procedure",
     "followed the unreliable airspeed checklist",
     "applied the unreliable airspeed procedure",
     "followed the airspeed unreliable procedure",
     "used the unreliable airspeed procedure",
     "completed the unreliable airspeed procedure"
    ]
   },
   {
    "id": "u9",
    "cat": "处置",
    "label": "用GPS地速作为参考",
    "en": "used the gps ground speed as a reference",
    "w": 2,
    "num": null,
    "variants": [
     "used the gps ground speed as a reference",
     "gps ground speed as a reference",
     "used gps ground speed",
     "referred to the gps ground speed",
     "used the ground speed from the gps",
     "gps groundspeed as a reference",
     "used gps ground speed for reference",
     "cross checked the gps ground speed",
     "used the gps groundspeed",
     "based on the gps ground speed"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "通知空中交通管制",
    "en": "informed air traffic control",
    "w": 2,
    "num": null,
    "variants": [
     "informed air traffic control",
     "informed atc",
     "notified air traffic control",
     "advised air traffic control",
     "reported to air traffic control",
     "told atc",
     "contacted atc",
     "informed the controller",
     "notified atc",
     "advised atc"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "继续飞往附近机场",
    "en": "the flight continued to a nearby airport",
    "w": 2,
    "num": null,
    "variants": [
     "continued to a nearby airport",
     "the flight continued to a nearby airport",
     "diverted to a nearby airport",
     "continued to a nearby aerodrome",
     "flew to a nearby airport",
     "continued to the nearest airport",
     "diverted to the nearest airport",
     "proceeded to a nearby airport",
     "continued on to a nearby airport",
     "continued to another airport"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "机务在空速管内发现冰",
    "en": "maintenance staff found ice in the pitot tube",
    "w": 2,
    "num": null,
    "variants": [
     "found ice in the pitot tube",
     "ice in the pitot tube",
     "maintenance staff found ice in the pitot tube",
     "maintenance found ice in the pitot tube",
     "ice was found in the pitot tube",
     "ice found in the pitot tube",
     "the pitot tube contained ice",
     "ice in the pitot",
     "found ice in the pitot",
     "pitot tube had ice in it"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 19,
  "title": "Story 19 · 无人机",
  "text": "An aircraft on final approach reported seeing a small drone about 100 metres to its right at 1,500 feet. The tower immediately informed other aircraft and notified airport security. Departures were stopped for fifteen minutes while the police searched the area. The aircraft landed safely, and no collision occurred. The owner of the drone was later found and fined. The airport reminded the public that flying drones near airports is prohibited.",
  "zh": "一架在最后进近的飞机报告，在1500英尺高度、右侧约100米处看到一架小型无人机。塔台立即通知其他飞机并通知机场保安。警方搜索该区域期间，离场航班停止放行十五分钟。该飞机安全着陆，未发生碰撞。无人机的主人后来被找到并被罚款。机场提醒公众，在机场附近放飞无人机是被禁止的。",
  "spoken": "an aircraft on final approach reported seeing a small drone about one hundred metres to its right at one thousand five hundred feet the tower immediately informed other aircraft and notified airport security departures were stopped for fifteen minutes while the police searched the area the aircraft landed safely and no collision occurred the owner of the drone was later found and fined the airport reminded the public that flying drones near airports is prohibited",
  "audio": "audio/s19.mp3",
  "refWords": 72,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "阶段：最后进近",
    "en": "an aircraft on final approach",
    "w": 2,
    "num": null,
    "variants": [
     "on final approach",
     "during final approach",
     "established on final approach",
     "while on final approach",
     "on the final approach",
     "during the final approach",
     "on final approach to land",
     "approaching the runway",
     "on approach to the runway"
    ]
   },
   {
    "id": "u2",
    "cat": "问题",
    "label": "报告看到小型无人机（核心问题）",
    "en": "reported seeing a small drone",
    "w": 3,
    "num": null,
    "variants": [
     "reported seeing a small drone",
     "seeing a small drone",
     "saw a small drone",
     "reported a small drone",
     "spotted a small drone",
     "reported seeing a drone",
     "sighted a small drone",
     "reported a drone in sight",
     "visual contact with a small drone",
     "saw a drone ahead"
    ]
   },
   {
    "id": "u3",
    "cat": "细节",
    "label": "位置：在飞机右侧",
    "en": "to its right",
    "w": 1,
    "num": null,
    "variants": [
     "to its right",
     "on its right",
     "to the right of the aircraft",
     "off the right side",
     "on the right hand side",
     "off its right side",
     "to the right side",
     "on the right of the aircraft",
     "to the right of the plane",
     "off to the right"
    ]
   },
   {
    "id": "u4",
    "cat": "细节",
    "label": "数字：距离约100米",
    "en": "one hundred metres",
    "w": 1,
    "num": "100",
    "variants": [
     "one hundred metres",
     "100 metres",
     "one hundred meters",
     "100 meters",
     "a hundred metres",
     "100 m",
     "about one hundred metres",
     "about 100 metres",
     "one hundred metres to its right",
     "100 metres to its right"
    ]
   },
   {
    "id": "u5",
    "cat": "细节",
    "label": "数字：高度1500英尺",
    "en": "one thousand five hundred feet",
    "w": 1,
    "num": "1500",
    "variants": [
     "one thousand five hundred feet",
     "1500 feet",
     "fifteen hundred feet",
     "1,500 feet",
     "at one thousand five hundred feet",
     "at fifteen hundred feet",
     "1500 ft",
     "one thousand five hundred ft",
     "at 1500 feet",
     "at fifteen hundred ft"
    ]
   },
   {
    "id": "u6",
    "cat": "处置",
    "label": "塔台立即通知其他航空器（核心处置）",
    "en": "the tower immediately informed other aircraft",
    "w": 3,
    "num": null,
    "variants": [
     "informed other aircraft",
     "tower informed other aircraft",
     "immediately informed other aircraft",
     "warned other aircraft",
     "tower warned other aircraft of the drone",
     "informed other traffic",
     "advised other aircraft",
     "notified other aircraft",
     "tower alerted other aircraft",
     "informed the other aircraft about the drone"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "通知机场安保",
    "en": "notified airport security",
    "w": 2,
    "num": null,
    "variants": [
     "notified airport security",
     "informed airport security",
     "airport security was notified",
     "called airport security",
     "reported to airport security",
     "advised airport security",
     "alerted airport security",
     "airport security informed",
     "contacted airport security",
     "told airport security"
    ]
   },
   {
    "id": "u8",
    "cat": "处置",
    "label": "暂停离场",
    "en": "departures were stopped",
    "w": 2,
    "num": null,
    "variants": [
     "departures were stopped",
     "departures stopped",
     "departures were suspended",
     "suspended departures",
     "departures halted",
     "departure traffic was stopped",
     "departures were halted",
     "stopped the departures",
     "no departures were allowed",
     "departure traffic was suspended"
    ]
   },
   {
    "id": "u9",
    "cat": "细节",
    "label": "数字：暂停离场15分钟",
    "en": "fifteen minutes",
    "w": 1,
    "num": "15",
    "variants": [
     "fifteen minutes",
     "15 minutes",
     "for fifteen minutes",
     "for 15 minutes",
     "fifteen minute",
     "15 min",
     "a period of fifteen minutes",
     "fifteen minutes while the police searched",
     "a fifteen minute stop",
     "15 minute stop"
    ]
   },
   {
    "id": "u10",
    "cat": "处置",
    "label": "警察搜查该区域",
    "en": "the police searched the area",
    "w": 2,
    "num": null,
    "variants": [
     "the police searched the area",
     "police searched the area",
     "police searched the area for the drone",
     "the police searched for the drone",
     "police conducted a search of the area",
     "law enforcement searched the area",
     "the police carried out a search of the area",
     "police searched the area for the drone operator",
     "the police searched the surroundings",
     "police looked for the drone operator in the area"
    ]
   },
   {
    "id": "u11",
    "cat": "结局",
    "label": "飞机安全落地，未发生碰撞",
    "en": "the aircraft landed safely and no collision occurred",
    "w": 2,
    "num": null,
    "variants": [
     "landed safely and no collision occurred",
     "no collision occurred",
     "landed safely without any collision",
     "landed safely and there was no collision",
     "landed safely with no collision",
     "landed without any collision",
     "no collision happened",
     "the aircraft landed safely without collision",
     "landed safely and no impact occurred",
     "the approach ended with a safe landing and no collision"
    ]
   },
   {
    "id": "u12",
    "cat": "结局",
    "label": "无人机所有者被找到并罚款",
    "en": "the owner of the drone was found and fined",
    "w": 2,
    "num": null,
    "variants": [
     "the owner of the drone was found and fined",
     "drone owner was found and fined",
     "the drone owner was fined",
     "owner of the drone was identified and fined",
     "drone operator was found and fined",
     "the drone owner was located and fined",
     "owner was found and fined",
     "drone pilot was identified and fined",
     "the drone owner was found and penalised",
     "the operator of the drone was fined"
    ]
   },
   {
    "id": "u13",
    "cat": "处置",
    "label": "机场提醒公众：机场附近禁飞无人机",
    "en": "flying drones near airports is prohibited",
    "w": 2,
    "num": null,
    "variants": [
     "flying drones near airports is prohibited",
     "flying drones near airports is forbidden",
     "drones are prohibited near airports",
     "flying drones near the airport is prohibited",
     "it is prohibited to fly drones near airports",
     "drone flights near airports are prohibited",
     "flying unmanned aircraft near airports is prohibited",
     "drones must not be flown near airports",
     "flying drones close to airports is not allowed",
     "drone operations near airports are banned"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "除冰",
    "words": [
     "de-icing",
     "deicing",
     "de-ice",
     "holdover",
     "de-icing fluid"
    ]
   }
  ]
 },
 {
  "id": 20,
  "title": "Story 20 · 除冰",
  "text": "On a snowy morning, a crew requested de-icing before departure. After the ground staff had finished, the captain checked the wings through the cabin window and saw that some snow remained on the left wing. He asked for the de-icing to be repeated. Because the holdover time was limited, the crew also made sure that the takeoff would begin before it expired. The second treatment was completed, and the aircraft departed safely after a delay of fifty minutes.",
  "zh": "一个下雪的早晨，机组在起飞前申请除冰。地面人员完成后，机长从客舱窗口检查机翼，发现左翼上仍有一些积雪。他要求重新除冰。由于防冰液有效保持时间有限，机组还确保在其过期前开始起飞。第二次除冰完成后，飞机在延误五十分钟后安全起飞。",
  "spoken": "on a snowy morning a crew requested de icing before departure after the ground staff had finished the captain checked the wings through the cabin window and saw that some snow remained on the left wing he asked for the de icing to be repeated because the holdover time was limited the crew also made sure that the takeoff would begin before it expired the second treatment was completed and the aircraft departed safely after a delay of fifty minutes",
  "audio": "audio/s20.mp3",
  "refWords": 80,
  "refWpm": [
   85,
   150
  ],
  "units": [
   {
    "id": "u1",
    "cat": "背景",
    "label": "时间：雪天早晨",
    "en": "on a snowy morning",
    "w": 2,
    "num": null,
    "variants": [
     "on a snowy morning",
     "snowy morning",
     "a snowy morning",
     "on a morning with snow",
     "a snow covered morning",
     "morning with snow falling",
     "it was a snowy morning",
     "on a snowy winter morning",
     "snowy weather that morning",
     "a morning with snowfall"
    ]
   },
   {
    "id": "u2",
    "cat": "处置",
    "label": "起飞前请求除冰",
    "en": "requested de-icing before departure",
    "w": 2,
    "num": null,
    "variants": [
     "requested de-icing before departure",
     "requested deicing before departure",
     "requested de icing before departure",
     "asked for de-icing before departure",
     "asked for de icing before departure",
     "requested de-icing prior to departure",
     "requested de-icing before takeoff",
     "asked for de-icing before takeoff",
     "called for de-icing before departure",
     "asked for the aircraft to be de-iced before departure"
    ]
   },
   {
    "id": "u3",
    "cat": "问题",
    "label": "机长发现左翼仍有积雪（核心问题）",
    "en": "some snow remained on the left wing",
    "w": 3,
    "num": null,
    "variants": [
     "some snow remained on the left wing",
     "snow remained on the left wing",
     "saw snow on the left wing",
     "snow still on the left wing",
     "left wing still had snow on it",
     "noticed snow remaining on the left wing",
     "snow left on the left wing",
     "some snow on the left wing",
     "found snow remaining on the left wing",
     "not all the snow was removed from the left wing"
    ]
   },
   {
    "id": "u4",
    "cat": "处置",
    "label": "通过客舱窗户检查机翼",
    "en": "checked the wings through the cabin window",
    "w": 2,
    "num": null,
    "variants": [
     "checked the wings through the cabin window",
     "checked the wings through the window",
     "looked at the wings through the cabin window",
     "inspected the wings through the cabin window",
     "checked the wings from the cabin window",
     "visual check of the wings through the cabin window",
     "looked out of the cabin window at the wings",
     "checked the wing through the cabin window",
     "looked at the wing through the cabin window",
     "inspected the wing through the window"
    ]
   },
   {
    "id": "u5",
    "cat": "处置",
    "label": "要求重复除冰（核心处置）",
    "en": "asked for the de-icing to be repeated",
    "w": 3,
    "num": null,
    "variants": [
     "asked for the de-icing to be repeated",
     "asked for the deicing to be repeated",
     "requested de-icing to be repeated",
     "asked for de-icing to be repeated",
     "requested a second de-icing",
     "asked for another de-icing",
     "asked for de-icing again",
     "requested the de-icing to be repeated",
     "requested a repeat of the de-icing",
     "asked for the de-icing to be done again"
    ]
   },
   {
    "id": "u6",
    "cat": "背景",
    "label": "约束：除冰保留时间(holdover)有限",
    "en": "the holdover time was limited",
    "w": 2,
    "num": null,
    "variants": [
     "the holdover time was limited",
     "holdover time was limited",
     "limited holdover time",
     "holdover time was running out",
     "holdover time would expire",
     "holdover time was expiring",
     "the holdover time was short",
     "holdover time limit",
     "holdover time was running short",
     "holdover time would soon expire"
    ]
   },
   {
    "id": "u7",
    "cat": "处置",
    "label": "确保起飞在保留时间到期前开始",
    "en": "the takeoff would begin before the holdover time expired",
    "w": 2,
    "num": null,
    "variants": [
     "takeoff would begin before it expired",
     "takeoff before the holdover time expired",
     "made sure the takeoff would begin before the holdover time expired",
     "the takeoff would begin before the holdover time expired",
     "ensure takeoff before the holdover time expired",
     "departed before the holdover time expired",
     "the takeoff began before the holdover time expired",
     "take off before the holdover time expired",
     "made sure to take off before the holdover time expired",
     "begin the takeoff before it expired"
    ]
   },
   {
    "id": "u8",
    "cat": "结局",
    "label": "第二次除冰完成",
    "en": "the second treatment was completed",
    "w": 2,
    "num": null,
    "variants": [
     "the second treatment was completed",
     "second treatment was completed",
     "second de-icing completed",
     "second de-icing was completed",
     "the second de-icing was completed",
     "the second de-icing treatment was completed",
     "repeat de-icing completed",
     "the second round of de-icing was completed",
     "a second de-icing was completed",
     "the second de-icing treatment finished"
    ]
   },
   {
    "id": "u9",
    "cat": "结局",
    "label": "延迟后安全起飞离场",
    "en": "the aircraft departed safely after a delay",
    "w": 2,
    "num": null,
    "variants": [
     "departed safely after a delay",
     "departed safely after the delay",
     "the aircraft departed safely",
     "departed safely in the end",
     "took off safely after the delay",
     "left safely after a delay",
     "departed safely after the de-icing",
     "the aircraft took off safely",
     "departure was successful after the delay",
     "departed safely with no further problem"
    ]
   },
   {
    "id": "u10",
    "cat": "细节",
    "label": "数字：延迟50分钟",
    "en": "fifty minutes",
    "w": 1,
    "num": "50",
    "variants": [
     "fifty minutes",
     "50 minutes",
     "a fifty minute delay",
     "a 50 minute delay",
     "fifty minute delay",
     "50 minute delay",
     "after a delay of fifty minutes",
     "after a delay of 50 minutes",
     "delay of fifty minutes",
     "delayed by fifty minutes"
    ]
   },
   {
    "id": "u11",
    "cat": "处置",
    "label": "地面人员完成除冰作业",
    "en": "the ground staff had finished the de-icing",
    "w": 2,
    "num": null,
    "variants": [
     "the ground staff had finished",
     "ground staff finished the de-icing",
     "ground staff completed the de-icing",
     "ground crew completed the de-icing",
     "ground personnel completed the de-icing",
     "the ground staff finished the de-icing",
     "ground crew finished the de-icing",
     "the de-icing by the ground staff was finished",
     "ground staff had completed the de-icing",
     "ground crew had finished the de-icing"
    ]
   }
  ],
  "probes": [
   {
    "label": "起落架指示灯",
    "words": [
     "landing gear",
     "nose gear",
     "indicator light",
     "indicator bulb",
     "low pass"
    ]
   },
   {
    "label": "雷暴绕飞",
    "words": [
     "thunderstorm",
     "weather radar",
     "deviation to the south",
     "detour",
     "dispatcher"
    ]
   },
   {
    "label": "鸟击中断起飞",
    "words": [
     "bird",
     "birds",
     "flock",
     "rejected takeoff",
     "aborted takeoff",
     "fan blades"
    ]
   },
   {
    "label": "座舱释压",
    "words": [
     "cabin altitude",
     "oxygen mask",
     "emergency descent",
     "door seal",
     "cabin pressure"
    ]
   },
   {
    "label": "车辆占道复飞",
    "words": [
     "maintenance vehicle",
     "go around",
     "went around",
     "runway without clearance",
     "vehicle"
    ]
   },
   {
    "label": "旅客急病备降",
    "words": [
     "chest pain",
     "doctor on board",
     "ambulance",
     "satellite phone",
     "divert to"
    ]
   },
   {
    "label": "液压低",
    "words": [
     "hydraulic",
     "hydraulics",
     "pan-pan",
     "pan pan"
    ]
   },
   {
    "label": "浓雾备降",
    "words": [
     "heavy fog",
     "visibility",
     "holding pattern",
     "alternate airport",
     "divert to"
    ]
   },
   {
    "label": "发动机失效",
    "words": [
     "engine failure",
     "engine failed",
     "left engine",
     "one engine",
     "turbine blade"
    ]
   },
   {
    "label": "风切变",
    "words": [
     "windshear",
     "wind shear",
     "full thrust"
    ]
   },
   {
    "label": "燃油不平衡",
    "words": [
     "fuel imbalance",
     "crossfeed",
     "cross-feed",
     "fuel pump"
    ]
   },
   {
    "label": "湿跑道冲出",
    "words": [
     "wet runway",
     "tailwind",
     "slid onto",
     "evacuated",
     "slides",
     "overran",
     "touchdown long"
    ]
   },
   {
    "label": "雷击",
    "words": [
     "lightning",
     "struck by lightning",
     "burn marks"
    ]
   },
   {
    "label": "通信失效",
    "words": [
     "7600",
     "transponder code",
     "lost communication",
     "lost radio contact",
     "radio switch"
    ]
   },
   {
    "label": "烤箱冒烟",
    "words": [
     "smoke",
     "oven",
     "extinguisher",
     "burning plastic",
     "galley"
    ]
   },
   {
    "label": "尾流",
    "words": [
     "wake turbulence",
     "wake"
    ]
   },
   {
    "label": "滑错滑行道",
    "words": [
     "wrong turn",
     "taxiway",
     "construction",
     "follow-me",
     "follow me",
     "airport chart"
    ]
   },
   {
    "label": "空速不可靠",
    "words": [
     "pitot",
     "unreliable airspeed",
     "airspeed indicator",
     "pitch attitude"
    ]
   },
   {
    "label": "无人机",
    "words": [
     "drone",
     "uav",
     "unmanned aircraft"
    ]
   }
  ]
 }
];
