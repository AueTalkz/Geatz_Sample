import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import LeaderboardSpotlight from '../components/LeaderboardSpotlight.jsx';
import { 
  Users, Sparkles, BookOpen, Layers, Trophy, MessageSquare, 
  Network, CheckCircle2, ArrowRight, X 
} from 'lucide-react';

export default function CommunityPage() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joined, setJoined] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Beginner Editor' });

  const benefits = [
    {
      icon: BookOpen,
      title: 'Learning Resources',
      desc: 'Exclusive tutorials, asset packs, project files, and hook templates updated weekly.'
    },
    {
      icon: Layers,
      title: 'Collaboration',
      desc: 'Team up with other creators, motion graphic artists, and sound designers on big productions.'
    },
    {
      icon: Trophy,
      title: 'Monthly Battles',
      desc: 'Participate in edit challenges, thumbnail design contests, and win client referrals.'
    },
    {
      icon: MessageSquare,
      title: 'Direct Feedback',
      desc: 'Get line-by-line critiques on your video drafts before posting to social media.'
    },
    {
      icon: Network,
      title: 'Hiring Pipeline',
      desc: 'Direct pipeline to client leads, studio job offers, and high-paying creator roles.'
    }
  ];

  const targetAudience = [
    { title: 'Editors', desc: 'Mastering Premiere, After Effects & CapCut.' },
    { title: 'Creators', desc: 'Seeking strategies to grow reach & retention.' },
    { title: 'Animators', desc: 'Building thumbnails, 3D graphics & brand systems.' },
    { title: 'Freshers', desc: 'Eager to get real-world client experience & portfolio projects.' }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Build Creators',
      desc: 'Focus on skill development, edit workflows, and mastering retention science.',
      active: true
    },
    {
      phase: 'Phase 2',
      title: 'Create Teams',
      desc: 'Form specialized squads of scriptwriters, editors, and graphic designers for clients.',
      active: true
    },
    {
      phase: 'Phase 3',
      title: 'Produce Projects',
      desc: 'Launch studio-backed original creator web series, documentaries, and digital products.',
      active: false
    },
    {
      phase: 'Phase 4',
      title: 'Build Ecosystem',
      desc: 'Full creator accelerator, seed funding for original shows, and global creator hubs.',
      active: false
    }
  ];

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJoined(true);
    triggerConfetti();
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-16 sm:space-y-20">
      
      {/* HERO */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-indigo-300 border border-white/10">
          <Users className="w-3.5 h-3.5 text-indigo-400" />
          The Geeks Hub
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white brand-font tracking-tight leading-tight">
          Not Just A Community. <br />
          <span className="text-gradient">A Creator Movement.</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          Geeks is a hub where young creators, video editors, designers, and aspiring professionals connect, learn, and collaborate.
        </p>
        
        <div className="pt-2">
          <button
            onClick={() => setShowJoinModal(true)}
            className="glow-btn-primary text-xs py-3 px-6"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Join The Community</span>
          </button>
        </div>
      </section>

      {/* MEMBER SPOTLIGHT & LEADERBOARD */}
      <section>
        <LeaderboardSpotlight />
      </section>

      {/* PERKS */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-pulse text-[11px]">Member Perks</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
            What Members <span className="text-gradient">Get</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white brand-font">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
        <div className="text-center space-y-2">
          <span className="badge-pulse text-[11px]">Open Door Policy</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
            Who Can <span className="text-gradient">Join?</span>
          </h2>
          <p className="text-xs text-slate-400">Whether you're starting or scaling, Geeks is for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {targetAudience.map((target, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center mb-2">
                #{idx + 1}
              </div>
              <h3 className="text-xs font-bold text-white brand-font">{target.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{target.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-pulse text-[11px]">Growth Strategy</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
            Community <span className="text-gradient">Roadmap</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmapPhases.map((r, idx) => (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl border transition-all ${
                r.active 
                  ? 'bg-white/5 border-white/20' 
                  : 'bg-white/[0.02] border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-semibold ${
                  r.active ? 'bg-white/10 text-white' : 'bg-white/5 text-slate-400'
                }`}>
                  {r.phase}
                </span>
                {r.active && <span className="text-[10px] uppercase font-semibold text-emerald-400">Active</span>}
              </div>
              <h3 className="text-sm font-bold text-white brand-font mb-1">{r.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
          Ready to level up your content career?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
          Join thousands of passionate editors, creators, and visual artists in our network.
        </p>
        <button
          onClick={() => setShowJoinModal(true)}
          className="glow-btn-primary text-xs py-2.5 px-6 inline-flex"
        >
          <span>Become a Member</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* MODAL */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#0b0d14] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-5">
            
            <button
              onClick={() => { setShowJoinModal(false); setJoined(false); }}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {!joined ? (
              <>
                <div className="space-y-1 text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 mx-auto flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white brand-font">Join The Movement</h3>
                  <p className="text-xs text-slate-400">Fill in your details for access to Discord & resources.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivers"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-medium">Primary Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121520] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Beginner Editor">Beginner Editor</option>
                      <option value="Advanced Editor">Advanced Video Editor</option>
                      <option value="Content Creator">Content Creator</option>
                      <option value="Thumbnail Designer">Thumbnail Designer</option>
                      <option value="Fresher">Student / Fresher</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="glow-btn-primary w-full py-2.5 justify-center text-xs font-semibold mt-2"
                  >
                    <span>Get Discord Access</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white brand-font">Welcome, {formData.name}! 🎉</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your invite is ready. Check your inbox ({formData.email}) or click below to join our Discord server.
                </p>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn-primary py-2.5 px-5 text-xs inline-flex justify-center"
                >
                  Enter Discord Server Now
                </a>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

