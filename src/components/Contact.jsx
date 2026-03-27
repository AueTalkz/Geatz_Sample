import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'gdz',
    message: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
      }, 8000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to connect to Firebase.');
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
            We've streamlined the process. Tell us about your goal in 3 quick steps.
          </p>
        </motion.div>

        <motion.div 
          className="glass-card white-glow" 
          style={{ maxWidth: '700px', margin: '0 auto', overflow: 'hidden' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress Indicator */}
          {!submitted && (
            <div className="form-progress-bar" style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)' }}>
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  style={{ 
                    flex: 1, 
                    height: '4px', 
                    background: s <= step ? 'var(--brand-cyan)' : 'transparent',
                    transition: 'all 0.5s ease'
                  }} 
                />
              ))}
            </div>
          )}

          <div style={{ padding: '60px 40px' }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✨</div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Request Received!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you. A specialist will reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {step === 1 && (
                    <div className="step-content">
                      <h3 style={{ marginBottom: '30px' }}>Step 1: Introduction</h3>
                      <div className="form-group">
                        <label className="form-label">What is your name?</label>
                        <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} placeholder="Alex Carter" required />
                      </div>
                      <div className="form-group" style={{ marginTop: '20px' }}>
                        <label className="form-label">Email Address</label>
                        <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} placeholder="alex@choice.com" required />
                      </div>
                      <button className="btn btn-primary" style={{ marginTop: '30px', width: '100%' }} onClick={nextStep} disabled={!formData.name || !formData.email}>
                        Continue →
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="step-content">
                      <h3 style={{ marginBottom: '30px' }}>Step 2: Your Goal</h3>
                      <label className="form-label" style={{ marginBottom: '20px', display: 'block' }}>Which department can help you?</label>
                      <div className="grid-container two-cols" style={{ gap: '15px' }}>
                        <div 
                          className={`glass-card ${formData.service === 'gdz' ? 'blue-glow' : ''}`}
                          style={{ padding: '30px', cursor: 'pointer', borderColor: formData.service === 'gdz' ? 'var(--brand-blue)' : '' }}
                          onClick={() => setFormData({...formData, service: 'gdz'})}
                        >
                          <h4 style={{ color: 'var(--brand-cyan)' }}>GDz</h4>
                          <span style={{ fontSize: '0.8rem' }}>Dev, UI/UX, Tech</span>
                        </div>
                        <div 
                          className={`glass-card ${formData.service === 'gez' ? 'pink-glow' : ''}`}
                          style={{ padding: '30px', cursor: 'pointer', borderColor: formData.service === 'gez' ? 'var(--brand-pink)' : '' }}
                          onClick={() => setFormData({...formData, service: 'gez'})}
                        >
                          <h4 style={{ color: 'var(--brand-pink)' }}>GEz</h4>
                          <span style={{ fontSize: '0.8rem' }}>Media, Shoots, Edits</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                        <button className="btn btn-outline" style={{ flex: 1 }} onClick={prevStep}>Back</button>
                        <button className="btn btn-primary" style={{ flex: 2 }} onClick={nextStep}>Next Step</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="step-content">
                      <h3 style={{ marginBottom: '30px' }}>Step 3: The Details</h3>
                      <div className="form-group">
                        <label className="form-label">Tell us about your project</label>
                        <textarea 
                          name="message" 
                          className="form-input" 
                          style={{ minHeight: '150px' }} 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="My project is about..." 
                          required
                        />
                      </div>
                      <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                        <button className="btn btn-outline" style={{ flex: 1 }} onClick={prevStep}>Back</button>
                        <button className="btn btn-primary" style={{ flex: 2 }} onClick={handleSubmit} disabled={isSubmitting || !formData.message}>
                          {isSubmitting ? 'Submitting...' : 'Complete Request ✓'}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
