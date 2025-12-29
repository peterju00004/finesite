import styles from './about-page.module.scss';

export function AboutPage() {
  return (
    <div className={styles['about-page']}>
      <h3 style={{marginTop: '0.5rem', marginBottom: '1rem'}}>About</h3>
      <p className={styles['about-description']}>
        <span className={styles['handwriting']}>finesite</span> takes its name from the Swiss psychiatrist Carl Jung's psychological functions of consciousness: Introverted Feeling (Fi), Extroverted Intuition (Ne), Introverted Sensation (Si), and Extroverted Thinking (Te). It's a framework for understanding how I process and interact with the world, and felt like a truthful way to title a space for presenting my work. The site uses a custom font built from my own handwriting through Calligraphr, adding another layer of honest self-presentation.
      </p>
    </div>
  );
}

export default AboutPage;



