import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './styles.module.css';
import { IPaginationProps } from '../../model/types';

const PaginationButtons = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button disabled={currentPage <= 1} className={styles.arrow} onClick={handlePrevPage}>
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= totalPages} className={styles.arrow} onClick={handleNextPage}>
        {'>'}
      </button>
    </div>
  );
};

export default PaginationButtons;
