import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi there! I'm the Geatz Groupz AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI Response
    setTimeout(() => {
      let aiResponse = "That's a great question! Our team specializes in exactly that. Would you like to schedule a quick call to discuss details?";
      
      if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost')) {
        aiResponse = "Our pricing is transparent and based on project complexity. You can check our /pricing page or use our AI Estimator for an instant quote!";
      } else if (input.toLowerCase().includes('service') || input.toLowerCase().includes('do you')) {
        aiResponse = "We offer high-fidelity web development (GDz) and cinematic media production (GEz). Which one are you interested in?";
      }

      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-card blue-glow"
            style={{ 
              width: '350px', height: '500px', marginBottom: '20px', 
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              border: '1px solid var(--brand-blue-glow)'
            }}
          >
            {/* Header */}
            <div style={{ padding: '20px', background: 'var(--brand-blue-transparent)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }} />
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>GGz AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ 
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '12px 15px',
                  borderRadius: msg.role === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
                  background: msg.role === 'user' ? 'var(--brand-blue)' : 'rgba(255,255,255,0.05)',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} style={{ padding: '15px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  style={{ 
                    width: '100%', padding: '12px 45px 12px 15px', 
                    borderRadius: '25px', background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' 
                  }}
                />
                <button type="submit" style={{ position: 'absolute', right: '5px', top: '5px', bottom: '5px', width: '35px', background: 'var(--brand-blue)', border: 'none', borderRadius: '50%', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  →
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '60px', height: '60px', borderRadius: '50%', 
          background: 'var(--brand-blue)', color: '#fff', 
          border: 'none', cursor: 'pointer', fontSize: '1.5rem',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        {isOpen ? '×' : '💬'}
      </motion.button>
    </div>
  );
}
