import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      // Connect to Firestore "contact_requests" collection
      await addDoc(collection(db, "contact_requests"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      console.log('Form successfully submitted to Firebase!');
      alert('Thank you! Your request has been submitted to our Database.');
      setFormData({ name: '', email: '', service: 'gdz', message: '' });
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
        <div className="division-header reveal-up">
          <h2 className="section-title">
            Start a <span className="gradient-text">Project</span>
          </h2>
          <p className="section-desc">
            Ready to bring your vision to life? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="glass-card white-glow reveal-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting to Database...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
