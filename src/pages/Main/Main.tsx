import LatestNews from '../../components/LatestNews/LatestNews';
import styles from './Main.module.css';
import NewsByFilter from '../../components/NewsByFilter/NewsByFilter';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilter />
    </main>
  );
};

export default Main;
