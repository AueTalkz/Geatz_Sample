import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Magnetic from '../components/Magnetic';
import Testimonials from '../components/Testimonials';
import ProjectShowcase from '../components/ProjectShowcase';

export default function Home() {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <>
      <Hero />
      
      {/* Divisions Side-by-Side */}
      <section id="divisions" className="division-section">
        <div className="container">
          <div className="grid-container two-cols">
            
            {/* GDz Column */}
            <motion.div 
              className="glass-card blue-glow division-card" 
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02, translateY: -10 }}
            >
              <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '25px' }}>
                Geatz <span className="gradient-text-blue">Devolperz</span>
              </h2>
              <p className="section-desc" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                A Department in GGz where Development phases, UX & UI are meticulously designed for clients.
              </p>
              <div className="hero-buttons" style={{ marginTop: '50px', gap: '20px' }}>
                <Magnetic>
                  <Link to="/gdz" className="btn btn-primary" style={{ minWidth: '160px' }}>Detailed View</Link>
                </Magnetic>
                <Magnetic>
                  <a href="#contact" className="btn btn-outline" style={{ minWidth: '160px' }}>Contact</a>
                </Magnetic>
              </div>
            </motion.div>

            {/* GEz Column */}
            <motion.div 
              className="glass-card pink-glow division-card" 
              variants={cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02, translateY: -10 }}
            >
              <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '25px' }}>
                Geatz <span className="gradient-text-pink">Entertainmentz</span>
              </h2>
              <p className="section-desc" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                A Department in GGz where Content Creation & related stuff like Content Shoots, Scripts, Writing.
              </p>
              <div className="hero-buttons" style={{ marginTop: '50px', gap: '20px' }}>
                <Magnetic>
                  <Link to="/gez" className="btn btn-primary" style={{ minWidth: '160px' }}>Detailed View</Link>
                </Magnetic>
                <Magnetic>
                  <a href="#contact" className="btn btn-outline" style={{ minWidth: '160px' }}>Contact</a>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Team />
      <ProjectShowcase />
      <Testimonials />
      <Contact />
    </>
  );
}
