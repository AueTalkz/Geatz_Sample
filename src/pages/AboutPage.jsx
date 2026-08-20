import React from 'react';
import { Sparkles, Target, Rocket, Compass, Brain, ArrowRight } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  
  const values = [
    {
      icon: Sparkles,
      title: 'Creativity First',
      desc: 'We prioritize narrative-driven visual storytelling over repetitive formulas.'
    },
    {
      icon: Brain,
      title: 'Continuous Innovation',
      desc: 'Constantly experimenting with new tools, workflows, and algorithmic trends.'
    },
    {
      icon: Rocket,
      title: 'Build Together',
      desc: 'Growth happens faster in teams. We collaborate closely with creators and founders.'
    },
    {
      icon: Target,
      title: 'Measurable Impact',
      desc: 'Every edit and campaign must deliver tangible audience retention and brand value.'
    }
  ];

  const milestones = [
    { year: '2023', title: 'The Spark', desc: 'Started as an independent video editing lab focused on short-form retention.' },
    { year: '2024', title: 'Geeks Community', desc: 'Expanded into a collaborative ecosystem connecting editors, designers, and creators.' },
    { year: '2025', title: 'Full Studio Scaling', desc: 'Scaled into a full-service creative studio handling end-to-end strategy & production.' },
    { year: '2026+', title: 'Ecosystem Growth', desc: 'Pioneering creator incubators, production teams, and brand scaling.' }
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-16 sm:space-y-20">
      
      {/* HERO / INTRO */}
      <section className="text-center max-w-2xl mx-auto space-y-5">
        <span className="badge-pulse text-[11px]">About Itz Geatz</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white brand-font tracking-tight leading-tight">
          Building the Ecosystem for <br />
          <span className="text-gradient">Next-Gen Creators.</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          Itz Geatz is a dedicated digital studio and movement transforming ideas into impactful digital identities while empowering creative talent.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="glass-card p-6 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
        <div className="bg-glow-orb-1 -top-20 -left-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          
          <div className="space-y-4">
            <span className="badge-pulse text-[11px]">Evolution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              "Itz Geatz started with a vision to help creators find their voice, elevate their craft, and build lasting digital authority."
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              What began as late-night video editing sessions evolved into a dedicated digital studio. Through constant testing and refining, we realized creators don't just need editors—they need strategic creative partners.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-bold text-white brand-font">100%</div>
                <div className="text-[11px] text-slate-400">Creator-Centric</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-bold text-white brand-font">Full Stack</div>
                <div className="text-[11px] text-slate-400">Editing & Strategy</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm brand-font mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-400" />
              Milestone Timeline
            </h3>
            <div className="space-y-2.5 border-l border-white/10 pl-4 ml-1">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors space-y-0.5">
                    <span className="text-[10px] font-semibold text-indigo-400">{m.year}</span>
                    <h4 className="text-white font-semibold text-xs">{m.title}</h4>
                    <p className="text-[11px] text-slate-400">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-pulse text-[11px]">Core Principles</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
            Our <span className="text-gradient">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white brand-font">{v.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEADERSHIP PROFILE */}
      <section className="glass-card p-6 md:p-8 rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="relative mx-auto w-40 h-40 md:w-full md:h-60 rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              alt="Founder Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">Leadership</span>
              <h3 className="text-xl font-bold text-white brand-font">
                Behind Itz Geatz
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Creative strategist and video editor committed to empowering creators through narrative precision and modern digital tools.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Specializations</h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Creative Strategy', 'Short-Form Edits', 'Story Architecture', 
                  'Motion Graphics', 'Audience Analytics', 'Community Leadership'
                ].map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-4">
        <button
          onClick={() => setActivePage('contact')}
          className="glow-btn-primary text-xs py-3 px-6"
        >
          <span>Connect With Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}

