import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

import ecommerceImg from '../assets/projects/ecommerce.png';
import brandImg from '../assets/projects/brand.png';
import saasImg from '../assets/projects/saas.png';
import promoImg from '../assets/projects/promo.png';

const projects = [
  {
    id: 'e-commerce-redesign',
    title: 'E-Commerce Redesign',
    category: 'GDz (Development)',
    imageColor: '#06b6d4',
    image: ecommerceImg
  },
  {
    id: 'brand-identity-launch',
    title: 'Brand Identity Launch',
    category: 'GEz (Media)',
    imageColor: '#db2777',
    image: brandImg
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'GDz (Development)',
    imageColor: '#2563eb',
    image: saasImg
  },
  {
    id: 'cinematic-promo-video',
    title: 'Cinematic Promo Video',
    category: 'GEz (Media)',
    imageColor: '#9333ea',
    image: promoImg
  },
];

export default function ProjectShowcase() {
  const targetRef = useRef(null);
  const { width: windowWidth } = useWindowSize();

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const rawX = useTransform(scrollYProgress, [0.2, 0.8], ['1%', '-75%']);
  const springX = useSpring(rawX, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Only apply transform on desktop
  const x = isMobile ? undefined : springX;

  if (isMobile) {
    return (
      <section className="division-section" id="showcase">
        <div className="container">
          <div className="division-header" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">
              Our <span className="gradient-text">Showcase</span>
            </h2>
            <p className="section-desc">
              Crafting premium digital experiences through development and media.
            </p>
          </div>
          <div className="grid-container">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="showcase-item"
              >
                <Link to={`/project/${project.id}`} className="showcase-link">
                  <motion.div 
                    className="showcase-image glass-card"
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${project.imageColor}dd, ${project.imageColor}44), url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '350px' 
                    }}
                  >
                    <div className="showcase-tag" style={{ color: project.imageColor, textShadow: `0 0 10px ${project.imageColor}44` }}>
                      {project.category.toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>{project.title}</h3>
                    <motion.div 
                      className="view-case-btn" 
                      style={{ 
                        borderColor: project.imageColor, 
                        color: project.imageColor,
                        display: 'inline-block' 
                      }}
                      whileHover={{ 
                        backgroundColor: project.imageColor,
                        color: '#ffffff',
                      }}
                    >
                      View Project
                    </motion.div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="horizontal-scroll-section">
      <div className="sticky-container">
        <div className="container">
          <motion.div 
            className="showcase-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Showcase</span>
            </h2>
            <p className="section-desc">
              Scroll down to explore our most innovative projects through a horizontal cinematic experience.
            </p>
          </motion.div>
        </div>

        <motion.div 
          style={{ x }} 
          className="horizontal-content container"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="showcase-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/project/${project.id}`} className="showcase-link">
                <div 
                  className="showcase-image glass-card"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${project.imageColor}dd, ${project.imageColor}44), url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="showcase-tag" style={{ color: project.imageColor, textShadow: `0 0 10px ${project.imageColor}44` }}>
                    {project.category.toUpperCase()}
                  </div>
                  <h3 style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>{project.title}</h3>
                  <motion.div 
                    className="view-case-btn" 
                    style={{ 
                      borderColor: project.imageColor, 
                      color: project.imageColor,
                    }}
                    whileHover={{ 
                      backgroundColor: project.imageColor,
                      color: '#ffffff',
                      boxShadow: `0 0 20px ${project.imageColor}66`
                    }}
                  >
                    Explore Case Study
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
