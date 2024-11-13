import { useGetLatestNewsQuery } from '../../store/services/newsApi.js';
import BannersList from '../BannersList/BannersList.js';
import styles from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
