import { Link } from 'react-router-dom';
import Seo from './Seo';

export default function GDz() {
  return (
    <section id="gdz" className="division-section">
      <Seo 
        title="GDz - Engineering Digital Futures" 
        description="Premium web development and UI/UX design by GDz." 
        keywords="web development, react, crm, full stack, agency"
      />
      <div className="container">
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Geatz <span className="gradient-text-blue">Devolperz</span>
          </h2>
          <p className="section-desc">
            Where architecture meets intuition. We engineer high-performance platforms with uncompromising transparency.
          </p>
        </div>

        <div className="grid-container">
          {/* Main Pillars */}
          <div className="glass-card blue-glow reveal-left">
            <div className="card-icon blue-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Core Engineering</h3>
            <p className="card-text-sm">Scalable Full-Stack solutions, custom CRM architectures, and robust WordPress ecosystems tailored for growth.</p>
          </div>

          <div className="glass-card cyan-glow reveal-up">
            <div className="card-icon cyan-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Experience Design</h3>
            <p className="card-text-sm">High-conversion landing pages and immersive UI/UX that bridge the gap between vision and user reality.</p>
          </div>

          <div className="glass-card teal-glow reveal-right">
            <div className="card-icon teal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Performance SEO</h3>
            <p className="card-text-sm">Data-driven optimization and speed-focused development to ensure your brand dominates the organic landscape.</p>
          </div>
        </div>
        
        <div className="cta-container reveal-up">
          <div className="glass-card cta-card">
            <div className="cta-content">
              <h3>Ready to build your digital future?</h3>
              <p>From initial UX discovery to full-stack deployment, we bring your vision to life with precision and transparency.</p>
              <div className="process-mini">
                <div className="process-step"><span>1</span> Consultation</div>
                <div className="process-step"><span>2</span> UI/UX Design</div>
                <div className="process-step"><span>3</span> Development</div>
              </div>
              <Link to="/start-a-project" className="btn btn-primary btn-glow">Start a Project</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
