import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import Magnetic from '../components/Magnetic';

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [formStatus, setFormStatus] = useState('idle');
  const [jobs, setJobs] = useState([]);
  
  // Application fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [superpower, setSuperpower] = useState('');

  const fallbackJobs = [
    {
      id: 'fallback-1',
      title: 'Senior Frontend Engineer',
      type: 'Full-time',
      location: 'Remote / Global',
      category: 'engineering',
      description: 'Lead the development of immersive, high-performance web experiences using React and Three.js.'
    },
    {
      id: 'fallback-2',
      title: 'Social Media Strategist',
      type: 'Part-time / Contract',
      location: 'Hybrid',
      category: 'creative',
      description: 'Craft viral content strategies and manage community growth for our high-end media clients.'
    },
    {
      id: 'fallback-3',
      title: 'Full-Stack Developer',
      type: 'Full-time',
      location: 'Remote',
      category: 'engineering',
      description: 'Architect robust backend systems and CRM integrations with Node.js and Firebase.'
    }
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { db } = await import('../firebase');
        const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
        const q = query(collection(db, "job_openings"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        if (snap.empty) {
          setJobs(fallbackJobs);
        } else {
          setJobs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
        setJobs(fallbackJobs);
      }
    };
    fetchJobs();
  }, []);

  const benefits = [
    { title: 'Global Remote', desc: 'Work from anywhere in the world.' },
    { title: 'Cutting Edge Tech', desc: 'Experiment with the latest in AI and 3D web.' },
    { title: 'Unlimited PTO', desc: 'We value results and mental health over hours.' },
    { title: 'Learning Budget', desc: 'Annual budget for courses, books, and conferences.' }
  ];

  const handleApply = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      const { db } = await import('../firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      await addDoc(collection(db, "job_applications"), {
        name,
        email,
        url,
        superpower,
        createdAt: serverTimestamp()
      });
      
      setFormStatus('success');
      setName('');
      setEmail('');
      setUrl('');
      setSuperpower('');
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      console.error("Error submitting application:", err);
      setFormStatus('error');
    }
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Seo 
        title="Careers | Join the Geatz Groupz Team" 
        description="Join a global team of engineers and creatives building the next generation of digital experiences." 
      />
      
      <div className="container">
        <motion.div 
          className="division-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title">
            Join the <span className="gradient-text">Future</span>
          </h1>
          <p className="section-desc">
            We're looking for ambitious minds to help us redefine the digital landscape.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div style={{ marginTop: '80px', marginBottom: '100px' }}>
          <div className="grid-container four-cols">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i} 
                className="glass-card" 
                style={{ textAlign: 'center', padding: '30px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 style={{ color: 'var(--brand-blue)', marginBottom: '10px' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div style={{ marginBottom: '80px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px' }}>Open Roles</h2>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px' }}>
            {['all', 'engineering', 'creative'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
                style={{ textTransform: 'capitalize', fontSize: '0.85rem' }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="faq-container">
            {jobs.filter(j => activeTab === 'all' || j.category === activeTab).map((job, index) => (
              <motion.div 
                key={job.id}
                className="glass-card"
                style={{ marginBottom: '15px', padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>{job.description}</p>
                </div>
                <Magnetic>
                  <a href="#apply-form" className="btn btn-primary">Apply Now</a>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Application */}
        <div id="apply-form" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="glass-card blue-glow" style={{ padding: '50px 40px' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>Quick Apply</h2>
            <p className="section-desc" style={{ marginBottom: '30px' }}>Don't see a role? Send us your details anyway.</p>
            
            <form onSubmit={handleApply} style={{ display: 'grid', gap: '20px' }}>
              <div className="grid-container two-cols" style={{ gap: '20px' }}>
                <input type="text" placeholder="Full Name" className="contact-input" required value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: '#fff' }} />
                <input type="email" placeholder="Email Address" className="contact-input" required value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: '#fff' }} />
              </div>
              <input type="text" placeholder="Portfolio or LinkedIn URL" className="contact-input" required value={url} onChange={e => setUrl(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: '#fff' }} />
              <textarea placeholder="Tell us about your superpower" rows="4" className="contact-input" required value={superpower} onChange={e => setSuperpower(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: '#fff', resize: 'none' }}></textarea>
              
              <button type="submit" disabled={formStatus === 'loading'} className="btn btn-primary" style={{ padding: '18px', width: '100%' }}>
                {formStatus === 'loading' ? 'Sending...' : 'Submit Application'}
              </button>
            </form>
            
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ color: '#4ade80', textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
                  Application received! We'll be in touch. 🚀
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ color: '#f87171', textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
