import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'e-commerce-redesign',
    title: 'E-Commerce Redesign',
    category: 'GDz (Development)',
    imageColor: '#06b6d4',
  },
  {
    id: 'brand-identity-launch',
    title: 'Brand Identity Launch',
    category: 'GEz (Media)',
    imageColor: '#db2777',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'GDz (Development)',
    imageColor: '#2563eb',
  },
  {
    id: 'cinematic-promo-video',
    title: 'Cinematic Promo Video',
    category: 'GEz (Media)',
    imageColor: '#9333ea',
  },
];

export default function ProjectShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-75%']);

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
            <p className="section-desc" style={{ marginLeft: 0 }}>
              Scroll down to explore our most innovative projects through 
              a horizontal cinematic experience.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="horizontal-content">
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
                  style={{ background: `linear-gradient(135deg, ${project.imageColor}44, ${project.imageColor}22)` }}
                >
                  <div className="showcase-tag" style={{ color: project.imageColor }}>
                    {project.category.toUpperCase()}
                  </div>
                  <h3>{project.title}</h3>
                  <div className="view-case-btn" style={{ borderColor: project.imageColor, color: project.imageColor }}>
                    Explore Case Study
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
