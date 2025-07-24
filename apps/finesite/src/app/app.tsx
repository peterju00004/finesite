import styles from './app.module.scss';
import Column from "../components/column/column";
import Header from "../components/header/header";
import AboutPage from '../pages/about-page/about-page';
import ProjectsPage from '../pages/projects-page/projects-page';
import AudioDesign from '../pages/projects-page/audio-design/audio-design';
import CodingProjects from '../pages/projects-page/coding-projects/coding-projects';
import DigitalNarrative from '../pages/projects-page/digital-narrative/digital-narrative';
import OtherProjects from '../pages/projects-page/other-projects/other-projects';
import Disco from '../pages/projects-page/digital-narrative/disco/disco';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div>
      <div className={styles.app}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Column>
            <Link slot="item" to="/">about</Link>
            <Link slot="item" to="/projects">projects</Link>
            <Link slot="item" to="/in-between">in between</Link>
            <Link slot='item' to="/contact">contact</Link>
          </Column>
          <div style={{ margin: 'none 1rem', padding: '1rem', width: '80%' }}>
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/coding" element={<CodingProjects />} />
              <Route path="/projects/digital-narrative" element={<DigitalNarrative />} />
              <Route path="/projects/audio-design" element={<AudioDesign />} />
              <Route path="/projects/other" element={<OtherProjects />} />
              <Route path="/projects/digital-narrative/disco" element={<Disco />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


