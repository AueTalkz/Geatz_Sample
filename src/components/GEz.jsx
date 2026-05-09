import { Link } from 'react-router-dom';
import Seo from './Seo';
import Globe3D from './Globe3D';
import { motion } from 'framer-motion';

export default function GEz() {
  return (
    <section id="gez" className="division-detail-section">
      <Seo 
        title="GEz - Cinematic Content Creation" 
        description="High-end content creation, video editing, and production by GEz." 
        keywords="content creation, video editing, script writing, photography"
      />
      
      <div className="division-hero pink-theme">
        <div className="container">
          <div className="division-hero-content">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hero-globe-wrapper"
            >
              <Globe3D color="#db2777" height="400px" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-text-center"
            >
              <h1 className="hero-title-lg">
                Geatz <span className="gradient-text-pink">Entertainmentz</span>
              </h1>
              <p className="hero-subtitle">
                Breathtaking visuals. Compelling narratives. We bridge the gap between creative vision and digital masterpiece.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-grid reveal-up pink-stats">
          <div className="stat-item">
            <span className="stat-num">4K</span>
            <span className="stat-label">Production</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">∞</span>
            <span className="stat-label">Creativity</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>

        <div className="grid-container two-cols">
          <div className="glass-card pink-glow">
            <div className="card-icon pink-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3>Production & Motion</h3>
            <p>Cinematic shooting, narrative scriptwriting, and high-impact motion creation designed to captivate your audience instantly with professional-grade quality.</p>
          </div>

          <div className="glass-card pink-glow">
            <div className="card-icon pink-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-5.94 5.94"></path>
              </svg>
            </div>
            <h3>Creative & Design</h3>
            <p>Strategic design consulting, brand-defining posters, and industry-leading thumbnail architecture for digital creators looking to stand out.</p>
          </div>
        </div>
        
        <div className="cta-section-simple">
          <h2 className="section-title">Have a vision?</h2>
          <p className="section-desc">From storyboarding to the final edit, we create content that speaks to your audience.</p>
          <div className="hero-buttons centered">
            <Link to="/start-a-project" className="btn btn-primary-pink btn-lg">Start a Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
