import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminTeam() {
  const [members, setMembers] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const refreshMembers = async () => {
    const { db } = await import('../../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "team_members"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    setMembers(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { refreshMembers(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to remove this team member?')) return;
    const { db } = await import('../../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "team_members", id));
    refreshMembers();
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Manage Team</h2>
        <button className="btn btn-primary" onClick={() => { setEditingMember(null); setShowEditor(true); }}>+ Add Member</button>
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '20px' }}>Name</th>
              <th style={{ padding: '20px' }}>Role</th>
              <th style={{ padding: '20px' }}>Order</th>
              <th style={{ padding: '20px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: `linear-gradient(135deg, ${member.color}aa, ${member.color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {member.name.charAt(0)}
                  </div>
                  {member.name}
                </td>
                <td style={{ padding: '20px', color: member.color, fontWeight: 'bold' }}>{member.role}</td>
                <td style={{ padding: '20px' }}>{member.order || 0}</td>
                <td style={{ padding: '20px' }}>
                  <button onClick={() => { setEditingMember(member); setShowEditor(true); }} style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', cursor: 'pointer', marginRight: '15px' }}>Edit</button>
                  <button onClick={() => handleDelete(member.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No team members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showEditor && <TeamEditor member={editingMember} onClose={() => setShowEditor(false)} onSave={() => { setShowEditor(false); refreshMembers(); }} />}
    </motion.div>
  );
}

function TeamEditor({ member, onClose, onSave }) {
  const [formData, setFormData] = useState(member || {
    name: '',
    role: '',
    bio: '',
    color: '#a855f7',
    order: 0
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { db } = await import('../../firebase');
      const { collection, addDoc, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');
      
      const memberData = {
        name: formData.name,
        role: formData.role,
        bio: formData.bio,
        color: formData.color,
        order: Number(formData.order) || 0,
        updatedAt: serverTimestamp()
      };

      if (member) {
        await updateDoc(doc(db, "team_members", member.id), memberData);
      } else {
        memberData.createdAt = serverTimestamp();
        await addDoc(collection(db, "team_members"), memberData);
      }
      onSave();
    } catch (err) {
      console.error(err);
      alert('Error saving team member.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>{member ? 'Edit Member' : 'New Member'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          
          <input type="text" placeholder="Name" className="contact-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <input type="text" placeholder="Role (e.g. Founder & Creative Director)" className="contact-input" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <textarea placeholder="Bio" rows="3" className="contact-input" value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', resize: 'vertical' }}></textarea>
          
          <div className="grid-container two-cols" style={{ gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Brand Color</label>
              <input type="color" className="contact-input" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} style={{ width: '100%', height: '50px', padding: '5px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Display Order</label>
              <input type="number" className="contact-input" value={formData.order} onChange={e => setFormData({...formData, order: e.target.value})} style={{ width: '100%', height: '50px', padding: '10px 15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Saving...' : 'Save Member'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
