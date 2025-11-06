
import { Link } from 'react-router-dom';
import styles from './digital-narrative.module.scss';
import ProjectDisplay from '../../../components/project-display/project-display';

export function DigitalNarrative() {
  return (
    <ProjectDisplay title="Digital Narrative Projects">
      <div slot="subsection">
        <span slot='title'>DISCO Experience</span>
        <p>
          The Design an Inclusive Spaceship Collaborative Operation (DISCO) is an Open Educational Resource toolkit that uses a playful spaceship–building metaphor to teach inclusive design principles. As User Testing Coordinator and Research Assistant, I managed outreach to disability organizations, recruited and scheduled participants, and facilitated both remote and in-person co-design sessions. Over twelve weeks, we synthesized the user feedback into actionable design recommendations, and hosted a final playtesting workshop. Through this work, DISCO provides educators and designers with a fun, hands-on way to promote accessibility awareness and real-world inclusive design strategies.
          <br /><br />
          <Link to="/projects/digital-narrative/disco/">Read the full digital narrative here</Link>
        </p>
      </div>
      <div slot="subsection">
        <span slot='title'>Armada Experience</span>
        <p>
          During the summer of 2025, I had the opportunity to work as a React JavaScript UI Developer intern at Armada Supply Chain Solutions where I contributed to the development of reimagining their enterprise-level web applictaion, 24tracc.
          <br /><br />
          <Link to="/projects/digital-narrative/armada">Read the full digital narrative here</Link>
        </p>
      </div>
    </ProjectDisplay>
  );
}

export default DigitalNarrative;



