import React from 'react';
import BlueprintQuiz from '../components/BlueprintQuiz.jsx';
import { Video, Sparkles, Target, TrendingUp, CheckCircle, ArrowRight, Layers, Cpu, Shield } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  
  const servicesList = [
    {
      id: 'video-editing',
      icon: Video,
      title: 'Video Editing',
      tagline: 'High-Retention Short-Form & Cinematic Edits',
      description: 'We transform raw footage into captivating visual narratives using pacing psychology, kinetic typography, dynamic sound design, and color grading.',
      features: [
        'Reels, TikToks, Shorts',
        'Long-Form Documentaries & Vlogs',
        'Cinematic Storytelling & Trailers',
        'Sound FX & Color Grading'
      ],
      process: [
        { step: '01', title: 'Hook Draft', desc: 'Crafting high-retention opening hooks.' },
        { step: '02', title: 'Pacing Cut', desc: 'Structuring story arcs and sound design.' },
        { step: '03', title: 'Motion Polish', desc: 'Adding text overlays, FX, and color grade.' }
      ],
      benefits: [
        'Up to +65% Average View Duration',
        'Algorithm-engineered retention spikes',
        'Turnaround as fast as 24-48 hours'
      ]
    },
    {
      id: 'content-creation',
      icon: Sparkles,
      title: 'Content Direction',
      tagline: 'End-to-End Creative Concepts & Visual Planning',
      description: 'Overcome creator block with structured video ideation, hook scripting, shot lists, and creative direction designed for your niche.',
      features: [
        'Viral Concept & Hook Development',
        'Scripting & Storyboarding',
        'Visual B-Roll Shotlists',
        'Framing & Delivery Feedback'
      ],
      process: [
        { step: '01', title: 'Trend Mapping', desc: 'Identifying high-volume search topics.' },
        { step: '02', title: 'Hook Blueprint', desc: 'Writing punchy scripts for intrigue.' },
        { step: '03', title: 'Production Guide', desc: 'Clear lighting and angle instructions.' }
      ],
      benefits: [
        'Eliminates creator burnout',
        'Consistent weekly video pipeline',
        'Higher audience engagement'
      ]
    },
    {
      id: 'creator-branding',
      icon: Target,
      title: 'Creator Branding',
      tagline: 'Distinct Digital Identities That Command Attention',
      description: 'Stand out in a crowded market with a unified visual system—from intro graphics to thumbnail design, typography, and channel art.',
      features: [
        'High-CTR Thumbnail Systems',
        'Motion Intros & Outros',
        'Brand Color Palette & Font Kits',
        'Social Media Banner Overhauls'
      ],
      process: [
        { step: '01', title: 'Identity Audit', desc: 'Evaluating channel aesthetics.' },
        { step: '02', title: 'System Design', desc: 'Designing custom graphics overlays.' },
        { step: '03', title: 'Asset Handoff', desc: 'Delivering easy-to-use brand kits.' }
      ],
      benefits: [
        'Instant brand recognition',
        'Higher click-through rate (CTR)',
        'Professional authority'
      ]
    },
    {
      id: 'digital-growth',
      icon: TrendingUp,
      title: 'Digital Growth Strategy',
      tagline: 'Data-Driven Positioning & Audience Expansion',
      description: 'Turn viewers into loyal subscribers and customers. We analyze analytics, optimize metadata, and build distribution plans.',
      features: [
        'Analytics & Retention Audits',
        'Platform SEO & Title Testing',
        'Cross-Platform Repurposing',
        'Monetization Optimization'
      ],
      process: [
        { step: '01', title: 'Audit', desc: 'Deep dive into drop-off points.' },
        { step: '02', title: 'Optimization', desc: 'Testing titles & thumbnails.' },
        { step: '03', title: 'Reviews', desc: 'Iterating on real performance data.' }
      ],
      benefits: [
        'Predictable channel growth',
        'Maximizing reach across platforms',
        'Monetization readiness'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-16 sm:space-y-20">
      
      {/* HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="badge-pulse text-[11px]">Capabilities</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white brand-font tracking-tight leading-tight">
          Engineered for <span className="text-gradient">Maximum Impact.</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          From short-form video editing to creator channel management, we elevate your digital brand.
        </p>
      </section>

      {/* INTERACTIVE QUIZ */}
      <section>
        <BlueprintQuiz setActivePage={setActivePage} />
      </section>

      {/* SERVICES LIST */}
      <div className="space-y-8">
        {servicesList.map((service) => {
          const Icon = service.icon;

          return (
            <section 
              key={service.id}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-5">
                
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-indigo-300">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{service.tagline}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white brand-font">
                    {service.title}
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => setActivePage('contact')}
                  className="glow-btn-primary text-xs py-2 px-4 shrink-0 self-start"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="space-y-2.5">
                  <h3 className="text-white font-semibold text-xs brand-font flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    What's Included
                  </h3>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-white font-semibold text-xs brand-font flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-1.5">
                    {service.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-white font-semibold text-xs brand-font flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    3-Step Process
                  </h3>
                  <div className="space-y-2">
                    {service.process.map((p, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2">
                        <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                          {p.step}
                        </span>
                        <div>
                          <h4 className="text-xs font-semibold text-white">{p.title}</h4>
                          <p className="text-[10px] text-slate-400">{p.desc}</p>
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

      {/* FINAL CTA */}
      <section className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
          Ready to scale your content output?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Let's discuss your project goals, schedule, and custom package options.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setActivePage('contact')}
            className="glow-btn-primary text-xs py-2.5 px-6"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}

