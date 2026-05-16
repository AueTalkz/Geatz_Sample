import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Magnetic from '../components/Magnetic';
import Testimonials from '../components/Testimonials';
import ProjectShowcase from '../components/ProjectShowcase';
import Newsletter from '../components/Newsletter';
import TiltCard from '../components/TiltCard';
import Globe3D from '../components/Globe3D';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Home() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

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
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ cursor: 'pointer' }}
            >
              <Link to="/gdz" style={{ textDecoration: 'none', color: 'inherit' }}>
                <TiltCard className="glass-card blue-glow division-card" style={{ textAlign: 'center', minHeight: isMobile ? 'auto' : '550px' }}>
                  <div style={{ height: isMobile ? '140px' : '180px', marginBottom: isMobile ? '10px' : '20px' }}>
                    <Globe3D color="#2563eb" height={isMobile ? '140px' : '180px'} />
                  </div>
                  <h2 className="section-title" style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', marginBottom: '15px' }}>
                    Geatz <span className="gradient-text-blue">Developerz</span>
                  </h2>
                  <p className="section-desc" style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.5', margin: '0 auto 25px', maxWidth: '350px' }}>
                    A Department in GGz where Development phases, UX & UI are meticulously designed for clients.
                  </p>
                  <div className="hero-buttons" style={{ gap: '10px', justifyContent: 'center', marginTop: 'auto' }}>
                    <Magnetic>
                      <span className="btn btn-primary" style={{ minWidth: '130px', padding: '12px 20px', fontSize: '0.9rem' }}>Detailed View</span>
                    </Magnetic>
                    <Magnetic>
                      <a href="#contact" className="btn btn-outline" style={{ minWidth: '130px', padding: '12px 20px', fontSize: '0.9rem' }} onClick={(e) => e.stopPropagation()}>Contact</a>
                    </Magnetic>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>

            {/* GEz Column */}
            <motion.div 
              variants={cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ cursor: 'pointer' }}
            >
              <Link to="/gez" style={{ textDecoration: 'none', color: 'inherit' }}>
                <TiltCard className="glass-card pink-glow division-card" style={{ textAlign: 'center', minHeight: isMobile ? 'auto' : '550px' }}>
                  <div style={{ height: isMobile ? '140px' : '180px', marginBottom: isMobile ? '10px' : '20px' }}>
                    <Globe3D color="#db2777" height={isMobile ? '140px' : '180px'} />
                  </div>
                  <h2 className="section-title" style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', marginBottom: '15px' }}>
                    Geatz <span className="gradient-text-pink">Entertainmentz</span>
                  </h2>
                  <p className="section-desc" style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.5', margin: '0 auto 25px', maxWidth: '350px' }}>
                    A Department in GGz where Content Creation & related stuff like Content Shoots, Scripts, Writing.
                  </p>
                  <div className="hero-buttons" style={{ gap: '10px', justifyContent: 'center', marginTop: 'auto' }}>
                    <Magnetic>
                      <span className="btn btn-primary" style={{ minWidth: '130px', padding: '12px 20px', fontSize: '0.9rem' }}>Detailed View</span>
                    </Magnetic>
                    <Magnetic>
                      <a href="#contact" className="btn btn-outline" style={{ minWidth: '130px', padding: '12px 20px', fontSize: '0.9rem' }} onClick={(e) => e.stopPropagation()}>Contact</a>
                    </Magnetic>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectShowcase />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
}
