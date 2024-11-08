import styles from './Skeleton.module.css';

const Skeleton = ({count=1, type='banner', direction='column'}) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => {
           return  <li key={index} className={type==="banner" ? styles.banner : styles.item}></li>
          })}
        </ul>
      ): <li className={type==="banner" ? styles.banner : styles.item}></li>}
    </>
  );
};

export default Skeleton;
