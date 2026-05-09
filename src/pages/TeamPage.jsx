import { motion } from 'framer-motion';
import Team from '../components/Team';
import Seo from '../components/Seo';

export default function TeamPage() {
  return (
    <div className="team-page" style={{ paddingTop: '100px' }}>
      <Seo 
        title="Our Team - The Geatz Groupz Collective" 
        description="Meet the minds behind Geatz Groupz. A collection of visionaries, engineers, and creators."
      />
      
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
