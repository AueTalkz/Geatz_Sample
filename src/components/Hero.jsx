import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Magnetic from './Magnetic';
import worldAnimation from '../assets/world_animation.json';

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

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '50px' }}>
        <motion.div
          className="hero-content"
          variants={containerVars}
          initial="initial"
          animate="animate"
          style={{ textAlign: 'left' }}
        >
          <motion.div variants={itemVars} className="hero-badge" style={{ marginLeft: 0 }}>
            The Trendy GenZ Group
          </motion.div>

          <motion.h1 variants={itemVars} className="hero-title" style={{ textAlign: 'left', marginLeft: 0 }}>
            Welcome to
            <br />
            <span className="gradient-text-blue">Geatz</span>{' '}
            <span className="gradient-text-pink">Groupz</span>
          </motion.h1>

          <motion.p variants={itemVars} className="hero-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>
            Empowering brands through high-performance development and cinematic media creation. Your
            vision, our architecture.
          </motion.p>

          <motion.div variants={itemVars} className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
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

          {/* Moved scroll indicator to bottom center instead of inside the grid column if needed, or keep it left */}
        </motion.div>

        <motion.div 
          className="hero-lottie"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ maxWidth: '500px' }}
        >
          {/* We'll use a direct CDN URL for a placeholder, or a simple path */}
          <div style={{ height: '300px', background: 'radial-gradient(circle, var(--brand-blue) 0%, transparent 70%)', opacity: 0.3 }}></div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
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
