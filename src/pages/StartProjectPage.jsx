import { useEffect } from 'react';
import Contact from '../components/Contact';
import PageWrapper from '../components/PageWrapper';

export default function StartProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <Contact />
      </div>
    </PageWrapper>
  );
}
