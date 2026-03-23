import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GDz from '../components/GDz';
import GEz from '../components/GEz';

export default function Services() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on navigation
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '-50px', position: 'relative', zIndex: 10 }}>
        <h1 className="hero-title reveal-fade active" style={{ marginTop: '100px', marginBottom: '20px' }}>
          All <span className="gradient-text">Services</span>
        </h1>
        <p className="section-desc reveal-fade active" style={{ maxWidth: '600px' }}>
          Explore the full scope of what Geatz Groupz has to offer.
        </p>
      </div>

      {/* Render the extracted full components */}
      <GDz />
      <GEz />
    </div>
  );
}
