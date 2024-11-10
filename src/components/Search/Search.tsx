import styles from './Search.module.css';

interface Props {
  keywords: string;
  setKeywords: (value: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
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
