import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

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
    <section id="home" className="hero">
      <div className="hero-glow"></div>

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
          Empowering brands through high-performance development and cinematic media creation. Your
          vision, our architecture.
        </motion.p>

        <motion.div variants={itemVars} className="hero-buttons">
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

        <motion.div
          variants={itemVars}
          className="scroll-indicator"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll to Discover</span>
          <div className="scroll-arrow">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
