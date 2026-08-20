import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';

export default function BlueprintQuiz({ setActivePage }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    platform: '',
    challenge: '',
    volume: ''
  });

  const platforms = [
    { id: 'youtube', title: 'YouTube Long-Form', desc: 'Documentaries, masterclasses, and vlogs' },
    { id: 'reels', title: 'Short-Form Content', desc: 'Reels, TikToks, Shorts for viral growth' },
    { id: 'saas', title: 'Brand / SaaS Commercials', desc: 'Product showcases and promo trailers' }
  ];

  const challenges = [
    { id: 'retention', title: 'Low Audience Retention', desc: 'Viewers drop off in the first 10 seconds' },
    { id: 'editing-time', title: 'Editing Bottleneck', desc: 'Takes too many hours to edit each video' },
    { id: 'branding', title: 'Weak Visual Identity', desc: 'Channel needs a premium aesthetic overhaul' }
  ];

  const volumes = [
    { id: 'starter', title: '1 - 3 Videos / Month', desc: 'Consistent steady content release' },
    { id: 'growth', title: '4 - 8 Videos / Month', desc: 'Accelerated channel growth pipeline' },
    { id: 'scale', title: '10+ Short-Form Videos / Month', desc: 'Daily algorithm saturation strategy' }
  ];

  const handleSelect = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ platform: '', challenge: '', volume: '' });
  };

  const getRecommendation = () => {
    if (answers.platform === 'reels' || answers.volume === 'scale') {
      return {
        title: 'Short-Form Viral Retention Package',
        desc: 'Engineered for high-volume Reels/TikToks with 3-second hooks, kinetic typography, dynamic sound design, and algorithm pacing.',
        page: 'contact'
      };
    } else if (answers.platform === 'saas' || answers.challenge === 'branding') {
      return {
        title: 'Full Creator Branding & Visual System',
        desc: 'Comprehensive studio package featuring custom 3D motion graphic intros, high-CTR thumbnail kits, channel art overhauls, and trailer edits.',
        page: 'contact'
      };
    } else {
      return {
        title: 'YouTube Cinematic Editing & Strategy Package',
        desc: 'End-to-end documentary & masterclass video editing with pacing audits, color grading, custom sound effects, and thumbnail design.',
        page: 'contact'
      };
    }
  };

  return (
    <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 max-w-3xl mx-auto space-y-6">
      
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white brand-font">Find Your Content Blueprint</h3>
            <p className="text-[11px] text-slate-400">3-step wizard to uncover your ideal studio package</p>
          </div>
        </div>
        
        {step <= 3 ? (
          <span className="text-xs font-semibold text-indigo-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Step {step} of 3
          </span>
        ) : (
          <button 
            onClick={handleReset}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart</span>
          </button>
        )}
      </div>

      {/* STEP 1: PLATFORM */}
      {step === 1 && (
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white">1. What is your primary content format?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {platforms.map((p) => {
              const selected = answers.platform === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleSelect('platform', p.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selected
                      ? 'bg-white/10 border-white/30 text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold brand-font mb-1 text-white">{p.title}</div>
                  <div className="text-[11px] text-slate-400">{p.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-2">
            <button
              disabled={!answers.platform}
              onClick={handleNext}
              className={`glow-btn-primary text-xs py-2 px-5 ${!answers.platform ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CHALLENGE */}
      {step === 2 && (
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white">2. What is your biggest content bottleneck right now?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {challenges.map((c) => {
              const selected = answers.challenge === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => handleSelect('challenge', c.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selected
                      ? 'bg-white/10 border-white/30 text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold brand-font mb-1 text-white">{c.title}</div>
                  <div className="text-[11px] text-slate-400">{c.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button 
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ← Back
            </button>
            <button
              disabled={!answers.challenge}
              onClick={handleNext}
              className={`glow-btn-primary text-xs py-2 px-5 ${!answers.challenge ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: VOLUME */}
      {step === 3 && (
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white">3. What is your target monthly upload volume?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {volumes.map((v) => {
              const selected = answers.volume === v.id;
              return (
                <div
                  key={v.id}
                  onClick={() => handleSelect('volume', v.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selected
                      ? 'bg-white/10 border-white/30 text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold brand-font mb-1 text-white">{v.title}</div>
                  <div className="text-[11px] text-slate-400">{v.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button 
              onClick={() => setStep(2)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ← Back
            </button>
            <button
              disabled={!answers.volume}
              onClick={() => setStep(4)}
              className={`glow-btn-primary text-xs py-2 px-5 ${!answers.volume ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <span>See Blueprint</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: RECOMMENDATION RESULT */}
      {step === 4 && (
        <div className="space-y-5 text-center py-2 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400">Recommended Strategy</span>
            <h3 className="text-xl font-bold text-white brand-font">{getRecommendation().title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{getRecommendation().desc}</p>
          </div>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setActivePage(getRecommendation().page)}
              className="glow-btn-primary text-xs py-2.5 px-6"
            >
              <span>Book This Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="glow-btn-secondary text-xs py-2.5 px-5"
            >
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
