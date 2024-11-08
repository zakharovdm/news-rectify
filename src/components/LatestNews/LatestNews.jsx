import { getLatestNews } from '../../api/apiNews.js';
import { useFetch } from '../../helpers/hooks/useFetch.js';
import BannersList from '../BannersList/BannersList.jsx';
import styles from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
  <section className={styles.section}>
    <BannersList banners={data && data.news} isLoading={isLoading} />
  </section>
  );
};

export default LatestNews;
