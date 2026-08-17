import React from 'react';
import { X, Play, Eye, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f1422] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-600/30 border border-violet-500/40 text-violet-300">
              {video.category}
            </span>
            <h3 className="text-white font-bold brand-font text-lg truncate max-w-md">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Banner / Interactive Player Frame */}
        <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden group">
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1422] via-transparent to-transparent" />
          
          {/* Simulated Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 backdrop-blur-[2px]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] shadow-2xl shadow-violet-600/50 transform group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-[#07080c] rounded-full flex items-center justify-center pl-1">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <span className="text-xs tracking-wider uppercase font-semibold text-slate-300 bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
              Click to preview showcase edit
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Project Breakdown
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {video.description || "High-impact creative production featuring custom motion graphics, sound design, rhythmic pacing, and storytelling edits engineered for maximum viewer retention."}
              </p>
            </div>

            {/* Metrics card */}
            <div className="glass-panel p-4 rounded-2xl space-y-3 border border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-emerald-400" />
                Performance Metrics
              </h4>
              <div className="text-2xl font-extrabold text-white brand-font">
                {video.metric || "1.2M+ Views"}
              </div>
              <p className="text-xs text-slate-400">
                {video.metricSub || "+450% Engagement Increase"}
              </p>
            </div>

          </div>

          {/* Tools & Workflow Tags */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1 mr-2">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              Tools Used:
            </span>
            {(video.tools || ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"]).map((tool, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                {tool}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
