import ProjectDisplay from '../../../../components/project-display/project-display';
import p1 from '@/assets/projects/digital-narrative/disco/01.jpg';
import p2 from '@/assets/projects/digital-narrative/disco/02.jpg';
import p3 from '@/assets/projects/digital-narrative/disco/03.jpg';
import p4 from '@/assets/projects/digital-narrative/disco/04.jpg';
import p5 from '@/assets/projects/digital-narrative/disco/05.jpg';
import styles from './disco.module.scss';

export function Disco() {
  return (
    <ProjectDisplay title="DISCO Experience">
      <div slot="subsection">
        <span slot='title'>Overview</span>
        <p>
          Over twelve weeks, I coordinated and conducted user testing for the Design an Inclusive Spaceship Collaborative Operation (DISCO) project. As a User Testing Coordinator & Research Assistant, I conducted early-stage research, managed outreach to disability organizations, facilitated co-design sessions, and consolidated feedback into actionable design improvements. This narrative shows the research, coordination, and facilitation skills I applied to the project.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Context and Challenges</span>
        <p>
          The DISCO project aimed to create an Open Educational Resource toolkit to teach inclusive design principles. While the concept itself is really engaging, we need authentic input from people with disabilities to ensure accessibility and relevance. My challenge was to recruit and coordinate diverse participants, design and manage the co-deign process, and deliver the insights that would refine toolkit elements, using the accessible communication strategies and co-design ethics.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>My Role and Responsibilities</span>
        <p>
          As <b>User Testing Coordinator & Research Assistant</b>, I:
          <ul className={styles['paragraph-list']}>
            <li>Conducted foundational research on co-design methodologies/ethics and accessibility best practices.</li>
            <li>Identified and partnered with disability organizations, mapping potential collaborators and tracking outreach statuses.</li>
            <li>Design accessible communications including email templates and informational guides for participants.</li>
            <li>Facilitated co-design sessions, both remote and in-person, guiding participants through toolkit designs and taking note of their feedback.</li>
          </ul>
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Process and Approach</span>
        <h5>Research and Planning</h5>
        <p>
          Co-design sessions are the collaborative design process that involves users in the design process. It is used to create new personas for our toolkit. Playtest/Workshop is testing how the toolkit works with the users.
          <br /><br />
          In the initial weeks, I and my teammates conducted research to ensure our co-design sessions, as well as our website and our general communication, were inclusive and effective, I:
          <ul className={styles['paragraph-list']}>
            <li>Explored plain-language guidelines to write outreach emails and session scripts.</li>
            <li>Completed IRB training modules to conduct ethical research with human participants.</li>
            <li>Reviewed the ethics of co-design.</li>
            <li>Collected a list of organizations within the Pittsburgh region that we can outreach to for inviting participants to our co-design sessions.</li>
          </ul>
        </p>
        <br />
        <h5>Outreach and Recruitment</h5>
        <p>
          With the research insights, I drafted an accessible outreach email template, iterated it based on feedback from Dr. Fitz and Lynn, and launched our campaign to eight Pittsburgh organizations.
        </p>
        <br />
        <figure>
          <img src={p1} alt="Modifying the outreach email template according to the feedback" />
          <figcaption>Modifying the outreach email template according to the feedback from Dr. Fitz and Lynn.</figcaption>
        </figure>
        <br />
        I tracked response in a custom spreadsheet with statuses from "Not sent" to "Confirmed," and followed up to include our scheudling Google form link properly. This approach helped engage five organizations.
        <br />
        <figure>
          <img src={p2} alt="The status table for tracking outreach progress" />
          <figcaption>The status table in Google Spreadsheet used for tracking outreach progress.</figcaption>
        </figure>
        <br />
        <h5>Co-Design and Testing</h5>
        <p>
          Between March 25th and 28th, I coordinated two co-design sessions according to the responses in the participation interest form.
          <br />
          <figure>
            <img src={p3} alt="Pie charts showing the distribution of participants' disability language preferences and their preferred method of contact." />
            <figcaption>Pie charts showing the distribution of participants' disability language preferences and their preferred method of contact.</figcaption>
          </figure>
          <br />
          <figure>
            <img src={p4} alt="Participants' responses on their communication needs and availabilities." />
            <figcaption>Participants' responses on their communication needs and availabilities.</figcaption>
          </figure>
          <br />
          One of them is a remote session facilitated via Google Meet. The other one is in-person, held at Hillman Library at the University of Pittsburgh. During the two co-design sessions, participants created persona sketches and brainstorming while I documented the input.
          <br />
          <figure>
            <img src={p5} alt="Information for Bry-Ann-Dee, a new character created during one of the co-design sessions." />
            <figcaption>Information for Bry-Ann-Dee, a new character created during one of the co-design sessions.</figcaption>
          </figure>
          <br />
          For our website's Figma prototype, DISCO collaborated with the UXD Club at Pitt for gaining insight on our website design. It is very interesting to see how people interpret the same design. Using the feedback from this testing activity, we made some changes to the website design.
        </p>
        <br />
        <h5>Playtesting and Final Workshop</h5>
        <p>
          Before our final workshop, we did a playtesting workshop with students at the University of Pittsburgh. I took note of their feedback on the workshop experience and their opinion on our fabricated poster, persona decks, and the slides. During the playtesting workshop, participants in general like the structure of it (pace + organization) and the character/persona design. However, we do need to improve the method of presenting the slide show in future workshops as constantly switching between documents can get overwhelming.
          <br /><br />
          On April 11th, we hosted our final workshop of the semester where we presented refined prototypes and gathered final feedback. In general, participants liked the design of persona decks, the ship cards, and the structure of the workshop. One of the participants said in the feedback survey that the workshop "<u>gave [them] a great new perspective to think about everything</u>."
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Reflections and ... What Else?</span>
        <p>
          Generally speaking, this is a very fun and meaningful experience to me. Not only have I learned how to conduct user testing and co-design sessions, collaborating under a team setting, and the communication strategies, but I also have learned how to be incorporate inclusive and accessible principles in my design process. I am very grateful for the opportunity to work with Dr. Fitz, Lynn, and the rest of the team.
          <br /><br />
          Visit the DISCO website to learn more about the project and the toolkit: <a href="https://discodesignjam.com">https://discodesignjam.com</a>
        </p>
      </div>
    </ProjectDisplay>
  );
}

export default Disco;



