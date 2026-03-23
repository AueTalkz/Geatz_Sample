import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {

  useScrollReveal();

  return (
    <>
      <Hero />
      
      {/* Divisions Side-by-Side */}
      <section className="division-section">
        <div className="container">
          <div className="grid-container two-cols">
            {/* GDz Column */}
            <div className="glass-card blue-glow reveal-left" style={{ textAlign: 'center', padding: '60px 40px' }}>
              <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '25px' }}>
                Geatz <span className="gradient-text-blue">Devolperz</span>
              </h2>
              <p className="section-desc" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                A Department in GGz where Development phases, UX & UI are meticulously designed for clients.
              </p>
              <div className="hero-buttons" style={{ marginTop: '50px', gap: '20px' }}>
                <Link to="/gdz" className="btn btn-primary" style={{ minWidth: '160px' }}>Detailed View</Link>
                <a href="#contact" className="btn btn-outline" style={{ minWidth: '160px' }}>Contact</a>
              </div>
            </div>

            {/* GEz Column */}
            <div className="glass-card pink-glow reveal-right" style={{ textAlign: 'center', padding: '60px 40px' }}>
              <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '25px' }}>
                Geatz <span className="gradient-text-pink">Entertainmentz</span>
              </h2>
              <p className="section-desc" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                A Department in GGz where Content Creation & related stuff like Content Shoots, Scripts, Writing.
              </p>
              <div className="hero-buttons" style={{ marginTop: '50px', gap: '20px' }}>
                <Link to="/gez" className="btn btn-primary" style={{ minWidth: '160px' }}>Detailed View</Link>
                <a href="#contact" className="btn btn-outline" style={{ minWidth: '160px' }}>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Team />
      <Contact />
    </>
  );
}


