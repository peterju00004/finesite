import ProjectDisplay from '../../../components/project-display/project-display';
import styles from './audio-design.module.scss';

export function AudioDesign() {
  return (
    <ProjectDisplay title='Audio Design / Music Projects'>
      <div slot='subsection'>
        <span slot='title'>Audio Engineering and Design</span>
        <p>
          Trained classically as a musician, I have experiences in designing audio effects and music for various projects. Kernel Error, being the most recent one, is a horror puzzle-solving game my teammates and I are working on currently. I help with designing its sound effects by the use of Digital Audio Workstations (DAWs) and various synthesizers.
          <br /><br />
          One key aspects of sound engineering is how the outcome interacts with the narrative and how it represents the story. To me, the synergy is the most important principle about creating sound/audios.
          <br /><br />
          Besides that, I've also helped with sound design when it comes to micro movies. The selection of background music, the effects, and the voiceover are key to assist the visual storytelling.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Songwriting and Production</span>
          <p>
            I have also engaged in songwriting and production, including (re)arranging songs, recording, and mixing them. Genres include pop, rock, jazz, classical music, but I am more than willing to explore different sounds.
            <br /><br />
            I am currently writing and producing my first album.
          </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Music Performances</span>
        <p>
          Participated in many bands, I am capable of being the keyboardist, vocalist, and the saxophonist for gigs. I have performed for several jams and occasions including the Spring Festival performances and the CMU Battle of the Bands.
          <br /><br />
          Currently I am the keyboardist and the saxophonist of a band named Sennight.
        </p>
      </div>
    </ProjectDisplay>
  );
}

export default AudioDesign;



