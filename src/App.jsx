import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';
import ErrorBoundary from './components/ErrorBoundary';
import Seo from './components/Seo';

import InteractiveBackground from './components/InteractiveBackground';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const GDzPage = lazy(() => import('./pages/GDzPage'));
const GEzPage = lazy(() => import('./pages/GEzPage'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const StartProjectPage = lazy(() => import('./pages/StartProjectPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const EstimatorPage = lazy(() => import('./pages/EstimatorPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { auth } = await import('./firebase');
      const { onAuthStateChanged } = await import('firebase/auth');
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoading(false);
      });
    };
    checkAuth();
  }, []);

  if (loading) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Auth...</div>;
  if (!user) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h2>Admin Access Required</h2>
    <p>Please login to continue.</p>
    <a href="/admin/login" className="btn btn-primary" style={{ marginTop: '20px' }}>Login</a>
  </div>;

  return children;
};

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

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const SceneFallback = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: 'radial-gradient(circle at center, #0a0a1a 0%, #050505 100%)'
  }} />
);

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <Seo />
      <ScrollToTop />
      <ScrollProgress />
      
      <ErrorBoundary silent fallback={<SceneFallback />}>
        <InteractiveBackground />
      </ErrorBoundary>
      
      <div className="noise-overlay"></div>
      
      <CustomCursor />
      <BackToTop />
      <ChatWidget />
      
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
              <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
              <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
              <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
              <Route path="/admin/*" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
              <Route path="/admin/login" element={<PageTransition><AdminPage loginOnly /></PageTransition>} />
              <Route path="/portal/*" element={<PageTransition><ClientPortal /></PageTransition>} />
              <Route path="/portal/login" element={<PageTransition><ClientPortal loginOnly /></PageTransition>} />
              <Route path="/estimate" element={<PageTransition><EstimatorPage /></PageTransition>} />
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
