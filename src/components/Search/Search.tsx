import { useTheme } from '../../context/ThemeContext';
import styles from './Search.module.css';

interface Props {
  keywords: string;
  setKeywords: (value: string) => void;
}

const Search = ({ keywords, setKeywords}: Props) => {
  const {isDark} = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
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
