import Button from '../../components/button/button';
import styles from './gigs-page.module.scss';

export function GigsPage() {
  return (
    <div className={styles['gigs-page']}>
      <h3 style={{marginTop: '0.5rem', marginBottom: '1rem'}}>Gigs</h3>
      <p className={styles['gigs-description']}>
        I'm a keyboardist performing with Sennight and AED. These performances inform how I think about real-time interaction, collaboration, and the gap between practice and performance.
      </p>
      <Button label='View performance videos (Google Drive)' onClick={() => window.open('https://drive.google.com/drive/folders/1ml0cGWu5RnPOLg95jE9q5eIXYR6guUpZ', '_blank')}></Button>
    </div>
  );
}

export default GigsPage;
