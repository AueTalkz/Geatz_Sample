import { motion } from 'framer-motion';
import Team from '../components/Team';
import Globe3D from '../components/Globe3D';
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-globe-wrapper"
            >
              <Globe3D color="#a855f7" height="300px" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-text-center"
            >
              <h1 className="hero-title-lg">
                The <span className="gradient-text">Collective</span>
              </h1>
              <p className="hero-subtitle">
                United by a passion for high-fidelity digital experiences and cinematic excellence.
              </p>
            </motion.div>
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
