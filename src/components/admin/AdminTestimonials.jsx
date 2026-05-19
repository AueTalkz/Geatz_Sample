import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const refreshTestimonials = async () => {
    const { db } = await import('../../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setTestimonials(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { refreshTestimonials(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    const { db } = await import('../../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "testimonials", id));
    refreshTestimonials();
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Manage Testimonials</h2>
        <button className="btn btn-primary" onClick={() => { setEditingTestimonial(null); setShowEditor(true); }}>+ Add Testimonial</button>
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '20px' }}>Client</th>
              <th style={{ padding: '20px' }}>Role/Company</th>
              <th style={{ padding: '20px' }}>Testimonial</th>
              <th style={{ padding: '20px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {item.avatar || item.name.charAt(0)}
                  </div>
                  {item.name}
                </td>
                <td style={{ padding: '20px', opacity: 0.8 }}>{item.role}</td>
                <td style={{ padding: '20px' }}>
                  <div style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem', opacity: 0.7 }}>
                    "{item.text}"
                  </div>
                </td>
                <td style={{ padding: '20px' }}>
                  <button onClick={() => { setEditingTestimonial(item); setShowEditor(true); }} style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', cursor: 'pointer', marginRight: '15px' }}>Edit</button>
                  <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No testimonials found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showEditor && <TestimonialEditor testimonial={editingTestimonial} onClose={() => setShowEditor(false)} onSave={() => { setShowEditor(false); refreshTestimonials(); }} />}
    </motion.div>
  );
}

function TestimonialEditor({ testimonial, onClose, onSave }) {
  const [formData, setFormData] = useState(testimonial || {
    name: '',
    role: '',
    text: '',
    avatar: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { db } = await import('../../firebase');
      const { collection, addDoc, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');
      
      const itemData = {
        name: formData.name,
        role: formData.role,
        text: formData.text,
        avatar: formData.avatar || formData.name.charAt(0).toUpperCase(),
        updatedAt: serverTimestamp()
      };

      if (testimonial) {
        await updateDoc(doc(db, "testimonials", testimonial.id), itemData);
      } else {
        itemData.createdAt = serverTimestamp();
        await addDoc(collection(db, "testimonials"), itemData);
      }
      onSave();
    } catch (err) {
      console.error(err);
      alert('Error saving testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>{testimonial ? 'Edit Testimonial' : 'New Testimonial'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          
          <input type="text" placeholder="Client Name" className="contact-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <input type="text" placeholder="Role & Company (e.g. CEO, Nexus Digital)" className="contact-input" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <input type="text" placeholder="Avatar Initial (e.g. S) - optional" className="contact-input" value={formData.avatar} onChange={e => setFormData({...formData, avatar: e.target.value})} maxLength={1} style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <textarea placeholder="Testimonial Text" rows="4" className="contact-input" value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', resize: 'vertical' }}></textarea>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Saving...' : 'Save Testimonial'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
