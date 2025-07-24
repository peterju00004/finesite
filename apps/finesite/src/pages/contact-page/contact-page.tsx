import styles from './contact-page.module.scss';

export function ContactPage() {
  return (
    <div className={styles['contact-page']}>
      <p className={styles['contact-description']}>Reach out to me for the latest updates on projects, any questions or suggestions, or even for a two-hour chat about the music I love.</p>
      <nav className={styles['contact-nav']}>
        <a href="mailto:zij15@pitt.edu" className={styles['contact-link']}>Email me: zij15@pitt.edu</a>
        <a href="https://www.linkedin.com/in/peter-ju-9a53522b2/" className={styles['contact-link']}>My Linkedin Page</a>
        <a href="https://github.com/peterju00004" className={styles['contact-link']}>My GitHub Page</a>
      </nav>
    </div>
  );
}

export default ContactPage;

