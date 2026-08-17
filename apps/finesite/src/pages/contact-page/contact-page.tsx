import styles from './contact-page.module.scss';

export function ContactPage() {
  return (
    <div className={styles['contact-page']}>
      <h3 style={{marginTop: '0.5rem', marginBottom: '1rem'}}>Contact</h3>
      <p className={styles['contact-description']}>I'm always interested in conversations about interdisciplinary work, human-centered design, or creative technology.</p>
      <nav className={styles['contact-nav']}>
        <a href="mailto:zij15@pitt.edu" className={styles['contact-link']}><span className={styles.handwriting}>Email: </span>zij15@pitt.edu</a>
        <a href="https://www.linkedin.com/in/peter-ju/" className={styles['contact-link']}><span className={styles.handwriting}>Linkedin: </span>linkedin.com/in/peter-ju/</a>
        <a href="https://github.com/peterju00004" className={styles['contact-link']}><span className={styles.handwriting}>GitHub: </span>github.com/peterju00004/</a>
      </nav>
    </div>
  );
}

export default ContactPage;

