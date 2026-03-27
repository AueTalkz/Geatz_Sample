import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`} 
      id="navbar"
      initial={{ y: 0, x: "-50%", opacity: 1 }}
      variants={{
        visible: { y: 0, x: "-50%", opacity: 1 },
        hidden: { y: 100, x: "-50%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => scrollToTarget('#')}>
          <span className="logo-bold">GEATZ</span>
          <span className="logo-light">GROUPZ</span>
        </Link>
        <ul className="nav-links">
          <li className="mobile-only">
            <Magnetic>
              <Link to="/" onClick={() => scrollToTarget('#')} className="mobile-logo">
                <span className="logo-bold">G</span><span className="logo-light">G</span>
              </Link>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <Link to="/gdz">GDz</Link>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <Link to="/gez">GEz</Link>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <Link to="/projects">Projects</Link>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Team</a>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
            </Magnetic>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
