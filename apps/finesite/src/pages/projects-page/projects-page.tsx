import { useNavigate } from 'react-router-dom';
import styles from './projects-page.module.scss';
import ProjectDisplay from '../../components/project-display/project-display';
import Tags from '../../components/tags/tags';
import planet from "@/assets/projects/planets/moon.png"
import Button from '../../components/button/button';
import SideBySide from '../../components/side-by-side/side-by-side';
import bower from '@/assets/projects/bower/bower.png';
import aed from '@/assets/projects/aed/aed.png';
import aedOld from '@/assets/projects/aed/aed-old.png';
import aedNew from '@/assets/projects/aed/aed-new.png';
import osm from '@/assets/projects/osm.png';
import p00 from '@/assets/projects/armada/00.png';
import p13 from '@/assets/projects/armada/13.png';
import chordsDemo from '@/assets/projects/chords-demo.gif';
import corruption from '@/assets/projects/bower/corruption.gif';

export function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles['projects-page']}>
      <ProjectDisplay title='Projects'>
        {/* <nav className={styles['projects-nav']}> */}
        <div slot='subsection'>
          <span slot='title'>Planets that Revolve around the Ruby Moon</span>
          <p>
            <i>A multimedia universe exploring what happens when human and AI minds collaborate on fictional storytelling, and the music and art that emerged from it.</i>
          </p>
          <br />
          <SideBySide
            left={
              <div>
                <iframe width="100%" height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2117834894&color=%237e2d2f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div style={{ fontSize: '10px', color: 'rgb(46, 44, 32)', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                  <a href="https://soundcloud.com/peterju00004" title="Peter Ju" target="_blank" style={{ color: 'rgb(46, 44, 32)', textDecoration: 'none' }}>Peter Ju</a> · <a href="https://soundcloud.com/peterju00004/sets/planets-that-revolve-around-the-ruby-moon" title="Planets that Revolve around the Ruby Moon" target="_blank" style={{ color: 'rgb(46, 44, 32)', textDecoration: 'none' }}>Planets that Revolve around the Ruby Moon</a>
                </div>
              </div>
            }
            right={
              <figure style={{ display: 'flex', flexDirection: 'column', height: '300px' }}>
                <img src={planet} alt="A pixel art illustration of the Ruby Moon" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
                <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>The Ruby Moon, central body of the planetary system</figcaption>
              </figure>
            }
          />
          <br />
          <h4>Project Overview</h4>
          <p>
            Four interconnected planetary narratives written through structured turn-taking with an AI collaborator. I established each planet's conceptual framework and narrative architecture while the AI contributed descriptive richness and maintained internal logic. The collaboration showed creative affordances with the AI acing at elaboration and sustained worldbuilding and humans (me) being great at dictating narrative momentum and knowing when to stop, pivot, or embrace absurdity.
            <br /><br />
            The result fuses field guide conventions with philosophical playfulness and emotional resonance. After completing the writing, I composed original soundtracks and created pixel art for the center of the planetary system (the Ruby Moon). The short story collection inspired purely human creative work in other media, demonstrating how computational collaboration can catalyze a broader artistic expression.
            <br /><br />
          </p>
          <div style={{ display: 'flex', alignContent: 'flex-start', flexDirection: 'column', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button label='Read the full digital narrative here' onClick={() => navigate('/projects/planets')} />
            <Button label='Read the artist statement here' type='secondary' onClick={() => navigate('/projects/planets/artist-statement')} />
          </div>
          <Tags>
            <span slot='tag'>#fiction-writing</span>
            <span slot='tag'>#AI-collaboration</span>
            <span slot='tag'>#music-production</span>
            <span slot='tag'>#pixel-art</span>
            <span slot='tag'>#solo-project</span>
          </Tags>
        </div>

                <div slot='subsection'>
          <span slot='title'>OneStopMoments</span>
          <p>
            <i>Navigate a frozen Discord-like server to uncover what happened to Nova and his friends: a narrative told through chat logs, widening timestamp gaps, and hidden channels that reveal the tragedy behind a community's slow death.</i>
          </p>
          <figure>
            <img src={osm} alt="OneStopMoments: a digital narrative experience" draggable={false} style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
            <figcaption>OneStopMoments: a digital narrative experience</figcaption>
          </figure>
          <br />
          <h4>Project Overview</h4>
          <p>
            A web-based interactive narrative exploring how online communities fade when real life pulls people apart. The story focuses on <i>Nova</i>, who created this server hoping to build community among friends but watched it slowly die after failing his college entrance exam and falling into depression. The server was eventually archived, frozen in time with all its conversations preserved.
            <br /><br />
            Users explore the server as <i>roymcniev</i>, clicking through channels to read chat logs spanning months. The narrative arc emerges through careful observation: timestamps reveal growing gaps between messages as the server becomes less active, casual conversations halt to silence, and certain channels/chats unveil deeper struggles. Some channels/branches are immediately accessible. Others are hidden, prefixed with "__" that don't respond to clicks but exist at specific URLs users must deduce from clues incorporated in the chat logs.
            <br /><br />
            The discovery mechanic is diegetic and teaches itself. <i>Nova</i> explains in the rules channel how to access branches: "go to /branch/&lt;number&gt;/ for the designated branch" with a working example to inform the members in server. Later, in the todo channel, <i>Nova</i> mentions "i'm creating a branch for myself here. branch nova?", prompting users to try /todo/nova/, which reveals one of the hidden branches containing critical narrative information. The entry point, by observation, is /welcome/, which leaves the user wondering what could exist at the root directory. Characters in server would reference hidden spaces within their conversations, and attentive readers can piece together the URLs.
            <br /><br />
            The non-linear exploration creates emergent storytelling. Depending on which channels users visit first, their understanding of <i>Nova</i>'s situation shifts. Someone who finds the hidden channels early learns the full tragedy immediately. Someone who explores chronologically through visible channels experiences the slow, creeping realization that something is wrong. The 8-minute experience asks players to be digital archaeologists, reconstructing a story from fragments.
            <br /><br />
            This project was built entirely with HTML/CSS and minimal JavaScript as a static site. It is a technical choice that reflects the thematic content. Like the archived server itself, the project is frozen in time, unchanging, waiting for someone to explore what remains. Developed for Narrative and Technology with Professor Addison Eldin, inspired by real Discord servers among friend groups that gradually went silent as people diverged into different life stages. The project questions on modern internet relationships, the communities we build and abandon, and the silent goodbyes of post-high school transitions. Featured in the 2025 DNID Showcase.
          </p>
          <br />
          <div style={{ display: 'flex', alignContent: 'flex-start', flexDirection: 'column', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button label='Explore OneStopMoments here' onClick={() => window.open('https://finesite.org/onestopmoments/welcome/', '_blank')} />
            <Button label='View in DNID showcase 2025' type='secondary' onClick={() => window.open('https://dmap.pitt.edu/showcase', '_blank')} />
          </div>
          <br />
          <Tags>
            <span slot='tag'>#digital-narrative</span>
            <span slot='tag'>#HTML/CSS</span>
            <span slot='tag'>#interactive-storytelling</span>
            <span slot='tag'>#web-design</span>
            <span slot='tag'>#solo-project</span>
          </Tags>
        </div>

        <div slot='subsection'>
          <span slot='title'>DISCO: Designing an Accessible Education Toolkit</span>
          <p>
            <i>Building an Open Educational Resource that teaches accessibility through speculative fiction and gamified elements: from co-design research to validated prototypes.</i>
          </p>
          <br />
          <h4>Project Overview</h4>
          <p>
            An ongoing UX research and capstone project creating an Open Educational Resource toolkit that teaches accessibility design principles through collaborative spaceship building. As Playtesting Lead, I coordinate multimodal user testing across DISCO's digital and physical components, conduct accessibility research (WCAG/W3C standards), and facilitate co-design sessions with disability communities.
            <br /><br />
            The work combines foundational research, partnership building, and iterative prototyping. User insights from web usability testing informed a complete website redesign. Feedback from HERL researchers and educator playtesting sessions led to pivoting the physical toolkit toward modular ship deck designs that scale for different workshop sizes. I've built sustainable research partnerships across campus organizations and fabricated tactile game components through 3D printing.
            <br /><br />
            Spring 2026 capstone focuses on implementing the validated website redesign, translating research insights into a functional platform that bridges DISCO's digital and physical toolkits.
            <br /><br />
          </p>
          <div style={{ display: 'flex', alignContent: 'flex-start', flexDirection: 'column', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button label='Read the detailed process documentation here' onClick={() => navigate('/projects/disco')} />
            <Button label='Visit the DISCO webite here' type='secondary' onClick={() => window.open('https://discodesignjam.com/', '_blank')} />
          </div>
          <Tags>
            <span slot='tag'>#UX-research</span>
            <span slot='tag'>#accessibility</span>
            <span slot='tag'>#co-design</span>
            <span slot='tag'>#Figma</span>
            <span slot='tag'>#web-design</span>
            <span slot='tag'>#collaborative-project</span>
          </Tags>
        </div>

        <div slot='subsection'>
          <span slot='title'>The Bliss of Bower</span>
          <p>
            <i>A game that literally breaks itself if you make the "wrong" choice: explore what's lost when pleasure needs to justify its existence.</i>
          </p>
          <SideBySide left={
            <figure style={{ display: 'flex', flexDirection: 'column', height: '300px' }}>
              <img src={corruption} alt="A visual representation of game corrupted" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
              <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>The game, corrupted from player's choice.</figcaption>
            </figure>
          } right={
            <figure style={{ display: 'flex', flexDirection: 'column', height: '300px' }}>
              <img src={bower} alt="A screenshot of the Bower in game" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
              <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>The Bower</figcaption>
            </figure>
          } />
          <br />
          <h4>Project Overview</h4>
          <p>
            A solo developed Unity game adapting Edmund Spenser's Faerie Queene (Book II: The Bower of Bliss) where the player explores a beautiful garden, tends flowers, and interacts with characters with no scores, timers, or explicit goals. But when confronted with a moral choice, the game reveals itself as a structured test with a predetermined "correct" answer.
            <br /><br />
            Choose to destroy the Bower following Spenser's logic, and the game itself progressively corrupts: controls fail, visuals glitch, the system collapses. Choose to preserve it, and the garden remains explorable. The game presents itself as a contradiction between autonomous pleasure and a method of pedagogical values, imitating Spenser's own technique writing the epic. This makes philosophical loss tangible: players don't just read about what's destroyed when pleasure must justify itself through virtue or productivity, but experience it as the game becomes unplayable.
            <br /><br />
            The project shows how early modern anxieties about "legitimate" pleasure persist in contemporary productivity culture and gamification. Developed entirely solo: game design, C# programming in Unity, pixel art creation in Aseprite, and music composition in Logic Pro.
            <br /><br />
          </p>
          <Button label='Read makers report' type='primary' onClick={() => window.open('/Makers Report.pdf', '_blank', 'noopener,noreferrer')} />
          <br /><br />
          <SideBySide left={
            <iframe width="336" height="189" src="https://www.youtube.com/embed/C5z7W6FCjdY?si=ywD6hvmWZAg0AeaA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          } right={
            <iframe src="https://itch.io/embed/4115535" width="342" height="167" frameBorder="0"><a href="https://roymcniev.itch.io/bliss-of-bower">Bliss of Bower by roymcniev</a></iframe>
          } />
          <Tags>
            <span slot='tag'>#game-design</span>
            <span slot='tag'>#narrative-design</span>
            <span slot='tag'>#music-production</span>
            <span slot='tag'>#pixel-art</span>
            <span slot='tag'>#solo-project</span>
          </Tags>
        </div>

        <div slot='subsection'>
          <span slot='title'>Armada Supply Chain Solutions Internship</span>
          <p>
            <i>Redesigned an enterprise supply chain platform (that looks like Windows 95) through user research and iterative design; pivoting from form-based modernization to a radical widget-based dashboard after realizing our first attempt was still too traditional.</i>
          </p>
          <SideBySide left={
            <figure style={{ display: 'flex', flexDirection: 'column', height: '250px' }}>
              <img src={p00} alt="Initial modernization attempt" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
              <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>Initial modernization attempt</figcaption>
            </figure>
          } right={
            <figure style={{ display: 'flex', flexDirection: 'column', height: '250px' }}>
              <img src={p13} alt="24tracc modern dashboard redesign" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
              <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>24tracc modern dashboard redesign</figcaption>
            </figure>
          } />
          <br />
          <h4>Project Overview</h4>
          <p>
            Summer 2025 internship transforming Armada's legacy supply chain management platform into a modern widget-based system. Conducted user interviews revealing needs for simplified workflows and customizable dashboards. Created initial Figma redesigns with modern aesthetics (gradients, glass-like overlays, smooth shadows), but team feedback showed we were modernizing the look while maintaining old form-based paradigms.
            <br /><br />
            Pivoted to modular dashboard approach where logistics operators build custom workspaces with draggable widgets displaying critical real-time data. Built 15+ React/TypeScript UI components with Redux state management following atomic design principles. Developed drag-and-drop dashboard with react-grid-layout, API integrations with RTK Query for filtering and search, and experimental Three.js animated backgrounds. Conducted research on LLM capabilities for frontend development. Employee validation confirmed significant UX improvements over legacy interface.
          </p>
          <br />
          <div style={{ display: 'flex', alignContent: 'flex-start', flexDirection: 'column', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button label='Read detailed process documentation' onClick={() => navigate('/projects/armada')} />
            <Button label='View LLM research report' type='secondary' onClick={() => window.open('/report.pdf', '_blank', 'noopener,noreferrer')} />
          </div>
          <Tags>
            <span slot='tag'>#React</span>
            <span slot='tag'>#TypeScript</span>
            <span slot='tag'>#UX-design</span>
            <span slot='tag'>#computer-graphics</span>
            <span slot='tag'>#internship</span>
          </Tags>
        </div>

        <div slot='subsection'>
          <span slot='title'>AED Controller (Arduino MIDI Controller)</span>
          <p>
            <i>When our NeoTrellis button grid failed mid-development, we pivoted to a five-slider design that offered better continuous parameter control: building a $40 MIDI controller to replace $500 commercial equipment.</i>
          </p>
          <figure>
            <img src={aed} alt="AED Controller: a MIDI controller built with Arduino" draggable={false} style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
            <figcaption>AED Controller: a MIDI controller built with Arduino</figcaption>
          </figure>
          <br />
          <h4>Project Overview</h4>
          <p>
            A collaborative Arduino-based MIDI controller built by three musicians (myself, Joe, and Alina) as an affordable alternative to $200-500 commercial equipment for our band AED. We designed a custom interface optimized for real-time synthesis control: five sliders managing volume, pitch, cutoff frequency, resonance, and vibrato, with a single button triggering note on/off. This design philosophy separates envelope triggering from parameter manipulation, enabling expressive performance techniques like combining button presses with simultaneous slider movements.
            <br /><br />
            Our initial NeoTrellis design (16-button grid with RGB LEDs) encountered persistent hardware failures. Buttons would respond briefly then stop entirely. After troubleshooting power supply, LED intensity, and code debugging, we pivoted to sliders, which offered advantages: continuous parameter control for filter sweeps, lower power draw (no external supply needed), and more expressive sonic manipulation.
          </p>
          <SideBySide left={
            <figure style={{ display: 'flex', flexDirection: 'column', height: '300px' }}>
              <img src={aedOld} alt="The original NeoTrellis-based MIDI controller design" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
              <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>The original NeoTrellis-based MIDI controller design</figcaption>
            </figure>
          } right={
            <figure style={{ display: 'flex', flexDirection: 'column', height: '300px' }}>
              <img src={aedNew} alt="The final slider-based MIDI controller design" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
              <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>The final slider-based MIDI controller design</figcaption>
            </figure>
          } />
          <br />
          <p>
            I led Figma prototyping through both design iterations, programmed the Arduino Leonardo implementing MIDI communication with debouncing algorithms (eliminating false button triggers) and analog threshold filtering (preventing jittery parameter changes from sensor noise). Joe handled circuit design and hardware integration testing. Alina created the aesthetic finishing with a silver glitter surface and laser-cut AED band logo. The controller integrates smoothly with Logic Pro and essentially any DAW, and is performance-ready for upcoming shows. Project selected for the annual DNID showcase 2026.
          </p>
          <br />
          <Button label='Read full project documentation here' onClick={() => window.open('/AED Controller Documentation.pdf', '_blank', 'noopener,noreferrer')} />
          <br />
          <Tags>
            <span slot='tag'>#Arduino</span>
            <span slot='tag'>#hardware</span>
            <span slot='tag'>#MIDI</span>
            <span slot='tag'>#collaborative-project</span>
          </Tags>
        </div>

        <div slot='subsection'>
          <span slot='title'>Chords</span>
          <p>
            <i>When existing chord detection libraries weren't accurate or flexible enough for real-time songwriting, I built a custom pattern-matching algorithm and 3D visualization for my songwriting workflow.</i>
          </p>
          <figure>
            <img src={chordsDemo} alt="Chords: a real-time chord detection and visualization tool" draggable={false} style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
            <figcaption>Chords: a real-time chord detection and visualization tool</figcaption>
          </figure>
          <br />
          <h4>Project Overview</h4>
          <p>
            A web-based MIDI chord detection system solving a practical musician problem: identifying "that cool chord I just played" before the moment passes. As a keyboardist, I'd often play interesting voicings during songwriting sessions but couldn't quickly identify which chord it was. Existing tools like tonal.js provided inflexible results that are not the most accurate.
            <br /><br />
            Built with React, WebMIDI API, and Three.js, Chords provides real-time chord detection and 3D keyboard visualization. The system identifies chords as you play, highlighting pressed keys in red and displaying chord names including slash chord notation for inversions. The web-based approach means no app installation. With a MIDI keyboard connected, you can start playing.
            <br /><br />
            I developed a custom detection algorithm based on rotation and pattern matching that handles multiple voicings of the same chord accurately. The algorithm normalizes note arrays by relative distance, then rotates through possible voicings to match against chord patterns. The system supports major, minor, diminished, augmented, and extended chords (seventh, ninth, etc.).
            <br /><br />
            The tool serves multiple use cases. It can be integrated into the songwriting workflow for quickly identifying played chords, and teaching by visualizing which keys create which chords. It is a music theory knowledge refresher during the implementation process for me. Solo developed and validated through real keyboard performances during songwriting sessions. This project impressed Armada Supply Chain's technical team during my interview process.
            <br /><br />
            (Further detailed algorithm documentation and setup instructions in GitHub repo.)
          </p>
          <br />
          <Button label='View project on GitHub' onClick={() => window.open('https://github.com/peterju00004/chords', '_blank')} />
          <br />
          <Tags>
            <span slot='tag'>#React</span>
            <span slot='tag'>#WebMIDI</span>
            <span slot='tag'>#Three.js</span>
            <span slot='tag'>#music-technology</span>
            <span slot='tag'>#solo-project</span>
          </Tags>
        </div>
      </ProjectDisplay>
    </div>
  );
}

export default ProjectsPage;