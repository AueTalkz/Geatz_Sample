import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';

export default function ClientPortal({ loginOnly }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { auth } = await import('../firebase');
      const { onAuthStateChanged } = await import('firebase/auth');
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoading(false);
        if (loginOnly && u) navigate('/portal');
      });
    };
    checkUser();
  }, [loginOnly, navigate]);

  if (loading) return null;

  if (!user || loginOnly) {
    return <PortalLogin />;
  }

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a0a0a' }}>
      <Seo title="Client Portal | Geatz Groupz" description="Track your project progress and access assets." />
      
      <div className="container" style={{ maxWidth: '1000px' }}>
        <header style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="section-title" style={{ fontSize: '2.5rem', textAlign: 'left', marginBottom: '10px' }}>
              Welcome Back, <span className="gradient-text">{user.email?.split('@')[0]}</span>
            </h1>
            <p className="section-desc" style={{ margin: 0 }}>Your project hub and collaboration space.</p>
          </div>
          <button onClick={async () => {
            const { auth } = await import('../firebase');
            await auth.signOut();
            navigate('/');
          }} className="btn btn-outline" style={{ height: 'fit-content' }}>Logout</button>
        </header>

        <PortalContent user={user} />
      </div>
    </div>
  );
}

function PortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { auth } = await import('../firebase');
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/portal');
    } catch (err) {
      setError('Invalid email or password.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card pink-glow" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>Client Portal</h2>
        <p className="section-desc" style={{ marginBottom: '30px' }}>Access your project dashboard.</p>
        
        {error && <p style={{ color: '#f87171', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</p>}
        
        <form onSubmit={handleLogin} style={{ display: 'grid', gap: '20px' }}>
          <input type="email" placeholder="Email" className="contact-input" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          <input type="password" placeholder="Password" className="contact-input" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '15px', width: '100%' }}>
            {loading ? 'Entering Portal...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function PortalContent({ user }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { db } = await import('../firebase');
      const { collection, query, where, getDocs, limit } = await import('firebase/firestore');
      
      const q = query(collection(db, "client_projects"), where("clientEmail", "==", user.email), limit(1));
      const snap = await getDocs(q);
      
      if (!snap.empty) {
        setProject({ id: snap.docs[0].id, ...snap.docs[0].data() });
      }
      setLoading(false);
    };
    fetchProject();
  }, [user]);

  if (loading) return <p>Syncing your project data...</p>;

  if (!project) {
    return (
      <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
        <h3>No active project found.</h3>
        <p className="section-desc" style={{ margin: '15px auto' }}>If you just started with us, your portal will be ready in 24 hours.</p>
        <a href="mailto:geatzgroupz@gmail.com" className="btn btn-outline" style={{ marginTop: '20px' }}>Contact Support</a>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'grid', gap: '30px' }}>
      {/* Project Status */}
      <div className="glass-card blue-glow" style={{ padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ marginBottom: '5px' }}>{project.name}</h2>
            <p style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>Status: {project.status}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Completion</p>
            <h3 style={{ fontSize: '2rem' }}>{project.progress}%</h3>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${project.progress}%` }} 
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ height: '100%', background: 'var(--brand-blue)' }} 
          />
        </div>
      </div>

      <div className="grid-container two-cols" style={{ alignItems: 'start' }}>
        {/* Milestones */}
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '25px' }}>Milestones</h3>
          <div style={{ display: 'grid', gap: '20px' }}>
            {project.milestones?.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '24px', height: '24px', borderRadius: '50%', 
                  background: m.completed ? 'var(--brand-blue)' : 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {m.completed && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </div>
                <div>
                  <p style={{ fontWeight: 'bold', fontSize: '0.95rem', opacity: m.completed ? 1 : 0.5 }}>{m.label}</p>
                  {m.date && <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>{m.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assets & Links */}
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '25px' }}>Project Resources</h3>
          <div style={{ display: 'grid', gap: '15px' }}>
            {project.links?.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', background: 'rgba(255,255,255,0.03)' }}>
                <span style={{ fontWeight: 'bold', color: '#fff' }}>{link.label}</span>
                <span style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            ))}
            {(!project.links || project.links.length === 0) && <p style={{ opacity: 0.5 }}>No resources shared yet.</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
