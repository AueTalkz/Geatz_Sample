import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import logo from '../assets/logo.png';

export default function Hero() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="hero" style={{ paddingTop: '100px' }}>
      <div className="hero-glow"></div>

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          variants={containerVars}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={itemVars} className="hero-badge">
            The Trendy GenZ Group
          </motion.div>

          <motion.h1 variants={itemVars} className="hero-title">
            Welcome to
            <br />
            <span className="gradient-text-blue">Geatz</span>{' '}
            <span className="gradient-text-pink">Groupz</span>
          </motion.h1>

          <motion.p variants={itemVars} className="hero-subtitle">
            Empowering brands through high-performance development and cinematic media creation. Your vision, our architecture.
          </motion.p>

          <motion.div variants={itemVars} className="hero-buttons hero-btns-desktop">
            <Magnetic>
              <a href="#divisions" className="btn btn-primary btn-glow">
                Explore Our World
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-outline">
                Start Your Journey
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-logo-container"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            perspective: '1000px'
          }}
        >
          <motion.img 
            src={logo} 
            alt="GGz Logo" 
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              height: 'auto',
              filter: 'drop-shadow(0 0 30px rgba(37, 99, 235, 0.3))'
            }}
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
          }}
          />
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <span>Scroll to Discover</span>
        <div className="scroll-arrow">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
