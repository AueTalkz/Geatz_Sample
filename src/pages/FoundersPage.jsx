import React from 'react';
import { Award, ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function FoundersPage({ setActivePage }) {
  
  const mainFounder = {
    name: "Geatz",
    role: "Founder & Creative Director",
    tagline: "Visionary Lead & Ecosystem Architect",
    bio: "Pioneered Itz Geatz with a mission to fuse high-retention video storytelling with a vibrant creator movement. Leads studio strategy, creative direction, and the Geeks community expansion.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Generated 50M+ Organic Views across creator clients",
      "Architected the 10K+ member Geeks Ecosystem",
      "Pioneered high-retention edit systems for YouTube & Reels"
    ],
    skills: ["Creative Direction", "Content Strategy", "Video Pacing", "Ecosystem Design"]
  };

  const coFounders = [
    {
      name: "Alex Vance",
      role: "Head of Production",
      bio: "6+ years crafting high-energy visual narratives, 3D motion graphics, and cinematic trailers for top creators.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      skills: ["After Effects", "3D Motion", "DaVinci Resolve"],
      badge: "Production"
    },
    {
      name: "Elena Rostova",
      role: "Chief Strategy Officer",
      bio: "Growth strategist specializing in audience psychology, retention optimization, and brand scaling.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      skills: ["Audience Analytics", "Hook Scripting", "Positioning"],
      badge: "Strategy"
    },
    {
      name: "Marcus Chen",
      role: "Visual Systems Lead",
      bio: "Pioneered custom thumbnail systems, channel branding kits, and graphic overlays designed for high CTR.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      skills: ["Photoshop", "Blender 3D", "Brand Systems"],
      badge: "Design"
    },
    {
      name: "Sophia Martinez",
      role: "Head of Community",
      bio: "Leads community operations, workshops, and hiring pipelines connecting emerging editors with clients.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      skills: ["Community Ops", "Mentorship", "Talent Hub"],
      badge: "Community"
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-16 sm:space-y-20">
      
      {/* HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
          <Award className="w-3.5 h-3.5 text-indigo-400" />
          Leadership Team
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white brand-font tracking-tight leading-tight">
          Meet the <span className="text-gradient">Founders & Visionaries.</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          The creative minds, strategists, and editors driving Itz Geatz and shaping creator media.
        </p>
      </section>

      {/* FOUNDER & CEO SPOTLIGHT CARD */}
      <section className="glass-card rounded-2xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
        <div className="bg-glow-orb-1 -top-10 -left-10" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Avatar */}
          <div className="lg:col-span-5 relative mx-auto w-full max-w-xs aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
            <img
              src={mainFounder.avatar}
              alt={mainFounder.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
              <div className="badge-pulse text-[10px] mb-1">
                <span className="badge-pulse-dot"></span>
                Founder & Lead
              </div>
              <h3 className="text-2xl font-bold text-white brand-font">{mainFounder.name}</h3>
              <p className="text-xs text-indigo-300 font-medium">{mainFounder.tagline}</p>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">Visionary</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
                Leading the Creator Movement
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {mainFounder.bio}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Key Highlights
              </h4>
              <ul className="space-y-1.5">
                {mainFounder.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-2 pt-1">
              <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Competencies</h4>
              <div className="flex flex-wrap gap-1.5">
                {mainFounder.skills.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CO-FOUNDERS & LEAD TEAM GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-pulse text-[11px]">Core Leadership</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
            Co-Founders & <span className="text-gradient">Department Leads</span>
          </h2>
          <p className="text-xs text-slate-400">The key architects behind our editing, growth strategy, design, and community.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coFounders.map((member, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
                    {member.badge}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white brand-font group-hover:text-indigo-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-indigo-400">{member.role}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-white/5 bg-white/[0.02] flex flex-wrap gap-1">
                {member.skills.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 border border-white/10 text-slate-300">
                    {s}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white brand-font">
          Want to collaborate with our founding team?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
          Whether you're looking for custom creator strategy or want to join our ecosystem, we're always open to visionary partners.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => setActivePage('contact')}
            className="glow-btn-primary text-xs py-2.5 px-6"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActivePage('community')}
            className="glow-btn-secondary text-xs py-2.5 px-6"
          >
            <span>Join Community</span>
          </button>
        </div>
      </section>

    </div>
  );
}

