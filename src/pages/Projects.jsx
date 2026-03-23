import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectsComponent from '../components/Projects';

export default function Projects() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on navigation
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>


      <ProjectsComponent />
    </div>
  );
}
