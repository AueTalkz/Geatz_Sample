import logo from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="new-footer">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src={logo} alt="GGz Logo" style={{ height: '45px', width: 'auto' }} />
            <span className="footer-logo-text">
              <span className="white-text">GEATZ</span> <span className="purple-text">GROUPZ</span>
            </span>
          </div>
          
          <div className="footer-links">
            <a href="https://www.instagram.com/geatz_groupz/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {year} Geatz Groupz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


