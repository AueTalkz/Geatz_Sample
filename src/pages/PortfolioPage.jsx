import React, { useState } from 'react';
import { Play, Eye, Sparkles, Filter, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PortfolioPage({ setSelectedVideo, setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Short Form Content', 'YouTube Projects', 'Brand Videos', 'Creative Experiments'];

  const portfolioItems = [
    {
      id: 101,
      title: 'High-Retention Tech Masterclass Documentary',
      category: 'YouTube Projects',
      metric: '4.8M Views',
      metricSub: '+72% Retention Rate',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive 25-minute tech breakdown featuring custom 3D map animations, sound design, and color grading.',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition']
    },
    {
      id: 102,
      title: 'Viral Short-Form Hook Editing Campaign',
      category: 'Short Form Content',
      metric: '12.5M Views',
      metricSub: '+340K New Followers',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic kinetic typography, fast cuts, sound effects, and color popping engineered for TikTok & Instagram Reels algorithms.',
      tools: ['CapCut Pro', 'After Effects', 'Photoshop']
    },
    {
      id: 103,
      title: 'Next-Gen AI Platform Cinematic Commercial',
      category: 'Brand Videos',
      metric: '+410% Conversions',
      metricSub: '1.8M Targeted Impressions',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      description: 'Futuristic product trailer combining 3D motion graphics, voiceover, and soundtrack synthesis for a Silicon Valley SaaS startup.',
      tools: ['Blender', 'After Effects', 'Audition', 'Logic Pro']
    },
    {
      id: 104,
      title: 'Cyberpunk Aesthetic Story Edit',
      category: 'Creative Experiments',
      metric: 'Community Favorite',
      metricSub: 'Awwwards Nominated Style',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      description: 'Experimental visual piece exploring neon color spaces, glitch transitions, and reactive audio visualizer effects.',
      tools: ['After Effects', 'Cinema 4D', 'Premiere Pro']
    },
    {
      id: 105,
      title: 'Creator Fitness & Motivation Series',
      category: 'Short Form Content',
      metric: '6.1M Views',
      metricSub: '+88% Share Count',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Rhythmic editing aligned to heavy bass beats with high-impact color grading and overlay graphics.',
      tools: ['Premiere Pro', 'Lightroom', 'After Effects']
    },
    {
      id: 106,
      title: 'Finance Creator Long-Form Overhaul',
      category: 'YouTube Projects',
      metric: '2.1M Views',
      metricSub: '$45K AdSense Lift',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      description: 'Redesigned graphics, interactive charts, and storytelling pacing for complex financial concepts.',
      tools: ['Premiere Pro', 'Illustrator', 'After Effects']
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16">
      
      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <span className="badge-pulse text-xs">Curated Portfolio</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white brand-font tracking-tight">
          Proof of <span className="text-gradient">Creativity & Impact.</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Explore our recent video edits, creator projects, brand commercials, and experimental visual productions.
        </p>
      </section>

      {/* CATEGORY FILTERS */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* PORTFOLIO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedVideo(item)}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Image banner */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] shadow-2xl group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-[#07080c] rounded-full flex items-center justify-center pl-0.5">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                  {item.category}
                </div>
              </div>

              {/* Info section */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors brand-font">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Tools used tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tools.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-emerald-400">{item.metric}</div>
                <div className="text-[10px] text-slate-400">{item.metricSub}</div>
              </div>
              <span className="text-xs font-semibold text-violet-400 group-hover:text-cyan-300 flex items-center gap-1">
                Inspect Details
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* PORTFOLIO BOTTOM CTA */}
      <section className="glass-panel p-10 rounded-3xl border border-white/10 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white brand-font">
          Want custom edits engineered for your brand?
        </h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          We craft custom edit showreels and sample hooks specifically tailored to your niche.
        </p>
        <button
          onClick={() => setActivePage('contact')}
          className="glow-btn-primary text-sm py-3 px-6 inline-flex"
        >
          <span>Request Custom Edit Sample</span>
        </button>
      </section>

    </div>
  );
}
