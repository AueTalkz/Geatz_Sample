import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => scrollToTarget('#')}>
          <span className="logo-bold">GEATZ</span>
          <span className="logo-light">GROUPZ</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/gdz">
              GDz
            </Link>
          </li>
          <li>
            <Link to="/gez">
              GEz
            </Link>
          </li>

          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>
              Team
            </a>
          </li>

          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
