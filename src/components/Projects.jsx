export default function Projects({ filter }) {
  const allProjects = [
    {
      title: 'E-Commerce Redesign',
      category: 'GDz (Development)',
      description: 'A full redesign of a high-traffic online store yielding a 40% increase in conversion rates.',
      imageColor: '#06b6d4',
    },
    {
      title: 'Brand Identity Launch',
      category: 'GEz (Media)',
      description: 'Complete rebranding campaign with new thumbnails, video editing content, and social media posters.',
      imageColor: '#db2777',
    },
    {
      title: 'SaaS Dashboard',
      category: 'GDz (Development)',
      description: 'Built a responsive analytics dashboard CRM tool for a startup utilizing React and NodeJS.',
      imageColor: '#2563eb',
    },
    {
      title: 'Cinematic Promo Video',
      category: 'GEz (Media)',
      description: 'A 60-second captivating commercial shoot handling all scripts, direction, and post-production editing.',
      imageColor: '#9333ea',
    },
  ];

  const projectList = filter 
    ? allProjects.filter(p => p.category.toLowerCase().startsWith(filter.toLowerCase()))
    : allProjects;


  return (
    <section id="projects" className="division-section">
      <div className="container">
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            A curated selection of our best recent works combining innovative technology with breathtaking media.
          </p>
        </div>

        <div className="grid-container two-cols">
          {projectList.map((project, index) => {
            const glowClass = project.imageColor === '#06b6d4' ? 'cyan-glow' :
                             project.imageColor === '#db2777' ? 'pink-glow' :
                             project.imageColor === '#2563eb' ? 'blue-glow' :
                             project.imageColor === '#9333ea' ? 'purple-glow' : 'white-glow';
            
            return (
              <div className={`glass-card ${glowClass} reveal-up`} key={index}>
              <div
                style={{
                  height: '180px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${project.imageColor}88, ${project.imageColor}22)`,
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${project.imageColor}44`,
                }}
              >
                {/* Placeholder for project mockups */}
                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', opacity: 0.8 }}>
                  {project.title}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: project.imageColor, marginBottom: '8px' }}>
                {project.category.toUpperCase()}
              </div>
              <h3>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
