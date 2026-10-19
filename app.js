const state = {
  fighterId: "kyo",
  team: "all",
  category: "all",
  query: "",
  sound: true,
  expanded: false,
  favorites: new Set(JSON.parse(localStorage.getItem("kof97-favorites") || "[]"))
};

/** 拳皇 97 选人屏：每行 3 支队伍 + 个人栏，队伍间留白对齐街机界面 */
const SELECT_LAYOUT = [
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

const HIDDEN_LAYOUT = [
  "kyo94",
  "orochi-iori",
  "orochi-leona",
  "orochi-yashiro",
  "orochi-shermie",
  "orochi-chris"
];

const elements = {
  strip: document.querySelector("#fighterStrip"),
  stripWrap: document.querySelector("#stripWrap"),
  selectBoard: document.querySelector("#selectBoard"),
  selectGrid: document.querySelector("#selectGrid"),
  hiddenGrid: document.querySelector("#hiddenGrid"),
  expandToggle: document.querySelector("#expandToggle"),
  rosterHint: document.querySelector("#rosterHint"),
  moveList: document.querySelector("#moveList"),
  search: document.querySelector("#searchInput"),
  teamFilter: document.querySelector("#teamFilter"),
  moveTabs: document.querySelector("#moveTabs"),
  moveTotal: document.querySelector("#moveTotal"),
  profileTeam: document.querySelector("#profileTeam"),
  profileNumber: document.querySelector("#profileNumber"),
  profilePortrait: document.querySelector("#profilePortrait"),
  profileName: document.querySelector("#profileName"),
  profileEn: document.querySelector("#profileEn"),
  profileQuote: document.querySelector("#profileQuote"),
  profileStyle: document.querySelector("#profileStyle"),
  favorite: document.querySelector("#favoriteButton"),
  sound: document.querySelector("#soundToggle")
};

const typeNames = {
  special: "必杀技",
  super: "超必杀",
  throw: "投技"
};

const fighterMap = Object.fromEntries(fighters.map((fighter) => [fighter.id, fighter]));

function playTick(frequency = 320) {
  if (!state.sound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.025, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.045);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.05);
  } catch {
    // Browsers may block audio before the first direct interaction.
  }
}

function fighterMatches(fighter) {
  const query = state.query.toLowerCase();
  const teamMatches = state.team === "all" || fighter.team === state.team;
  const text = [fighter.name, fighter.en, fighter.team, ...fighter.moves.flat()].join(" ").toLowerCase();
  return teamMatches && (!query || text.includes(query));
}

function getVisibleFighters() {
  return fighters.filter(fighterMatches);
}

function fighterCardMarkup(fighter, { compact = false } = {}) {
  const index = fighters.findIndex((item) => item.id === fighter.id) + 1;
  const active = fighter.id === state.fighterId ? "active" : "";
  const dimmed = fighterMatches(fighter) ? "" : "dimmed";
  const compactClass = compact ? "compact" : "";

  return `
    <button
      class="fighter-card ${active} ${dimmed} ${compactClass}"
      type="button"
      role="option"
      aria-selected="${fighter.id === state.fighterId}"
      data-id="${fighter.id}"
      data-initial="${fighter.en.charAt(0)}"
      style="--fighter-color:${fighter.color}"
      title="${fighter.name} / ${fighter.en}"
    >
      <small>${String(index).padStart(2, "0")}</small>
      <img src="./assets/portraits/${fighter.id}.png" alt="" loading="lazy" />
      <span class="fighter-card-name">${fighter.name}</span>
      <span class="fighter-card-en">${fighter.en}</span>
    </button>`;
}

function renderFighterStrip() {
  const visible = getVisibleFighters();
  elements.strip.innerHTML = visible.length
    ? visible.map((fighter) => fighterCardMarkup(fighter)).join("")
    : '<p class="empty-state">没有找到匹配的格斗家</p>';
}

function renderSelectBoard() {
  elements.selectGrid.innerHTML = SELECT_LAYOUT.map((row) => `
    <div class="select-row">
      ${row.map((group) => `
        <div class="select-team ${group.solo ? "solo" : ""}">
          ${group.label ? `<span class="select-team-label">${group.label}</span>` : `<span class="select-team-label spacer" aria-hidden="true"></span>`}
          <div class="select-team-slots">
            ${group.ids.map((id) => {
              if (!id) {
                return `<div class="select-slot empty" aria-hidden="true"></div>`;
              }
              return `<div class="select-slot">${fighterCardMarkup(fighterMap[id], { compact: true })}</div>`;
            }).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");

  elements.hiddenGrid.innerHTML = HIDDEN_LAYOUT.map((id) => {
    const fighter = fighterMap[id];
    return `<div class="select-slot">${fighterCardMarkup(fighter, { compact: true })}</div>`;
  }).join("");
}

function syncExpandUI() {
  document.body.classList.toggle("roster-expanded", state.expanded);
  elements.stripWrap.hidden = state.expanded;
  elements.selectBoard.hidden = !state.expanded;
  elements.expandToggle.setAttribute("aria-expanded", String(state.expanded));
  elements.expandToggle.querySelector(".expand-toggle-label").textContent = state.expanded
    ? "收起选人屏"
    : "展开选人屏";
  elements.expandToggle.querySelector(".expand-toggle-icon").textContent = state.expanded ? "▤" : "▦";
  elements.rosterHint.textContent = state.expanded
    ? "站位对齐拳皇 97 选人屏；筛选会保留位置并淡化未匹配角色"
    : "横向浏览角色，或展开为游戏内选人站位";
}

function commandMarkup(command) {
  const tokens = command
    .replaceAll("·", " · ")
    .replaceAll("+", " + ")
    .trim()
    .split(/\s+/);

  return tokens.map((token) => {
    if (["X", "Y", "A", "B"].includes(token)) {
      return `<span class="command-token button ${token.toLowerCase()}">${token}</span>`;
    }
    if (token.includes("/")) {
      const parts = token.split("/");
      if (parts.every((part) => ["X", "Y", "A", "B"].includes(part))) {
        return parts.map((part, index) =>
          `${index ? '<span class="command-token plus">/</span>' : ""}<span class="command-token button ${part.toLowerCase()}">${part}</span>`
        ).join("");
      }
    }
    const plusClass = ["+", "·"].includes(token) ? " plus" : "";
    return `<span class="command-token${plusClass}">${token}</span>`;
  }).join("");
}

function renderProfile() {
  const fighter = fighters.find((item) => item.id === state.fighterId) || fighters[0];
  const index = fighters.findIndex((item) => item.id === fighter.id) + 1;
  const query = state.query.toLowerCase();
  const moves = fighter.moves.filter((move) => {
    const categoryMatches = state.category === "all" || move[3] === state.category;
    const queryMatches = !query || [fighter.name, fighter.en, ...move].join(" ").toLowerCase().includes(query);
    return categoryMatches && queryMatches;
  });

  elements.profileTeam.textContent = `${fighter.team} / TEAM FILE`;
  elements.profileNumber.textContent = String(index).padStart(2, "0");
  elements.profilePortrait.src = `./assets/portraits/${fighter.id}.png`;
  elements.profilePortrait.alt = `${fighter.name}（${fighter.en}）头像`;
  elements.profileName.textContent = fighter.name;
  elements.profileEn.textContent = fighter.en;
  elements.profileQuote.textContent = `“${fighter.quote}”`;
  elements.profileStyle.textContent = fighter.style;
  elements.favorite.classList.toggle("active", state.favorites.has(fighter.id));
  elements.favorite.innerHTML = state.favorites.has(fighter.id)
    ? '<span aria-hidden="true">★</span> 已收藏'
    : '<span aria-hidden="true">☆</span> 收藏角色';
  document.querySelector("#mobileFavorite").innerHTML = state.favorites.has(fighter.id)
    ? "<span>★</span>已收藏"
    : "<span>☆</span>收藏";

  elements.moveTotal.textContent = `${String(moves.length).padStart(2, "0")} MOVES`;
  elements.moveList.innerHTML = moves.length
    ? moves.map((move) => `
        <div class="move-row">
          <div class="move-name">
            <strong>${move[0]}</strong>
            <small>${move[1]}</small>
          </div>
          <div class="command" aria-label="${move[2]}">${commandMarkup(move[2])}</div>
          <span class="move-type ${move[3]}">${typeNames[move[3]]}</span>
        </div>
      `).join("")
    : '<div class="empty-state">当前分类下没有匹配招式</div>';
}

function ensureSelectedVisible() {
  const visible = getVisibleFighters();
  if (visible.length && !visible.some((fighter) => fighter.id === state.fighterId)) {
    state.fighterId = visible[0].id;
  }
}

function render() {
  ensureSelectedVisible();
  syncExpandUI();
  if (state.expanded) {
    renderSelectBoard();
  } else {
    renderFighterStrip();
  }
  renderProfile();
}

function selectFighter(id) {
  if (!id || !fighterMap[id]) return;
  state.fighterId = id;
  playTick(360);
  render();
}

elements.strip.addEventListener("click", (event) => {
  const card = event.target.closest(".fighter-card");
  if (!card) return;
  selectFighter(card.dataset.id);
});

elements.selectBoard.addEventListener("click", (event) => {
  const card = event.target.closest(".fighter-card");
  if (!card || card.classList.contains("dimmed")) return;
  selectFighter(card.dataset.id);
});

elements.expandToggle.addEventListener("click", () => {
  state.expanded = !state.expanded;
  playTick(state.expanded ? 440 : 300);
  render();
});

elements.teamFilter.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.team = button.dataset.team;
  [...elements.teamFilter.children].forEach((item) => item.classList.toggle("active", item === button));
  playTick(280);
  render();
});

elements.moveTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.category = button.dataset.category;
  [...elements.moveTabs.children].forEach((item) => item.classList.toggle("active", item === button));
  playTick(420);
  renderProfile();
});

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  render();
});

elements.favorite.addEventListener("click", toggleFavorite);
document.querySelector("#mobileFavorite").addEventListener("click", toggleFavorite);

function toggleFavorite() {
  if (state.favorites.has(state.fighterId)) {
    state.favorites.delete(state.fighterId);
  } else {
    state.favorites.add(state.fighterId);
  }
  localStorage.setItem("kof97-favorites", JSON.stringify([...state.favorites]));
  playTick(520);
  renderProfile();
}

elements.sound.addEventListener("click", () => {
  state.sound = !state.sound;
  elements.sound.classList.toggle("muted", !state.sound);
  elements.sound.setAttribute("aria-label", state.sound ? "关闭界面音效" : "开启界面音效");
  playTick(600);
});

document.querySelector("#mobileSearch").addEventListener("click", () => {
  document.querySelector("#roster").scrollIntoView();
  setTimeout(() => elements.search.focus(), 350);
});

document.querySelector("#prevFighter").addEventListener("click", () => {
  elements.strip.scrollBy({ left: -360, behavior: "smooth" });
});

document.querySelector("#nextFighter").addEventListener("click", () => {
  elements.strip.scrollBy({ left: 360, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== elements.search) {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key === "Escape" && document.activeElement === elements.search) {
    elements.search.value = "";
    state.query = "";
    elements.search.blur();
    render();
  }
});

document.querySelector("#fighterCount").textContent = fighters.length;
document.querySelector("#moveCount").textContent = fighters.reduce((sum, fighter) => sum + fighter.moves.length, 0);
render();
