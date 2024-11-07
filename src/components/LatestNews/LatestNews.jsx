import BannersList from '../BannersList/BannersList.jsx';
import styles from './LatestNews.module.css';

const LatestNews = (banners, isLoading) => {
  return (
  <section className={styles.section}>
    <BannersList banners={banners} isLoading={isLoading} />
  </section>
  );
};

export default LatestNews;
