import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'gdz',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contact_requests"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'gdz', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to connect to Firebase. Check console and configuration!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="division-section">
      <div className="container">
        <motion.div 
          className="division-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Start a <span className="gradient-text">Project</span>
          </h2>
          <p className="section-desc">
            Ready to bring your vision to life? Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div 
          className="glass-card white-glow" 
          style={{ maxWidth: '800px', margin: '0 auto' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                className="contact-form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    className="form-input"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="gdz">GDz (Technology/Development)</option>
                    <option value="gez">GEz (Media/Content Creation)</option>
                    <option value="both">Both Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="btn btn-primary btn-submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting to Database...' : 'Submit Request'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px' }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✨</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Request Received!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
                <button 
                  className="btn btn-outline" 
                  style={{ marginTop: '30px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
