import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand">
            <img src={logo} alt="GGz Logo" style={{ height: '50px', width: 'auto' }} />
          </div>
          
          <div className="footer-links">
            <a href="https://www.linkedin.com/company/geatz-groupz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/geatz_groupz/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Geatz Groupz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
