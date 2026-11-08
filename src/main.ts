import "./styles.css";
import { fighters } from "./data/fighters";
import { HIDDEN_LAYOUT, SELECT_LAYOUT } from "./data/layout";
import type { Fighter, MoveCategory } from "./types";

type AppState = {
  fighterId: string;
  team: string;
  category: MoveCategory | "all";
  query: string;
  sound: boolean;
  expanded: boolean;
  favorites: Set<string>;
};

function mustQuery<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Missing required element: ${selector}`);
  }
  return element;
}

function loadFavorites(): Set<string> {
  try {
    const raw = localStorage.getItem("kof97-favorites");
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((item): item is string => typeof item === "string"));
  } catch {
    return new Set();
  }
}

const state: AppState = {
  fighterId: "kyo",
  team: "all",
  category: "all",
  query: "",
  sound: true,
  expanded: false,
  favorites: loadFavorites()
};

const elements = {
  strip: mustQuery<HTMLElement>("#fighterStrip"),
  stripWrap: mustQuery<HTMLElement>("#stripWrap"),
  selectBoard: mustQuery<HTMLElement>("#selectBoard"),
  selectGrid: mustQuery<HTMLElement>("#selectGrid"),
  hiddenGrid: mustQuery<HTMLElement>("#hiddenGrid"),
  expandToggle: mustQuery<HTMLButtonElement>("#expandToggle"),
  rosterHint: mustQuery<HTMLElement>("#rosterHint"),
  moveList: mustQuery<HTMLElement>("#moveList"),
  search: mustQuery<HTMLInputElement>("#searchInput"),
  teamFilter: mustQuery<HTMLElement>("#teamFilter"),
  moveTabs: mustQuery<HTMLElement>("#moveTabs"),
  moveTotal: mustQuery<HTMLElement>("#moveTotal"),
  profileTeam: mustQuery<HTMLElement>("#profileTeam"),
  profileNumber: mustQuery<HTMLElement>("#profileNumber"),
  profilePortrait: mustQuery<HTMLImageElement>("#profilePortrait"),
  profileName: mustQuery<HTMLElement>("#profileName"),
  profileEn: mustQuery<HTMLElement>("#profileEn"),
  profileQuote: mustQuery<HTMLElement>("#profileQuote"),
  profileStyle: mustQuery<HTMLElement>("#profileStyle"),
  favorite: mustQuery<HTMLButtonElement>("#favoriteButton"),
  sound: mustQuery<HTMLButtonElement>("#soundToggle"),
  mobileFavorite: mustQuery<HTMLButtonElement>("#mobileFavorite"),
  mobileSearch: mustQuery<HTMLButtonElement>("#mobileSearch"),
  prevFighter: mustQuery<HTMLButtonElement>("#prevFighter"),
  nextFighter: mustQuery<HTMLButtonElement>("#nextFighter"),
  fighterCount: mustQuery<HTMLElement>("#fighterCount"),
  moveCount: mustQuery<HTMLElement>("#moveCount"),
  roster: mustQuery<HTMLElement>("#roster")
};

const typeNames: Record<MoveCategory, string> = {
  special: "必杀技",
  super: "超必杀",
  throw: "投技"
};

const fighterMap: Record<string, Fighter> = Object.fromEntries(
  fighters.map((fighter) => [fighter.id, fighter])
);

function playTick(frequency = 320): void {
  if (!state.sound) return;
  try {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return;
    const context = new AudioContextCtor();
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

function fighterMatches(fighter: Fighter): boolean {
  const query = state.query.toLowerCase();
  const teamMatches = state.team === "all" || fighter.team === state.team;
  const text = [fighter.name, fighter.en, fighter.team, ...fighter.moves.flat()]
    .join(" ")
    .toLowerCase();
  return teamMatches && (!query || text.includes(query));
}

function getVisibleFighters(): Fighter[] {
  return fighters.filter(fighterMatches);
}

function fighterCardMarkup(fighter: Fighter, { compact = false } = {}): string {
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

function renderFighterStrip(): void {
  const visible = getVisibleFighters();
  elements.strip.innerHTML = visible.length
    ? visible.map((fighter) => fighterCardMarkup(fighter)).join("")
    : '<p class="empty-state">没有找到匹配的格斗家</p>';
}

function renderSelectBoard(): void {
  elements.selectGrid.innerHTML = SELECT_LAYOUT.map(
    (row) => `
    <div class="select-row">
      ${row
        .map(
          (group) => `
        <div class="select-team ${group.solo ? "solo" : ""}">
          ${
            group.label
              ? `<span class="select-team-label">${group.label}</span>`
              : `<span class="select-team-label spacer" aria-hidden="true"></span>`
          }
          <div class="select-team-slots">
            ${group.ids
              .map((id) => {
                if (!id) {
                  return `<div class="select-slot empty" aria-hidden="true"></div>`;
                }
                const fighter = fighterMap[id];
                if (!fighter) {
                  return `<div class="select-slot empty" aria-hidden="true"></div>`;
                }
                return `<div class="select-slot">${fighterCardMarkup(fighter, { compact: true })}</div>`;
              })
              .join("")}
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `
  ).join("");

  elements.hiddenGrid.innerHTML = HIDDEN_LAYOUT.map((id) => {
    const fighter = fighterMap[id];
    if (!fighter) {
      return `<div class="select-slot empty" aria-hidden="true"></div>`;
    }
    return `<div class="select-slot">${fighterCardMarkup(fighter, { compact: true })}</div>`;
  }).join("");
}

function syncExpandUI(): void {
  document.body.classList.toggle("roster-expanded", state.expanded);
  elements.stripWrap.hidden = state.expanded;
  elements.selectBoard.hidden = !state.expanded;
  elements.expandToggle.setAttribute("aria-expanded", String(state.expanded));

  const label = elements.expandToggle.querySelector(".expand-toggle-label");
  const icon = elements.expandToggle.querySelector(".expand-toggle-icon");
  if (label) {
    label.textContent = state.expanded ? "收起选人屏" : "展开选人屏";
  }
  if (icon) {
    icon.textContent = state.expanded ? "▤" : "▦";
  }

  elements.rosterHint.textContent = state.expanded
    ? "站位对齐拳皇 97 选人屏；筛选会保留位置并淡化未匹配角色"
    : "横向浏览角色，或展开为游戏内选人站位";
}

function commandMarkup(command: string): string {
  const tokens = command.replaceAll("·", " · ").replaceAll("+", " + ").trim().split(/\s+/);

  return tokens
    .map((token) => {
      if (["X", "Y", "A", "B"].includes(token)) {
        return `<span class="command-token button ${token.toLowerCase()}">${token}</span>`;
      }
      if (token.includes("/")) {
        const parts = token.split("/");
        if (parts.every((part) => ["X", "Y", "A", "B"].includes(part))) {
          return parts
            .map(
              (part, index) =>
                `${index ? '<span class="command-token plus">/</span>' : ""}<span class="command-token button ${part.toLowerCase()}">${part}</span>`
            )
            .join("");
        }
      }
      const plusClass = ["+", "·"].includes(token) ? " plus" : "";
      return `<span class="command-token${plusClass}">${token}</span>`;
    })
    .join("");
}

function renderProfile(): void {
  const fighter = fighters.find((item) => item.id === state.fighterId) ?? fighters[0];
  if (!fighter) return;

  const index = fighters.findIndex((item) => item.id === fighter.id) + 1;
  const query = state.query.toLowerCase();
  const moves = fighter.moves.filter((move) => {
    const categoryMatches = state.category === "all" || move[3] === state.category;
    const queryMatches =
      !query || [fighter.name, fighter.en, ...move].join(" ").toLowerCase().includes(query);
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
  elements.mobileFavorite.innerHTML = state.favorites.has(fighter.id)
    ? "<span>★</span>已收藏"
    : "<span>☆</span>收藏";

  elements.moveTotal.textContent = `${String(moves.length).padStart(2, "0")} MOVES`;
  elements.moveList.innerHTML = moves.length
    ? moves
        .map(
          (move) => `
        <div class="move-row">
          <div class="move-name">
            <strong>${move[0]}</strong>
            <small>${move[1]}</small>
          </div>
          <div class="command" aria-label="${move[2]}">${commandMarkup(move[2])}</div>
          <span class="move-type ${move[3]}">${typeNames[move[3]]}</span>
        </div>
      `
        )
        .join("")
    : '<div class="empty-state">当前分类下没有匹配招式</div>';
}

function ensureSelectedVisible(): void {
  const visible = getVisibleFighters();
  if (visible.length && !visible.some((fighter) => fighter.id === state.fighterId)) {
    const first = visible[0];
    if (first) state.fighterId = first.id;
  }
}

function render(): void {
  ensureSelectedVisible();
  syncExpandUI();
  if (state.expanded) {
    renderSelectBoard();
  } else {
    renderFighterStrip();
  }
  renderProfile();
}

function selectFighter(id: string | undefined): void {
  if (!id || !fighterMap[id]) return;
  state.fighterId = id;
  playTick(360);
  render();
}

elements.strip.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const card = target.closest<HTMLElement>(".fighter-card");
  if (!card) return;
  selectFighter(card.dataset.id);
});

elements.selectBoard.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const card = target.closest<HTMLElement>(".fighter-card");
  if (!card || card.classList.contains("dimmed")) return;
  selectFighter(card.dataset.id);
});

elements.expandToggle.addEventListener("click", () => {
  state.expanded = !state.expanded;
  playTick(state.expanded ? 440 : 300);
  render();
});

elements.teamFilter.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest<HTMLButtonElement>("button");
  if (!button) return;
  state.team = button.dataset.team ?? "all";
  [...elements.teamFilter.children].forEach((item) =>
    item.classList.toggle("active", item === button)
  );
  playTick(280);
  render();
});

elements.moveTabs.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest<HTMLButtonElement>("button");
  if (!button) return;
  const category = button.dataset.category;
  if (
    category === "all" ||
    category === "special" ||
    category === "super" ||
    category === "throw"
  ) {
    state.category = category;
  }
  [...elements.moveTabs.children].forEach((item) =>
    item.classList.toggle("active", item === button)
  );
  playTick(420);
  renderProfile();
});

elements.search.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  state.query = target.value.trim();
  render();
});

function toggleFavorite(): void {
  if (state.favorites.has(state.fighterId)) {
    state.favorites.delete(state.fighterId);
  } else {
    state.favorites.add(state.fighterId);
  }
  localStorage.setItem("kof97-favorites", JSON.stringify([...state.favorites]));
  playTick(520);
  renderProfile();
}

elements.favorite.addEventListener("click", toggleFavorite);
elements.mobileFavorite.addEventListener("click", toggleFavorite);

elements.sound.addEventListener("click", () => {
  state.sound = !state.sound;
  elements.sound.classList.toggle("muted", !state.sound);
  elements.sound.setAttribute("aria-label", state.sound ? "关闭界面音效" : "开启界面音效");
  playTick(600);
});

elements.mobileSearch.addEventListener("click", () => {
  elements.roster.scrollIntoView();
  setTimeout(() => elements.search.focus(), 350);
});

elements.prevFighter.addEventListener("click", () => {
  elements.strip.scrollBy({ left: -360, behavior: "smooth" });
});

elements.nextFighter.addEventListener("click", () => {
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

elements.fighterCount.textContent = String(fighters.length);
elements.moveCount.textContent = String(
  fighters.reduce((sum, fighter) => sum + fighter.moves.length, 0)
);
render();
