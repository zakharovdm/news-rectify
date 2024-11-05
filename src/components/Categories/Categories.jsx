import styles from './Categories.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
         <button
            className={
              !selectedCategory ? styles.active : styles.item
            }
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
};

export default Categories;
