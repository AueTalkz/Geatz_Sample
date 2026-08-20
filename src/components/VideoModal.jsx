import React from 'react';
import { X, Play, Eye, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0b0d14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-white/10 border border-white/15 text-slate-200">
              {video.category}
            </span>
            <h3 className="text-white font-semibold text-base truncate max-w-md">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Banner / Preview */}
        <div className="relative aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden group">
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-black/20 to-transparent" />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 backdrop-blur-[2px]">
            <div className="w-16 h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-black" />
            </div>
            <span className="text-[11px] tracking-wide uppercase font-medium text-slate-300 bg-black/60 px-3.5 py-1 rounded-full border border-white/10">
              Click to preview showcase
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Project Breakdown
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {video.description || "High-impact creative production featuring custom motion graphics, sound design, rhythmic pacing, and storytelling edits engineered for maximum retention."}
              </p>
            </div>

            {/* Metrics card */}
            <div className="glass-card p-4 rounded-xl space-y-2 border border-white/10">
              <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                Performance Metric
              </h4>
              <div className="text-xl font-bold text-white brand-font">
                {video.metric || "1.2M+ Views"}
              </div>
              <p className="text-[11px] text-slate-400">
                {video.metricSub || "+450% Reach"}
              </p>
            </div>

          </div>

          {/* Tools */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1 mr-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Tools Used:
            </span>
            {(video.tools || ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"]).map((tool, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                {tool}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

