export default function GEz() {
  return (
    <section id="gez" className="division-section">
      <div className="container">
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Geatz <span className="gradient-text-pink">Entertainmentz</span>
          </h2>
          <p className="section-desc">
            A Department in GGz where Content Creation & related stuff like Content Shoots, Scripts, Writing, Editing, and Thumbnail Designing are masterfully crafted for clients.
          </p>
        </div>

        <div className="grid-container two-cols">
          {/* Content Creation */}
          <div className="glass-card pink-glow reveal-left">
            <div className="card-icon pink-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3>Content & Production</h3>
            <ul className="custom-list pink-list">
              <li>Content Creation</li>
              <li>Content Shooting</li>
              <li>Script Writing</li>
              <li>Content Writing</li>
              <li>Content Editing</li>
            </ul>
          </div>

          {/* Post Production & Design */}
          <div className="glass-card purple-glow reveal-right">
            <div className="card-icon purple-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-5.94 5.94"></path>
              </svg>
            </div>
            <h3>Design & Editing</h3>
            <ul className="custom-list purple-list">
              <li>Design Consulting</li>
              <li>Poster Design</li>
              <li>Thumbnail Design</li>
              <li>Video Editing</li>
              <li>Content Editing</li>
            </ul>
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
              <a href="#contact" className="btn btn-primary-pink btn-glow-pink">Start a Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
