import { fighterCount, moveCount } from "../lib/fighters";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span>NEO GEO</span> 指令档案 / 1997
        </p>
        <h1 id="hero-title">
          <span>一招一式</span>
          <em>决胜瞬间</em>
        </h1>
        <p className="hero-description">
          以街机 A/B/C/D 记号整理的《拳皇 97》出招表。选定角色，立刻开练。
        </p>
        <a className="start-button" href="#roster">
          选择格斗家
          <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="sun"></div>
        <div className="speed-lines"></div>
        <div className="hero-97">97</div>
        <div className="fighter fighter-back"></div>
        <div className="fighter fighter-front"></div>
        <span className="hero-kanji">闘</span>
        <p>
          READY
          <br />
          GO!
        </p>
      </div>
      <div className="hero-stats">
        <div>
          <strong>{fighterCount}</strong>
          <span>格斗家</span>
        </div>
        <div>
          <strong>{moveCount}</strong>
          <span>招式收录</span>
        </div>
        <div>
          <strong>ABCD</strong>
          <span>街机键位</span>
        </div>
      </div>
    </section>
  );
}
