import ProjectDisplay from '../../../components/project-display/project-display';
import p00 from '@/assets/projects/armada/00.png';
import p1 from '@/assets/projects/armada/01.png';
import p2 from '@/assets/projects/armada/02.png';
import p3 from '@/assets/projects/armada/03.png';
import p4 from '@/assets/projects/armada/04.png';
import p5 from '@/assets/projects/armada/05.png';
import p6 from '@/assets/projects/armada/06.png';
import p7 from '@/assets/projects/armada/07.png';
import p8 from '@/assets/projects/armada/08.png';
import p9 from '@/assets/projects/armada/09.png';
import p10 from '@/assets/projects/armada/10.png';
import p11 from '@/assets/projects/armada/11.png';
import p12 from '@/assets/projects/armada/12.png';
import p13 from '@/assets/projects/armada/13.png';
import p14 from '@/assets/projects/armada/14.png';
import p15 from '@/assets/projects/armada/15.png';
import v from '@/assets/projects/armada/tessellations.mp4';
import legacyLogin from '@/assets/projects/armada/legacy-login.png';
import report from '@/assets/projects/armada/report.pdf';
import styles from './armada.module.scss';
import SideBySide from '../../../components/side-by-side/side-by-side';
import { Button } from '../../../components/button/button';

export function Armada() {
  return (
    <ProjectDisplay title="Armada Experience">
      <div slot="subsection">
        <span slot='title'>Overview</span>
        <p>
          During summer 2025, I interned at Armada Supply Chain Solutions as a React JavaScript UI Developer, transforming their enterprise supply chain platform from a legacy system into a modern, widget-based interface. After user research revealed our first redesign attempt still felt too traditional, we pivoted to a radical modular dashboard approach that fundamentally reimagined how logistics operators interact with supply chain data.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Context and Challenges</span>
        <p>
          I worked on the <strong>24tracc</strong> team reimagining Armada's supply chain management system. The legacy platform was built as a Java ZK/React hybrid. It is outdated, form-heavy, and difficult to navigate during fast-paced logistics operations. The team was transitioning to Git version control while completely rebuilding the architecture from the ground up.
          <br /><br />
          <figure>
            <img src={legacyLogin} style={{ width: '60%', height: 'auto' }} alt="Current 24tracc login page" />
            <figcaption>Current 24tracc login page</figcaption>
          </figure>
          <br /><br />
        The system served both internal Armada staff and external customers, requiring enterprise-grade reliability while addressing diverse user workflows. Our challenge wasn't just visual modernization but fundamental UX reimagining.        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>My Role and Responsibilities</span>
        <p>
          As the <b>React JavaScript UI Developer</b>, I:
          <ul className={styles['paragraph-list']}>
            <li>Conducted user interviews investigating routine workflows, uncovering needs and pain points through iterative follow-ups</li>
            <li>Built 15+ reusable enterprise UI components in React/TypeScript Nx monorepo with Redux for centralized state management</li>
            <li>Ensured design system consistency across light/dark themes</li>
            <li>Enhanced UX through drag-and-drop dashboard functionality with react-grid-layout</li>
            <li>Implemented API integrations with RTK Query for search and tag-based filtering</li>
            <li>Created experimental 3D interface elements using Three.js</li>
            <li>Conducted research on modern LLM capabilities in frontend development</li>
          </ul>
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Process and Approach</span>
        <h5>Reimagining the Architecture</h5>
        <p>
          We are building a newer system called Orbit with a completely different architecture: an Orbit Core containing the services and business logic, an Orbit UI library providing reusable components and the capacity for user-customization, and relevant Auth modules. This new architecture allows us to have a more modular and scalable system, making it easier to maintain and update in the future.
        </p>
        <br />
        <h5>Stage 1: User Research</h5>
        <p>
          In the earlier stages of my internship, we conducted interviews with the current users of 24tracc to understand their typical workflows. As an enterprise-level system, 24tracc serves both internal and external customer, so it is important to gather insights for areas of improvement, specifically:
          <ul className={styles['paragraph-list']}>
            <li>A modern UI looking (something with less grids and corners)</li>
            <li>A simplified workflow (reducing the amount of steps, for example, clicks to navigate through the system)</li>
            <li>A customizable dashboard based on the users' day-to-day job (instead of an "average" solution)</li>
          </ul>
          <br />
          Users struggled with dense forms burying critical information, requiring excessive scrolling and clicking during time-sensitive logistics operations.
        </p>
        <br />
        <h5>Stage 2: First Design Iteration</h5>
        <p>Based on research findings, we created initial Figma redesigns using Penpot following atomic design principles. The design emphasized mellow, vibrant quality with glass-like overlays and smooth shadows.</p>
        <br />
        <SideBySide left={
          <figure style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={p1} alt="Initial redesign - Light Mode" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
            <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>Initial redesign - Light Mode</figcaption>
          </figure>
        } right={
          <figure style={{ display: 'flex', flexDirection: 'column'}}>
            <img src={p2} alt="Initial redesign - Dark Mode" draggable={false} style={{ width: '100%', height: 'auto', objectFit: 'contain', flex: '1 1 auto', minHeight: 0 }} />
            <figcaption style={{ fontSize: '0.8rem', textAlign: 'center', padding: '0.5rem 0' }}>Initial redesign - Dark Mode</figcaption>
          </figure>
        }>
        </SideBySide>
        <br />
        Building from atomic-level components (Typography, Spacing, Shadow specifications), we created Molecules and Organisms where real components took shape. Components built on Base UI or created from scratch for maximum customization, with Material UI for complex elements.
        <br />
        <figure>
          <img src={p00} alt="Our earliest attempt at reimagining the Orbit Application, which is deprecated." style={{ width: '80%', height: 'auto' }}/>
          <figcaption>Our earliest attempt at reimagining the Orbit Application, which is deprecated.</figcaption>
        </figure>
        <br />
        The redesign looked contemporary with rounded corners, improved spacing, and refined color treatment. We felt we'd successfully addressed the "outdated" feedback from user research.
        <br /><br />
        <h5>Stage 3: The Pivot</h5>
        <p>
          After presenting the first iteration, team feedback revealed a critical problem: we'd modernized the aesthetic while maintaining the old paradigm. The interface still buried critical information in nested forms, still required hierarchical navigation, and still forced users through identical workflows regardless of their role.
          <br /><br />
          We'd made forms prettier only, but not necessarily <b>better</b>.
          <br/><br />
          During this stage, we explored various navigation patterns (sidebars, breadcrumbs, traditional menus) trying to improve the hierarchy. But each attempt reinforced the same problem.
        </p>
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
        <br/>
        <p>
          Essentially, users don't need better access to the same forms. They need immediate access to the data that matters for their specific role. A logistics coordinator monitoring shipments needs completely different information than a warehouse manager tracking inventory. One-size-fits-all navigation would never solve this. This means we would needed to fundamentally rethink about information architecture, not just make the same things prettier.
        </p>
        <br /><br />
        <h5>Stage 4: Second Design Iteration & Implementation</h5>
        <p>
          Instead of hierarchical navigation through forms, we pivoted to a customizable dashboard system where users build workspaces tailored to their needs. The users can create widgets integrated with backend business logic (a search, a Power BI report, a datatable, etc.) with customizable sizes and positions within flexible grid system. They can then save dashboard layouts for consistent workflows in the future.
        </p>
        <br /><br />
        <p>
          This approach meant redesigning our component system for modular, data-focused interactions rather than form-based inputs. Following atomic design principles with our established foundations, we built components optimized for widget-based interactions:
        </p>
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
        </div>
        <br />
        These components were built on Base UI or created from scratch for maximum style customization, with Material UI for complex elements. Each component designed for both light and dark themes.
        <br /><br />
        I implemented the widget-based dashboard using React/TypeScript in an Nx monorepo with Redux for centralized state management. Built drag-and-drop functionality with react-grid-layout, enabling users to arrange workspaces exactly as needed.
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
      <br />
      <p>
        I built 15+ enterprise-grade UI components including:
        <ul className={styles['paragraph-list']}>
          <li><u>Input components</u>: input text, multi-input, search input, multi-search input with filtering</li>
          <li><u>Selection controls</u>: radio groups, checkbox groups, switches</li>
          <li><u>Feedback elements</u>: modals, banners, toasts, popovers</li>
          <li><u>Navigation</u>: dropdowns, tags, multi-buttons</li>
          <li><u>Data display</u>: dashboard widgets, data tables with sorting/filtering</li>
        </ul>
      </p>
      </div>
      <div slot='subsection'>
        <span slot='title'>3D Computer Graphics</span>
        <p>
          Inspired by the logo of Armada Supply Chain Solutions, I created a 3D animated background using Three.js featuring triangular tessellations with location-based color mapping. This not only enhances the visual appeal of the dashboard but also provides a modern and dynamic user experience.
          <br />
          <video controls width="600" style={{ marginTop: '1rem' }}>
            <source src={v}></source>
          </video>
          <br />
          The positions, sizes, and the colors of the triangles are all procedurally generated randomly. This creates a unique and engaging visual effect that complements the overall design of the dashboard. Users can toggle the dynamic background based on preference, ensuring the feature enhances rather than distracts from primary workflows.
        </p>
      </div>

      <div slot='subsection'>
        <span slot='title'>Side Mission: Modern LLM Research</span>
        <p>
          Besides the Designing and Implementation of the Orbit UI library, I also conducted an experiment on the capabilities of modern Large Language Models (LLMs) in frontend development, evaluating some of the most well-known models by assigning them typical frontend development tasks, including creating React components, debugging code, and optimizing performance. (Anything after page 14 is Appendix, which includes the actual code snippets generated by the models.)
        </p>
        <br />
        <Button label='View LLM research report' type='primary' onClick={() => window.open('/report.pdf', '_blank', 'noopener,noreferrer')} />
      </div>

      <div slot='subsection'>
        <span slot='title'>Impact</span>
        <p>
          Employee validation sessions confirmed the redesign as significant improvement over legacy interface. The widget-based approach fundamentally solved the core UX problem: enabling users to customize workspaces for their specific roles and workflows rather than forcing everyone through identical hierarchical forms.
          <br /><br />
          While formal metrics testing wasn't completed before internship concluded, the foundation established enables continued development toward production deployment. Created comprehensive documentation and component specifications for engineering team to maintain and extend the design system.
        </p>
      </div>
    </ProjectDisplay>
  );
}

export default Armada;



