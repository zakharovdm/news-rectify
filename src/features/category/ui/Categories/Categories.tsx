import { ForwardedRef, forwardRef } from 'react';
import styles from './Categories.module.css';
import { CategoriesType } from '@/entities/category';


interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              className={
                category === selectedCategory ? styles.active : styles.item
              }
              onClick={() => setSelectedCategory(category)}
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = 'Categories';

export default Categories;
