import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { db } = await import('../firebase');
        const { collection, query, where, getDocs, limit } = await import('firebase/firestore');
        
        const q = query(collection(db, "blog_posts"), where("slug", "==", slug), limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          setPost({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        } else {
          // If slug not found, maybe it's an ID
          const { doc, getDoc } = await import('firebase/firestore');
          const docRef = doc(db, "blog_posts", slug);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setPost({ id: docSnap.id, ...docSnap.data() });
          }
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--brand-blue)', borderRadius: '50%' }}
        />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="page-wrapper" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Post Not Found</h2>
          <p className="section-desc">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Seo 
        title={`${post.title} | Geatz Groupz Blog`} 
        description={post.excerpt || post.content?.substring(0, 160)}
        image={post.image}
      />
      
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/blog" style={{ color: 'var(--brand-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontWeight: 'bold' }}>
            ← Back to Insights
          </Link>

          <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            {post.category || 'Insights'}
          </span>
          <h1 className="section-title" style={{ textAlign: 'left', marginTop: '10px', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
                {post.author?.[0] || 'G'}
              </div>
              <span>{post.author || 'Geatz Team'}</span>
            </div>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>{post.date?.toDate ? post.date.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent'}</span>
          </div>

          {post.image && (
            <div style={{ 
              width: '100%', 
              height: '450px', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              marginBottom: '60px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}

          <div 
            className="blog-content"
            style={{ 
              fontSize: '1.15rem', 
              lineHeight: '1.8', 
              color: 'rgba(255,255,255,0.85)',
              whiteSpace: 'pre-wrap'
            }}
          >
            {post.content}
          </div>

          <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="glass-card blue-glow" style={{ padding: '40px', textAlign: 'center' }}>
              <h3>Love this insight?</h3>
              <p className="section-desc" style={{ margin: '15px auto' }}>Join our newsletter to get more deep dives directly in your inbox.</p>
              <Link to="/pricing" className="btn btn-primary" style={{ marginTop: '10px' }}>Join the Circle</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
