import ProjectDisplay from '../../../../components/project-display/project-display';
import p00 from '@/assets/projects/digital-narrative/armada/00.png';
import p1 from '@/assets/projects/digital-narrative/armada/01.png';
import p2 from '@/assets/projects/digital-narrative/armada/02.png';
import p3 from '@/assets/projects/digital-narrative/armada/03.png';
import p4 from '@/assets/projects/digital-narrative/armada/04.png';
import p5 from '@/assets/projects/digital-narrative/armada/05.png';
import p6 from '@/assets/projects/digital-narrative/armada/06.png';
import p7 from '@/assets/projects/digital-narrative/armada/07.png';
import p8 from '@/assets/projects/digital-narrative/armada/08.png';
import p9 from '@/assets/projects/digital-narrative/armada/09.png';
import p10 from '@/assets/projects/digital-narrative/armada/10.png';
import p11 from '@/assets/projects/digital-narrative/armada/11.png';
import p12 from '@/assets/projects/digital-narrative/armada/12.png';
import p13 from '@/assets/projects/digital-narrative/armada/13.png';
import p14 from '@/assets/projects/digital-narrative/armada/14.png';
import p15 from '@/assets/projects/digital-narrative/armada/15.png';
import v from '@/assets/projects/digital-narrative/armada/tessellations.mp4';
import report from '@/assets/projects/digital-narrative/armada/report.pdf';
import styles from './armada.module.scss';

export function Armada() {
  return (
    <ProjectDisplay title="Armada Experience">
      <div slot="subsection">
        <span slot='title'>Overview</span>
        <p>
          During the summer of 2025, I interned at Armada Supply Chain Solutions as a React JavaScript UI Developer. Armada is a leading provider of supply chain management software and services, specializing in optimizing logistics operations for businesses worldwide.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Context and Challenges</span>
        <p>
          During my internship experience, I was a part of the <strong>24tracc</strong> team, which focuses on reimagining the supply chain management system to deliver a better user experience.
          <br /><br />
          <a href='https://24tracc.armada.net/cas/login?service=https%3a%2f%2f24tracc.armada.net%2f'>link to 24tracc login page</a>
          <br /><br />
          As you can see, the current UI of 24tracc is quite outdated and not very user-friendly. It is built with JavaZK and React as the team is transitioning to using Git for version control. I worked on redesigning and implementing new UI components to improve the overall user experience.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>My Role and Responsibilities</span>
        <p>
          As the <b>React JavaScript UI Developer</b>, I:
          <ul className={styles['paragraph-list']}>
            <li>Conducted user interviews to investigate routine workflows and uncover needs and pain points, iterating through follow-ups to clarify requirements.</li>
            <li>Built 15+ reusable enterprise UI components in React/TypeScript Nx monorepo, implementing Redux for centralized state management, ensuring design system consistency across light/dark themes.</li>
            <li>Enhanced user experience by developing drag-and-drop dashboard functionality with react-grid-layout and implementing API integrations with RTK Query for search functionality and tag-based filtering.</li>
            <li>Created immersive 3D interface elements using Three.js featuring animated triangular tessellations with location-based color mapping, improving visual engagement across complex supply chain platform.</li>
            <li>Conducted experiment on modern LLM and their capability in freontend development.</li>
          </ul>
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Process and Approach</span>
        <h5>Reimagining the Architecture</h5>
        <p>
          We are building a newer system called Orbit with a completely different architecture: an Orbit Core conatining the services and business logic, an Orbit UI library providing resuable components and the capacity for user-customization, and relevant Auth modules. This new architecture allows us to have a more modular and scalable system, making it easier to maintain and update in the future.
          <br /><br />
          In the earlier stages of my internship, we conducted interviews with the current users of 24tracc to undertstand their typical workflows. As an enterprise-level system, 24tracc serves both internal and external customzer, so it is important to gather insights for areas of improvement, specifically:
          <ul className={styles['paragraph-list']}>
            <li>A modern UI looking (something with less grids and corners)</li>
            <li>A simplified workflow (reducing the amount of steps, for example, clicks to navigate through the system)</li>
            <li>A customizable dashboard based on the users' day-to-day job (instead of an "average" solution)</li>
          </ul>
        </p>
        <br />
        <h5>Deisgn and Development</h5>
        <p>
          Based on these information, we decided to go for a design with mellow, vibrant quality with glass-like overlays and smooth shadows. We're using Penpot to lay down the design system and prototypes, following atomic design principles, for future development.
        </p>
        <br />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          <figure>
            <img src={p1} alt="Light mode color palette for the UI design." />
            <figcaption>Light mode color palette.</figcaption>
          </figure>
          <figure>
            <img src={p2} alt="Dark mode color palette for the UI design" />
            <figcaption>Dark mode color palette.</figcaption>
          </figure>
        </div>
        <br />
        Building on top of other Atomic level components such as Typography, Spacing, and Shadow specifications, we moved on to creating Molecules and Organisms where the real components start to take shape. The components are based on Base UI or are created from scratch for best style customizability; Material UI is also used for complex components.
        <br />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          <figure>
            <img src={p3} alt="Button component design" />
            <figcaption>Button component design.</figcaption>
          </figure>
          <figure>
            <img src={p4} alt="Dropdown component design" />
            <figcaption>Dropdown component design.</figcaption>
          </figure>
          <figure>
            <img src={p5} alt="Input component design" />
            <figcaption>Input component design.</figcaption>
          </figure>
          <figure>
            <img src={p6} alt="Toast component design" />
            <figcaption>Toast component design.</figcaption>
          </figure>
          <figure>
            <img src={p7} alt="Toggles component design" />
            <figcaption>Toggles component design.</figcaption>
          </figure>
          <figure>
            <img src={p8} alt="Popover component design" />
            <figcaption>Popover component design.</figcaption>
          </figure>
          <figure>
            <img src={p9} alt="Modal component design" />
            <figcaption>Modal component design.</figcaption>
          </figure>
        </div>
        <br />
        Going through several iterations of design and feedback in this stage, we got rid of several designs that are not necessary to keep the UI clean.

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          <figure>
            <img src={p10} alt="Deprecated Sidebar design." />
            <figcaption>Deprecated Sidebar design.</figcaption>
          </figure>
          <figure>
            <img src={p11} alt="Deprecated Breadcrum design." />
            <figcaption>Deprecated Breadcrumb design.</figcaption>
          </figure>
        </div>
        <br />
        As you can see, we're not going for a traditional hierarchical navigation system. Instead, we're giving the user high amount of customizability in their dashboard. They will be able to create widget, which is integrated with the backend/business logic, customize their size and position within a flexible grid system, and save their dashboard layout for future use. And based on this, philosophy, I built a drag-and-drop Dashboard with <i>react-grid-layout</i> so the user can arrange their workspace the way they need it.
        <br /><br />
        So instead of building our earliest (re)design:
        <figure>
          <img src={p00} alt="Our earliest attempt at reimagining the Orbit Application, which is deprecated." />
          <figcaption>Our earliest attempt at reimagining the Orbit Application, which is deprecated.</figcaption>
        </figure>
        <br /><br />
        We have something like this:
        <br />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          <figure>
            <img src={p12} alt="A full size (screen dependent) widget loaded with dummy data." />
            <figcaption>A full-size (screen dependent) widget loaded with dummy data.</figcaption>
          </figure>
          <figure>
            <img src={p13} alt="Dashboard page with three widgets of various sizes." />
            <figcaption>Dashboard page with three widgets of various sizes.</figcaption>
          </figure>
          <figure>
            <img src={p14} alt="Power BI report widgets displaying key metrics." />
            <figcaption>Power BI report widgets displaying key metrics.</figcaption>
          </figure>
          <figure>
            <img src={p15} alt="Adding a new widget to the dashboard, customizing the columns to show in the chart." />
            <figcaption>Adding a new widget to the dashboard, customizing the columns to show in the chart.</figcaption>
          </figure>
        </div>
      </div>
      <div slot='subsection'>
        <span slot='title'>3D Computer Graphics</span>
        <p>
          On top of that, I would like to add a bit of jazz to the Dashboard background. Inspired by the logo of Armada Supply Chain Solutions, I created a 3D animated background using Three.js featuring triangular tessellations with location-based color mapping. This not only enhances the visual appeal of the dashboard but also provides a modern and dynamic user experience.
          <br />
          <video controls width="600" style={{ marginTop: '1rem' }}>
            <source src={v}></source>
          </video>
          <br />
          The positions, sizes, and the colors of the triangles are all procedurally generated randomly. This creates a unique and engaging visual effect that complements the overall design of the dashboard.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Side Mission - Modern LLM Research and Development</span>
        <p>
          Besides the Designing and Implementation of the Orbit UI library, I also conducted an experiment on the capabilities of modern Large Language Models (LLMs) in frontend development, evaluating some of the most well-known models by assigning them typical frontend development tasks, including creating React components, debugging code, and optimizing performance. (Anything after page 14 is Appendix, which includes the actual code snippets generated by the models.)
        </p>
        <embed src={report} type='application/pdf' width='100%' height={800} />
      </div>

      <div slot='subsection'>
        <span slot='title'>Impact</span>
        <p>
          One cohesive system with countless smoother interactions, delivering a better User Experience. Looking back at the internship, I am proud of the contributions I made to the Armada Supply Chain Solutions team during my internship. And I really enjoyed my experience there.
        </p>
      </div>
    </ProjectDisplay>
  );
}

export default Armada;



