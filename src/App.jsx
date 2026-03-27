import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import GDzPage from './pages/GDzPage';
import GEzPage from './pages/GEzPage';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <ScrollProgress />
      <div className="bg-mesh">
        <div className="bg-orb orb-purple"></div>
        <div className="bg-orb orb-blue"></div>
        <div className="bg-orb orb-pink"></div>
        <div className="noise-overlay"></div>
      </div>
      
      <CustomCursor />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gdz" element={<GDzPage />} />
        <Route path="/gez" element={<GEzPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
