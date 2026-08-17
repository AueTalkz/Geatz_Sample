import React from 'react';
import { Sparkles, Award, Target, Heart, Rocket, Compass, CheckCircle2, User, ArrowRight, Code, Video, Brain } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  
  const values = [
    {
      icon: Sparkles,
      title: 'Creativity First',
      desc: 'We prioritize original, narrative-driven visual storytelling over repetitive formulas.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Learn Constantly',
      desc: 'Digital platforms evolve daily. We constantly experiment with new tools, algorithms, and edit techniques.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: 'Build Together',
      desc: 'Growth happens faster in teams. We collaborate closely with creators and nurture the Geeks ecosystem.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Create Impact',
      desc: 'Every video, thumbnail, and campaign must deliver tangible audience retention and brand authority.',
      color: 'from-amber-500 to-rose-600'
    }
  ];

  const milestones = [
    { year: '2023', title: 'The Spark', desc: 'Started as an independent video editing experiment focusing on high-retention short-form edits.' },
    { year: '2024', title: 'Geeks Community Launch', desc: 'Expanded into a collaborative ecosystem connecting passionate editors, designers, and creators.' },
    { year: '2025', title: 'Studio Expansion', desc: 'Scaled into a full-service creative studio handling end-to-end creator strategy & brand visual systems.' },
    { year: '2026+', title: 'Ecosystem Vision', desc: 'Pioneering creator incubator programs, team productions, and digital brand development.' }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-20">
      
      {/* HERO / INTRO */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <span className="badge-pulse text-xs">About Itz Geatz</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white brand-font tracking-tight">
          Building the Ecosystem for <br />
          <span className="text-gradient">Next-Gen Creators.</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Itz Geatz is more than an editing studio—it is a movement dedicated to transforming concepts into impactful digital identities and empowering the next generation of creative minds.
        </p>
      </section>

      {/* OUR STORY SECTION */}
      <section className="glass-panel p-8 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="bg-glow-orb-1 -top-20 -left-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-6">
            <span className="badge-pulse text-xs">Origin & Evolution</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white brand-font">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              "Itz Geatz started with a vision to help young creators find their voice, develop their skills, and create meaningful digital content."
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              What began as late-night video editing sessions and experimental visual effects quickly evolved into a dedicated studio. Through continuous learning, experimenting, and refining content strategies, we realized that creators don't just need editors—they need strategic partners who understand digital culture.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-cyan-400 brand-font">100%</div>
                <div className="text-xs text-slate-400">Creator-Centric Focus</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-violet-400 brand-font">Multi-Domain</div>
                <div className="text-xs text-slate-400">Editing, Strategy, Branding</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg brand-font mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              The Journey Timeline
            </h3>
            <div className="space-y-3 border-l-2 border-violet-500/30 pl-6 ml-2">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#07080c]" />
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-violet-500/50 transition-colors space-y-1">
                    <span className="text-xs font-bold text-violet-400">{m.year}</span>
                    <h4 className="text-white font-semibold text-sm brand-font">{m.title}</h4>
                    <p className="text-xs text-slate-400">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* OUR VISION SECTION */}
      <section className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-r from-violet-950/60 via-indigo-950/40 to-cyan-950/60 border border-violet-500/30 text-center space-y-6">
        <span className="badge-pulse text-xs">Looking Forward</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font max-w-4xl mx-auto leading-tight">
          Our <span className="text-gradient">Vision</span>
        </h2>
        <blockquote className="text-lg md:text-2xl text-slate-200 font-medium italic max-w-3xl mx-auto">
          "Building a future where every creator has the tools, knowledge, and community to grow."
        </blockquote>
      </section>

      {/* OUR VALUES CARDS */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <span className="badge-pulse text-xs">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white brand-font">
            Our Core <span className="text-gradient">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} p-[1px]`}>
                  <div className="w-full h-full bg-[#0d101a] rounded-[15px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white brand-font">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Founder Photo Avatar */}
          <div className="relative mx-auto w-48 h-48 md:w-full md:h-72 rounded-3xl overflow-hidden bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] shadow-2xl shadow-violet-600/30">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              alt="Founder Profile"
              className="w-full h-full object-cover rounded-[22px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-semibold text-cyan-300 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                Founder & Creative Lead
              </span>
            </div>
          </div>

          {/* Profile Bio */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Leadership</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white brand-font">
                Behind Itz Geatz
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Passionate creative strategist, video editor, and digital builder committed to empowering creators. Driven by a desire to combine cinematic aesthetic standards with modern creator economy growth tools.
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Skillset & Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Creative Strategy', 'Short-Form Viral Edits', 'Story Architecture', 
                  'Motion Graphics', 'Audience Analytics', 'Community Leadership'
                ].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-4 rounded-2xl bg-violet-600/10 border border-violet-500/20 text-xs text-violet-200">
              <strong className="text-white block font-semibold mb-1">Founder Mission:</strong>
              "To break down barriers for ambitious creators, providing them with top-tier editing, strategy, and a collaborative network to reach millions."
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-8">
        <button
          onClick={() => setActivePage('contact')}
          className="glow-btn-primary text-base py-3.5 px-8"
        >
          <span>Connect With Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
