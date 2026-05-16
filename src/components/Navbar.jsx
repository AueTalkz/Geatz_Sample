import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToTarget(targetId), 100);
    } else {
      scrollToTarget(targetId);
    }
  };

  const scrollToTarget = (targetId) => {
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbar = document.getElementById('navbar');
      const navHeight = navbar.offsetHeight - 20;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { to: '/gdz', label: 'GDz', type: 'link' },
    { to: '/gez', label: 'GEz', type: 'link' },
    { to: '/projects', label: 'Projects', type: 'link' },
    { to: '/team', label: 'Team', type: 'link' },
    { href: '#contact', label: 'Contact', type: 'anchor' },
  ];

  // Mobile drawer overlay + panel
  const drawerVariants = {
    closed: { opacity: 0, backdropFilter: 'blur(0px)' },
    open: { opacity: 1, backdropFilter: 'blur(12px)' },
  };

  const panelVariants = {
    closed: { y: '100%', opacity: 0 },
    open: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 30, stiffness: 300 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <>
      {/* Desktop + Mobile bottom bar */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`} 
        id="navbar"
        aria-label="Main navigation"
        initial={{ y: 0, x: "-50%", opacity: 1 }}
        variants={{
          visible: { y: 0, x: "-50%", opacity: 1 },
          hidden: { y: "150%", x: "-50%", opacity: 0 },
        }}
        animate={hidden && !mobileOpen ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          <Link to="/" className="logo" onClick={() => scrollToTarget('#')} style={{ display: 'flex', alignItems: 'center' }} aria-label="Go to homepage">
            <img src={logo} alt="GGz Logo" style={{ height: '50px', width: 'auto', filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))' }} />
          </Link>

          {/* Desktop links */}
          <ul className="nav-links nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.label}>
                <Magnetic>
                  {item.type === 'link' ? (
                    <Link 
                      to={item.to} 
                      className={isActive(item.to) ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  )}
                </Magnetic>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger toggle */}
          <button 
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className={`hamburger-icon ${mobileOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="mobile-drawer-panel"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className="drawer-header">
                <Link to="/" className="drawer-logo" onClick={() => { setMobileOpen(false); scrollToTarget('#'); }}>
                  <img src={logo} alt="GGz Logo" style={{ height: '40px', width: 'auto' }} />
                </Link>
                <button 
                  className="drawer-close-btn"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Drawer nav items */}
              <nav className="drawer-nav" aria-label="Mobile navigation">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    {item.type === 'link' ? (
                      <Link
                        to={item.to}
                        className={`drawer-link ${isActive(item.to) ? 'drawer-link-active' : ''}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="drawer-link-label">{item.label}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="drawer-link"
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        <span className="drawer-link-label">{item.label}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <motion.div 
                className="drawer-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link 
                  to="/start-a-project" 
                  className="btn btn-primary btn-glow"
                  style={{ width: '100%', textAlign: 'center' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                </Link>
              </motion.div>

              {/* Drawer footer */}
              <motion.div 
                className="drawer-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="drawer-socials">
                  <a href="https://www.linkedin.com/company/geatz-groupz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/geatz_groupz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
                <p className="drawer-copyright">© {new Date().getFullYear()} Geatz Groupz</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
