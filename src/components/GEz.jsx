import { Link } from 'react-router-dom';
import Seo from './Seo';

export default function GEz() {
  return (
    <section id="gez" className="division-section">
      <Seo 
        title="GEz - Cinematic Content Creation" 
        description="High-end content creation, video editing, and production by GEz." 
        keywords="content creation, video editing, script writing, photography"
      />
      <div className="container">
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Geatz <span className="gradient-text-pink">Entertainmentz</span>
          </h2>
          <p className="section-desc">
            Breathtaking visuals. Compelling narratives. We bridge the gap between creative vision and digital masterpiece.
          </p>
        </div>

        <div className="grid-container two-cols">
          {/* Main Pillars */}
          <div className="glass-card pink-glow reveal-left">
            <div className="card-icon pink-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3>Production & Motion</h3>
            <p className="card-text-sm">Cinematic shooting, narrative scriptwriting, and high-impact motion creation designed to captivate your audience instantly.</p>
          </div>

          <div className="glass-card purple-glow reveal-right">
            <div className="card-icon purple-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-5.94 5.94"></path>
              </svg>
            </div>
            <h3>Creative & Design</h3>
            <p className="card-text-sm">Strategic design consulting, brand-defining posters, and industry-leading thumbnail architecture for digital creators.</p>
          </div>
        </div>
        
        <div className="cta-container reveal-up">
          <div className="glass-card cta-card-pink">
            <div className="cta-content">
              <h3>Have a vision we can capture?</h3>
              <p>Everything from storyboarding to the final edit, we create content that speaks to your audience through high-end production.</p>
              <div className="process-mini-pink">
                <div className="process-step-pink"><span>1</span> Ideation</div>
                <div className="process-step-pink"><span>2</span> Production</div>
                <div className="process-step-pink"><span>3</span> Post-Design</div>
              </div>
              <Link to="/start-a-project" className="btn btn-primary-pink btn-glow-pink">Start a Project</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
