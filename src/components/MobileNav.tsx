type MobileNavProps = {
  favorited: boolean;
  onSearch: () => void;
  onFavorite: () => void;
};

export function MobileNav({ favorited, onSearch, onFavorite }: MobileNavProps) {
  return (
    <nav className="mobile-nav" aria-label="移动端导航">
      <a href="#roster">
        <span>◫</span>角色
      </a>
      <button type="button" onClick={onSearch}>
        <span>⌕</span>搜索
      </button>
      <button type="button" onClick={onFavorite}>
        <span>{favorited ? "★" : "☆"}</span>
        {favorited ? "已收藏" : "收藏"}
      </button>
      <a href="#notation">
        <span>?</span>键位
      </a>
    </nav>
  );
}
