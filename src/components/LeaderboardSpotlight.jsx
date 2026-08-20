import React from 'react';
import { Trophy, Star, Award, Flame, Play, CheckCircle2, Heart } from 'lucide-react';

export default function LeaderboardSpotlight() {
  const topEditors = [
    {
      rank: 1,
      name: "Marcus Vance",
      role: "Short-Form Specialist",
      score: "98/100 Edit Score",
      badge: "Editor of the Month",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      sampleTitle: "Viral Tech Hook Redesign",
      views: "1.4M Reach",
      skills: ["Kinetic Captions", "Pacing", "Sound FX"]
    },
    {
      rank: 2,
      name: "Elena Rostova",
      role: "3D Motion Artist",
      score: "95/100 Edit Score",
      badge: "Motion Master",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      sampleTitle: "SaaS Launch Intro Visuals",
      views: "850K Views",
      skills: ["Blender 3D", "After Effects", "Color Grade"]
    },
    {
      rank: 3,
      name: "David Kim",
      role: "YouTube Documentary Editor",
      score: "92/100 Edit Score",
      badge: "Rising Geek",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      sampleTitle: "Finance Channel Overhaul",
      views: "620K Views",
      skills: ["Premiere Pro", "Audio Design", "Story Pacing"]
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-amber-300 border border-white/10">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          Geeks Community Spotlight
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white brand-font">
          Monthly Editor <span className="text-gradient">Leaderboard</span>
        </h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Recognizing the top creative talent, edit challenge winners, and rising editors in the Geeks network.
        </p>
      </div>

      {/* Leaderboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {topEditors.map((editor) => (
          <div
            key={editor.rank}
            className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden group"
          >
            {/* Rank badge */}
            <div className="flex items-center justify-between">
              <span className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center ${
                editor.rank === 1 ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20' :
                editor.rank === 2 ? 'bg-slate-300 text-black' :
                'bg-amber-700 text-white'
              }`}>
                #{editor.rank}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 border border-white/15 text-indigo-300">
                {editor.badge}
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-3">
              <img
                src={editor.avatar}
                alt={editor.name}
                className="w-12 h-12 rounded-xl object-cover border border-white/15 group-hover:scale-105 transition-transform"
              />
              <div>
                <h4 className="text-white font-bold text-sm brand-font">{editor.name}</h4>
                <p className="text-[11px] text-slate-400">{editor.role}</p>
                <div className="text-[10px] font-semibold text-emerald-400 pt-0.5">{editor.score}</div>
              </div>
            </div>

            {/* Featured Sample Card */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-white truncate max-w-[140px]">{editor.sampleTitle}</span>
                <span className="text-[10px] text-slate-400">{editor.views}</span>
              </div>
              <div className="flex flex-wrap gap-1 pt-1">
                {editor.skills.map((s, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-white/5 text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
