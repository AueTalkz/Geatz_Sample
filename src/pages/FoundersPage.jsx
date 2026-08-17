import React from 'react';
import { Shield, Sparkles, Award, Zap, Linkedin, Twitter, Instagram, ArrowRight, CheckCircle2, Star, Flame } from 'lucide-react';

export default function FoundersPage({ setActivePage }) {
  
  const mainFounder = {
    name: "Geatz",
    role: "Founder & CEO",
    tagline: "Visionary Lead, Creative Director & Ecosystem Architect",
    bio: "Pioneered Itz Geatz with a mission to fuse high-retention video storytelling with a vibrant creator movement. Leads studio strategy, creative direction, and the Geeks community expansion.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Generated 50M+ Organic Views across creator clients",
      "Architected the 10K+ member Geeks Creator Ecosystem",
      "Spearheaded high-retention edit systems for YouTube & Reels"
    ],
    skills: ["Creative Direction", "Content Strategy", "Video Pacing Psychology", "Ecosystem Architecture"],
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  };

  const coFounders = [
    {
      name: "Alex Vance",
      role: "Co-Founder & Head of Production",
      tagline: "Master of Kinetic Typography & Motion Systems",
      bio: "Over 6 years of expertise crafting high-energy visual narratives, 3D graphics, and cinematic trailers for top-tier creators.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      skills: ["After Effects", "3D Motion", "DaVinci Resolve"],
      badge: "Production Lead"
    },
    {
      name: "Elena Rostova",
      role: "Co-Founder & Chief Strategy Officer",
      tagline: "Data-Driven Creator Growth & Brand Positioning",
      bio: "Former growth lead specializing in audience psychology, retention optimization, and cross-platform monetization strategies.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      skills: ["Audience Analytics", "Hook Scripting", "Brand Deals"],
      badge: "Strategy Lead"
    },
    {
      name: "Marcus Chen",
      role: "Lead Brand & Visual Systems Artist",
      tagline: "Creating Iconic Digital Visual Identities",
      bio: "Pioneered custom thumbnail systems, channel branding kits, and graphic overlays that generate high CTRs for global creators.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      skills: ["Photoshop", "Blender 3D", "Brand Systems"],
      badge: "Design Lead"
    },
    {
      name: "Sophia Martinez",
      role: "Head of Geeks Community",
      tagline: "Nurturing Next-Gen Talent & Collaborations",
      bio: "Leads community operations, monthly edit challenges, workshops, and hiring pipelines connecting emerging editors with clients.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      skills: ["Community Ops", "Mentorship", "Event Curation"],
      badge: "Community Lead"
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-24">
      
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
          <Award className="w-4 h-4 text-cyan-400" />
          The Leadership Team
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white brand-font tracking-tight">
          Meet the <span className="text-gradient">Founders & Visionaries.</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          The creative minds, strategists, and editors driving **Itz Geatz** and shaping the future of the creator economy.
        </p>
      </section>

      {/* FOUNDER & CEO SPOTLIGHT CARD */}
      <section className="relative rounded-3xl p-8 md:p-14 bg-gradient-to-r from-violet-950/70 via-[#0e1220] to-cyan-950/70 border border-violet-500/40 shadow-2xl overflow-hidden">
        <div className="bg-glow-orb-1 -top-10 -left-10" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Avatar / Portrait */}
          <div className="lg:col-span-5 relative mx-auto w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-violet-600 via-cyan-400 to-indigo-500 p-[2px] shadow-2xl shadow-violet-600/40">
            <img
              src={mainFounder.avatar}
              alt={mainFounder.name}
              className="w-full h-full object-cover rounded-[22px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="badge-pulse text-xs mb-2">
                <span className="badge-pulse-dot"></span>
                Founder & CEO
              </div>
              <h3 className="text-3xl font-extrabold text-white brand-font">{mainFounder.name}</h3>
              <p className="text-xs text-cyan-300 font-medium">{mainFounder.tagline}</p>
            </div>
          </div>

          {/* Details & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Studio Visionary
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white brand-font">
                Leading the Creator Movement
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {mainFounder.bio}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {mainFounder.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {mainFounder.skills.map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 italic text-xs text-slate-300">
              "We built Itz Geatz so creators don't have to navigate the digital world alone. Here, ideas become high-impact visual reality."
            </div>

          </div>

        </div>
      </section>

      {/* CO-FOUNDERS & LEAD TEAM GRID */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <span className="badge-pulse text-xs">Core Leadership</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white brand-font">
            Co-Founders & <span className="text-gradient">Department Leads</span>
          </h2>
          <p className="text-xs text-slate-400">The key architects behind our editing, growth strategy, design, and community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coFounders.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden bg-slate-900">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                    {member.badge}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white brand-font group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-violet-400">{member.role}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Skills Footer */}
              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex flex-wrap gap-1">
                {member.skills.map((s, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/5 border border-white/10 text-slate-300">
                    {s}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* JOIN THE FOUNDING ECOSYSTEM CTA */}
      <section className="glass-panel p-10 md:p-14 rounded-3xl border border-white/15 text-center space-y-6 relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white brand-font">
          Want to collaborate with our founding team?
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
          Whether you're looking for custom creator strategy or want to join the Geeks leadership circle, we're always open to visionary minds.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <button
            onClick={() => setActivePage('contact')}
            className="glow-btn-primary text-sm py-3.5 px-8"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActivePage('community')}
            className="glow-btn-secondary text-sm py-3.5 px-8"
          >
            <span>Join The Geeks</span>
          </button>
        </div>
      </section>

    </div>
  );
}
