import { Link } from 'react-router-dom';
import Seo from './Seo';
import Globe3D from './Globe3D';
import { motion } from 'framer-motion';

export default function GDz() {
  return (
    <section id="gdz" className="division-detail-section">
      <Seo 
        title="GDz - Engineering Digital Futures" 
        description="Premium web development and UI/UX design by GDz." 
        keywords="web development, react, crm, full stack, agency"
      />
      
      <div className="division-hero">
        <div className="container">
          <div className="division-hero-content">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hero-globe-wrapper"
            >
              <Globe3D color="#2563eb" height="400px" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-text-center"
            >
              <h1 className="hero-title-lg">
                Geatz <span className="gradient-text-blue">Devolperz</span>
              </h1>
              <p className="hero-subtitle">
                Where high-fidelity engineering meets intuitive design. We build the digital infrastructure of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-grid reveal-up">
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Transparency</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">60fps</span>
            <span className="stat-label">Performance</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>

        <div className="grid-container three-cols">
          <div className="glass-card blue-glow">
            <div className="card-icon blue-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Core Engineering</h3>
            <p>Scalable Full-Stack solutions, custom CRM architectures, and robust WordPress ecosystems tailored for enterprise growth.</p>
          </div>

          <div className="glass-card blue-glow">
            <div className="card-icon blue-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Experience Design</h3>
            <p>High-conversion landing pages and immersive UI/UX that bridge the gap between technical vision and user reality.</p>
          </div>

          <div className="glass-card blue-glow">
            <div className="card-icon blue-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Global SEO</h3>
            <p>Data-driven optimization and speed-focused development to ensure your brand dominates the organic search landscape.</p>
          </div>
        </div>
        
        <div className="cta-section-simple">
          <h2 className="section-title">Ready to build?</h2>
          <p className="section-desc">Join the ecosystem and let's engineer something extraordinary together.</p>
          <div className="hero-buttons centered">
            <Link to="/start-a-project" className="btn btn-primary btn-lg">Launch Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
