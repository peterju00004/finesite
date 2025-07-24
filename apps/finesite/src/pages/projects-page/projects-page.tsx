import { Link } from 'react-router-dom';
import styles from './projects-page.module.scss';

export function ProjectsPage() {
  return (
    <div className={styles['projects-page']}>
      <h3 className={styles['projects-title']}>Click on the categories to jump to their respective sections.</h3>
      <nav className={styles['projects-nav']}>
        <Link to="/projects/coding" className={styles['projects-link']}>Coding</Link>
        <Link to="/projects/digital-narrative" className={styles['projects-link']}>Digital Narrative</Link>
        <Link to="/projects/audio-design" className={styles['projects-link']}>Audio Design</Link>
        <Link to="/projects/other" className={styles['projects-link']}>Other</Link>
      </nav>
    </div>
  );
}

export default ProjectsPage;