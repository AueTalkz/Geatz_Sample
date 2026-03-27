import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      name: 'Geatz',
      role: 'Founder & Creative Director',
      bio: 'Visionary leader bridging the gap between high-end code and cinematic storytelling.',
      color: '#a855f7'
    },
    {
      name: 'Sudharsan',
      role: 'Co founder & Lead Full-Stack Developer (GDz)',
      bio: 'Expert in scalable architectures and futuristic user interfaces.',
      color: '#2563eb'
    },
    {
      name: 'Karthikayini',
      role: 'Lead Social Media Manager',
      bio: 'Strategic mastermind specialized in viral growth and high-energy digital content.',
      color: '#db2777'
    },
    {
      name: 'Dhrishya',
      role: 'Graphic Designer',
      bio: 'Creative artisan dedicated to crafting striking visual narratives and brand aesthetics.',
      color: '#06b6d4'
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="team" className="division-section">
      <div className="container">
        <motion.div 
          className="division-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="section-desc">
            The minds behind the magic. A collective of creators, engineers, and strategists.
          </p>
        </motion.div>

        <motion.div 
          className="grid-container"
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              className="glass-card white-glow" 
              key={index} 
              style={{ textAlign: 'center' }}
              variants={itemVars}
              whileHover={{ scale: 1.05, translateY: -10 }}
            >
              <motion.div 
                className="member-avatar" 
                style={{ 
                  background: `linear-gradient(135deg, ${member.color}44, ${member.color}22)`,
                  border: `1px solid ${member.color}44`
                }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {member.name.charAt(0)}
              </motion.div>
              <h3 style={{ marginBottom: '10px' }}>{member.name}</h3>
              <div style={{ color: member.color, fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {member.role}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
