import { motion } from 'framer-motion';
import Team from '../components/Team';
import Seo from '../components/Seo';

export default function TeamPage() {
  return (
    <div className="team-page">
      <Seo 
        title="Our Team - The Geatz Groupz Collective" 
        description="Meet the minds behind Geatz Groupz. A collection of visionaries, engineers, and creators."
      />
      
      <div className="division-hero" style={{ minHeight: '50vh', background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%)' }}>
        <div className="container">
          <div className="division-hero-content">
            <div className="hero-globe-placeholder" style={{ height: '50px' }}></div>
            
            <div style={{ height: '100px' }}></div>
          </div>
        </div>
      </div>

      <Team />

      <div className="container" style={{ paddingBottom: '100px' }}>
        <div className="cta-section-simple">
          <h2 className="section-title">Want to join us?</h2>
          <p className="section-desc">We are always looking for visionary minds to expand our ecosystem.</p>
          <div className="hero-buttons centered">
            <a href="mailto:careers@geatz.in" className="btn btn-primary btn-lg">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}
