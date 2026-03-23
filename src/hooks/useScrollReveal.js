import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal-fade, .reveal-up, .reveal-left, .reveal-right'
    );

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: once revealed, unobserve if you don't want it to hide again
          // observer.unobserve(entry.target);
        }
      });
    };

    const revealOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);
}
