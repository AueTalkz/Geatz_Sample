import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Seo from './components/Seo';

import Scene3D from './components/Scene3D';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const GDzPage = lazy(() => import('./pages/GDzPage'));
const GEzPage = lazy(() => import('./pages/GEzPage'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const StartProjectPage = lazy(() => import('./pages/StartProjectPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Skeleton loader for Suspense fallback
const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ textAlign: 'center' }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--brand-blue), var(--brand-purple))',
          margin: '0 auto 20px',
          filter: 'blur(1px)',
        }}
      />
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '0.85rem', 
        letterSpacing: '2px',
        fontWeight: 600,
      }}>
        LOADING
      </p>
    </motion.div>
  </div>
);

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
      <Seo />
      <ScrollToTop />
      <ScrollProgress />
      
      <ErrorBoundary fallbackMessage="The 3D scene encountered an issue. The rest of the site still works.">
        <Scene3D />
      </ErrorBoundary>
      
      <div className="noise-overlay"></div>
      
      <CustomCursor />
      <BackToTop />
      
      <Navbar />
      
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/gdz" element={<PageTransition><GDzPage /></PageTransition>} />
              <Route path="/gez" element={<PageTransition><GEzPage /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
              <Route path="/start-a-project" element={<PageTransition><StartProjectPage /></PageTransition>} />
              <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
