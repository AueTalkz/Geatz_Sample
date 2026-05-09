import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Geatz Groupz" style={{ height: '80px', marginBottom: '1.5rem', display: 'block' }} />
            <p>Architecting the future of digital experiences through high-performance development and cinematic content.</p>
          </div>
          
          <div className="footer-links">
            <h3>Divisions</h3>
            <ul>
              <li><a href="/gdz">Geatz Developerz</a></li>
              <li><a href="/gez">Geatz Entertainmentz</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/geatz_groupz/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Geatz Groupz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
