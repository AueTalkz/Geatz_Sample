import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function PortfolioPage({ setSelectedVideo, setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Short Form Content', 'YouTube Projects', 'Brand Videos', 'Creative Experiments'];

  const portfolioItems = [
    {
      id: 101,
      title: 'Tech Masterclass Documentary',
      category: 'YouTube Projects',
      metric: '4.8M Views',
      metricSub: '+72% Retention Rate',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive tech breakdown featuring custom 3D map animations, sound design, and color grading.',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition']
    },
    {
      id: 102,
      title: 'Viral Short-Form Hook Campaign',
      category: 'Short Form Content',
      metric: '12.5M Views',
      metricSub: '+340K Followers',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic kinetic typography, fast cuts, sound effects, and color popping engineered for platform algorithms.',
      tools: ['CapCut Pro', 'After Effects', 'Photoshop']
    },
    {
      id: 103,
      title: 'AI Platform Commercial',
      category: 'Brand Videos',
      metric: '+410% Conversions',
      metricSub: '1.8M Targeted Reach',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      description: 'Product trailer combining sleek 3D motion graphics, voiceover, and custom audio mixing.',
      tools: ['Blender', 'After Effects', 'Audition']
    },
    {
      id: 104,
      title: 'Cyberpunk Aesthetic Edit',
      category: 'Creative Experiments',
      metric: 'Community Favorite',
      metricSub: 'Design Award Nomination',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      description: 'Experimental visual piece exploring neon color spaces, glitch transitions, and reactive audio visualizer effects.',
      tools: ['After Effects', 'Cinema 4D', 'Premiere Pro']
    },
    {
      id: 105,
      title: 'Fitness & Motivation Series',
      category: 'Short Form Content',
      metric: '6.1M Views',
      metricSub: '+88% Shares',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Rhythmic editing aligned to heavy bass beats with high-impact color grading and overlay graphics.',
      tools: ['Premiere Pro', 'Lightroom', 'After Effects']
    },
    {
      id: 106,
      title: 'Finance Creator Overhaul',
      category: 'YouTube Projects',
      metric: '2.1M Views',
      metricSub: 'Significant AdSense Lift',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      description: 'Redesigned graphics, interactive charts, and storytelling pacing for complex financial concepts.',
      tools: ['Premiere Pro', 'Illustrator', 'After Effects']
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-12 sm:space-y-16">
      
      {/* HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="badge-pulse text-[11px]">Curated Work</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white brand-font tracking-tight leading-tight">
          Proof of <span className="text-gradient">Creativity & Impact.</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          Explore our recent video edits, creator projects, brand commercials, and visual experiments.
        </p>
      </section>

      {/* CATEGORY FILTERS */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* PORTFOLIO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedVideo(item)}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-black pl-0.5" />
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors brand-font">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {item.tools.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-emerald-400">{item.metric}</div>
                <div className="text-[10px] text-slate-400">{item.metricSub}</div>
              </div>
              <span className="text-xs font-medium text-slate-400 group-hover:text-white flex items-center gap-1">
                Preview →
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <section className="glass-card p-8 rounded-2xl border border-white/10 text-center space-y-3">
        <h3 className="text-xl font-bold text-white brand-font">
          Need custom video editing for your channel?
        </h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          We offer custom edit showreels tailored to your specific audience and niche.
        </p>
        <button
          onClick={() => setActivePage('contact')}
          className="glow-btn-primary text-xs py-2.5 px-6 inline-flex"
        >
          <span>Request Custom Edit Sample</span>
        </button>
      </section>

    </div>
  );
}

