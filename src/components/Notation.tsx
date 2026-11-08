export function Notation() {
  return (
    <section className="notation" id="notation" aria-labelledby="notation-title">
      <div className="section-heading">
        <p>CONTROL LEGEND</p>
        <h2 id="notation-title">先认准你的按键</h2>
      </div>
      <div className="controller-map">
        <div className="direction-help">
          <div className="dpad-mini" aria-hidden="true">
            <span>↑</span>
            <span>↗</span>
            <span>→</span>
            <span>↘</span> <span>↓</span>
            <span>↙</span>
            <span>←</span>
            <span>↖</span>
          </div>
          <p>
            <strong>方向连续输入</strong>
            <br />
            箭头按阅读顺序依次输入
          </p>
        </div>
        <div className="button-legend">
          <div className="legend-item">
            <kbd className="xbox x">X</kbd>
            <span>
              <b>轻拳</b>轻攻击
            </span>
          </div>
          <div className="legend-item">
            <kbd className="xbox a">A</kbd>
            <span>
              <b>轻脚</b>轻踢击
            </span>
          </div>
          <div className="legend-item">
            <kbd className="xbox y">Y</kbd>
            <span>
              <b>重拳</b>重攻击
            </span>
          </div>
          <div className="legend-item">
            <kbd className="xbox b">B</kbd>
            <span>
              <b>重脚</b>重踢击
            </span>
          </div>
        </div>
      </div>
      <p className="notation-note">
        <span>提示</span> “拳”代表 X 或 Y，“脚”代表 A 或 B；超必杀技通常需要至少 1 格能量。
      </p>
    </section>
  );
}
