import styles from './app.module.scss';
import Column from "../components/column/column";
import Header from "../components/header/header";
import HomePage from '../pages/home-page/home-page';
import AboutPage from '../pages/about-page/about-page';
import GigsPage from '../pages/gigs-page/gigs-page';
import ProjectsPage from '../pages/projects-page/projects-page';
import Disco from '../pages/projects-page/disco/disco';
import Armada from '../pages/projects-page/armada/armada';
import Planets from '../pages/projects-page/planets/planets';
import ArtistStatement from '../pages/projects-page/planets/artist-statement/artist-statement';
import ContactPage from '../pages/contact-page/contact-page';

import { Link, Route, Routes, useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();
  console.log('Current location:', location.pathname);
  
  // Check if we're on the onestopmoments route or any of its sub-routes
  const isOnestopmoments = location.pathname.startsWith('/onestopmoments');
  
  // If on onestopmoments, redirect to the actual static HTML
  if (isOnestopmoments) {
    window.location.href = '/onestopmoments/welcome/index.html';
    return null;
  }
  
  return (
    <div>
      <div className={styles.app}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Column>
            <Link slot="item" to="/">home</Link>
            <Link slot="item" to="/about">about</Link>
            <Link slot="item" to="/projects">projects</Link>
            <Link slot="item" to="/gigs">gigs</Link>
            <Link slot='item' to="/contact">contact</Link>
          </Column>
          <div style={{ margin: 'none 1rem', padding: '1rem', width: '80%' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gigs" element={<GigsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/disco" element={<Disco />} />
              <Route path="/projects/armada" element={<Armada />} />
              <Route path="/projects/planets" element={<Planets />} />
              <Route path="/projects/planets/artist-statement" element={<ArtistStatement />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


