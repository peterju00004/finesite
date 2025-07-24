
import ProjectDisplay from '../../../components/project-display/project-display';
import styles from './other-projects.module.scss';

export function OtherProjects() {
  return (
    <ProjectDisplay title='Miscellaneous/Other'>
      <div slot='subsection'>
        <span slot='title'>handwriting.ttf</span>
        <p>
          <span className={styles['handwriting']}>handwriting.ttf</span> is a font made by myself based on my handwriting. It is used in building up this website.
          <br /><br />
          The font is built using <a href="https://www.calligraphr.com/en/">Calligraphr</a>. Here is a demonstration of how the font looks like:
          <br /><br />
          <span className={styles['handwriting']}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br />
          <span className={styles['handwriting']}>abcdefghijklmnopqrstuvwxyz</span><br /><br />
          <span className={styles['handwriting']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem lorem. Sed a ex in nunc rhoncus elementum. Nunc nunc turpis, porttitor at augue at, ultrices vehicula diam. Donec condimentum luctus dolor, eu ornare ipsum gravida sed. Nullam facilisis diam vel luctus maximus. Morbi eget euismod dui, quis lacinia nibh. Fusce efficitur quam nisi, eu aliquam nibh vulputate in. Proin at leo ut purus luctus iaculis. Nam commodo urna et lacus venenatis, quis suscipit felis cursus. Phasellus non turpis in eros consectetur facilisis.
          </span>
        </p>

      </div>
    </ProjectDisplay>
  );
}

export default OtherProjects;



