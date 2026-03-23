import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Decorative Glow */}
      <div className="hero-glow"></div>
      
      <div className="hero-content">
        <div className="hero-badge reveal-fade active">The Trendy GenZ Group</div>
        
        <h1 className="hero-title reveal-up active">
          Welcome to<br /> 
          <span className="gradient-text-blue">Geatz</span> <span className="gradient-text-pink">Groupz</span>
        </h1>
        
        <p className="hero-subtitle reveal-up active">
          Empowering brands through high-performance development and cinematic media creation. 
          Your vision, our architecture.
        </p>
        
        <div className="hero-buttons reveal-up active">
          <Link to="/services" className="btn btn-primary btn-glow">
            Explore Our World
          </Link>
          <a href="#contact" className="btn btn-outline">
            Start Your Journey
          </a>
        </div>

        <div className="scroll-indicator reveal-fade active">
          <span>Scroll to Discover</span>
          <div className="scroll-arrow">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

