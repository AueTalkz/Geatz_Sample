import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Send, Instagram, Youtube, Linkedin, CheckCircle2, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Video Editing',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-12 sm:space-y-16">
      
      {/* HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="badge-pulse text-[11px]">Get In Touch</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white brand-font tracking-tight leading-tight">
          Let's Create Something <br />
          <span className="text-gradient">People Remember.</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          Have a project, channel overhaul, or partnership inquiry? Send us a message and we'll get back within 24 hours.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-5">
          
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white brand-font">Contact Details</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Direct Email</div>
                  <a href="mailto:hello@itzgeatz.com" className="text-white hover:text-indigo-300 font-medium">
                    hello@itzgeatz.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Response Time</div>
                  <div className="text-white font-medium">Under 24 Hours</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Studio Base</div>
                  <div className="text-white font-medium">Global (Remote First)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Socials */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white brand-font">Social Channels</h3>
            
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-1.5 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-[11px] font-medium">Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-1.5 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span className="text-[11px] font-medium">YouTube</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-1.5 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span className="text-[11px] font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: FORM */}
        <div className="lg:col-span-3">
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 space-y-5">
            
            {!submitted ? (
              <>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white brand-font">Project Inquiry</h3>
                  <p className="text-xs text-slate-400">Fill in the form below and we'll build a custom proposal.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivers"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-300">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#121520] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Video Editing">Short & Long Form Video Editing</option>
                        <option value="Content Strategy">Content Strategy & Scripting</option>
                        <option value="Creator Branding">Creator Branding & Graphics</option>
                        <option value="Full Channel Management">Full Channel Management</option>
                        <option value="Other Collaboration">Other Collaboration</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-300">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#121520] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                        <option value="$7,000+">$7,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-300">Project Goals & Overview *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your channel, timeline, and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-btn-primary w-full py-3 justify-center text-xs font-semibold mt-1"
                  >
                    <span>Send Project Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white brand-font">Inquiry Received!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We've received your request for <span className="text-indigo-400 font-semibold">{formData.projectType}</span> and will reply to <span className="text-indigo-400">{formData.email}</span> shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="glow-btn-secondary py-2 px-5 text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}

