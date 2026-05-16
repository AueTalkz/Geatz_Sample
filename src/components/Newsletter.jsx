import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const { db } = await import('../firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      await addDoc(collection(db, "subscribers"), {
        email: email,
        timestamp: serverTimestamp()
      });
      
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="division-section" style={{ background: 'var(--brand-blue-transparent)', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '60px 40px', border: '1px solid var(--brand-blue-glow)' }}
        >
          <h2 className="section-title" style={{ marginBottom: '20px' }}>
            Join the <span className="gradient-text-blue">Inner Circle</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '40px' }}>
            Get exclusive insights, project sneak peeks, and digital strategy tips delivered straight to your inbox. No spam, just value.
          </p>

          <form className="newsletter-form-large" onSubmit={handleSubmit} style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                width: '100%',
                padding: '18px 25px',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                bottom: '5px',
                padding: '0 30px',
                borderRadius: '50px',
                background: 'var(--brand-blue)',
                color: '#fff',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#4ade80', marginTop: '20px', fontWeight: 'bold' }}
            >
              Welcome to the circle! ✨ Check your inbox soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#f87171', marginTop: '20px' }}
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
