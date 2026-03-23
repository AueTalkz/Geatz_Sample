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



  return (
    <section id="team" className="division-section">
      <div className="container">
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="section-desc">
            The minds behind the magic. A collective of creators, engineers, and strategists.
          </p>
        </div>

        <div className="grid-container">
          {teamMembers.map((member, index) => (
            <div className="glass-card reveal-up white-glow" key={index} style={{ textAlign: 'center' }}>
              <div 
                className="member-avatar" 
                style={{ 
                  background: `linear-gradient(135deg, ${member.color}44, ${member.color}22)`,
                  border: `1px solid ${member.color}44`
                }}
              >
                {member.name.charAt(0)}
              </div>
              <h3 style={{ marginBottom: '10px' }}>{member.name}</h3>
              <div style={{ color: member.color, fontSize: '0.9rem', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {member.role}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
