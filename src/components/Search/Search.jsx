import styles from './Search.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={(e) => setKeywords(e.target.value)}
        value={keywords}
        className={styles.input}
        placeholder='Поиск...'
      />
    </div>
  );
};

export default Search;
