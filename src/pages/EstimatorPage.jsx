import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import Magnetic from '../components/Magnetic';

export default function EstimatorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: 'web',
    complexity: 'medium',
    features: [],
    deadline: '1-month',
    budget: 'mid'
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const projectTypes = [
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'media', label: 'Cinematic Media', icon: '🎥' },
    { id: 'brand', label: 'Branding & Design', icon: '🎨' },
    { id: 'app', label: 'Custom App/SaaS', icon: '🚀' }
  ];

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const calculateEstimate = () => {
    setIsCalculating(true);
    // Simulate AI thinking
    setTimeout(() => {
      const basePrice = formData.type === 'app' ? 5000 : (formData.type === 'web' ? 2000 : 1500);
      const featureMultiplier = formData.features.length * 500;
      const complexityMultiplier = formData.complexity === 'high' ? 1.5 : (formData.complexity === 'low' ? 0.8 : 1);
      
      const estimatedCost = (basePrice + featureMultiplier) * complexityMultiplier;
      
      setResult({
        price: estimatedCost.toLocaleString(),
        timeline: formData.deadline === 'urgent' ? '2-3 Weeks' : '6-8 Weeks',
        techStack: formData.type === 'web' ? 'React, Next.js, Firebase' : '4K Cinema, Adobe Suite, Drone Ops',
        strategy: 'Focus on high-conversion UI and scalable backend architecture.'
      });
      setIsCalculating(false);
      setStep(4);
    }, 3000);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <Seo title="AI Project Estimator | Geatz Groupz" description="Get an instant AI-powered estimate for your next digital project." />
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div className="division-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="section-title">AI <span className="gradient-text">Estimator</span></h1>
          <p className="section-desc">Answer a few questions and our AI will architect your project scope.</p>
        </motion.div>

        <div className="glass-card blue-glow" style={{ padding: '50px', marginTop: '40px', position: 'relative', overflow: 'hidden' }}>
          
          <AnimatePresence mode="wait">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 style={{ marginBottom: '30px' }}>What are we building?</h3>
                <div className="grid-container two-cols" style={{ gap: '20px' }}>
                  {projectTypes.map(t => (
                    <button 
                      key={t.id}
                      onClick={() => { setFormData({...formData, type: t.id}); setStep(2); }}
                      className={`glass-card ${formData.type === t.id ? 'blue-glow' : ''}`}
                      style={{ padding: '30px', textAlign: 'center', border: formData.type === t.id ? '1px solid var(--brand-blue)' : '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    >
                      <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '15px' }}>{t.icon}</span>
                      <span style={{ fontWeight: 'bold' }}>{t.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 style={{ marginBottom: '30px' }}>Select key features</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                  {['E-Commerce', 'User Auth', 'CMS / Admin Panel', '3D Elements', 'Custom Animations', 'API Integration', 'SEO Pack', 'Multi-language'].map(f => (
                    <button 
                      key={f}
                      onClick={() => handleFeatureToggle(f)}
                      style={{ 
                        padding: '10px 20px', borderRadius: '50px', 
                        background: formData.features.includes(f) ? 'var(--brand-blue)' : 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer'
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <button onClick={() => setStep(1)} className="btn btn-outline">Back</button>
                  <button onClick={() => setStep(3)} className="btn btn-primary">Next Step</button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Complexity & Budget */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 style={{ marginBottom: '30px' }}>Complexity & Timeline</h3>
                <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                  <select className="contact-input" style={{ width: '100%', padding: '15px', borderRadius: '10px', background: '#111', color: '#fff' }} onChange={e => setFormData({...formData, complexity: e.target.value})}>
                    <option value="medium">Medium Complexity</option>
                    <option value="low">Low Complexity (Static)</option>
                    <option value="high">High Complexity (Custom Logic)</option>
                  </select>
                  <select className="contact-input" style={{ width: '100%', padding: '15px', borderRadius: '10px', background: '#111', color: '#fff' }} onChange={e => setFormData({...formData, deadline: e.target.value})}>
                    <option value="standard">Standard Timeline (4-8 weeks)</option>
                    <option value="urgent">Urgent (2-3 weeks)</option>
                    <option value="flexible">Flexible (8+ weeks)</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', gap: '20px' }}>
                  <button onClick={() => setStep(2)} className="btn btn-outline">Back</button>
                  <button onClick={calculateEstimate} disabled={isCalculating} className="btn btn-primary" style={{ flex: 1 }}>
                    {isCalculating ? 'AI is analyzing...' : 'Generate Estimate'}
                  </button>
                </div>

                {isCalculating && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid var(--brand-blue)', borderTopColor: 'transparent', marginBottom: '20px' }}
                    />
                    <p style={{ letterSpacing: '2px', fontWeight: 'bold' }}>ARCHITECTING SOLUTION...</p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Step 4: Results */}
            {step === 4 && result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Estimation Result</span>
                  <h2 style={{ fontSize: '3.5rem', marginTop: '10px' }}>${result.price}*</h2>
                  <p style={{ opacity: 0.5 }}>*This is a preliminary AI estimate.</p>
                </div>

                <div className="grid-container two-cols" style={{ gap: '20px', marginBottom: '40px' }}>
                  <div className="glass-card" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                    <p style={{ fontSize: '0.8rem', opacity: 0.4, textTransform: 'uppercase', marginBottom: '10px' }}>Timeline</p>
                    <h4 style={{ fontSize: '1.2rem' }}>{result.timeline}</h4>
                  </div>
                  <div className="glass-card" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                    <p style={{ fontSize: '0.8rem', opacity: 0.4, textTransform: 'uppercase', marginBottom: '10px' }}>Suggested Stack</p>
                    <h4 style={{ fontSize: '1.2rem' }}>{result.techStack}</h4>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', marginBottom: '40px', borderLeft: '4px solid var(--brand-blue)' }}>
                  <h4 style={{ marginBottom: '10px' }}>AI Strategic Note</h4>
                  <p style={{ opacity: 0.8, lineHeight: '1.6' }}>{result.strategy}</p>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <button onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1 }}>Start Over</button>
                  <Magnetic>
                    <a href="#contact" className="btn btn-primary" style={{ flex: 2, textAlign: 'center' }}>Book Discovery Call</a>
                  </Magnetic>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
