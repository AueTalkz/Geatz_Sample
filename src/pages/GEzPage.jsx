import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GEz from '../components/GEz';
import Projects from '../components/Projects';

export default function GEzPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <GEz />
      <Projects filter="gez" />
    </div>
  );
}

