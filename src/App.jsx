import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
import StartProjectPage from './pages/StartProjectPage';
import TeamPage from './pages/TeamPage';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import Scene3D from './components/Scene3D';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollToTop />
      <ScrollProgress />
      <Scene3D />
      <div className="noise-overlay"></div>
      
      <CustomCursor />
      <BackToTop />
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/gdz" element={<PageTransition><GDzPage /></PageTransition>} />
          <Route path="/gez" element={<PageTransition><GEzPage /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/start-a-project" element={<PageTransition><StartProjectPage /></PageTransition>} />
          <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
