import type { Fighter } from "../types";

export const fighters: Fighter[] = [
  {
    id: "kyo",
    name: "草薙京",
    en: "Kyo Kusanagi",
    team: "日本队",
    style: "草薙流古武术＋我流拳法",
    quote: "燃烧吧，然后化为灰烬。",
    color: "#d9362c",
    moves: [
      ["外式·轰斧阳", "Ge-Shiki: Gofu Yo", "→ + B", "special"],
      ["外式·奈落落", "Ge-Shiki: Naraku Otoshi", "空中 ↓ + Y", "special"],
      ["百式·鬼烧", "100 Shiki: Oniyaki", "→ ↓ ↘ + X/Y", "special"],
      ["九百十式·鵺掴", "910 Shiki: Nuetsumi", "↓ ↙ ← + X/Y", "special"],
      ["七十五式·改", "75 Shiki: Kai", "↓ ↘ → + A/B · A/B", "special"],
      ["百十四式·荒咬", "114 Shiki: Aragami", "↓ ↘ → + X", "special"],
      ["百十五式·毒咬", "115 Shiki: Dokugami", "↓ ↘ → + Y", "special"],
      ["里百八式·大蛇薙", "Ura 108 Shiki: Orochinagi", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["最终决战奥义·无式", "Saishu Kessen Ogi Mu-Shiki", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["鈸铁", "Hatsugane", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "benimaru",
    name: "二阶堂红丸",
    en: "Benimaru Nikaido",
    team: "日本队",
    style: "射击式格斗术＋雷电招式",
    quote: "漂亮的闪电，收下吧。",
    color: "#e8d8b0",
    moves: [
      ["雷光拳", "Raijinken", "↓ ↘ → + X/Y", "special"],
      ["空中雷光拳", "Air Raijinken", "空中 ↓ ↘ → + X/Y", "special"],
      ["超级闪电踢", "Super Inazuma Kick", "→ ↓ ↘ + A/B", "special"],
      ["居合脚", "Iai Geri", "↓ ↘ → + A/B", "special"],
      ["真空片手驹", "Shinku Katategoma", "↓ ↙ ← + X/Y", "special"],
      ["红丸对撞", "Benimaru Collider", "近身 → ↘ ↓ ↙ ← → + X/Y", "special"],
      ["雷光拳超必杀", "Raikoken", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["电击扳机", "Elec-Trigger", "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["捕捉投篮", "Catch and Shoot", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "daimon",
    name: "大门五郎",
    en: "Goro Daimon",
    team: "日本队",
    style: "柔道",
    quote: "大地的力量，你承受得住吗？",
    color: "#4a6b4a",
    moves: [
      ["地雷震", "Jiraishin", "→ ↓ ↘ + X", "special"],
      ["天地返し", "Tenchi Gaeshi", "近身 → ↘ ↓ ↙ ← → + X/Y", "special"],
      ["里投", "Ura Nage", "近身 → ↘ ↓ ↙ ← → + A/B", "special"],
      ["超大外刈", "Cho Osotogari", "近身 → ↓ ↘ + A/B", "special"],
      ["云掴投", "Kumo Tsukami Nage", "← ↙ ↓ ↘ → + X", "special"],
      ["超受身", "Cho Ukemi", "↓ ↙ ← + A/B", "special"],
      ["地狱极乐落", "Jigoku Gokuraku Otoshi", "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["岚之山", "Arashi no Yama", "近身 ← ↙ ↓ ↘ → ← ↙ ↓ ↘ → + A/B", "super"],
      ["巴投", "Tomoe Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "terry",
    name: "特瑞",
    en: "Terry Bogard",
    team: "饿狼队",
    style: "军用武术",
    quote: "Hey, come on! 站起来再战。",
    color: "#2879b8",
    moves: [
      ["能量波", "Power Wave", "↓ ↘ → + X/Y", "special"],
      ["火焰冲拳", "Burn Knuckle", "↓ ↙ ← + X/Y", "special"],
      ["升龙拳", "Rising Tackle", "→ ↓ ↘ + X/Y", "special"],
      ["碎石踢", "Crack Shoot", "↓ ↙ ← + A/B", "special"],
      ["能量灌篮", "Power Dunk", "→ ↓ ↘ + A/B", "special"],
      ["能量冲撞", "Power Charge", "← ↙ ↓ ↘ → + A/B", "special"],
      ["能量喷泉", "Power Geyser", "↓ ↙ ← ↙ → + X/Y", "super"],
      ["高角度喷泉", "High Angle Geyser", "↓ ↘ → ↓ ↘ → + A/B", "super"],
      ["升龙摔", "Buster Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "andy",
    name: "安迪",
    en: "Andy Bogard",
    team: "饿狼队",
    style: "骨法＋不知火流忍术",
    quote: "不知火的奥义，你看清了吗？",
    color: "#3b77bd",
    moves: [
      ["斩影拳", "Zaneiken", "↙ → + X/Y", "special"],
      ["飞翔拳", "Hishoken", "↓ ↙ ← + X/Y", "special"],
      ["升龙弹", "Shoryudan", "→ ↓ ↘ + X/Y", "special"],
      ["空破弹", "Kuhadan", "← ↙ ↓ ↘ → + A/B", "special"],
      ["击壁背水掌", "Gekiheki Haisuisho", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["幻影不知火", "Genei Shiranui", "空中 ↓ ↘ → + A/B", "special"],
      ["超裂破弹", "Cho Reppadan", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["飞翔流星拳", "Hisho Ryuseiken", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["刚临", "Korin", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "joe",
    name: "东丈",
    en: "Joe Higashi",
    team: "饿狼队",
    style: "泰拳",
    quote: "痛快一战，才叫痛快！",
    color: "#f0b429",
    moves: [
      ["飓风上段踢", "Hurricane Upper", "← ↙ ↓ ↘ → + X/Y", "special"],
      ["斩空脚", "Slash Kick", "← ↙ ↓ ↘ → + A/B", "special"],
      ["爆裂拳", "Bakuretsuken", "X/Y 连按", "special"],
      ["黄金虎踢", "Tiger Kick", "→ ↓ ↘ + A/B", "special"],
      ["黄金脚刀", "Ogon no Kakato", "↓ ↙ ← + A/B", "special"],
      ["螺旋上勾拳", "Screw Upper", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["爆裂飓风虎脚", "Bakuretsu Hurricane Tiger Kakato", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["膝踢摔", "Tsurane Uchi", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "ryo",
    name: "坂崎良",
    en: "Ryo Sakazaki",
    team: "龙虎队",
    style: "极限流空手道",
    quote: "极限流，可不只是说说而已。",
    color: "#d37d22",
    moves: [
      ["虎煌拳", "Ko-oken", "↓ ↘ → + X/Y", "special"],
      ["虎咆", "Koho", "→ ↓ ↘ + X/Y", "special"],
      ["飞燕疾风脚", "Hien Shippukyaku", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["猛虎雷神刚", "Moko Raijingo", "↓ ↙ ← + X/Y", "special"],
      ["猛虎雷神截", "Moko Raijinsetsu", "↓ ↘ → + A/B", "special"],
      ["极限流连舞拳", "Kyokugenryu Renbuken", "← ↙ ↓ ↘ → + X/Y", "special"],
      ["龙虎乱舞", "Ryuko Ranbu", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["霸王翔吼拳", "Haoh Shokoken", "→ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["巴投", "Tomoe Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "robert",
    name: "罗伯特",
    en: "Robert Garcia",
    team: "龙虎队",
    style: "极限流空手道",
    quote: "华丽地结束这一局吧。",
    color: "#a78335",
    moves: [
      ["龙击拳", "Ryugekiken", "↓ ↘ → + X/Y", "special"],
      ["龙牙", "Ryuga", "→ ↓ ↘ + X/Y", "special"],
      ["龙斩翔", "Ryuzansho", "→ ↓ ↘ + A/B", "special"],
      ["飞燕龙神脚", "Hien Ryujinkyaku", "空中 ↓ ↙ ← + A/B", "special"],
      ["飞燕旋风脚", "Hien Senpukyaku", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["极限流连舞脚", "Kyokugenryu Renbukyaku", "近身 ← ↙ ↓ ↘ → + A/B", "special"],
      ["龙虎乱舞", "Ryuko Ranbu", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["霸王翔吼拳", "Haoh Shokoken", "→ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["首切投", "Kubikiri Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "yuri",
    name: "坂崎由莉",
    en: "Yuri Sakazaki",
    team: "龙虎队",
    style: "极限流空手道",
    quote: "哥哥的极限流，我也学会了哦。",
    color: "#e46a8a",
    moves: [
      ["虎煌拳", "Ko-oken", "↓ ↘ → + X/Y", "special"],
      ["雷煌拳", "Raioken", "↓ ↘ → + A/B", "special"],
      ["由莉超上勾", "Yuri Cho Upper", "→ ↓ ↘ + X/Y", "special"],
      ["由莉超拳", "Yuri Cho Knuckle", "↓ ↙ ← + X/Y", "special"],
      ["由莉超回旋踢", "Yuri Cho Mawashigeri", "↓ ↙ ← + A/B", "special"],
      ["百裂响脸", "Hyakuretsu Binta", "→ ↘ ↓ ↙ ← + X/Y", "special"],
      ["飞燕凤凰脚", "Hien Hououkyaku", "↓ ↘ → ↘ ↓ ↙ ← + A/B", "super"],
      ["霸王翔吼拳", "Haoh Shokoken", "→ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["巴投", "Tomoe Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "leona",
    name: "莉安娜",
    en: "Leona Heidern",
    team: "怒队",
    style: "哈迪伦流暗杀术",
    quote: "任务开始。目标，排除。",
    color: "#3d6f86",
    moves: [
      ["月光锯", "Moon Slasher", "↓ 蓄力 ↑ + X/Y", "special"],
      ["涡旋发射器", "Baltic Launcher", "← 蓄力 → + X/Y", "special"],
      ["大地军刀", "Grand Saber", "← 蓄力 → + A/B", "special"],
      ["X口径炮", "X-Calibur", "↓ 蓄力 ↑ + A/B", "special"],
      ["眼锯", "Eye Slasher", "↓ ↙ ← + X/Y", "special"],
      ["V字金锯", "V-Slasher", "空中 ↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["叛逆火花", "Rebel Spark", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["杀手钻", "Killer Drill", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "ralf",
    name: "拉尔夫",
    en: "Ralf Jones",
    team: "怒队",
    style: "哈迪伦流暗杀术＋军用格斗",
    quote: "一拳就够了，喝啊！",
    color: "#477849",
    moves: [
      ["机炮拳", "Vulcan Punch", "X/Y 连按", "special"],
      ["格林机关炮", "Gatling Attack", "← 蓄力 → + X/Y", "special"],
      ["拉尔夫踢", "Ralf Kick", "← 蓄力 → + A/B", "special"],
      ["急降下爆弹拳", "Dive Bomber Punch", "↓ 蓄力 ↑ + X/Y", "special"],
      ["超级阿根廷背摔", "Super Argentine Backbreaker", "近身 ← ↙ ↓ ↘ → + A/B", "special"],
      ["超级机炮拳", "Super Vulcan Punch", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["无鞍机炮拳", "Bareback Vulcan Punch", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["银河幻影", "Galactica Phantom", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["高角度喉锁落", "Dynamite Headbutt", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "clark",
    name: "克拉克",
    en: "Clark Still",
    team: "怒队",
    style: "哈迪伦流暗杀术＋摔技",
    quote: "被我抓住，就别想逃了。",
    color: "#6b8f3a",
    moves: [
      ["机炮拳", "Vulcan Punch", "X/Y 连按", "special"],
      ["凝固汽油伸展", "Napalm Stretch", "→ ↓ ↘ + X/Y", "special"],
      ["弗兰肯施泰纳", "Frankensteiner", "近身 → ↓ ↘ + A/B", "special"],
      ["滚动摇篮", "Rolling Cradler", "← ↙ ↓ ↘ → + X/Y", "special"],
      ["超级阿根廷背摔", "Super Argentine Backbreaker", "近身 ← ↙ ↓ ↘ → + A/B", "special"],
      ["闪光肘", "Flashing Elbow", "↓ ↘ → + X/Y", "special"],
      ["究极阿根廷背摔", "Ultra Argentine Backbreaker", "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["大回环", "Running Three", "← ↙ ↓ ↘ → ← ↙ ↓ ↘ → + A/B", "super"],
      ["杀手投", "Death Catch", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "athena",
    name: "麻宫雅典娜",
    en: "Athena Asamiya",
    team: "超能力队",
    style: "超能力＋中国拳法",
    quote: "Athena，准备好啦！",
    color: "#db3f7c",
    moves: [
      ["精神力球", "Psycho Ball Attack", "↓ ↙ ← + X/Y", "special"],
      ["凤凰箭", "Phoenix Arrow", "空中 ↓ ↙ ← + X/Y", "special"],
      ["精神力剑", "Psycho Sword", "→ ↓ ↘ + X/Y", "special"],
      ["新精神力反射波", "New Psycho Reflector", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["心灵传送", "Psychic Teleport", "↓ ↘ → + A/B", "special"],
      ["超级精神力投", "Super Psychic Throw", "近身 ← ↙ ↓ ↘ → + Y", "special"],
      ["闪光水晶波", "Shining Crystal Bit", "← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["凤凰锐箭", "Phoenix Fang Arrow", "空中 ↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["精神力投", "Psychic Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "kensou",
    name: "椎拳崇",
    en: "Sie Kensou",
    team: "超能力队",
    style: "超能力＋中国拳法",
    quote: "肉包在手，状态全有。",
    color: "#2778aa",
    moves: [
      ["超球弹", "Chokyudan", "↓ ↙ ← + X/Y", "special"],
      ["龙颚碎", "Ryugaku Sai", "← ↓ ↙ + A/B", "special"],
      ["龙连牙·地龙", "Ryurenga Chiryu", "← ↙ ↓ ↘ → + X", "special"],
      ["龙连牙·天龙", "Ryurenga Tenryu", "← ↙ ↓ ↘ → + Y", "special"],
      ["龙连打", "Ryurenda", "近身 → ↓ ↘ + X/Y", "special"],
      ["龙爪击", "Ryuso Geki", "空中 ↓ ↙ ← + X/Y", "special"],
      ["神龙凄煌裂脚", "Shinryu Seio Rekkyaku", "↓ ↘ → ↘ ↓ ↙ ← + A/B", "super"],
      ["仙气发动", "Senki Hakkei", "近身 ↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["巴投", "Tomoe Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "chin",
    name: "镇元斋",
    en: "Chin Gentsai",
    team: "超能力队",
    style: "醉拳＋气功",
    quote: "年轻人，还是先喝一杯吧。",
    color: "#8a6b3f",
    moves: [
      ["葫芦击", "Hyotan Geki", "↓ ↙ ← + X/Y", "special"],
      ["龙鳞崩来", "Ryurin Horai", "→ ↓ ↘ + X/Y", "special"],
      ["回转踢突拳", "Kaitenteki Kutotsuken", "← ↙ ↓ ↘ → + A/B", "special"],
      ["醉汉可望", "Suikan Kano", "↓ ↘ → + X/Y", "special"],
      ["望月醉", "Bogetsu Sui", "↓ ↙ ← + A/B", "special"],
      ["豪岚炎炮", "Goran Enho", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["业炎招来", "Goen Shorai", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["醉投", "Suiho Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "chizuru",
    name: "神乐千鹤",
    en: "Chizuru Kagura",
    team: "女性队",
    style: "八咫流古武术",
    quote: "八咫之盾，将保护这个世界。",
    color: "#c9a24a",
    moves: [
      ["一百葛·天神之理", "100 Katsu: Tenjin no Kotowari", "→ ↓ ↘ + X/Y", "special"],
      ["一百八葛·玉响之失音", "108 Katsu: Tamayura no Shitsune", "← ↙ ↓ ↘ → + X/Y", "special"],
      ["二百十二葛·神速之祝词", "212 Katsu: Shinsoku no Norito", "→ ↘ ↓ ↙ ← + X/Y/A/B", "special"],
      [
        "二百十二葛乙式·听闻之一心",
        "212 Katsu Otsu Shiki: Chomon no Isshin",
        "↓ ↘ → + X/Y/A/B",
        "special"
      ],
      ["里面一葛·三雷之夫人", "Rimen 1 Katsu: Sanrai no Fujin", "↓ ↘ → ↓ ↘ → + A/B", "super"],
      ["里面八十五葛·礼义之础", "Rimen 85 Katsu: Reigi no Ishizue", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["神乐投", "Kagura Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "mai",
    name: "不知火舞",
    en: "Mai Shiranui",
    team: "女性队",
    style: "不知火流忍术",
    quote: "日本第一！不知火舞登场。",
    color: "#da352b",
    moves: [
      ["花蝶扇", "Kachosen", "↓ ↘ → + X/Y", "special"],
      ["龙炎舞", "Ryuenbu", "↓ ↙ ← + X/Y", "special"],
      ["必杀忍蜂", "Hissatsu Shinobi Bachi", "← ↙ ↓ ↘ → + A/B", "special"],
      ["白鹭之舞", "Hakuro no Mai", "→ ↓ ↘ + X/Y", "special"],
      ["飞翔龙炎阵", "Hisho Ryuenjin", "→ ↓ ↘ + A/B", "special"],
      ["鼯鼠之舞", "Musasabi no Mai", "↓ 蓄力 ↑ + X/Y", "special"],
      ["超必杀忍蜂", "Cho Hissatsu Shinobi Bachi", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["凤凰之舞", "Houou no Mai", "↓ ↙ ← ↓ ↙ ← + X/Y", "super"],
      ["风车崩", "Fuusha Kuzushi", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "king",
    name: "金",
    en: "King",
    team: "女性队",
    style: "泰拳",
    quote: "认真一点，我可不会手下留情。",
    color: "#6873b9",
    moves: [
      ["毒蛇击", "Venom Strike", "↓ ↘ → + A/B", "special"],
      ["双毒蛇击", "Double Strike", "↓ ↘ → ↓ ↘ → + A/B", "special"],
      ["惊喜玫瑰", "Surprise Rose", "→ ↓ ↘ + X/Y", "special"],
      ["落地击", "Trap Shot", "→ ↓ ↘ + A/B", "special"],
      ["妄想踢", "Mirage Kick", "← ↙ ↓ ↘ → + A/B", "special"],
      ["龙卷踢", "Tornado Kick", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["幻象之舞", "Illusion Dance", "↓ ↘ → ↘ ↓ ↙ ← + A/B", "super"],
      ["沉默闪光", "Silent Flash", "↓ ↙ ← ↓ ↙ ← + A/B", "super"],
      ["足勾摔", "Hook Buster", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "kim",
    name: "金家藩",
    en: "Kim Kaphwan",
    team: "韩国队",
    style: "跆拳道",
    quote: "正义必胜！",
    color: "#2f6fb0",
    moves: [
      ["飞燕斩", "Hienzan", "↓ 蓄力 ↑ + A/B", "special"],
      ["空斩", "Kusajin", "↓ 蓄力 ↑ + X/Y", "special"],
      ["流星落", "Ryuseiraku", "← 蓄力 → + A/B", "special"],
      ["半月斩", "Hangetsuzan", "↓ ↙ ← + A/B", "special"],
      ["飞翔脚", "Hishokyaku", "空中 ↓ ↘ → + A/B", "special"],
      ["凤凰脚", "Hououkyaku", "↓ ↙ ← ↙ → + A/B", "super"],
      ["凤凰天舞脚", "Houou Tenbukyaku", "空中 ↓ ↘ → ↘ ↓ ↙ ← + A/B", "super"],
      ["首极落", "Kubi Kiwame Otoshi", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "chang",
    name: "陈国汉",
    en: "Chang Koehan",
    team: "韩国队",
    style: "铁球格斗",
    quote: "铁球一挥，谁敢挡我！",
    color: "#6d5b4a",
    moves: [
      ["铁球大回转", "Tekkyu Daikaiten", "X/Y 连按", "special"],
      ["铁球粉碎击", "Tekkyu Funsai Geki", "← 蓄力 → + X/Y", "special"],
      ["铁球飞燕斩", "Tekkyu Hienzan", "↓ 蓄力 ↑ + A/B", "special"],
      ["大破坏投", "Dai Hakai Nage", "近身 → ↘ ↓ ↙ ← → + Y", "special"],
      ["铁球大暴走", "Tekkyu Dai Boso", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["铁球大压杀", "Tekkyu Dai Assatsu", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["破岩击", "Hagan Geki", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "choi",
    name: "崔响儿",
    en: "Choi Bounge",
    team: "韩国队",
    style: "跆拳道＋利爪",
    quote: "嘻嘻嘻……被我刮到就完了！",
    color: "#8f8a3a",
    moves: [
      ["疾走飞翔斩", "Shisso Hishozan", "← 蓄力 → + X/Y", "special"],
      ["龙卷疾风斩", "Tatsumaki Shippuzan", "↓ 蓄力 ↑ + X/Y", "special"],
      ["旋风飞燕刺突", "Senpu Hien Shitotsu", "← 蓄力 → + A/B", "special"],
      ["飞翔空裂斩", "Hisho Kuretsuzan", "↓ 蓄力 ↑ + A/B", "special"],
      ["飞翔脚", "Hishokyaku", "空中 ↓ ↘ → + A/B", "special"],
      [
        "真！超绝龙卷真空斩",
        "Shin! Chozetsu Tatsumaki Shinkuzan",
        "→ ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y",
        "super"
      ],
      ["凤凰脚", "Hououkyaku", "↓ ↘ → ↘ ↓ ↙ ← + A/B", "super"],
      ["头上刺", "Zujou Sashi", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "yashiro",
    name: "七枷社",
    en: "Yashiro Nanakase",
    team: "新面孔队",
    style: "力量型格斗",
    quote: "摇滚的力量，碾碎你！",
    color: "#3f5a8a",
    moves: [
      ["侧步踢", "Step Side Kick", "→ + B", "special"],
      ["双重上勾拳", "Upper Duel", "→ ↓ ↘ + X/Y", "special"],
      ["大锤", "Sledgehammer", "↓ ↙ ← + X/Y", "special"],
      ["喷射反击", "Jet Counter", "← ↙ ↓ ↘ → + X/Y", "special"],
      ["导弹重击", "Missile Might Bash", "→ ↘ ↓ ↙ ← + X/Y", "special"],
      ["百万重击流", "Million Bash Stream", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["最终冲击", "Final Impact", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["杠杆碎击", "Lever Blow", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "shermie",
    name: "夏尔米",
    en: "Shermie",
    team: "新面孔队",
    style: "摔技",
    quote: "讨厌……你真的好笨哦。",
    color: "#d45a8a",
    moves: [
      ["夏尔米站立踢", "Shermie Stand", "→ + B", "special"],
      ["车轴回旋踢", "Axle Spin Kick", "↓ ↙ ← + A/B", "special"],
      ["夏尔米鞭", "Shermie Whip", "近身 → ↓ ↘ + A/B", "special"],
      ["夏尔米射击", "Shermie Shoot", "← ↙ ↓ ↘ → + A/B", "special"],
      ["夏尔米螺旋", "Shermie Spiral", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["夏尔米闪光", "Shermie Flash", "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["夏尔米嘉年华", "Shermie Carnival", "近身 ← ↙ ↓ ↘ → ← ↙ ↓ ↘ → + X/Y", "super"],
      ["夏尔米投", "Shermie Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "chris",
    name: "克里斯",
    en: "Chris",
    team: "新面孔队",
    style: "速度型格斗",
    quote: "明天也会放晴吧？",
    color: "#e85a2c",
    moves: [
      ["回旋阵列", "Spinning Array", "→ + X", "special"],
      ["滑铲触摸", "Slide Touch", "↓ ↘ → + X/Y", "special"],
      ["狩猎空袭", "Hunting Air", "→ ↓ ↘ + A/B", "special"],
      ["射击舞者·突刺", "Shooting Dancer Thrust", "→ ↘ ↓ ↙ ← + X/Y", "special"],
      ["射击舞者·踏步", "Shooting Dancer Step", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["滑翔踏", "Glider Stamp", "空中 ↓ ↘ → + A/B", "special"],
      ["连锁滑铲触摸", "Chain Slide Touch", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["龙卷驱动", "Twister Drive", "↓ ↙ ← ↓ ↙ ← + A/B", "super"],
      ["步进投", "Step Turn", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "yamazaki",
    name: "山崎龙二",
    en: "Ryuji Yamazaki",
    team: "97特别队",
    style: "我流格斗＋短刀",
    quote: "哈哈哈……杀了你。",
    color: "#7a3a3a",
    moves: [
      ["蛇突斩", "Serpent Slash", "↓ ↙ ← + X/A/Y", "special"],
      ["双重反射", "Double Return", "↓ ↘ → + X/Y", "special"],
      ["审判匕首", "Judgement Dagger", "→ ↓ ↘ + X/Y", "special"],
      ["扬沙", "Spray Sand", "→ ↓ ↘ + A/B", "special"],
      ["炸弹头槌", "Bombshell Badda-Bing", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["施虐受虐", "Sadomaso", "← ↙ ↓ ↘ → + A/B", "special"],
      ["断头台", "Guillotine", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["电钻", "Drill", "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["山崎投", "Bun Nage", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "mary",
    name: "布鲁·玛丽",
    en: "Blue Mary",
    team: "97特别队",
    style: "桑搏摔跤",
    quote: "任务就是任务，抱歉了。",
    color: "#3a6f9a",
    moves: [
      ["M·蜘蛛", "M. Spider", "↓ ↘ → + X/Y", "special"],
      ["回旋落", "Spin Fall", "↓ ↘ → + A/B", "special"],
      ["垂直箭", "Vertical Arrow", "→ ↓ ↘ + A/B", "special"],
      ["直线滑铲", "Straight Slicer", "← 蓄力 → + A/B", "special"],
      ["真实背摔", "Backdrop Real", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["M·炸药荡", "M. Dynamite Swing", "↓ ↘ → ↓ ↘ → + A/B", "super"],
      ["M·飞溅玫瑰", "M. Splash Rose", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["M·台风", "M. Typhoon", "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + A/B", "super"],
      ["玛丽投", "Axle Hold", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "billy",
    name: "比利·卡恩",
    en: "Billy Kane",
    team: "97特别队",
    style: "棍术",
    quote: "棍子一挥，你就完了。",
    color: "#b84a2a",
    moves: [
      ["旋风棍", "Senpukon", "X 连按", "special"],
      ["三节棍中段打", "Sansetsukon Chudan Uchi", "← ↙ ↓ ↘ → + X/Y", "special"],
      ["火炎三节棍", "Kaen Sansetsukon", "← ↙ ↓ ↘ → + X/Y · ↓ ↘ → + X/Y", "special"],
      ["旋炎杀棍", "Senen Sakkon", "→ ↓ ↘ + X/Y", "special"],
      ["强袭飞翔棍", "Kyoshu Hishokon", "→ ↓ ↘ + A/B", "special"],
      ["火龙追击棍", "Karyu Tsuigekikon", "↓ ↙ ← + A", "special"],
      ["超火炎旋风棍", "Cho Kaen Senpukon", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["大旋风", "Dai Senpu", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["棍投", "Fish Toss", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "iori",
    name: "八神庵",
    en: "Iori Yagami",
    team: "个人参赛",
    style: "八神流古武术＋本能",
    quote: "马上就让你轻松下来。",
    color: "#743aa8",
    moves: [
      ["外式·梦弹", "Ge-Shiki: Yumebiki", "→ + X · X", "special"],
      ["外式·轰斧阴·死神", "Ge-Shiki: Gofu In Shinigami", "→ + B", "special"],
      ["百八式·暗拂", "108 Shiki: Yamibarai", "↓ ↘ → + X/Y", "special"],
      ["百式·鬼烧", "100 Shiki: Oniyaki", "→ ↓ ↘ + X/Y", "special"],
      ["百二十七式·葵花", "127 Shiki: Aoibana", "↓ ↙ ← + X/Y · X/Y · X/Y", "special"],
      ["二百十二式·琴月阴", "212 Shiki: Kototsuki In", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["屑风", "Kuzukaze", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["禁千二百十一式·八稚女", "Kin 1211 Shiki: Yaotome", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["里百八式·八酒杯", "Ura 108 Shiki: Yasakazuki", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["逆剥", "Sakahaqi", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "shingo",
    name: "矢吹真吾",
    en: "Shingo Yabuki",
    team: "个人参赛",
    style: "草薙流（自学）",
    quote: "京前辈教过我的招，看招！",
    color: "#d9a03a",
    moves: [
      ["外式·轰斧「カッコだけ」", "Ge-Shiki: Gofu Kakkodake", "→ + B", "special"],
      ["百十四式·荒咬「未完成」", "114 Shiki: Aragami Mikansei", "↓ ↘ → + X", "special"],
      ["百十五式·毒咬「未完成」", "115 Shiki: Dokugami Mikansei", "↓ ↘ → + Y", "special"],
      ["百式·鬼烧「未完成」", "100 Shiki: Oniyaki Mikansei", "→ ↓ ↘ + X/Y", "special"],
      ["百一式·胧车「未完成」", "101 Shiki: Oboroguruma Mikansei", "↓ ↙ ← + A/B", "special"],
      ["真吾踢", "Shingo Kick", "← ↙ ↓ ↘ → + A/B", "special"],
      ["外式·火计崩", "Ge-Shiki: Kake Horin", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["燃烧真吾", "Burning Shingo", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["真吾投", "Shingo Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "kyo94",
    name: "草薙京 '94",
    en: "Kyo Kusanagi '94",
    team: "隐藏角色",
    style: "草薙流古武术（'94 样式）",
    quote: "这才是最强的火焰。",
    color: "#c42828",
    moves: [
      ["百八式·暗拂", "108 Shiki: Yamibarai", "↓ ↘ → + X/Y", "special"],
      ["百式·鬼烧", "100 Shiki: Oniyaki", "→ ↓ ↘ + X/Y", "special"],
      ["七十五式", "75 Shiki", "↓ ↘ → + A/B", "special"],
      ["外式·轰斧阳", "Ge-Shiki: Gofu Yo", "→ + B", "special"],
      ["外式·奈落落", "Ge-Shiki: Naraku Otoshi", "空中 ↓ + Y", "special"],
      ["里百八式·大蛇薙", "Ura 108 Shiki: Orochinagi", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["最终决战奥义·无式", "Saishu Kessen Ogi Mu-Shiki", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["鈸铁", "Hatsugane", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "orochi-iori",
    name: "暴走庵",
    en: "Orochi Iori",
    team: "隐藏角色",
    style: "八神流＋大蛇之力",
    quote: "……杀……全部杀掉……",
    color: "#5a2080",
    moves: [
      ["外式·梦弹", "Ge-Shiki: Yumebiki", "→ + X · X", "special"],
      ["外式·轰斧阴", "Ge-Shiki: Gofu In", "→ + B", "special"],
      ["百八式·暗拂", "108 Shiki: Yamibarai", "↓ ↘ → + X/Y", "special"],
      ["百式·鬼烧", "100 Shiki: Oniyaki", "→ ↓ ↘ + X/Y", "special"],
      ["百二十七式·葵花", "127 Shiki: Aoibana", "↓ ↙ ← + X/Y · X/Y · X/Y", "special"],
      ["屑风", "Kuzukaze", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["禁千二百十一式·八稚女", "Kin 1211 Shiki: Yaotome", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["里百八式·八酒杯", "Ura 108 Shiki: Yasakazuki", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["逆剥", "Sakahaqi", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "orochi-leona",
    name: "暴走莉安娜",
    en: "Orochi Leona",
    team: "隐藏角色",
    style: "哈迪伦流＋大蛇之力",
    quote: "……结束……一切……",
    color: "#2a5a6a",
    moves: [
      ["月光锯", "Moon Slasher", "↓ 蓄力 ↑ + X/Y", "special"],
      ["涡旋发射器", "Baltic Launcher", "← 蓄力 → + X/Y", "special"],
      ["大地军刀", "Grand Saber", "← 蓄力 → + A/B", "special"],
      ["X口径炮", "X-Calibur", "↓ 蓄力 ↑ + A/B", "special"],
      ["眼锯", "Eye Slasher", "↓ ↙ ← + X/Y", "special"],
      ["V字金锯", "V-Slasher", "空中 ↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["叛逆火花", "Rebel Spark", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["杀手钻", "Killer Drill", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "orochi-yashiro",
    name: "大蛇社",
    en: "Orochi Yashiro",
    team: "隐藏角色",
    style: "大地之力",
    quote: "大地……将吞噬你们。",
    color: "#2a4060",
    moves: [
      ["侧步踢", "Bu", "→ + B", "special"],
      ["粉碎大地", "Kujiku Daichi", "↓ ↙ ← + X/Y", "special"],
      ["舞蹈大地", "Odoru Daichi", "← ↙ ↓ ↘ → + A/B", "special"],
      ["睨视大地", "Niragu Daichi", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["窒息大地", "Musebu Daichi", "近身 → ↘ ↓ ↙ ← → + X/Y", "special"],
      [
        "暗黑地狱极乐落",
        "Ankoku Jigoku Gokuraku Otoshi",
        "近身 → ↘ ↓ ↙ ← → ↘ ↓ ↙ ← + X/Y",
        "super"
      ],
      ["狂暴大地", "Araburu Daichi", "近身 ← ↙ ↓ ↘ → ← ↙ ↓ ↘ → + X/Y", "super"],
      ["咆哮大地", "Hoeru Daichi", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["杠杆碎击", "Lever Blow", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "orochi-shermie",
    name: "大蛇夏尔米",
    en: "Orochi Shermie",
    team: "隐藏角色",
    style: "雷电之力",
    quote: "雷鸣……将撕碎一切。",
    color: "#a04070",
    moves: [
      ["古雷", "Korai", "→ + B", "special"],
      ["无月之雷云", "Mugetsu no Raiun", "← ↙ ↓ ↘ → + X/Y/A/B", "special"],
      ["八咫薙之鞭", "Yatanagi no Muchi", "↓ ↙ ← + X/Y", "special"],
      ["写实之舞", "Shajitsu no Odori", "↓ ↙ ← + A/B", "special"],
      ["雷神之杖", "Raijin no Tsue", "空中 ↓ ↘ → + A/B", "special"],
      ["暗黑雷光拳", "Ankoku Raikoken", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["宿命·幻影·真意", "Shukumei Genei Shinshi", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["夏尔米投", "Shermie Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "orochi-chris",
    name: "大蛇克里斯",
    en: "Orochi Chris",
    team: "隐藏角色",
    style: "火焰之力",
    quote: "火焰……净化这个世界。",
    color: "#c04020",
    moves: [
      ["无用斧", "Muyo no Ono", "→ + X", "special"],
      ["射日之炎", "Taiyo o Iru Honoo", "↓ ↘ → + X/Y", "special"],
      ["摘月之炎", "Tsuki o Tsumu Honoo", "→ ↓ ↘ + X/Y", "special"],
      ["屠镜之炎", "Kagami o Hofuru Honoo", "↓ ↙ ← + X/Y", "special"],
      ["啮肢之炎", "Shishi o Kamu Honoo", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["暗黑大蛇薙", "Ankoku Orochinagi", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["拂地劫火", "Daichi o Harau Goka", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["步进投", "Step Turn", "近身 →/← + Y", "throw"]
    ]
  }
];
