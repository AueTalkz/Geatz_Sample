import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import GDzPage from './pages/GDzPage';
import GEzPage from './pages/GEzPage';
import Projects from './pages/Projects';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import PageWrapper from './components/PageWrapper';
import FloatingBackground from './components/FloatingBackground';

function App() {
  const location = useLocation();
  
  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      <FloatingBackground />

      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/gdz" element={<PageWrapper><GDzPage /></PageWrapper>} />
          <Route path="/gez" element={<PageWrapper><GEzPage /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
