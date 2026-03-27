import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { id } = useParams();

  const projectDetails = {
    'e-commerce-redesign': {
      title: 'E-Commerce Redesign',
      category: 'GDz (Development)',
      description: 'A full redesign of a high-traffic online store yielding a 40% increase in conversion rates. This project involved a complete overhaul of the UI/UX, database optimization, and implementing a modern React-based front-end.',
      results: [
        '40% Conversion Rate Boost',
        '2s Faster Page Load Time',
        '65% Mobile User Increase'
      ],
      stack: ['React', 'NodeJS', 'MongoDB', 'Framer Motion'],
      color: '#06b6d4',
      liveLink: '#'
    },
    'brand-identity-launch': {
      title: 'Brand Identity Launch',
      category: 'GEz (Media)',
      description: 'Complete rebranding campaign with new thumbnails, video editing content, and social media posters. We provided the client with a fresh visual identity that resonated with their GenZ target audience.',
      results: [
        '100k+ Impressions on Launch',
        'Successful Brand Pivot',
        '30% Content Engagement Increase'
      ],
      stack: ['After Effects', 'Photoshop', 'Final Cut Pro', 'Stable Diffusion'],
      color: '#db2777',
      liveLink: '#'
    },
    'saas-dashboard': {
      title: 'SaaS Dashboard',
      category: 'GDz (Development)',
      description: 'Built a responsive analytics dashboard CRM tool for a startup utilizing React and NodeJS. The project focused on complex data visualization and real-time user activity tracking.',
      results: [
        'Real-time Reporting Enabled',
        'Improved Admin Efficiency by 50%',
        'Scalable Infrastructure Ready'
      ],
      stack: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
      color: '#2563eb',
      liveLink: '#'
    },
    'cinematic-promo-video': {
      title: 'Cinematic Promo Video',
      category: 'GEz (Media)',
      description: 'A 60-second captivating commercial shoot handling all scripts, direction, and post-production editing. We combined high-end cinematography with fast-paced editing to create a powerful message.',
      results: [
        '1M+ Video Views',
        'Direct Sales Attribution',
        'Viral Social Media Reach'
      ],
      stack: ['4K Cinema Camera', 'Davinci Resolve', 'Color Grading', 'Sound Design'],
      color: '#9333ea',
      liveLink: '#'
    },
  };

  const project = projectDetails[id] || projectDetails['e-commerce-redesign'];

  return (
    <div className="project-detail-page">
      <section className="detail-hero" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/projects" className="btn btn-outline" style={{ marginBottom: '40px', padding: '10px 20px', fontSize: '0.8rem' }}>
              ← Back to Projects
            </Link>
            <div style={{ color: project.color, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '15px' }}>
              {project.category.toUpperCase()}
            </div>
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '30px' }}>
              {project.title}
            </h1>
            <p className="section-desc" style={{ marginLeft: '0', fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow">
                View Live Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="detail-info section-padding" style={{ paddingBottom: '150px' }}>
        <div className="container">
          <div className="grid-container two-cols">
            <motion.div 
              className="glass-card" 
              style={{ padding: '60px' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Key Results</h3>
              <ul className="custom-list cyan-list">
                {project.results.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="glass-card" 
              style={{ padding: '60px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      padding: '10px 20px', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      borderRadius: '30px', 
                      fontSize: '0.9rem',
                      border: '1px solid var(--glass-border)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="detail-footer section-padding" style={{ paddingBottom: '100px', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '80px 40px', borderStyle: 'dashed' }}
          >
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
              Want to see <span className="gradient-text">More?</span>
            </h2>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary btn-glow">
                Explore All Projects
              </Link>
              <Link to="/" className="btn btn-outline">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
