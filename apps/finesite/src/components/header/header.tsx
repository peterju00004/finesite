
import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <a href="/" className={`${styles['header-no-decoration']} ${styles.handwriting}`}>finesite</a>
      by Peter Ju.
    </div>
  );
}

export default Header;



