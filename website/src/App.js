import SideNav from './components/SideNav';
import About from './components/About';
import { Awards, Education, Experience, Interests, Skills } from './components/ResumeSections';
import Work from './components/Work';
import './styles/App.css';

export default function App() {
  return (
    <div className="site">
      <SideNav />
      <div className="site-main">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
        <Work />
        <footer>
          <div className="footer-copy">© 2025-2026 Finxz</div>
        </footer>
      </div>
    </div>
  );
}
