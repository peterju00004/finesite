
import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <h1><a href="/" className={`${styles['header-no-decoration']} ${styles.handwriting}`}>finesite</a></h1>
      by Peter Ju
    </div>
  );
}

export default Header;



