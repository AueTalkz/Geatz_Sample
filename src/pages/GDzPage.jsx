import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GDz from '../components/GDz';
import Projects from '../components/Projects';

export default function GDzPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <GDz />
      <Projects filter="gdz" />
    </div>
  );
}

