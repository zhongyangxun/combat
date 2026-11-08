type TopbarProps = {
  sound: boolean;
  onToggleSound: () => void;
};

export function Topbar({ sound, onToggleSound }: TopbarProps) {
  return (
    <header className="topbar">
      <a className="brand" href="#" aria-label="返回顶部">
        <span className="brand-mark">97</span>
        <span>
          <strong>KING OF FIGHTERS</strong>
          <small>COMMAND ARCHIVE</small>
        </span>
      </a>
      <div className="topbar-actions">
        <button
          className={`icon-button${sound ? "" : " muted"}`}
          type="button"
          aria-label={sound ? "关闭界面音效" : "开启界面音效"}
          onClick={onToggleSound}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5Zm4.5 4.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10" />
          </svg>
        </button>
        <a className="about-link" href="#notation">
          键位说明
        </a>
      </div>
    </header>
  );
}
