import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminClients() {
  const [clientProjects, setClientProjects] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const refreshClientProjects = async () => {
    const { db } = await import('../../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "client_projects"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setClientProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { refreshClientProjects(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this client project?')) return;
    const { db } = await import('../../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "client_projects", id));
    refreshClientProjects();
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Manage Client Projects</h2>
        <button className="btn btn-primary" onClick={() => { setEditingProject(null); setShowEditor(true); }}>+ Create Project</button>
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '20px' }}>Project Name</th>
              <th style={{ padding: '20px' }}>Client Email</th>
              <th style={{ padding: '20px' }}>Status & Progress</th>
              <th style={{ padding: '20px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientProjects.map(project => (
              <tr key={project.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px', fontWeight: 'bold' }}>{project.name}</td>
                <td style={{ padding: '20px', opacity: 0.8 }}>{project.clientEmail}</td>
                <td style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '0.85rem', padding: '4px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}>{project.status}</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--brand-cyan)' }}>{project.progress}%</span>
                  </div>
                </td>
                <td style={{ padding: '20px' }}>
                  <button onClick={() => { setEditingProject(project); setShowEditor(true); }} style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', cursor: 'pointer', marginRight: '15px' }}>Edit</button>
                  <button onClick={() => handleDelete(project.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
            {clientProjects.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No client projects found. Create one to give a client access to the portal!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showEditor && <ClientProjectEditor project={editingProject} onClose={() => setShowEditor(false)} onSave={() => { setShowEditor(false); refreshClientProjects(); }} />}
    </motion.div>
  );
}

function ClientProjectEditor({ project, onClose, onSave }) {
  const [formData, setFormData] = useState(project || {
    name: '',
    clientEmail: '',
    status: 'In Progress',
    progress: 0,
    milestones: [
      { label: 'Project Kickoff', completed: true, date: '' },
      { label: 'Design Phase', completed: false, date: '' },
      { label: 'Development Phase', completed: false, date: '' },
      { label: 'Final Review & Launch', completed: false, date: '' }
    ],
    links: []
  });
  const [loading, setLoading] = useState(false);

  const handleMilestoneChange = (index, field, value) => {
    const newMilestones = [...formData.milestones];
    newMilestones[index][field] = value;
    setFormData({ ...formData, milestones: newMilestones });
  };

  const handleAddLink = () => {
    setFormData({ ...formData, links: [...formData.links, { label: '', url: '' }] });
  };

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...formData.links];
    newLinks[index][field] = value;
    setFormData({ ...formData, links: newLinks });
  };

  const handleRemoveLink = (index) => {
    const newLinks = formData.links.filter((_, i) => i !== index);
    setFormData({ ...formData, links: newLinks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { db } = await import('../../firebase');
      const { collection, addDoc, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');
      
      const projectData = {
        name: formData.name,
        clientEmail: formData.clientEmail.toLowerCase().trim(),
        status: formData.status,
        progress: Number(formData.progress) || 0,
        milestones: formData.milestones,
        links: formData.links,
        updatedAt: serverTimestamp()
      };

      if (project) {
        await updateDoc(doc(db, "client_projects", project.id), projectData);
      } else {
        projectData.createdAt = serverTimestamp();
        await addDoc(collection(db, "client_projects"), projectData);
      }
      onSave();
    } catch (err) {
      console.error(err);
      alert('Error saving client project.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>{project ? 'Edit Client Project' : 'New Client Project'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          
          <div className="grid-container two-cols" style={{ gap: '20px' }}>
            <input type="text" placeholder="Project Name" className="contact-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <input type="email" placeholder="Client Email (must match their login)" className="contact-input" value={formData.clientEmail} onChange={e => setFormData({...formData, clientEmail: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          </div>

          <div className="grid-container two-cols" style={{ gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Status</label>
              <input type="text" placeholder="e.g. In Progress, Review" className="contact-input" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Progress (%)</label>
              <input type="number" min="0" max="100" className="contact-input" value={formData.progress} onChange={e => setFormData({...formData, progress: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            </div>
          </div>

          {/* Milestones */}
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Milestones</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              {formData.milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <input type="checkbox" checked={m.completed} onChange={e => handleMilestoneChange(i, 'completed', e.target.checked)} style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                  <input type="text" placeholder="Milestone Label" value={m.label} onChange={e => handleMilestoneChange(i, 'label', e.target.value)} style={{ flex: 1, padding: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  <input type="text" placeholder="Date (e.g. Oct 12)" value={m.date} onChange={e => handleMilestoneChange(i, 'date', e.target.value)} style={{ width: '150px', padding: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Project Resources / Links */}
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.2rem' }}>Resources & Links</h3>
              <button type="button" onClick={handleAddLink} style={{ background: 'var(--brand-blue-transparent)', border: '1px solid var(--brand-blue)', color: 'var(--brand-cyan)', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer', fontSize: '0.85rem' }}>+ Add Link</button>
            </div>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              {formData.links.map((link, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <input type="text" placeholder="Label (e.g. Figma Prototype)" value={link.label} onChange={e => handleLinkChange(i, 'label', e.target.value)} style={{ flex: 1, padding: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  <input type="url" placeholder="URL" value={link.url} onChange={e => handleLinkChange(i, 'url', e.target.value)} style={{ flex: 2, padding: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  <button type="button" onClick={() => handleRemoveLink(i)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
                </div>
              ))}
              {formData.links.length === 0 && <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>No resources added yet.</p>}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Saving...' : 'Save Client Project'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
