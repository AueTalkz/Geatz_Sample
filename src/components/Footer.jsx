import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    divisions: [
      { label: 'GDz Engineering', to: '/gdz' },
      { label: 'GEz Media', to: '/gez' },
    ],
    company: [
      { label: 'Our Projects', to: '/projects' },
      { label: 'Team GGz', to: '/team' },
      { label: 'Pricing & Tiers', to: '/pricing' },
      { label: 'Careers', to: '/careers' },
      { label: 'Start a Project', to: '/start-a-project' },
    ],
    support: [
      { label: 'FAQ', to: '/pricing' }, // FAQs are embedded in pricing
      { label: 'Sitemap', to: '/sitemap.xml', external: true },
      { label: 'Privacy Policy', to: '#' },
    ]
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (!email) return;

    try {
      // Logic for adding to Firestore subscribers collection
      const { db } = await import('../firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      await addDoc(collection(db, "subscribers"), {
        email: email,
        timestamp: serverTimestamp()
      });
      
      alert('Thank you for subscribing! Stay tuned.');
      e.target.reset();
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Subscription failed. Please try again.');
    }
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/geatz-groupz/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/geatz_groupz/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
  ];

  return (
    <footer className="new-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Top: Brand + Links grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-link">
              <img src={logo} alt="Geatz Groupz Logo" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <p className="footer-tagline">
              Empowering brands through high-performance development and cinematic media creation.
            </p>
            <div className="footer-social-row">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social-icon"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divisions column */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Divisions</h4>
            {footerLinks.divisions.map((link) => (
              <Link key={link.to} to={link.to} className="footer-nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company column */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Company</h4>
            {footerLinks.company.map((link) => (
              <Link key={link.to} to={link.to} className="footer-nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support column */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Support</h4>
            {footerLinks.support.map((link) => (
              link.external ? (
                <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="footer-nav-link">
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Newsletter column */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="footer-newsletter-desc">
              Get the latest updates on our projects and services.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="footer-newsletter-input"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe to newsletter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {currentYear} Geatz Groupz. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#contact">Contact</a>
            <span className="footer-dot">·</span>
            <a href="mailto:geatzgroupz@gmail.com">geatzgroupz@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
