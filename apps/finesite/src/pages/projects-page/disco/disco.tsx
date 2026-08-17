import ProjectDisplay from '../../../components/project-display/project-display';
import p1 from '@/assets/projects/disco/01.jpg';
import p2 from '@/assets/projects/disco/02.jpg';
import p3 from '@/assets/projects/disco/03.jpg';
import p4 from '@/assets/projects/disco/04.jpg';
import p5 from '@/assets/projects/disco/05.jpg';
import bad from '@/assets/projects/disco/bad.png';
import UXD from '@/assets/projects/disco/UXD.png';
import playtesting from '@/assets/projects/disco/playtesting.png';
import newDesign from '@/assets/projects/disco/new-design.png';
import shipDeck from '@/assets/projects/disco/ship-deck.png';
import shipModular from '@/assets/projects/disco/ship-modular.jpg';
import archive from '@/assets/projects/disco/archive.jpg';
import printed from '@/assets/projects/disco/printed.jpeg';
import styles from './disco.module.scss';

export function Disco() {
  return (
    <ProjectDisplay title="DISCO Experience">
      <div slot="subsection">
        <span slot='title'>Introduction</span>
        <p>
          Over three semesters, I've contributed to the Design an Inclusive Spaceship Collaborative Operation (DISCO) project, an Open Educational Resource toolkit that teaches accessibility design principles through speculative fiction and gamified elements. My role evolved from User Testing Coordinator & Research Assistant (Spring 2025) to Playtesting Lead, Digital, & Session Coordinator (Fall 2025), and will continue as capstone implementer (Spring 2026). This documentation traces the research, co-design, iteration, and implementation process that shaped DISCO's development.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Phase 1: Co-Design & Foundation (Spring 2025)</span>
        <span><b>Role:</b> User Testing Coordinator & Research Assistant</span>
        <br /><br />
        <h5>Research and Planning</h5>
        <p>In the initial weeks, I conducted foundational research to ensure our co-design sessions, website, and communications were inclusive and effective:</p>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Explored plain-language guidelines for outreach emails and session scripts</li>
          <li>Completed IRB training modules for ethical research with human participants</li>
          <li>Reviewed co-design ethics and methodologies</li>
          <li>Researched accessibility best practices to inform toolkit design</li>
          <li>Collected a list of organizations within the Pittsburgh region for outreach</li>
        </ul>
        <br />
        <h5>Outreach and Recruitment</h5>
        <p>With research insights established, I drafted an accessible outreach email template, iterated it based on feedback from Dr. Fitz and Lynn, and launched a campaign to eight Pittsburgh organizations.</p>
        <figure>
          <img src={p1} alt="Modifying the outreach email template according to the feedback" />
          <figcaption>Modifying the outreach email template according to the feedback from Dr. Fitz and Lynn.</figcaption>
        </figure>
        <br />
        <p>I tracked responses in a custom spreadsheet with statuses from "Not sent" to "Confirmed" and followed up to properly include our scheduling Google form link. This approach successfully engaged five organizations.</p>
        <figure>
          <img src={p2} alt="The status table for tracking outreach progress" />
          <figcaption>The status table in Google Spreadsheet used for tracking outreach progress.</figcaption>
        </figure>
        <br />
        <h5>Co-Design Sessions</h5>
        <p>Between March 25-28, I coordinated two co-design sessions based on responses in the participation interest form:</p>
        <figure>
          <img src={p3} alt="Pie charts showing the distribution of participants' disability language preferences and their preferred method of contact." />
          <figcaption>Pie charts showing the distribution of participants' language preferences and their preferred method of contact.</figcaption>
        </figure>
        <figure>
          <img src={p4} alt="Participants' responses on their communication needs and availabilities." />
          <figcaption>Participants' responses on their communication needs and availabilities.</figcaption>
        </figure>
        <br />
        <p>For the in-person session at Hillman Library, Pitt, us and the participants engaged in collaborative brainstorming, which resulted in new character development (e.g., Bry-Ann-Dee) with detailed accessibility considerations.</p>
        <figure>
          <img src={bad} alt="Information for Bry-Ann-Dee, a new character created during one of the co-design sessions." />
          <figcaption>Information for Bry-Ann-Dee, a new character created during one of the co-design sessions.</figcaption>
        </figure>
        <br />
        <p>During sessions, participants demonstrated clear preferences for disability language and communication methods, which informed how we approached future outreach and session design.</p>
        <br />
        <h5>Website Usability Testing</h5>
        <p>DISCO collaborated with the UXD Club at Pitt to gain insights on our Figma prototype. Observing how different people interpreted the same design revealed areas for improvement, leading to initial website design changes.</p>
        <figure>
          <img src={UXD} alt="Feedback session with the UXD Club at Pitt on the DISCO website prototype." />
          <figcaption>Feedback compiled from the UXD Club on the DISCO website prototype.</figcaption>
        </figure>
        <br />
        <h5>Playtesting Workshops</h5>
        <p>DISCO participated in a class visit with University of Pittsburgh students to test workshop structure, fabricated poster, persona decks, and presentation slides. Participants appreciated the pace, organization, and character design but noted that constantly switching between documents became overwhelming.</p>
        <figure>
          <img src={playtesting} alt="Feedback gathered from the DISCO class visiting." />
          <figcaption>Feedback gathered from the DISCO class visiting</figcaption>
        </figure>
        <br />
        <h5>Final Workshop</h5>
        <p>On April 11th, we hosted our final workshop of the semester, presenting refined prototypes and gathering final feedback. Participants praised the persona decks, ship cards, and workshop structure. One participant noted that the workshop "<u>gave [them] a great new perspective to think about everything</u>."</p>
        <br />
        <h5>Outcomes</h5>
        <p>Spring 2025 laid out foundational elements of DISCO's toolkit and research approach. We successfully developed a comprehensive persona deck through authentic co-design with disability communities, creating characters like Bry-Ann-Dee with detailed accessibility considerations. The initial toolkit prototypes were tested and validated with student participants. We connected with five Pittsburgh disability organizations that are interested in ongoing collaboration opportunities. The semester also revealed that workshop pacing and organization worked well, though document navigation needed streamlining. These outcomes led to our focus in Fall 2025 on iterative refinement and expanded playtesting infrastructure. </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Phase 2: Playtesting & Iteration (Fall 2025)</span>
        <span><b>Role:</b> Playtesting Lead, Digital, & Session Coordinator</span>
        <br /><br />
        <h5>Expanding the Research Foundation</h5>
        <p>Building on Spring's accessibility research, I conducted additional research to support Fall's expanded playtesting scope. I explored virtual event accessibility best practices including platform selection, live captioning, and pre/post-event information sharing strategies. I also reviewed WCAG (Web Content Accessibility Guidelines) and ADA regulations for web and mobile content accessibility, and read <i>Practical Web Inclusion and Accessibility</i> by Ashley Firth to understand accessibility as a design methodology rather than a checklist. These insights shaped both our digital toolkit redesign and playtesting session structure.</p>
        <br />
        <h5>Building Sustainable Partnerships</h5>
        <p>I expanded outreach beyond Spring's initial partnerships to create sustainable playtesting infrastructure. This includes Dr. Maverick, Urban Gaming Club, and the Human Engineering Research Lab @ Pitt. However, despite our attempts for expansion over regional campuses, this coordination proved more difficult than anticipated after multiple follow-up emails.</p>
        <br />
        <h5>Web Usability Testing at Open Lab</h5>
        <p>Collaborating with the team, I conducted comprehensive web usability testing sessions where participants navigated our current website while I observed and documented interactions. Critical findings include:</p>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Excessive white space creating navigation challenges</li>
          <li>Confusing information architecture (wording) of sections</li>
          <li>Suboptimal alignment of images and text blocks</li>
          <li>Room for improvement in the organization/file structure for digital toolkit</li>
        </ul>
        <br />
        <p>
          This inspired a low-fidelity Figma redesigns focusing on more compact layouts, clearer terminology (shifting from "leaders and participants" to "workshops"), and improved visual hierarchy and information architecture
        </p>
        <figure>
          <img src={newDesign} alt="Low-fidelity Figma redesign focusing on more compact layouts, clearer terminology, and improved visual hierarchy and information architecture" />
          <figcaption>Low-fidelity Figma redesign; color boxes as placeholders for images.</figcaption>
        </figure>
        <br />
        <h5>Physical Toolkit Development</h5>
        <p>Completed Open Lab's 3D Filament Printing training and began prototyping tactile dice and dice poppers. I coordinated with Aaron at Open Lab to select materials matching DISCO's color palette (orange PLA filament for dice and base, transparent resin for popper cover).</p>
        <figure>
          <img src={printed} alt="Initial 3D printed dice and dice popper (partial) prototype." />
          <figcaption>Initial 3D printed dice and dice popper (partial) prototype.</figcaption>
        </figure>
        <br />
        <p>My first dice printed too small to provide adequate tactile feedback, so I scaled up the design and tested fairness through multiple tosses. The dice popper model from Thingiverse was marked "WIP" and ultimately proved to not be functional as the top and bottom pieces lacked sufficient space for the dice to actually pop. These material constraints were documented for future team members to reference.</p>
        <br />
        <h5>HERL Collaboration</h5>
        <p>On November 14, we visited Human Engineering Research Laboratories (HERL) at Bakery Square. We presented DISCO and received feedback from their team, then played HERL Town, a fusion of Monopoly and Family Feud focused on accessibility and disability studies.</p>
        <br /><br />
        <p>HERL researchers provided key feedback that validated what our web usability tests were already showing. They suggested we consider modular ship deck designs that could be customized for different workshop configurations, think about real-life accessibility applications, and explore potential scaling to K-12 educational settings. This feedback confirmed a crucial insight: people need flexibility. A facilitator working with five people has different needs than one working with twenty. One-size-fits-all doesn't work in accessible design.</p>
        <br />
        <h5>Design Pivots Based on User Feedback</h5>
        <p>The ship deck evolved significantly from a single comprehensive blueprint to a modular system. The new design includes a ship illustration as centerpiece, separate modular pieces for general and ship-specific spaces, customizable crew member count, and individual pieces for service animals and assistive technologies. We also made pivots to the facilitator introduction manual and website structural and terminology changes based on ongoing feedback.</p>
        <figure>
          <img src={shipDeck} alt="Initial ship deck design." />
          <figcaption>Initial ship deck design.</figcaption>
        </figure>
        <figure>
          <img src={shipModular} alt="Modular ship deck design allowing customization for different workshop sizes and needs." />
          <figcaption>Lo-fi modular ship deck design allowing customization for different workshop sizes and needs, separating general/specific places, crew members, service animals, and assistive technologies.</figcaption>
        </figure>
        <br />
        <h5>Playtesting Sessions</h5>
        <p>I coordinated a playtesting session with Urban Gaming Club on November 14 during their Friday evening meeting. Given the timing close to semester's end, Emma arranged for a separate room during their regular meeting, which was the best accommodation they could offer at that point in the term. However, no participants joined as members chose to continue their planned activities. This experience highlighted an important learning about session format: offering playtesting as an optional parallel activity during an established meeting may not generate participation, even when organizational leaders are supportive. For future collaborations, dedicated session times or integrated formats might work better. Emma remained enthusiastic about collaborating in Spring 2026, and we'll apply these insights to plan more effective sessions when scheduling allows.</p>
        <br /><br />
        <p>I also conducted brief introduction pitches in two classes (Dr. Maverick's and Professor Nick Canada's) explaining our toolkit and playtesting goals. I sent Dr. Maverick our facilitator introduction manual for feedback, establishing a faculty partnership for future testing.</p>
        <br /><br />
        <p>On December 8, we hosted our end-of-semester workshop at Open Lab, testing both our refined ship deck prototype and Figma web designs. The session provided valuable validation of the design directions we'd taken throughout the semester.</p>
        <figure>
          <img src={archive} alt="Design participant made during the workshop at Open Lab." />
          <figcaption>Design participant made during the workshop at Open Lab.</figcaption>
        </figure>
        <br />
        <h5>Outcomes</h5>
        <p>Fall 2025 established foundations for Spring implementation. We validated Figma redesigns based on comprehensive usability testing and developed a modular ship deck system responsive to facilitator needs at different scales. The semester built sustainable faculty and organizational partnerships that will continue into Spring 2026, created documented 3D printing workflows and material specifications for future team members, and generated playtesting insights that will inform our session format for future collaborations.</p>  
      </div>

      <div slot='subsection'>
        <span slot='title'>Phase 3: Implementation (Spring 2026)</span>
        <p>Bringing in the findings of the two previous semesters, I'll become the web developer implementing the Figma redesigns into a functional, accessible website as DISCO's digital toolkit platform. Besides that, Spring 2026 offers the opportunity to test the modular ship deck system and explore questions that have emerged throughout the project: how do digital and physical toolkit components complement each other? Can someone using the website effectively guide someone working with tactile components? Where do gaps appear between the two modalities? The Spring capstone will also focus on documentation for OER distribution as well as the website, making sure that DISCO's toolkit can be adopted by educators and workshop facilitators. This builds directly on the foundations over the previous semesters, aiming for broader educational impact and potential K-12 scaling as suggested by HERL researchers.</p>
      </div>
    </ProjectDisplay>
  );
}

export default Disco;



