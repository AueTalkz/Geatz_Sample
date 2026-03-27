import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Nexus Digital',
    text: 'Geatz Groupz transformed our outdated platform into a cinematic experience. The GDz team is incredibly fast and intuitive.',
    avatar: 'S'
  },
  {
    name: 'David Chen',
    role: 'Marketing Lead, Peak Flow',
    text: 'Working with GEz was a game-changer for our social media. The content shoots and edits are unlike anything I’ve seen.',
    avatar: 'D'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, EcoSphere',
    text: 'The combination of high-end development and cinematic storytelling makes GGz unique in the industry.',
    avatar: 'E'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="division-section" style={{ background: 'rgba(255, 255, 255, 0.02)', position: 'relative' }}>
      <div className="container">
        <div className="division-header">
          <h2 className="section-title">Global <span className="gradient-text">Trust</span></h2>
        </div>

        <div className="glass-card" style={{ padding: '80px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', left: '40px', fontSize: '10rem', opacity: 0.05, fontWeight: 900 }}>“</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="member-avatar" 
                style={{ 
                  margin: '0 auto 40px', 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-blue))',
                  fontSize: '1.8rem'
                }}
              >
                {testimonials[index].avatar}
              </div>
              <p style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '40px', lineHeight: 1.5 }}>
                "{testimonials[index].text}"
              </p>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{testimonials[index].name}</h4>
              <div style={{ color: 'var(--brand-cyan)', fontSize: '0.9rem', fontWeight: 600 }}>
                {testimonials[index].role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '60px' }}>
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: i === index ? 'var(--brand-cyan)' : 'rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
