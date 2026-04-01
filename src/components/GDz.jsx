export default function GDz() {
  return (
    <section id="gdz" className="division-section">
      <div className="container">
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Geatz <span className="gradient-text-blue">Devolperz</span>
          </h2>
          <p className="section-desc">
            A Department in GGz where Development phases, UX & UI are meticulously designed for clients and shared with unparalleled transparency.
          </p>
        </div>

        <div className="grid-container">
          {/* Development Types */}
          <div className="glass-card blue-glow reveal-left">
            <div className="card-icon blue-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Development Types</h3>
            <ul className="custom-list blue-list">
              <li>Front-end Dev</li>
              <li>Back-end Dev</li>
              <li>Full Stack Sites</li>
              <li>CRM Sites</li>
              <li>One-Page Sites</li>
              <li>WordPress Sites</li>
            </ul>
          </div>

          {/* Main Works */}
          <div className="glass-card cyan-glow reveal-up">
            <div className="card-icon cyan-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Other Services Provided</h3>
            <ul className="custom-list cyan-list">
              <li>E-Commerce Platforms</li>
              <li>Landing Pages</li>
              <li>Website SEO</li>
              <li>UX/UI Design</li>
              <li>CRM Sites</li>
              <li>WordPress Sites</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="glass-card teal-glow reveal-right">
            <div className="card-icon teal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Tech we specialize in</h3>
            <ul className="custom-list teal-list">
              <li>Full Stack Knowledge</li>
              <li>WordPress Mastery</li>
              <li>Vibe Coding</li>
              <li>No Code Dev</li>
            </ul>
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
              <a href="#contact" className="btn btn-primary btn-glow">Start a Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
