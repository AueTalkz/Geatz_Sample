import React from 'react';
import { Video, Sparkles, Target, TrendingUp, CheckCircle, ArrowRight, Layers, Cpu, Flame, Shield } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  
  const servicesList = [
    {
      id: 'video-editing',
      icon: Video,
      title: 'Video Editing',
      tagline: 'High-Retention Short-Form & Cinematic YouTube Edits',
      description: 'We transform raw footage into captivating visual narratives using pacing psychology, kinetic typography, dynamic sound design, and color grading.',
      features: [
        'Short-Form Content (Reels, TikToks, Shorts)',
        'Long-Form YouTube Documentaries & Vlogs',
        'Cinematic Storytelling & Trailer Edits',
        'Sound Design, FX & Color Grading'
      ],
      process: [
        { step: '01', title: 'Footage Audit & Hook Draft', desc: 'Analyzing raw clips and crafting high-retention 3-second opening hooks.' },
        { step: '02', title: 'Pacing & Narrative Cut', desc: 'Structuring story arcs, removing dead space, and adding sound effects.' },
        { step: '03', title: 'Motion Graphics & Polish', desc: 'Adding custom text overlays, animations, color grade, and master render.' }
      ],
      benefits: [
        'Up to +65% Average View Duration',
        'Algorithm-engineered retention spikes',
        'Turnaround in as fast as 24-48 hours'
      ],
      badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30'
    },
    {
      id: 'content-creation',
      icon: Sparkles,
      title: 'Content Creation & Direction',
      tagline: 'End-to-End Creative Concepts & Visual Planning',
      description: 'Overcome creator block with structured video ideation, hook scripting, shot lists, and creative direction designed for your niche.',
      features: [
        'Viral Concept & Hook Development',
        'Scripting & Storyboarding',
        'Visual Planning & B-Roll Shotlists',
        'Content Direction & Framing Feedback'
      ],
      process: [
        { step: '01', title: 'Niche Analysis & Trend Mapping', desc: 'Identifying high-volume search topics and trending formats.' },
        { step: '02', title: 'Scripting & Hook Blueprint', desc: 'Writing punchy scripts designed for maximum viewer intrigue.' },
        { step: '03', title: 'Production Guide', desc: 'Providing clear lighting, angle, and delivery instructions.' }
      ],
      benefits: [
        'Eliminates creator burnout',
        'Consistent weekly video pipeline',
        'Higher audience engagement rates'
      ],
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
    },
    {
      id: 'creator-branding',
      icon: Target,
      title: 'Creator Branding',
      tagline: 'Distinct Digital Identities That Command Attention',
      description: 'Stand out in a crowded market with a unified aesthetic system—from video intro graphics to thumbnail design, typography, and channel art.',
      features: [
        'High-CTR Thumbnail Design',
        'Custom Motion Graphic Intros & Outros',
        'Brand Color Palette & Font Hierarchy',
        'Social Media Profile & Banner Overhauls'
      ],
      process: [
        { step: '01', title: 'Brand Identity Audit', desc: 'Evaluating current channel aesthetics against top competitors.' },
        { step: '02', title: 'Visual System Design', desc: 'Designing custom overlays, lower thirds, and logo reveals.' },
        { step: '03', title: 'Asset Package Handoff', desc: 'Delivering easy-to-use brand kits for consistent content output.' }
      ],
      benefits: [
        'Instant brand recognition across platforms',
        'Higher click-through rate (CTR) on videos',
        'Professional authority that attracts brand deals'
      ],
      badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30'
    },
    {
      id: 'digital-growth',
      icon: TrendingUp,
      title: 'Digital Growth Strategy',
      tagline: 'Data-Driven Positioning & Audience Expansion',
      description: 'Turn viewers into loyal subscribers and customers. We analyze analytics, optimize metadata, and build long-term distribution plans.',
      features: [
        'Analytics & Audience Retention Audits',
        'Platform Optimization (SEO, Tags, Titles)',
        'Cross-Platform Repurposing Workflows',
        'Monetization & Sponsorship Readiness'
      ],
      process: [
        { step: '01', title: 'Performance Audit', desc: 'Deep dive into drop-off points, CTRs, and subscriber conversion.' },
        { step: '02', title: 'Optimization Roadmap', desc: 'Implementing title/thumbnail AB testing and tag strategies.' },
        { step: '03', title: 'Monthly Growth Reviews', desc: 'Iterating strategy based on real platform performance data.' }
      ],
      benefits: [
        'Predictable channel growth curves',
        'Maximizing reach across Reels, Shorts & YouTube',
        'Monetization optimization'
      ],
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-24">
      
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <span className="badge-pulse text-xs">Our Studio Services</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white brand-font tracking-tight">
          Engineered for <span className="text-gradient">Maximum Impact.</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          From individual short-form edits to full creator channel management, we provide the technical and creative horsepower to elevate your brand.
        </p>
      </section>

      {/* SERVICES LIST */}
      <div className="space-y-16">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section 
              key={service.id}
              className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden space-y-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 border-b border-white/10 pb-8">
                
                {/* Service Header Info */}
                <div className="space-y-4 max-w-2xl">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold border ${service.badgeColor}`}>
                    <Icon className="w-4 h-4" />
                    <span>{service.tagline}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white brand-font">
                    {service.title}
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Quick CTA button */}
                <div className="shrink-0 pt-2">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="glow-btn-primary text-sm py-3 px-6"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Grid breakdown: Features & Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Features Included */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base brand-font flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    What's Included
                  </h3>
                  <ul className="space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base brand-font flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2.5">
                    {service.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-300">
                        <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                <div className="space-y-4 lg:col-span-1 md:col-span-2">
                  <h3 className="text-white font-bold text-base brand-font flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-violet-400" />
                    Our 3-Step Process
                  </h3>
                  <div className="space-y-3">
                    {service.process.map((p, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                          {p.step}
                        </span>
                        <div>
                          <h4 className="text-xs font-semibold text-white brand-font">{p.title}</h4>
                          <p className="text-[11px] text-slate-400 leading-tight">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* FINAL SERVICE CTA */}
      <section className="glass-panel p-10 md:p-14 rounded-3xl border border-white/15 text-center space-y-6 relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white brand-font">
          Ready to scale your content output?
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
          Let's discuss your project goals, content schedule, and custom package options.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setActivePage('contact')}
            className="glow-btn-primary text-base py-3.5 px-8"
          >
            <span>Start A Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
