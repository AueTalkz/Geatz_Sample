import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from '../components/Magnetic';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 5%'
    }}>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ fontSize: '15rem', fontWeight: 900, opacity: 0.1, position: 'absolute' }}
      >
        404
      </motion.h1>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Lost in Space?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '1.2rem' }}>
          It looks like you've reached a dimension that doesn't exist.
        </p>
        <Magnetic>
          <Link to="/" className="btn btn-primary btn-glow">
            Return to Reality
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}
