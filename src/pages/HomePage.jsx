import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx';
import { 
  Sparkles, ArrowRight, Play, Video, Target, Compass, TrendingUp, 
  Users, CheckCircle, Star, Zap 
} from 'lucide-react';

export default function HomePage({ setActivePage, setSelectedVideo }) {

  const stats = [
    { label: 'Total Views Generated', value: '50M+' },
    { label: 'Videos Edited', value: '150+' },
    { label: 'Community Members', value: '10K+' },
    { label: 'Client Retention Rate', value: '98%' }
  ];


  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      desc: 'High-retention short-form and cinematic long-form video editing crafted to engage and scale audiences.'
    },
    {
      icon: Target,
      title: 'Content Strategy',
      desc: 'Data-backed positioning and creative frameworks for creators, startups, and brands.'
    },
    {
      icon: Compass,
      title: 'Creative Production',
      desc: 'Transforming raw ideas into polished visual narratives with motion graphics and sound design.'
    },
    {
      icon: TrendingUp,
      title: 'Brand Scaling',
      desc: 'Empowering creators and tech companies to multiply digital authority and viral reach.'
    }
  ];

  const featuredWorks = [
    {
      id: 1,
      title: 'Viral Tech Documentary',
      category: 'Long Form',
      metric: '3.4M Views',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      description: 'Cinematic color grading, custom sound design, and pacing overhaul for a major tech creator.',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve']
    },
    {
      id: 2,
      title: 'Short-Form Retention Campaign',
      category: 'Reels / Shorts',
      metric: '8.2M Reach',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic hooks, animated captions, and high-energy pacing designed for platform algorithms.',
      tools: ['CapCut Pro', 'After Effects', 'Photoshop']
    },
    {
      id: 3,
      title: 'SaaS Launch Showcase',
      category: 'Brand Film',
      metric: '+320% Signups',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      description: 'Clean product trailer combining sleek 3D motion graphics and voiceover storytelling.',
      tools: ['Blender', 'After Effects', 'Audition']
    }
  ];

  const values = [
    { title: 'Story First', desc: 'Crafting narratives that leave a lasting imprint.' },
    { title: 'Data Driven', desc: 'Optimizing retention through audience analytics.' },
    { title: 'Community Built', desc: 'Fostering talent through shared knowledge.' },
    { title: 'Speed & Precision', desc: 'Delivering top-tier production on schedule.' }
  ];

  const testimonials = [
    {
      quote: "Itz Geatz completely elevated our channel's edit quality. Retention jumped from 30% to over 60% within weeks.",
      author: "Alex Rivers",
      role: "Tech Creator (450K Subs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The Geeks community and Itz Geatz team delivered speed, vision, and immaculate creative execution.",
      author: "Sarah Jenkins",
      role: "Head of Content, Pulse Media",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="bg-glow-orb-1 top-0 left-1/2 -translate-x-1/2" />
        <div className="bg-glow-orb-2 top-20 right-1/4" />

        <div className="max-w-4xl mx-auto text-center space-y-7 relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center">
            <span className="badge-pulse">
              <span className="badge-pulse-dot"></span>
              The Next Gen Digital Studio & Ecosystem
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            Transforming Ideas Into <br />
            <span className="text-gradient">Impactful Content.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Itz Geatz is a creator-focused digital studio helping creators, brands, and businesses build their identity through storytelling, editing, and strategy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActivePage('contact')}
              className="glow-btn-primary text-xs py-3 px-6 w-full sm:w-auto"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('community')}
              className="glow-btn-secondary text-xs py-3 px-6 w-full sm:w-auto"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Join The Community</span>
            </button>
          </div>

          {/* Workspace Showcase Thumbnail */}
          <div className="pt-10">
            <div className="relative mx-auto max-w-3xl rounded-2xl p-1.5 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl group">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-[#0c0f18] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Creator Workspace Visual"
                  className="w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-black/20 to-transparent" />
                
                {/* Floating Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs">Where Creators Grow</h4>
                      <p className="text-[11px] text-slate-400">Collaborate, learn, and turn vision into reality.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActivePage('portfolio')}
                    className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 transition-all"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Watch Showreel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS TICKER BAR */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl glass-card border border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-2xl md:text-3xl font-extrabold text-white brand-font">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER SHOWCASE */}
      <section className="max-w-5xl mx-auto px-6">
        <BeforeAfterSlider />
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="badge-pulse text-[11px]">Capabilities</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            High-impact creative services built for creators, brands, and modern platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-bold text-white brand-font">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <button
                  onClick={() => setActivePage('services')}
                  className="text-xs font-medium text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors pt-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative p-8 md:p-12 rounded-2xl bg-[#0c0e16] border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-5">
              <span className="badge-pulse text-[11px]">Our Philosophy</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                "We don't just edit video. <br />
                <span className="text-gradient">We engineer identities."</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                In an era dominated by generic noise, Itz Geatz stands out by fusing cinematic editing craft, positioning psychology, and an active creator community.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {values.map((val, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5 text-white font-semibold text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                      {val.title}
                    </div>
                    <p className="text-[11px] text-slate-400">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    The Geatz Standard
                  </div>
                  <h3 className="text-xl font-bold text-white brand-font">Crafted for Impact</h3>
                  <p className="text-xs text-slate-400">High retention edits, motion systems, and strategic narrative design.</p>
                </div>

                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span>Story Pacing</span>
                    <span className="text-emerald-400 font-medium">Optimized</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span>Visual Identity</span>
                    <span className="text-indigo-400 font-medium">Custom</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span>Reach Growth</span>
                    <span className="text-sky-400 font-medium">Proven</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED WORK PREVIEW */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="badge-pulse text-[11px]">Proof of Work</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          <button
            onClick={() => setActivePage('portfolio')}
            className="glow-btn-secondary text-xs self-start sm:self-auto"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedVideo(work)}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-black pl-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
                    {work.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors brand-font">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/5">
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {work.metric}
                </span>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                  Preview edit →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GEEKS COMMUNITY BANNER */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl p-8 md:p-10 bg-[#0d101a] border border-white/10 overflow-hidden">
          <div className="max-w-2xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-indigo-300">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              Creator Movement
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white brand-font">
              The <span className="text-gradient">Geeks</span> Community
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A community hub where freshers, video editors, designers, and creators learn, collaborate, and land real-world projects together.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {['Skill Growth', 'Collaborations', 'Networking', 'Real Projects'].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white/5 text-[11px] font-medium text-slate-300 text-center border border-white/10">
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePage('community')}
                className="glow-btn-primary text-xs py-2.5 px-6"
              >
                <span>Explore Geeks Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-pulse text-[11px]">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
            Loved by <span className="text-gradient">Creators & Brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-9 h-9 rounded-full object-cover border border-white/15"
                />
                <div>
                  <h4 className="text-white font-semibold text-xs">{t.author}</h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="glass-card p-10 md:p-14 rounded-2xl border border-white/10 space-y-5 relative overflow-hidden">
          <div className="bg-glow-orb-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-white brand-font relative z-10">
            Have a project in mind? <br />
            <span className="text-gradient">Let's build something extraordinary.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto relative z-10 leading-relaxed">
            Whether you need high-retention video editing, a full creator strategy, or brand positioning, we're ready to partner with you.
          </p>
          <div className="pt-2 relative z-10">
            <button
              onClick={() => setActivePage('contact')}
              className="glow-btn-primary text-xs py-3 px-8"
            >
              <span>Start a Project</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

