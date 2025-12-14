import { Link } from 'react-router-dom';
import styles from './digital-narrative.module.scss';
import ProjectDisplay from '../../../components/project-display/project-display';

export function DigitalNarrative() {
  return (
    <ProjectDisplay title="Digital Narrative Projects">
      <div slot='subsection'>
        <span slot='title'>Planets that Revolve around the Ruby Moon</span>
        <p>
          <i>Planets that Revolve around the Ruby Moon</i> is a multimedia narrative experience combining collaborative AI-assisted fiction writing, original electronic music composition, and web-based presentation. The project explores the creative possibilities and tensions that emerge when human authorship intersects with machine intelligence in long-form storytelling.
          <br /><br />
          <Link to="/projects/digital-narrative/planets/artist-statement">Read the artist statement here</Link>
          <br />
          <Link to="/projects/digital-narrative/planets">Read the full digital narrative here</Link>
        </p>
      </div>
      <div slot="subsection">
        <span slot='title'>DISCO Experience</span>
        <p>
          The Design an Inclusive Spaceship Collaborative Operation (DISCO) is an Open Educational Resource toolkit that uses a playful spaceship–building metaphor to teach inclusive design principles. As User Testing Coordinator and Research Assistant, I managed outreach to disability organizations, recruited and scheduled participants, and facilitated both remote and in-person co-design sessions. Over twelve weeks, we synthesized the user feedback into actionable design recommendations, and hosted a final playtesting workshop. Through this work, DISCO provides educators and designers with a fun, hands-on way to promote accessibility awareness and real-world inclusive design strategies.
          <br /><br />
          <Link to="/projects/digital-narrative/disco/">Read the full digital narrative here</Link>
        </p>
      </div>
      <div slot='subsection'>
        <span slot='title'>Watercooler</span>
        <p>
          Watercooler is a project concept we developed during the 2025 Design Jam at Pitt (<a href='https://dmap.pitt.edu/node/325'>Description of the event</a>).
          <br /><br />
          With it being a watercooling prototype, it is designed to be a "third space" for students, faculty, and staff where people can temporarily set aside their social roles and enjoy moments of rest, casual conversation, or quiet relaxation.
          <br /><br />
          Rooted in our user survey and the Jam personas, we can see the problems here: ack of dedicated relaxation and socialization spaces on campus, where students, faculty and staff often have to use academic spaces or outdoor environments to take a break.
          <br /><br />
          Our design features a Sunlight Zone (where folks can build social connections with others) and a Dark Zone (where it provides individual space) to customize to the needs of different users. Various resources and interactive features will be incorporated within the space. It is a modular design that can be adapted to different layouts of the campus and can be integrated with existing campus facilities. We also designed a set of rules and guidelines to ensure the space remains inclusive, respectful, and welcoming to all users.
          <br /><br />
          This project can be found here:
          <br /><br />
          <a href="https://docs.google.com/presentation/d/1Jp8e1LHpoigBXw-BHCvIWGaZtXetg6GrgnF7JH1iaIs">Watercooler Presentation Slidedeck</a>
        </p>
      </div>
      <div slot='subsection'>
        <span slot='title'>OneStopMoments</span>
          <p>
            onestopmoments is a digital narrative I made. As a static site, it demonstrates how interactivity can play a part in the narration and the story. Most information reveals only parts of the story as the user chooses their way through the story by clicking on channels. Some information are carefully hidden that requires the user to figure out where they are located, providing additional complementary details.
            <br /><br />
            Based on a true story, onestopmoments talks about how a Discord-esque server was created for a group of friends to chill and chat and how it gradually dies over time, as (some) people step into different stages of their life (while the others don't). It essentially talks about how relationships and distances between people can change over time.
            <br /><br />
            This project can be found here:
            <br /><br />
            <a href="/onestopmoments/welcome/">onestopmoments</a>
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



