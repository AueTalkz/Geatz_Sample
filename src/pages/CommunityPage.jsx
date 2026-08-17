import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Users, Sparkles, BookOpen, Layers, Trophy, MessageSquare, 
  Network, Compass, CheckCircle2, ArrowRight, X, Heart, ShieldAlert 
} from 'lucide-react';

export default function CommunityPage() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joined, setJoined] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Beginner Editor' });

  const benefits = [
    {
      icon: BookOpen,
      title: 'Learning Resources',
      desc: 'Exclusive tutorials, edit asset packs, project files, and hook templates updated weekly.',
      color: 'from-violet-500 to-indigo-600'
    },
    {
      icon: Layers,
      title: 'Collaboration',
      desc: 'Team up with other creators, motion graphic artists, and sound designers on big productions.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Trophy,
      title: 'Monthly Challenges',
      desc: 'Participate in edit battles, thumbnail design contests, and win client referrals & prizes.',
      color: 'from-amber-500 to-pink-600'
    },
    {
      icon: MessageSquare,
      title: 'Feedback Sessions',
      desc: 'Get direct line-by-line critiques on your video drafts before posting to social media.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Network,
      title: 'Networking & Hiring',
      desc: 'Direct pipeline to client leads, studio job offers, and high-paying creator roles.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const targetAudience = [
    { title: 'Beginner Editors', desc: 'Looking to master Premiere, After Effects & CapCut.' },
    { title: 'Content Creators', desc: 'Seeking strategies to grow reach & improve video quality.' },
    { title: 'Designers & Animators', desc: 'Building thumbnails, 3D graphics & brand systems.' },
    { title: 'Students & Freshers', desc: 'Eager to get real-world client experience & portfolio projects.' }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Build Creators',
      desc: 'Focus on skill development, foundational edit workflows, and mastering retention science.',
      active: true
    },
    {
      phase: 'Phase 2',
      title: 'Create Teams',
      desc: 'Form specialized squads of scriptwriters, editors, and graphic designers for client projects.',
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
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJoined(true);
    triggerConfetti();
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-24">
      
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
          <Users className="w-4 h-4 text-cyan-400" />
          The Geeks Hub
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white brand-font tracking-tight">
          Not Just A Community. <br />
          <span className="text-gradient">A Creator Movement.</span>
        </h1>
        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          "Geeks is a place where young creators, editors, designers, and aspiring professionals connect, learn, and collaborate."
        </p>
        
        <div className="pt-4">
          <button
            onClick={() => setShowJoinModal(true)}
            className="glow-btn-primary text-base py-4 px-10 shadow-2xl"
          >
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span>Join The Geeks Community</span>
          </button>
        </div>
      </section>

      {/* WHAT MEMBERS GET */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <span className="badge-pulse text-xs">Community Perks</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font">
            What Members <span className="text-gradient">Get</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${b.color} p-[1px]`}>
                  <div className="w-full h-full bg-[#0d101a] rounded-[15px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white brand-font">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="text-center space-y-3">
          <span className="badge-pulse text-xs">Open Door Policy</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white brand-font">
            Who Can <span className="text-gradient">Join?</span>
          </h2>
          <p className="text-xs text-slate-400">Whether you're just starting or scaling your career, Geeks is for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((target, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-cyan-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold text-sm mb-3">
                #{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white brand-font">{target.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{target.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY ROADMAP */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <span className="badge-pulse text-xs">Our Growth Strategy</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font">
            Community <span className="text-gradient">Roadmap</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((r, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-3xl border transition-all ${
                r.active 
                  ? 'bg-gradient-to-b from-violet-950/40 to-[#0c0e18] border-violet-500/50 shadow-lg shadow-violet-900/20' 
                  : 'bg-white/5 border-white/10 opacity-80'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  r.active ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-white/10 text-slate-400'
                }`}>
                  {r.phase}
                </span>
                {r.active && <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Active</span>}
              </div>
              <h3 className="text-lg font-bold text-white brand-font mb-2">{r.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM JOIN BANNER */}
      <section className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-r from-violet-900/60 via-indigo-900/40 to-cyan-900/60 border border-violet-500/30 text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font">
          Ready to level up your content career?
        </h2>
        <p className="text-slate-200 text-sm md:text-base max-w-xl mx-auto">
          Join thousands of passionate editors, creators, and visual artists in the Geeks network.
        </p>
        <button
          onClick={() => setShowJoinModal(true)}
          className="glow-btn-primary text-base py-3.5 px-8 inline-flex"
        >
          <span>Become a Geek Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* JOIN MODAL POPUP */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0f1422] border border-white/15 rounded-3xl p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => { setShowJoinModal(false); setJoined(false); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!joined ? (
              <>
                <div className="space-y-2 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] mx-auto flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white brand-font">Join The Geeks Movement</h3>
                  <p className="text-xs text-slate-400">Fill in your details to get instant access to community Discord & resources.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivers"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold">Primary Role / Interest</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141a2e] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500"
                    >
                      <option value="Beginner Editor">Beginner Editor</option>
                      <option value="Advanced Editor">Advanced Video Editor</option>
                      <option value="Content Creator">Content Creator / YouTuber</option>
                      <option value="Thumbnail Designer">Thumbnail Designer / Artist</option>
                      <option value="Student / Fresher">Student / Fresher</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="glow-btn-primary w-full py-3.5 justify-center text-sm font-bold mt-2"
                  >
                    <span>Confirm & Get Discord Invite</span>
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white brand-font">Welcome to Geeks, {formData.name}! 🎉</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your invite link has been generated. Check your inbox ({formData.email}) or click below to join our Discord server.
                </p>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn-primary py-3 px-6 text-sm inline-flex justify-center"
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
