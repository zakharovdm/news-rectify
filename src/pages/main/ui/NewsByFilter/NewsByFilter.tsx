import { useAppDispatch, useAppSelector } from "@/app/appStore";
import NewsFilters from "../NewsFilters/NewsFilters";
import styles from "./NewsByFilter.module.css";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsList } from "@/widgets/news/ui";
import { Pagination } from "@/features/pagination";

const NewsByFilter = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(
      setFilters({ key: 'page_number', value: pageNumber })
    );
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
};

export default NewsByFilter;
