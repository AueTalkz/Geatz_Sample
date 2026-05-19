import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const refreshProjects = async () => {
    const { db } = await import('../../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { refreshProjects(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    const { db } = await import('../../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "projects", id));
    refreshProjects();
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Manage Projects</h2>
        <button className="btn btn-primary" onClick={() => { setEditingProject(null); setShowEditor(true); }}>+ Create Project</button>
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '20px' }}>Title</th>
              <th style={{ padding: '20px' }}>Category</th>
              <th style={{ padding: '20px' }}>Color</th>
              <th style={{ padding: '20px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px' }}>{project.title}</td>
                <td style={{ padding: '20px' }}><span style={{ padding: '4px 10px', borderRadius: '4px', background: 'var(--brand-blue-transparent)', fontSize: '0.8rem' }}>{project.category}</span></td>
                <td style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: project.imageColor }}></div>
                    {project.imageColor}
                  </div>
                </td>
                <td style={{ padding: '20px' }}>
                  <button onClick={() => { setEditingProject(project); setShowEditor(true); }} style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', cursor: 'pointer', marginRight: '15px' }}>Edit</button>
                  <button onClick={() => handleDelete(project.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No projects found. Create one to populate the Showcase!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showEditor && <ProjectEditor project={editingProject} onClose={() => setShowEditor(false)} onSave={() => { setShowEditor(false); refreshProjects(); }} />}
    </motion.div>
  );
}

function ProjectEditor({ project, onClose, onSave }) {
  const [formData, setFormData] = useState(project || {
    idSlug: '',
    title: '',
    category: 'GDz (Development)',
    imageColor: '#06b6d4',
    image: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { db } = await import('../../firebase');
      const { collection, doc, setDoc, updateDoc, serverTimestamp } = await import('firebase/firestore');
      
      const projectData = {
        title: formData.title,
        category: formData.category,
        imageColor: formData.imageColor,
        image: formData.image,
        updatedAt: serverTimestamp()
      };

      if (project) {
        // Update existing document
        await updateDoc(doc(db, "projects", project.id), projectData);
      } else {
        // Create new document with the specified slug as ID
        projectData.createdAt = serverTimestamp();
        await setDoc(doc(db, "projects", formData.idSlug), projectData);
      }
      onSave();
    } catch (err) {
      console.error(err);
      alert('Error saving project.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>{project ? 'Edit Project' : 'New Project'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          
          {!project && (
            <input type="text" placeholder="URL Slug (e.g. e-commerce-redesign)" className="contact-input" value={formData.idSlug} onChange={e => setFormData({...formData, idSlug: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          )}
          
          <input type="text" placeholder="Project Title" className="contact-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <div className="grid-container two-cols" style={{ gap: '20px' }}>
            <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="contact-input" style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
              <option value="GDz (Development)">GDz (Development)</option>
              <option value="GEz (Media)">GEz (Media)</option>
            </select>
            
            <input type="color" className="contact-input" value={formData.imageColor} onChange={e => setFormData({...formData, imageColor: e.target.value})} style={{ width: '100%', height: '50px', padding: '5px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer' }} title="Brand Color" />
          </div>
          
          <input type="text" placeholder="Image URL (e.g. /assets/projects/ecommerce.png or https://...)" className="contact-input" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Saving...' : 'Save Project'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
