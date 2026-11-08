import type { SelectLayout } from "../types";

/** 拳皇 97 选人屏：每行 3 支队伍 + 个人栏，队伍间留白对齐街机界面 */
export const SELECT_LAYOUT: SelectLayout = [
  [
    { label: "日本队", ids: ["kyo", "benimaru", "daimon"] },
    { label: "饿狼队", ids: ["terry", "andy", "joe"] },
    { label: "龙虎队", ids: ["ryo", "robert", "yuri"] },
    { label: "个人", ids: ["iori"], solo: true }
  ],
  [
    { label: "怒队", ids: ["leona", "ralf", "clark"] },
    { label: "超能力队", ids: ["athena", "kensou", "chin"] },
    { label: "女性队", ids: ["chizuru", "mai", "king"] },
    { label: "", ids: ["shingo"], solo: true }
  ],
  [
    { label: "韩国队", ids: ["kim", "chang", "choi"] },
    { label: "新面孔队", ids: ["yashiro", "shermie", "chris"] },
    { label: "97特别队", ids: ["yamazaki", "mary", "billy"] },
    { label: "", ids: [null], solo: true }
  ]
];

export const HIDDEN_LAYOUT = [
  "kyo94",
  "orochi-iori",
  "orochi-leona",
  "orochi-yashiro",
  "orochi-shermie",
  "orochi-chris"
] as const;
