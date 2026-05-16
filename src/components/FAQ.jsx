import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do you offer custom packages if my needs don't fit the tiers?",
    answer: "Absolutely. Our tiers are designed to cover the most common needs, but we frequently build custom proposals for enterprise clients, complex web apps, or unique production requirements. Contact us to discuss your specific vision."
  },
  {
    question: "What is the typical timeline for a web development project?",
    answer: "A standard 1-3 page website (GDz Starter) takes about 1-2 weeks. More complex sites or basic e-commerce setups take 3-4 weeks. Full custom web apps and CRMs are scoped individually but typically range from 6-12 weeks."
  },
  {
    question: "Who owns the rights to the media created by GEz?",
    answer: "You do. Upon final payment, full ownership rights to all produced media (photos, videos, copy) are transferred to you. We only retain the right to showcase the work in our portfolio, unless a strict NDA is signed."
  },
  {
    question: "Do you provide ongoing maintenance and hosting?",
    answer: "Yes! We offer managed hosting, ongoing maintenance, and retainer agreements for both our development (GDz) and content (GEz) divisions to ensure your digital presence is always up-to-date and secure."
  },
  {
    question: "What platforms do you build on?",
    answer: "We specialize in modern stacks: React, Next.js, Firebase, and Node.js for custom apps. For CMS-driven sites, we leverage platforms like Webflow or Shopify, depending on your business requirements."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="division-section" style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          className="division-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="glass-card faq-item"
              style={{ 
                marginBottom: '15px', 
                padding: '25px', 
                cursor: 'pointer',
                border: activeIndex === index ? '1px solid var(--brand-blue)' : '1px solid rgba(255, 255, 255, 0.07)'
              }}
              onClick={() => toggleAccordion(index)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', margin: 0, paddingRight: '20px' }}>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '15px' }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
