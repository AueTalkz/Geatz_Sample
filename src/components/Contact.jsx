import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'gdz',
    message: ''
  });

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name (at least 2 characters)';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please describe your project (at least 10 characters)';
    }
    if (formData.message.length > 2000) {
      newErrors.message = 'Message is too long (max 2000 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    setErrors({});
    setStep(step + 1);
  };

  const prevStep = () => {
    setErrors({});
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contact_requests"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        service: formData.service,
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        source: window.location.href,
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'gdz', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
      }, 8000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to send. Please try again or email us directly.' });
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
                        <label className="form-label" htmlFor="contact-name">What is your name?</label>
                        <input 
                          type="text" 
                          id="contact-name"
                          name="name" 
                          className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Alex Carter" 
                          maxLength={100}
                          autoComplete="name"
                          required 
                        />
                        {errors.name && <span className="form-error-text">{errors.name}</span>}
                      </div>
                      <div className="form-group" style={{ marginTop: '20px' }}>
                        <label className="form-label" htmlFor="contact-email">Email Address</label>
                        <input 
                          type="email" 
                          id="contact-email"
                          name="email" 
                          className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="alex@choice.com" 
                          maxLength={254}
                          autoComplete="email"
                          required 
                        />
                        {errors.email && <span className="form-error-text">{errors.email}</span>}
                      </div>
                      <button 
                        className="btn btn-primary" 
                        style={{ marginTop: '30px', width: '100%' }} 
                        onClick={nextStep}
                      >
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
                          role="button"
                          tabIndex={0}
                          aria-pressed={formData.service === 'gdz'}
                          onKeyDown={(e) => e.key === 'Enter' && setFormData({...formData, service: 'gdz'})}
                        >
                          <h4 style={{ color: 'var(--brand-cyan)' }}>GDz</h4>
                          <span style={{ fontSize: '0.8rem' }}>Dev, UI/UX, Tech</span>
                        </div>
                        <div 
                          className={`glass-card ${formData.service === 'gez' ? 'pink-glow' : ''}`}
                          style={{ padding: '30px', cursor: 'pointer', borderColor: formData.service === 'gez' ? 'var(--brand-pink)' : '' }}
                          onClick={() => setFormData({...formData, service: 'gez'})}
                          role="button"
                          tabIndex={0}
                          aria-pressed={formData.service === 'gez'}
                          onKeyDown={(e) => e.key === 'Enter' && setFormData({...formData, service: 'gez'})}
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
                        <label className="form-label" htmlFor="contact-message">Tell us about your project</label>
                        <textarea 
                          id="contact-message"
                          name="message" 
                          className={`form-input ${errors.message ? 'form-input-error' : ''}`}
                          style={{ minHeight: '150px' }} 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="My project is about..." 
                          maxLength={2000}
                          required
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                          {errors.message ? (
                            <span className="form-error-text">{errors.message}</span>
                          ) : <span />}
                          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                            {formData.message.length}/2000
                          </span>
                        </div>
                      </div>
                      {errors.submit && (
                        <div style={{ 
                          marginTop: '16px', 
                          padding: '12px 16px', 
                          background: 'rgba(239, 68, 68, 0.1)', 
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          borderRadius: '12px',
                          color: '#ef4444',
                          fontSize: '0.9rem'
                        }}>
                          {errors.submit}
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                        <button className="btn btn-outline" style={{ flex: 1 }} onClick={prevStep}>Back</button>
                        <button className="btn btn-primary" style={{ flex: 2 }} onClick={handleSubmit} disabled={isSubmitting}>
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
