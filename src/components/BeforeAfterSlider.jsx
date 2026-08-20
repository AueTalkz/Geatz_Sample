import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, Eye } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="badge-pulse text-[11px]">
          <span className="badge-pulse-dot"></span>
          Visual Transformation
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white brand-font">
          Raw Footage vs. <span className="text-gradient">The Geatz Edit</span>
        </h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Drag the interactive slider below to compare raw unedited camera footage against our color-graded, motion-enhanced edit.
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div 
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize group bg-zinc-950"
      >
        
        {/* AFTER IMAGE (Background - Full Edit) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
            alt="After Edit"
            className="w-full h-full object-cover filter contrast-110 saturate-125"
          />
          {/* Enhanced Overlay Effects badge */}
          <div className="absolute top-4 right-4 backdrop-blur-md bg-black/70 px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-indigo-300 flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Itz Geatz Edit (Color & Motion)</span>
          </div>

          {/* Applied FX Tags */}
          <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-1.5">
            {['Cinematic Grade', 'Kinetic Text', 'Sound FX', '4K Master'].map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/80 border border-white/10 text-slate-300">
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped Layer - Raw Footage) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
            alt="Before Edit"
            className="w-full h-full object-cover filter grayscale contrast-75 brightness-90 max-w-none"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          />
          {/* Raw Tag Badge */}
          <div className="absolute top-4 left-4 backdrop-blur-md bg-black/70 px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            <span>Raw Camera Clip</span>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black shadow-xl border-2 border-indigo-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <Sliders className="w-4 h-4 text-indigo-900" />
          </div>
        </div>

      </div>

      {/* Helper hint */}
      <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
        <span>Drag slider left or right to compare raw vs polished edit quality</span>
      </div>

    </div>
  );
}
