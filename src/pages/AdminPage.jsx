import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import AdminProjects from '../components/admin/AdminProjects';
import AdminTeam from '../components/admin/AdminTeam';
import AdminTestimonials from '../components/admin/AdminTestimonials';
import AdminClients from '../components/admin/AdminClients';
import AdminCareers from '../components/admin/AdminCareers';

export default function AdminPage({ loginOnly }) {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { auth } = await import('../firebase');
      const { onAuthStateChanged } = await import('firebase/auth');
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoading(false);
        if (loginOnly && u) navigate('/admin');
      });
    };
    checkUser();
  }, [loginOnly, navigate]);

  if (loading) return null;

  if (!user || loginOnly) {
    return <AdminLogin />;
  }

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a0a0a' }}>
      <Seo title="Admin Dashboard | Geatz Groupz" description="Internal CMS for managing Geatz Groupz digital assets." />
      
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          
          {/* Sidebar */}
          <aside style={{ width: '250px', position: 'sticky', top: '120px' }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ marginBottom: '30px' }}>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Admin Panel</p>
                <h3 style={{ fontSize: '1.1rem' }}>{user.email}</h3>
              </div>
              
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <AdminNavBtn label="Dashboard" icon="📊" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                <AdminNavBtn label="Blog Posts" icon="📝" active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} />
                <AdminNavBtn label="Projects" icon="🎨" active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
                <AdminNavBtn label="Client Portal" icon="🔐" active={activeTab === 'clients'} onClick={() => setActiveTab('clients')} />
                <AdminNavBtn label="Team Members" icon="👥" active={activeTab === 'team'} onClick={() => setActiveTab('team')} />
                <AdminNavBtn label="Careers" icon="💼" active={activeTab === 'careers'} onClick={() => setActiveTab('careers')} />
                <AdminNavBtn label="Testimonials" icon="⭐" active={activeTab === 'testimonials'} onClick={() => setActiveTab('testimonials')} />
                <AdminNavBtn label="Subscribers" icon="📧" active={activeTab === 'subscribers'} onClick={() => setActiveTab('subscribers')} />
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <button onClick={async () => {
                    const { auth } = await import('../firebase');
                    await auth.signOut();
                    navigate('/');
                  }} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem' }}>Logout</button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main style={{ flex: 1 }}>
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && <AdminDashboard key="dashboard" />}
              {activeTab === 'blog' && <AdminBlog key="blog" />}
              {activeTab === 'projects' && <AdminProjects key="projects" />}
              {activeTab === 'clients' && <AdminClients key="clients" />}
              {activeTab === 'team' && <AdminTeam key="team" />}
              {activeTab === 'careers' && <AdminCareers key="careers" />}
              {activeTab === 'testimonials' && <AdminTestimonials key="testimonials" />}
              {activeTab === 'subscribers' && <AdminSubscribers key="subscribers" />}
            </AnimatePresence>
          </main>

        </div>
      </div>
    </div>
  );
}

function AdminNavBtn({ label, icon, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 15px',
        borderRadius: '10px',
        background: active ? 'var(--brand-blue-transparent)' : 'transparent',
        border: active ? '1px solid var(--brand-blue-glow)' : '1px solid transparent',
        color: active ? 'var(--brand-blue)' : 'rgba(255,255,255,0.7)',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.3s ease',
        fontWeight: active ? 'bold' : 'normal'
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function AdminLogin() {
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
      navigate('/admin');
    } catch (err) {
      setError('Invalid credentials or unauthorized.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card blue-glow" 
        style={{ width: '100%', maxWidth: '400px', padding: '40px' }}
      >
        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>Admin Login</h2>
        <p className="section-desc" style={{ marginBottom: '30px' }}>Access the Geatz Groupz CMS.</p>
        
        {error && <p style={{ color: '#f87171', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</p>}
        
        <form onSubmit={handleLogin} style={{ display: 'grid', gap: '20px' }}>
          <input 
            type="email" 
            placeholder="Email" 
            className="contact-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="contact-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          />
          <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '15px', width: '100%' }}>
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, subscribers: 0, leads: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { db } = await import('../firebase');
      const { collection, getDocs } = await import('firebase/firestore');
      
      const postsSnap = await getDocs(collection(db, "blog_posts"));
      const subsSnap = await getDocs(collection(db, "subscribers"));
      const leadsSnap = await getDocs(collection(db, "contact_requests"));
      
      setStats({
        posts: postsSnap.size,
        subscribers: subsSnap.size,
        leads: leadsSnap.size
      });
    };
    fetchStats();
  }, []);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h2 style={{ marginBottom: '30px' }}>Overview</h2>
      <div className="grid-container three-cols">
        <StatCard label="Blog Posts" value={stats.posts} color="var(--brand-blue)" />
        <StatCard label="Subscribers" value={stats.subscribers} color="var(--brand-pink)" />
        <StatCard label="Recent Leads" value={stats.leads} color="var(--brand-cyan)" />
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="glass-card" style={{ padding: '30px', borderLeft: `4px solid ${color}` }}>
      <p style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{label}</p>
      <h3 style={{ fontSize: '2.5rem', marginTop: '10px' }}>{value}</h3>
    </div>
  );
}

function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const refreshPosts = async () => {
    const { db } = await import('../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "blog_posts"), orderBy("date", "desc"));
    const snap = await getDocs(q);
    setPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { refreshPosts(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    const { db } = await import('../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "blog_posts", id));
    refreshPosts();
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Manage Blog</h2>
        <button className="btn btn-primary" onClick={() => { setEditingPost(null); setShowEditor(true); }}>+ Create New Post</button>
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '20px' }}>Title</th>
              <th style={{ padding: '20px' }}>Category</th>
              <th style={{ padding: '20px' }}>Date</th>
              <th style={{ padding: '20px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px' }}>{post.title}</td>
                <td style={{ padding: '20px' }}><span style={{ padding: '4px 10px', borderRadius: '4px', background: 'var(--brand-blue-transparent)', fontSize: '0.8rem' }}>{post.category}</span></td>
                <td style={{ padding: '20px', fontSize: '0.9rem', opacity: 0.6 }}>{post.date?.toDate ? post.date.toDate().toLocaleDateString() : 'N/A'}</td>
                <td style={{ padding: '20px' }}>
                  <button onClick={() => { setEditingPost(post); setShowEditor(true); }} style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', cursor: 'pointer', marginRight: '15px' }}>Edit</button>
                  <button onClick={() => handleDelete(post.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditor && <BlogEditor post={editingPost} onClose={() => setShowEditor(false)} onSave={() => { setShowEditor(false); refreshPosts(); }} />}
    </motion.div>
  );
}

function BlogEditor({ post, onClose, onSave }) {
  const [formData, setFormData] = useState(post || {
    title: '',
    slug: '',
    category: 'Technology',
    content: '',
    excerpt: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { db } = await import('../firebase');
      const { collection, addDoc, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');
      
      const postData = {
        ...formData,
        date: post ? post.date : serverTimestamp()
      };

      if (post) {
        await updateDoc(doc(db, "blog_posts", post.id), postData);
      } else {
        await addDoc(collection(db, "blog_posts"), postData);
      }
      onSave();
    } catch (err) {
      console.error(err);
      alert('Error saving post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>{post ? 'Edit Post' : 'New Post'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          <input type="text" placeholder="Post Title" className="contact-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          <input type="text" placeholder="URL Slug (e.g. my-awesome-post)" className="contact-input" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          <div className="grid-container two-cols" style={{ gap: '20px' }}>
            <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="contact-input" style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
              <option value="Technology">Technology</option>
              <option value="Creative">Creative</option>
              <option value="Strategy">Strategy</option>
              <option value="News">News</option>
            </select>
            <input type="text" placeholder="Image URL" className="contact-input" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          </div>
          <textarea placeholder="Excerpt (Short summary)" rows="2" className="contact-input" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', resize: 'none' }}></textarea>
          <textarea placeholder="Post Content (Markdown supported)" rows="10" className="contact-input" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', resize: 'vertical' }}></textarea>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Saving...' : 'Save Post'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function AdminSubscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchSubs = async () => {
      const { db } = await import('../firebase');
      const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
      const q = query(collection(db, "subscribers"), orderBy("timestamp", "desc"));
      const snap = await getDocs(q);
      setSubs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSubs();
  }, []);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h2 style={{ marginBottom: '30px' }}>Email Subscribers</h2>
      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '20px' }}>Email Address</th>
              <th style={{ padding: '20px' }}>Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {subs.map(sub => (
              <tr key={sub.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px' }}>{sub.email}</td>
                <td style={{ padding: '20px', opacity: 0.6 }}>{sub.timestamp?.toDate ? sub.timestamp.toDate().toLocaleString() : 'Recent'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
