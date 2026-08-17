import { ReactNode } from 'react';
import styles from './side-by-side.module.scss';

interface SideBySideProps {
  left: ReactNode;
  right: ReactNode;
}

export function SideBySide({ left, right }: SideBySideProps) {
  return (
    <div className={styles['side-by-side']}>
      <div className={styles['left']}>{left}</div>
      <div className={styles['right']}>{right}</div>
    </div>
  );
}

export default SideBySide;
