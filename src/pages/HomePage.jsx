import React from 'react';
import { 
  Sparkles, ArrowRight, Play, Video, Target, Compass, TrendingUp, 
  Users, CheckCircle, Star, Zap, ShieldCheck, Flame, MessageSquare 
} from 'lucide-react';

export default function HomePage({ setActivePage, setSelectedVideo }) {

  const stats = [
    { label: 'Total Views Generated', value: '50M+' },
    { label: 'Videos Edited', value: '150+' },
    { label: 'Geeks Community Members', value: '10K+' },
    { label: 'Retention & Growth Rate', value: '98%' }
  ];

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      desc: 'Professional short-form and long-form editing with story-driven content creation that captivates audiences.',
      color: 'from-violet-500 to-indigo-600',
      glow: 'shadow-violet-500/20'
    },
    {
      icon: Target,
      title: 'Content Strategy',
      desc: 'Helping creators and brands build recognizable digital identities through data-backed positioning.',
      color: 'from-cyan-500 to-blue-600',
      glow: 'shadow-cyan-500/20'
    },
    {
      icon: Compass,
      title: 'Creative Production',
      desc: 'Turning concepts into engaging digital experiences with motion graphics, sound design, and visual magic.',
      color: 'from-pink-500 to-rose-600',
      glow: 'shadow-pink-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Brand Growth',
      desc: 'Empowering creators and businesses to improve online presence, viral reach, and monetization pathways.',
      color: 'from-emerald-500 to-teal-600',
      glow: 'shadow-emerald-500/20'
    }
  ];

  const featuredWorks = [
    {
      id: 1,
      title: 'Viral YouTube Tech Documentary',
      category: 'Long Form Editing',
      metric: '3.4M Views',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      description: 'Cinematic color grading, custom sound design, and pacing overhaul for a major tech creator.',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve']
    },
    {
      id: 2,
      title: 'Creator Short-Form Retention Campaign',
      category: 'Reels / Shorts',
      metric: '8.2M Reach',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic hooks, animated captions, and high-energy pacing designed for algorithm dominance.',
      tools: ['CapCut Pro', 'After Effects', 'Photoshop']
    },
    {
      id: 3,
      title: 'SaaS Launch Brand Showcase',
      category: 'Brand Videos',
      metric: '+320% Signups',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      description: 'Futuristic product trailer combining 3D motion graphics and voiceover storytelling.',
      tools: ['Blender', 'After Effects', 'Audition']
    }
  ];

  const values = [
    { title: 'Creativity', desc: 'Pushing aesthetic boundaries with every frame.' },
    { title: 'Storytelling', desc: 'Crafting emotional narratives that resonate deeply.' },
    { title: 'Community', desc: 'Growing together through shared knowledge.' },
    { title: 'Innovation', desc: 'Leveraging cutting-edge tools and edit techniques.' }
  ];

  const testimonials = [
    {
      quote: "Itz Geatz completely transformed my YouTube channel's editing style. My average retention shot up from 30% to 65% in just 3 weeks!",
      author: "Alex Rivers",
      role: "Tech & Lifestyle Creator (450K Subs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The Geeks community and the Itz Geatz team gave our brand the exact digital polish we needed. Incredible vision and speed.",
      author: "Sarah Jenkins",
      role: "Head of Marketing at Pulse Media",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 overflow-hidden">
        {/* Glow ambient backdrops */}
        <div className="bg-glow-orb-1 top-10 left-10" />
        <div className="bg-glow-orb-2 bottom-10 right-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="badge-pulse">
              <span className="badge-pulse-dot"></span>
              The Next Gen Creator Studio & Ecosystem
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Transforming Ideas Into <br />
            <span className="text-gradient">Impactful Content.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Itz Geatz is a creator-focused digital studio helping creators, brands, and businesses build their identity through storytelling, editing, and creative strategy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActivePage('contact')}
              className="glow-btn-primary text-base py-3.5 px-8 w-full sm:w-auto"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActivePage('community')}
              className="glow-btn-secondary text-base py-3.5 px-8 w-full sm:w-auto"
            >
              <Users className="w-5 h-5 text-violet-400" />
              <span>Join The Geeks Community</span>
            </button>
          </div>

          {/* Creator Workspace Visual Showcase */}
          <div className="pt-12">
            <div className="relative mx-auto max-w-4xl rounded-3xl p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-2xl shadow-violet-900/20 group">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#0c0f18] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Creator Workspace Visual"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/30 to-transparent" />
                
                {/* Floating Studio Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/30 border border-violet-500/40 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base brand-font">A Place Where Creators Grow</h4>
                      <p className="text-xs text-slate-400">People connect, and ideas become reality.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActivePage('portfolio')}
                    className="text-xs font-semibold text-cyan-400 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 flex items-center gap-1.5 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-cyan-400" />
                    <span>Watch Showreel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS TICKER BAR */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl glass-panel border border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold brand-font text-gradient">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="badge-pulse text-xs">Services & Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-slate-400 text-base">
            High-impact creative services built specifically for creators, brands, and modern digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] ${item.glow} shadow-lg`}>
                    <div className="w-full h-full bg-[#0d101a] rounded-[15px] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white brand-font">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <button
                  onClick={() => setActivePage('services')}
                  className="text-xs font-semibold text-slate-300 group-hover:text-cyan-400 flex items-center gap-1 transition-colors pt-2"
                >
                  <span>Learn details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY ITZ GEATZ SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-br from-violet-950/40 via-[#0d111d] to-[#070912] border border-white/15 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="badge-pulse text-xs">Our Core Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                "We don't just create content. <br />
                <span className="text-gradient">We build identities."</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                In an era dominated by generic noise, Itz Geatz stands out by fusing cinematic video craft, strategic positioning, and a vibrant community of passionate creators.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {values.map((val, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-violet-400 font-bold text-sm brand-font">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {val.title}
                    </div>
                    <p className="text-xs text-slate-400">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-tr from-violet-600 via-cyan-500 to-indigo-600 p-[2px] shadow-2xl shadow-violet-600/30">
                <div className="w-full h-full bg-[#090b12] rounded-[22px] p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
                  <div className="space-y-3">
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      The Geatz Standard
                    </div>
                    <h3 className="text-2xl font-bold text-white brand-font">Crafted for Impact</h3>
                    <p className="text-xs text-slate-400">High retention rate edits, custom motion systems, and audience psychology built in.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span>Story Pacing</span>
                      <span className="text-emerald-400 font-semibold">Optimized</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span>Visual Identity</span>
                      <span className="text-cyan-400 font-semibold">Custom</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span>Community Growth</span>
                      <span className="text-violet-400 font-semibold">Exponential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED WORK PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="badge-pulse text-xs">Proof of Work</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          <button
            onClick={() => setActivePage('portfolio')}
            className="glow-btn-secondary text-sm self-start md:self-auto"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedVideo(work)}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-violet-600/80 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white pl-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                    {work.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors brand-font">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {work.metric}
                </span>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                  Click to inspect →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE GEEKS COMMUNITY SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-r from-violet-900/50 via-indigo-900/40 to-cyan-900/50 border border-violet-500/30 overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/20 border border-violet-400/30 text-violet-300">
              <Users className="w-4 h-4 text-cyan-400" />
              Join The Creator Movement
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font">
              The <span className="text-gradient">Geeks</span> Community
            </h2>
            <p className="text-slate-200 text-base leading-relaxed">
              "A community where freshers, creators, editors, and designers learn, collaborate, and grow together."
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {['Skill Development', 'Collaboration', 'Networking', 'Real-world Projects'].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-xs font-semibold text-white text-center border border-white/10">
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActivePage('community')}
                className="glow-btn-primary text-sm py-3 px-8"
              >
                <span>Explore Geeks Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <span className="badge-pulse text-xs">Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white brand-font">
            Loved by <span className="text-gradient">Creators & Brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-2">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-violet-500/40"
                />
                <div>
                  <h4 className="text-white font-bold text-sm brand-font">{t.author}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <div className="glass-panel p-12 md:p-16 rounded-3xl border border-white/15 space-y-6 relative overflow-hidden">
          <div className="bg-glow-orb-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font relative z-10">
            Have an idea? <br />
            <span className="text-gradient">Let's turn it into reality.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto relative z-10">
            Whether you need high-retention video edits, a full creator strategy, or brand identity design, we're ready to collaborate.
          </p>
          <div className="pt-4 relative z-10">
            <button
              onClick={() => setActivePage('contact')}
              className="glow-btn-primary text-base py-4 px-10 shadow-2xl"
            >
              <span>Start A Project</span>
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
