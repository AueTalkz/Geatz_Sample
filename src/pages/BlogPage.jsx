import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { db } = await import('../firebase');
        const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
        
        const q = query(collection(db, "blog_posts"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // Fallback to empty or mock if needed, but better to show actual state
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Seo 
        title="Insights & Blog | Geatz Groupz" 
        description="Deep dives into web development, cinematic media, and digital strategy from the experts at GGz." 
        keywords="blog, tech insights, media production tips, digital strategy, geatz groupz"
      />
      
      <div className="container">
        <motion.div 
          className="division-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title">
            Digital <span className="gradient-text">Insights</span>
          </h1>
          <p className="section-desc">
            Explore our latest thoughts on technology, creativity, and the intersection of both.
          </p>
        </motion.div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--brand-blue)', borderRadius: '50%' }}
            />
          </div>
        ) : posts.length > 0 ? (
          <motion.div 
            className="grid-container three-cols"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post) => (
              <motion.div key={post.id} variants={itemVars}>
                <Link to={`/blog/${post.slug || post.id}`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card blue-glow" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                      height: '200px', 
                      background: post.image ? `url(${post.image}) center/cover` : 'linear-gradient(135deg, var(--brand-blue-transparent), var(--brand-purple-transparent))',
                      borderRadius: '12px',
                      marginBottom: '20px'
                    }} />
                    <span style={{ color: 'var(--brand-blue)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {post.category || 'Technology'}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', margin: '10px 0', color: '#fff' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1 }}>
                      {post.excerpt || post.content?.substring(0, 100) + '...'}
                    </p>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                        {post.date?.toDate ? post.date.toDate().toLocaleDateString() : 'Recent'}
                      </span>
                      <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold', fontSize: '0.9rem' }}>Read More →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div style={{ textAlign: 'center', padding: '100px 20px' }} className="glass-card">
            <h3 style={{ marginBottom: '15px' }}>The blog is coming soon!</h3>
            <p className="section-desc">We're currently crafting high-value content for you. Check back shortly.</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
