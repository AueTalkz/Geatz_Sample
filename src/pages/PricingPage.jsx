import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Magnetic from '../components/Magnetic';

export default function PricingPage() {
  const gdzPlans = [
    {
      name: 'Starter Site',
      price: '$999',
      duration: 'One-time',
      features: ['1-3 Pages Custom Design', 'Mobile Responsive', 'Basic SEO Setup', 'Contact Form Integration', '1 Week Delivery'],
      popular: false,
      color: 'var(--brand-cyan)'
    },
    {
      name: 'Business Pro',
      price: '$2,499',
      duration: 'One-time',
      features: ['Up to 10 Pages', 'CMS Integration', 'Advanced Animations', 'Speed Optimization', '3 Weeks Delivery'],
      popular: true,
      color: 'var(--brand-blue)'
    },
    {
      name: 'Full App/CRM',
      price: 'Custom',
      duration: 'Contact Us',
      features: ['Custom Web App', 'Database Architecture', 'User Authentication', 'Admin Dashboard', 'Ongoing Maintenance'],
      popular: false,
      color: 'var(--brand-purple)'
    }
  ];

  const gezPlans = [
    {
      name: 'Social Boost',
      price: '$499',
      duration: 'Per Month',
      features: ['8 High-Quality Posts', 'Caption Copywriting', 'Basic Hashtag Strategy', '1 Short Form Video', 'Monthly Report'],
      popular: false,
      color: 'var(--brand-pink)'
    },
    {
      name: 'Viral Growth',
      price: '$1,299',
      duration: 'Per Month',
      features: ['15 Posts + Stories', '4 Reels/TikToks', 'Pro Video Editing', 'Full Content Shoot', 'Community Management'],
      popular: true,
      color: '#fb7185' // Lighter pink
    },
    {
      name: 'Cinematic Production',
      price: 'Custom',
      duration: 'Per Project',
      features: ['4K Camera Gear', 'Drone Footage', 'Scripting & Directing', 'Color Grading', 'Full Ownership rights'],
      popular: false,
      color: 'var(--brand-purple)'
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Seo 
        title="Pricing & Packages | Geatz Groupz" 
        description="Transparent pricing for premium web development (GDz) and cinematic media creation (GEz)." 
        keywords="pricing, web development packages, social media management cost, agency pricing"
      />
      
      <div className="container">
        <motion.div 
          className="division-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="section-desc">
            No hidden fees. Just premium value. Choose the tier that fits your ambition.
          </p>
        </motion.div>

        {/* GDz Pricing */}
        <div style={{ marginTop: '80px', marginBottom: '80px' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}
          >
            <span className="gradient-text-blue">GDz</span> Development
          </motion.h2>
          
          <motion.div 
            className="grid-container"
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {gdzPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} type="gdz" />
            ))}
          </motion.div>
        </div>

        {/* GEz Pricing */}
        <div style={{ marginBottom: '80px' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}
          >
            <span className="gradient-text-pink">GEz</span> Media & Content
          </motion.h2>
          
          <motion.div 
            className="grid-container"
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {gezPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} type="gez" />
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <FAQ />

      </div>
    </div>
  );
}

function PricingCard({ plan, type }) {
  const isGdz = type === 'gdz';
  const shadowColor = isGdz ? 'rgba(37, 99, 235, 0.2)' : 'rgba(219, 39, 119, 0.2)';
  
  return (
    <motion.div 
      className={`glass-card ${plan.popular ? (isGdz ? 'blue-glow' : 'pink-glow') : ''}`}
      style={{ 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderColor: plan.popular ? plan.color : 'rgba(255, 255, 255, 0.07)',
        transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
        zIndex: plan.popular ? 2 : 1
      }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ y: -10, boxShadow: `0 20px 40px ${shadowColor}` }}
    >
      {plan.popular && (
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: plan.color,
          color: '#fff',
          padding: '5px 15px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          boxShadow: `0 0 15px ${plan.color}88`
        }}>
          Most Popular
        </div>
      )}

      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: plan.color }}>{plan.name}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '5px' }}>
        <span style={{ fontSize: '3rem', fontWeight: 800 }}>{plan.price}</span>
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {plan.duration}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1 }}>
        {plan.features.map((feature, i) => (
          <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={plan.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span style={{ fontSize: '1.05rem' }}>{feature}</span>
          </li>
        ))}
      </ul>

      <Magnetic>
        <Link 
          to="/start-a-project" 
          className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
          style={{ width: '100%', textAlign: 'center', display: 'block' }}
        >
          Get Started
        </Link>
      </Magnetic>
    </motion.div>
  );
}
