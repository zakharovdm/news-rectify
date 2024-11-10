import withSkeleton from '../../helpers/hocs/withSkeleton.js';
import { INews } from '../../interfaces/index.js';
import NewsBanner from '../NewsBanner/NewsBanner.jsx';
import styles from './BannersList.module.css';

interface Props {
  banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
  return <ul className={styles.banners}>
    {banners?.map((banner) => {
      return <NewsBanner key={banner.id} item={banner} />
    })}
  </ul>
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
