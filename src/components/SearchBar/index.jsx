import s from './styles.module.css';

const SearchBar = () => {
  return (
    <>
      <div className={s.searchBar}>
        <div className={s.title}>
          <span>URL: https://www.strawberryrush.chuu</span>
        </div>
        <div className={s.buttons}>
          <button>Refresh</button>
          <button>Exit</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
