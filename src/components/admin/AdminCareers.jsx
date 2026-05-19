import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminCareers() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [showJobEditor, setShowJobEditor] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' or 'apps'

  const refreshJobs = async () => {
    const { db } = await import('../../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "job_openings"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setJobs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const refreshApps = async () => {
    const { db } = await import('../../firebase');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, "job_applications"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setApplications(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { 
    if (activeTab === 'jobs') refreshJobs();
    else refreshApps();
  }, [activeTab]);

  const handleDeleteJob = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job opening?')) return;
    const { db } = await import('../../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "job_openings", id));
    refreshJobs();
  };
  
  const handleDeleteApp = async (id) => {
    if (!window.confirm('Delete this application?')) return;
    const { db } = await import('../../firebase');
    const { doc, deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, "job_applications", id));
    refreshApps();
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <h2 
            onClick={() => setActiveTab('jobs')} 
            style={{ cursor: 'pointer', opacity: activeTab === 'jobs' ? 1 : 0.5, borderBottom: activeTab === 'jobs' ? '2px solid var(--brand-blue)' : 'none' }}
          >
            Job Openings
          </h2>
          <h2 
            onClick={() => setActiveTab('apps')} 
            style={{ cursor: 'pointer', opacity: activeTab === 'apps' ? 1 : 0.5, borderBottom: activeTab === 'apps' ? '2px solid var(--brand-blue)' : 'none' }}
          >
            Applications ({applications.length || '?'})
          </h2>
        </div>
        {activeTab === 'jobs' && (
          <button className="btn btn-primary" onClick={() => { setEditingJob(null); setShowJobEditor(true); }}>+ Create Job</button>
        )}
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        {activeTab === 'jobs' ? (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '20px' }}>Title</th>
                <th style={{ padding: '20px' }}>Type / Location</th>
                <th style={{ padding: '20px' }}>Category</th>
                <th style={{ padding: '20px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '20px', fontWeight: 'bold' }}>{job.title}</td>
                  <td style={{ padding: '20px', opacity: 0.8 }}>{job.type} • {job.location}</td>
                  <td style={{ padding: '20px' }}>
                    <span style={{ fontSize: '0.85rem', padding: '4px 8px', borderRadius: '4px', background: 'var(--brand-purple-transparent)', color: '#fff' }}>{job.category}</span>
                  </td>
                  <td style={{ padding: '20px' }}>
                    <button onClick={() => { setEditingJob(job); setShowJobEditor(true); }} style={{ background: 'none', border: 'none', color: 'var(--brand-blue)', cursor: 'pointer', marginRight: '15px' }}>Edit</button>
                    <button onClick={() => handleDeleteJob(job.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No job openings found. Create one!</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '20px' }}>Applicant</th>
                <th style={{ padding: '20px' }}>Email</th>
                <th style={{ padding: '20px' }}>Link / Superpower</th>
                <th style={{ padding: '20px' }}>Date</th>
                <th style={{ padding: '20px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '20px', fontWeight: 'bold' }}>{app.name}</td>
                  <td style={{ padding: '20px', opacity: 0.8 }}><a href={`mailto:${app.email}`} style={{ color: 'var(--brand-blue)' }}>{app.email}</a></td>
                  <td style={{ padding: '20px', maxWidth: '300px' }}>
                    <a href={app.url} target="_blank" rel="noreferrer" style={{ color: 'var(--brand-cyan)' }}>Portfolio ↗</a>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.superpower}</p>
                  </td>
                  <td style={{ padding: '20px', opacity: 0.6 }}>{new Date(app.createdAt?.seconds * 1000).toLocaleDateString()}</td>
                  <td style={{ padding: '20px' }}>
                    <button onClick={() => handleDeleteApp(app.id)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No applications received yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {showJobEditor && <JobEditor job={editingJob} onClose={() => setShowJobEditor(false)} onSave={() => { setShowJobEditor(false); refreshJobs(); }} />}
    </motion.div>
  );
}

function JobEditor({ job, onClose, onSave }) {
  const [formData, setFormData] = useState(job || {
    title: '',
    type: 'Full-time',
    location: 'Remote',
    category: 'engineering',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { db } = await import('../../firebase');
      const { collection, addDoc, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');
      
      const jobData = {
        title: formData.title,
        type: formData.type,
        location: formData.location,
        category: formData.category,
        description: formData.description,
        updatedAt: serverTimestamp()
      };

      if (job) {
        await updateDoc(doc(db, "job_openings", job.id), jobData);
      } else {
        jobData.createdAt = serverTimestamp();
        await addDoc(collection(db, "job_openings"), jobData);
      }
      onSave();
    } catch (err) {
      console.error(err);
      alert('Error saving job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>{job ? 'Edit Job' : 'New Job'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          
          <input type="text" placeholder="Job Title (e.g. Senior Frontend Engineer)" className="contact-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          
          <div className="grid-container two-cols" style={{ gap: '20px' }}>
            <input type="text" placeholder="Type (e.g. Full-time)" className="contact-input" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <input type="text" placeholder="Location (e.g. Remote)" className="contact-input" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
          </div>

          <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="contact-input" style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
            <option value="engineering">Engineering</option>
            <option value="creative">Creative / Design</option>
            <option value="marketing">Marketing</option>
            <option value="operations">Operations</option>
          </select>
          
          <textarea placeholder="Job Description" rows="4" className="contact-input" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required style={{ width: '100%', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', resize: 'vertical' }}></textarea>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Saving...' : 'Save Job'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
