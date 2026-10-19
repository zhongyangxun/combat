const fighters = [
  {
    id: "kyo",
    name: "草薙京",
    en: "Kyo Kusanagi",
    team: "日本队",
    style: "草薙流古武术＋我流拳法",
    quote: "燃烧吧，然后化为灰烬。",
    color: "#d9362c",
    moves: [
      ["外式·轰斧阳", "Ge Fu You", "→ + B", "special"],
      ["外式·奈落落", "Nara Raku", "空中 ↓ + Y", "special"],
      ["百式·鬼烧", "Oni Yaki", "→ ↓ ↘ + X/Y", "special"],
      ["百八式·暗拂", "Yami Barai", "↓ ↘ → + X/Y", "special"],
      ["七十五式·改", "Nana Ju Go Shiki Kai", "↓ ↘ → + A/B · A/B", "special"],
      ["百十四式·荒咬", "Ara Kami", "↓ ↘ → + X", "special"],
      ["百十五式·毒咬", "Doku Gami", "↓ ↘ → + Y", "special"],
      ["里百八式·大蛇薙", "Orochi Nagi", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["最终决战奥义·无式", "Mu Shiki", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["釟铁", "Hatsu Gane", "近身 →/← + Y", "throw"]
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
      ["雷光拳", "Rai Kou Ken", "↓ ↘ → + X/Y", "special"],
      ["超级闪电踢", "Super Inazuma Kick", "→ ↓ ↘ + A/B", "special"],
      ["手刀打", "Handou San", "↓ ↙ ← + X/Y", "special"],
      ["红丸滑铲", "Benimaru Collider", "近身 → ↘ ↓ ↙ ← + A/B", "special"],
      ["手刀打·真空", "Iaido San", "空中 ↓ ↙ ← + X/Y", "special"],
      ["超电磁台风", "Raikou Ken", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["霹雳迅雷拳", "Gen'ei Hurricane", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["红丸投", "Catch and Shoot", "近身 →/← + Y", "throw"]
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
      ["地狱极乐落", "Jigoku Gokuraku Otoshi", "近身 → ↘ ↓ ↙ ← + X/Y", "special"],
      ["云龙飞瀑", "Unryu Kyaku", "↓ ↙ ← + A/B", "special"],
      ["地震投", "Jishin Nage", "↓ ↘ → + X/Y", "special"],
      ["天地返し", "Tenchi Gaeshi", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["里投", "Ura Nage", "近身 → ↓ ↘ + X/Y", "special"],
      ["地狱极乐落·改", "Jigoku Gokuraku Otoshi Kai", "近身 ↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["荒大地狱落", "Arashi Jigoku Otoshi", "近身 ↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["升蹴轰击", "Rising Tackle", "↓ 蓄力 ↑ + X/Y", "special"],
      ["碎石踢", "Crack Shoot", "↓ ↙ ← + A/B", "special"],
      ["能量灌篮", "Power Dunk", "→ ↓ ↘ + A/B", "special"],
      ["能量喷泉", "Power Geyser", "↓ ↙ ← ↙ → + X/Y", "super"],
      ["高轨喷泉", "High Angle Geyser", "↓ ↘ → ↓ ↘ → + A/B", "super"],
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
      ["斩影拳", "Zan Ei Ken", "↙ → + X/Y", "special"],
      ["飞翔拳", "Hisho Ken", "↓ ↙ ← + X/Y", "special"],
      ["升龙弹", "Sho Ryu Dan", "→ ↓ ↘ + X/Y", "special"],
      ["空破弹", "Ku Ha Dan", "← ↙ ↓ ↘ → + A/B", "special"],
      ["击壁背水掌", "Geki Heki", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["超裂破弹", "Cho Reppa Dan", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["飞翔流星拳", "Hisho Ryusei Ken", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["刚临·改", "Go Rin Kai", "近身 →/← + Y", "throw"]
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
      ["飓风上段踢", "Hurricane Upper", "↓ ↘ → + X/Y", "special"],
      ["斩空脚", "Slash Kick", "↓ ↙ ← + A/B", "special"],
      ["爆裂拳", "Bakuretsu Ken", "← 蓄力 → + X/Y", "special"],
      ["黄金虎踢", "Tiger Kick", "→ ↓ ↘ + A/B", "special"],
      ["爆裂钩拳", "Screw Upper", "↓ ↙ ← + X/Y", "special"],
      ["爆裂飓风", "Screw Upper DM", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["爆裂拳乱舞", "Bakuretsu Hurricane", "↓ ↘ → ↓ ↘ → + A/B", "super"],
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
      ["虎煌拳", "Ko Oh Ken", "↓ ↘ → + X/Y", "special"],
      ["虎咆", "Ko Ho", "→ ↓ ↘ + X/Y", "special"],
      ["飞燕疾风脚", "Hien Shippu Kyaku", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["极限流连舞拳", "Zan Retsu Ken", "→ ← → + X/Y", "special"],
      ["猛虎雷神刚", "Mou Ko Rai Jin Gou", "↓ ↙ ← + X/Y", "special"],
      ["龙虎乱舞", "Ryu Ko Ranbu", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["霸王翔吼拳", "Haoh Sho Koh Ken", "→ ← ↙ ↓ ↘ → + X/Y", "super"],
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
      ["龙击拳", "Ryu Geki Ken", "↓ ↘ → + X/Y", "special"],
      ["龙牙", "Ryu Ga", "→ ↓ ↘ + X/Y", "special"],
      ["飞燕龙神脚", "Hien Ryujin Kyaku", "空中 ↓ ↙ ← + A/B", "special"],
      ["飞燕旋风脚", "Hien Senpu Kyaku", "↓ ↙ ← + A/B", "special"],
      ["极限流连舞脚", "Gen'ei Kyaku", "近身 ← ↙ ↓ ↘ → + B", "special"],
      ["龙虎乱舞", "Ryu Ko Ranbu", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["霸王翔吼拳", "Haoh Sho Koh Ken", "→ ← ↙ ↓ ↘ → + X/Y", "super"],
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
      ["由莉超球", "Yuri Chou Dan", "↓ ↘ → + X/Y", "special"],
      ["飞燕疾风脚", "Hien Shippu Kyaku", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["虎咆", "Ko Ho", "→ ↓ ↘ + X/Y", "special"],
      ["雷神拳", "Raijin Ken", "↓ ↙ ← + X/Y", "special"],
      ["由莉超拳", "Yuri Super Punch", "空中 ↓ ↙ ← + X/Y", "special"],
      ["龙虎乱舞", "Ryu Ko Ranbu", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["霸王翔吼拳", "Haoh Sho Koh Ken", "→ ← ↙ ↓ ↘ → + X/Y", "super"],
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
      ["涡旋发射器", "Baltic Launcher", "← 蓄力 → + X/Y", "special"],
      ["月光锯", "Moon Slasher", "↓ 蓄力 ↑ + X/Y", "special"],
      ["地面突击", "Ground Saber", "← 蓄力 → + A/B", "special"],
      ["X口径炮", "X-Caliber", "空中 ↓ ↙ ← + X/Y", "special"],
      ["耳环爆弹", "Earring Bakudan", "↓ ↙ ← + A/B", "special"],
      ["V字金锯", "V-Slasher", "空中 ↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["旋转火花", "Rebel Spark", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["急降下爆弹", "Dive Bomb", "↓ 蓄力 ↑ + X/Y", "special"],
      ["超级阿根廷攻击", "Super Argentine Backbreaker", "近身 ← ↙ ↓ ↘ → + A/B", "special"],
      ["拉尔夫踢", "Ralf Kick", "← 蓄力 → + A/B", "special"],
      ["超级机炮拳", "Super Vulcan Punch", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["乘马机炮拳", "Galactica Phantom", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["超级阿根廷背摔", "Super Argentine Backbreaker", "近身 ← ↙ ↓ ↘ → + A/B", "special"],
      ["闪光落", "Flash Dive", "空中 ↓ ↙ ← + X/Y", "special"],
      ["加特林攻击", "Gatling Attack", "← 蓄力 → + X/Y", "special"],
      ["拿破仑摔", "Napoleon Attack", "近身 → ↓ ↘ + X/Y", "special"],
      ["克拉克飞膝", "Flying Knee", "↓ ↙ ← + A/B", "special"],
      ["超级阿根廷背摔·改", "Ultra Argentine Backbreaker", "近身 ↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["大回环", "Running Three", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
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
      ["精神力球", "Psycho Ball", "↓ ↙ ← + X/Y", "special"],
      ["凤凰箭", "Phoenix Arrow", "空中 ↓ ↙ ← + A/B", "special"],
      ["精神力反射波", "Psycho Reflector", "→ ↘ ↓ ↙ ← + B", "special"],
      ["精神力剑", "Psycho Sword", "→ ↓ ↘ + X/Y", "special"],
      ["心灵传送", "Psycho Teleport", "↓ ↘ → + A/B", "special"],
      ["闪光水晶波", "Shining Crystal Bit", "← → ↘ ↓ ↙ ← + X/Y", "super"],
      ["凤凰锐箭", "Phoenix Fang Arrow", "空中 ↓ ↘ → ↓ ↘ → + A/B", "super"],
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
      ["超球弹", "Cho Kyu Dan", "↓ ↙ ← + X/Y", "special"],
      ["龙颚碎", "Ryu Gaku Sai", "← ↓ ↙ + A/B", "special"],
      ["龙连牙·地龙", "Ryu Renga Chi Ryu", "← ↙ ↓ ↘ → + X", "special"],
      ["龙连牙·天龙", "Ryu Renga Ten Ryu", "← ↙ ↓ ↘ → + Y", "special"],
      ["龙爪击", "Ryu Sou Geki", "空中 ↓ ↙ ← + X/Y", "special"],
      ["神龙凄煌裂脚", "Shinryu Seiou Rekkyaku", "↓ ↘ → ↘ ↓ ↙ ← + B", "super"],
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
      ["铁球投", "Geki Hou", "↓ ↘ → + X/Y", "special"],
      ["醉步拳", "Suiho Ken", "↓ ↙ ← + X/Y", "special"],
      ["旋风腿", "Senpu Kyaku", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["铁山靠", "Tessan Kou", "近身 ← ↙ ↓ ↘ → + X/Y", "special"],
      ["气功弹", "Kikou Dan", "空中 ↓ ↙ ← + X/Y", "special"],
      ["超气功弹", "Cho Kikou Dan", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["醉仙脚", "Suiho Kyaku", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["天丛云", "Ame no Murakumo", "↓ ↘ → + X/Y", "special"],
      ["八咫镜", "Yata no Kagami", "↓ ↙ ← + X/Y", "special"],
      ["天羽羽斩", "Ameno Habakiri", "→ ↓ ↘ + X/Y", "special"],
      ["分身", "Bunshin", "↓ ↘ → + A/B", "special"],
      ["御币", "Gohei", "↓ ↙ ← + A/B", "special"],
      ["八咫乌", "Yata Garasu", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["天丛云·真打", "Shin Ame no Murakumo", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["花蝶扇", "Kacho Sen", "↓ ↘ → + X/Y", "special"],
      ["龙炎舞", "Ryu En Bu", "↓ ↙ ← + X/Y", "special"],
      ["必杀忍蜂", "Hissatsu Shinobi Bachi", "← ↙ ↓ ↘ → + A/B", "special"],
      ["飞翔龙炎阵", "Hisho Ryu En Jin", "→ ↓ ↘ + A/B", "special"],
      ["鼯鼠之舞", "Musasabi no Mai", "空中 ↓ ↙ ← + X/Y", "special"],
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
      ["落地击", "Trap Shot", "→ ↓ ↘ + A/B", "special"],
      ["龙卷踢", "Tornado Kick", "→ ↘ ↓ ↙ ← + A/B", "special"],
      ["妄想踢", "Mirage Kick", "← ↙ ↓ ↘ → + A/B", "special"],
      ["沉默闪光", "Silent Flash", "↓ ↙ ← ↓ ↙ ← + A/B", "super"],
      ["幻象之舞", "Illusion Dance", "↓ ↘ → ↘ ↓ ↙ ← + A/B", "super"],
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
      ["飞翔脚", "Hisho Kyaku", "↓ ↙ ← + A/B", "special"],
      ["半月斩", "Hangetsu Zan", "→ ↓ ↘ + A/B", "special"],
      ["飞翔脚·空中", "Air Hisho Kyaku", "空中 ↓ ↙ ← + A/B", "special"],
      ["连锁踢", "San Ren Kyaku", "↓ ↘ → + A/B", "special"],
      ["回旋踢", "Hien Zan", "← ↙ ↓ ↘ → + A/B", "special"],
      ["凤凰脚", "Houou Kyaku", "↓ ↘ → ↓ ↘ → + A/B", "super"],
      ["超连锁踢", "Cho San Ren Kyaku", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["旋风投", "Senpu Nage", "近身 →/← + Y", "throw"]
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
      ["铁球投", "Tekkyu Dai Kai Ten", "↓ ↘ → + X/Y", "special"],
      ["铁球旋风", "Tekkyu Funsha", "↓ ↙ ← + X/Y", "special"],
      ["铁球落", "Tekkyu Otoshi", "空中 ↓ + Y", "special"],
      ["铁球突进", "Hien Shippu Kyaku", "→ ↓ ↘ + X/Y", "special"],
      ["铁球扫", "Tekkyu Furi", "↓ ↙ ← + A/B", "special"],
      ["超铁球投", "Cho Tekkyu Dai Kai Ten", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["铁球地狱", "Tekkyu Jigoku", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["铁球投技", "Tekkyu Nage", "近身 →/← + Y", "throw"]
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
      ["飞翔爪", "Hisho Kyaku", "↓ ↙ ← + X/Y", "special"],
      ["回旋爪", "Tornado Claw", "→ ↓ ↘ + X/Y", "special"],
      ["滚地爪", "Rolling Claw", "↓ ↘ → + X/Y", "special"],
      ["空中回旋爪", "Air Tornado Claw", "空中 ↓ ↙ ← + X/Y", "special"],
      ["连续爪", "Renzoku Claw", "↓ ↘ → + A/B", "special"],
      ["超回旋爪", "Cho Tornado Claw", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["地狱爪乱舞", "Jigoku Claw", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["爪投", "Claw Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "yashiro",
    name: "七枷社",
    en: "Yashiro Nanakase",
    team: "新面孔队",
    style: "摇滚＋摔技",
    quote: "摇滚的力量，碾碎你！",
    color: "#3f5a8a",
    moves: [
      ["暗黑粉碎", "Sledgehammer", "↓ ↘ → + X/Y", "special"],
      ["流星落", "Missile Mayhem", "→ ↓ ↘ + X/Y", "special"],
      ["爆裂头槌", "Head Crusher", "近身 ↓ ↙ ← + X/Y", "special"],
      ["滑铲攻击", "Slide Tackle", "↓ ↙ ← + A/B", "special"],
      ["空中头槌", "Air Head Crush", "空中 ↓ + Y", "special"],
      ["终极粉碎", "Final Impact", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["暗黑地狱", "Dark Hell", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["摇滚摔", "Rock Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "shermie",
    name: "夏尔米",
    en: "Shermie",
    team: "新面孔队",
    style: "摔技＋雷电",
    quote: "讨厌……你真的好笨哦。",
    color: "#d45a8a",
    moves: [
      ["夏尔米闪光", "Shermie Flash", "↓ ↘ → + X/Y", "special"],
      ["夏尔米旋风", "Shermie Spiral", "近身 → ↓ ↘ + X/Y", "special"],
      ["夏尔米鞭", "Shermie Whip", "↓ ↙ ← + X/Y", "special"],
      ["夏尔米踢", "Shermie Kick", "↓ ↙ ← + A/B", "special"],
      ["空中闪光", "Air Shermie Flash", "空中 ↓ ↘ → + X/Y", "special"],
      ["夏尔米嘉年华", "Shermie Carnival", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["雷电旋风", "Lightning Spiral", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["夏尔米投", "Shermie Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "chris",
    name: "克里斯",
    en: "Chris",
    team: "新面孔队",
    style: "火焰＋速度",
    quote: "火会烧掉一切……包括你。",
    color: "#e85a2c",
    moves: [
      ["火焰波", "Fire Spin", "↓ ↘ → + X/Y", "special"],
      ["火焰冲拳", "Slide Touch", "↓ ↙ ← + X/Y", "special"],
      ["升龙火", "Rising Fire", "→ ↓ ↘ + X/Y", "special"],
      ["火焰踢", "Burning Kick", "↓ ↙ ← + A/B", "special"],
      ["空中火焰", "Air Fire Spin", "空中 ↓ ↘ → + X/Y", "special"],
      ["终极火焰", "Twister Drive", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["炼狱火舞", "Chain Drive", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["火焰投", "Fire Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "yamazaki",
    name: "山崎龙二",
    en: "Ryuji Yamazaki",
    team: "97特别队",
    style: "我流＋疯狗刀法",
    quote: "哈哈哈……杀了你。",
    color: "#7a3a3a",
    moves: [
      ["蛇突拳", "Hebi Tsuki", "↓ ↘ → + X/Y", "special"],
      ["疯狗咬", "Mad Dog Bite", "↓ ↙ ← + X/Y", "special"],
      ["炸弹拳", "Bomb Punch", "→ ↓ ↘ + X/Y", "special"],
      ["滑铲", "Slide", "↓ ↙ ← + A/B", "special"],
      ["反击刀", "Counter Knife", "↓ ↘ → + A/B", "special"],
      ["疯狗乱舞", "Guillotine", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["终末之牙", "Judgement Saber", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["山崎投", "Yamazaki Throw", "近身 →/← + Y", "throw"]
    ]
  },
  {
    id: "mary",
    name: "布鲁·玛丽",
    en: "Blue Mary",
    team: "97特别队",
    style: "军用格斗＋摔技",
    quote: "任务就是任务，抱歉了。",
    color: "#3a6f9a",
    moves: [
      ["玛丽旋风", "M. Spider", "↓ ↘ → + X/Y", "special"],
      ["玛丽瀑布", "M. Dynamite Swing", "近身 ↓ ↙ ← + X/Y", "special"],
      ["玛丽踢", "Vertical Arrow", "→ ↓ ↘ + A/B", "special"],
      ["玛丽滑铲", "Real Counter", "↓ ↙ ← + A/B", "special"],
      ["玛丽飞膝", "Climbing Arrow", "空中 ↓ ↙ ← + A/B", "special"],
      ["玛丽终结", "M. Typhoon", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["玛丽旋风落", "M. Splash Rose", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["玛丽投", "Back Drop", "近身 →/← + Y", "throw"]
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
      ["旋风棍", "Senpu Kon", "↓ ↘ → + X/Y", "special"],
      ["火焰棍", "Kaen Kon", "↓ ↙ ← + X/Y", "special"],
      ["升龙棍", "Sho Ryu Kon", "→ ↓ ↘ + X/Y", "special"],
      ["突刺棍", "Tsuika Kon", "↓ ↙ ← + A/B", "special"],
      ["空中旋风棍", "Air Senpu Kon", "空中 ↓ ↘ → + X/Y", "special"],
      ["超旋风棍", "Cho Senpu Kon", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["地狱火焰棍", "Jigoku Kaen Kon", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["棍投", "Kon Nage", "近身 →/← + Y", "throw"]
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
      ["外式·梦弹", "Yume Biki", "→ + X · X", "special"],
      ["外式·轰斧阴·死神", "Ge Fu In", "→ + B", "special"],
      ["百式·鬼烧", "Oni Yaki", "→ ↓ ↘ + X/Y", "special"],
      ["百八式·暗拂", "Yami Barai", "↓ ↘ → + X/Y", "special"],
      ["百二十七式·葵花", "Aoi Hana", "↓ ↙ ← + X/Y · X/Y · X/Y", "special"],
      ["屑风", "Kuzu Kaze", "近身 → ↘ ↓ ↙ ← → + X/Y", "special"],
      ["禁千二百十一式·八稚女", "Ya Otome", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["里百八式·八酒杯", "Ya Sakazuki", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["逆剥", "Saka Hagi", "近身 →/← + Y", "throw"]
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
      ["真吾式·鬼烧", "Shingo Oni Yaki", "→ ↓ ↘ + X/Y", "special"],
      ["真吾式·暗拂", "Shingo Yami Barai", "↓ ↘ → + X/Y", "special"],
      ["真吾式·荒咬", "Shingo Ara Kami", "↓ ↘ → + X", "special"],
      ["真吾式·毒咬", "Shingo Doku Gami", "↓ ↘ → + Y", "special"],
      ["真吾式·轰斧", "Shingo Ge Fu", "→ + B", "special"],
      ["真吾式·大蛇薙", "Shingo Orochi Nagi", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["真吾式·无式", "Shingo Mu Shiki", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
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
      ["百八式·暗拂", "Yami Barai", "↓ ↘ → + X/Y", "special"],
      ["百式·鬼烧", "Oni Yaki", "→ ↓ ↘ + X/Y", "special"],
      ["七十五式", "Nana Ju Go Shiki", "↓ ↘ → + A/B", "special"],
      ["外式·轰斧阳", "Ge Fu You", "→ + B", "special"],
      ["外式·奈落落", "Nara Raku", "空中 ↓ + Y", "special"],
      ["里百八式·大蛇薙", "Orochi Nagi", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["最终决战奥义·无式", "Mu Shiki", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["鈸铁", "Hatsu Gane", "近身 →/← + Y", "throw"]
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
      ["百八式·暗拂", "Yami Barai", "↓ ↘ → + X/Y", "special"],
      ["百式·鬼烧", "Oni Yaki", "→ ↓ ↘ + X/Y", "special"],
      ["百二十七式·葵花", "Aoi Hana", "↓ ↙ ← + X/Y · X/Y · X/Y", "special"],
      ["屑风", "Kuzu Kaze", "近身 → ↘ ↓ ↙ ← → + X/Y", "special"],
      ["外式·轰斧阴", "Ge Fu In", "→ + B", "special"],
      ["禁千二百十一式·八稚女", "Ya Otome", "↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["里百八式·八酒杯", "Ya Sakazuki", "↓ ↙ ← ↙ ↓ ↘ → + X/Y", "super"],
      ["逆剥", "Saka Hagi", "近身 →/← + Y", "throw"]
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
      ["涡旋发射器", "Baltic Launcher", "← 蓄力 → + X/Y", "special"],
      ["月光锯", "Moon Slasher", "↓ 蓄力 ↑ + X/Y", "special"],
      ["地面突击", "Ground Saber", "← 蓄力 → + A/B", "special"],
      ["X口径炮", "X-Caliber", "空中 ↓ ↙ ← + X/Y", "special"],
      ["耳环爆弹", "Earring Bakudan", "↓ ↙ ← + A/B", "special"],
      ["V字金锯", "V-Slasher", "空中 ↓ ↘ → ↘ ↓ ↙ ← + X/Y", "super"],
      ["旋转火花", "Rebel Spark", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["暗黑粉碎", "Sledgehammer", "↓ ↘ → + X/Y", "special"],
      ["流星落", "Missile Mayhem", "→ ↓ ↘ + X/Y", "special"],
      ["爆裂头槌", "Head Crusher", "近身 ↓ ↙ ← + X/Y", "special"],
      ["滑铲攻击", "Slide Tackle", "↓ ↙ ← + A/B", "special"],
      ["空中头槌", "Air Head Crush", "空中 ↓ + Y", "special"],
      ["终极粉碎", "Final Impact", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["暗黑地狱", "Dark Hell", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["摇滚摔", "Rock Throw", "近身 →/← + Y", "throw"]
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
      ["夏尔米闪光", "Shermie Flash", "↓ ↘ → + X/Y", "special"],
      ["夏尔米旋风", "Shermie Spiral", "近身 → ↓ ↘ + X/Y", "special"],
      ["夏尔米鞭", "Shermie Whip", "↓ ↙ ← + X/Y", "special"],
      ["夏尔米踢", "Shermie Kick", "↓ ↙ ← + A/B", "special"],
      ["空中闪光", "Air Shermie Flash", "空中 ↓ ↘ → + X/Y", "special"],
      ["夏尔米嘉年华", "Shermie Carnival", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["雷电旋风", "Lightning Spiral", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
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
      ["火焰波", "Fire Spin", "↓ ↘ → + X/Y", "special"],
      ["火焰冲拳", "Slide Touch", "↓ ↙ ← + X/Y", "special"],
      ["升龙火", "Rising Fire", "→ ↓ ↘ + X/Y", "special"],
      ["火焰踢", "Burning Kick", "↓ ↙ ← + A/B", "special"],
      ["空中火焰", "Air Fire Spin", "空中 ↓ ↘ → + X/Y", "special"],
      ["终极火焰", "Twister Drive", "↓ ↘ → ↓ ↘ → + X/Y", "super"],
      ["炼狱火舞", "Chain Drive", "↓ ↙ ← ↙ ↓ ↘ → + A/B", "super"],
      ["火焰投", "Fire Throw", "近身 →/← + Y", "throw"]
    ]
  }
];
