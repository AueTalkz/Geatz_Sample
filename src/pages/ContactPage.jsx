import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Send, Instagram, Youtube, Linkedin, MessageSquare, Sparkles, CheckCircle2, MapPin, Clock } from 'lucide-react';

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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-20">
      
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <span className="badge-pulse text-xs">Start A Conversation</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white brand-font tracking-tight">
          Let's Create Something <br />
          <span className="text-gradient">People Remember.</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Have an idea for a project, channel overhaul, or collaboration? Drop us a message below and our team will get back to you within 24 hours.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* LEFT COLUMN: CONTACT INFO & SOCIALS */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white brand-font">Contact Details</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Direct Email</div>
                  <a href="mailto:hello@itzgeatz.com" className="text-white hover:text-cyan-300 font-medium">
                    hello@itzgeatz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Response Time</div>
                  <div className="text-white font-medium">Under 24 Hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Studio Base</div>
                  <div className="text-white font-medium">Global Digital Studio (Remote-First)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Channels */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white brand-font">Follow & Connect</h3>
            <p className="text-xs text-slate-400">Stay updated with our latest edits, breakdowns, and community events.</p>
            
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all text-slate-300 hover:text-white group"
              >
                <Instagram className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all text-slate-300 hover:text-white group"
              >
                <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">YouTube</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 hover:bg-violet-600/20 hover:border-violet-500/50 transition-all text-slate-300 hover:text-white group"
              >
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-900/40 to-cyan-900/40 border border-violet-500/30 text-center space-y-2">
            <p className="text-xs text-slate-300 italic">
              "Great stories aren't told by chance. They are engineered frame by frame."
            </p>
            <div className="text-[11px] font-bold text-cyan-400 brand-font">— Itz Geatz Studio</div>
          </div>

        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="lg:col-span-3">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
            
            {!submitted ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white brand-font">Project Inquiry Form</h3>
                  <p className="text-xs text-slate-400">Fill in the details below and we'll craft a custom project proposal.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141a2e] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500"
                      >
                        <option value="Video Editing">Short & Long Form Video Editing</option>
                        <option value="Content Strategy">Content Strategy & Scripting</option>
                        <option value="Creator Branding">Creator Branding & Graphics</option>
                        <option value="Full Channel Management">Full Channel Management</option>
                        <option value="Other Collaboration">Other Collaboration</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Estimated Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141a2e] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                        <option value="$7,000+">$7,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Project Overview & Goals *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your content, goals, channels, timeline, and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-btn-primary w-full py-4 justify-center text-base font-bold shadow-2xl"
                  >
                    <span>Send Project Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-white brand-font">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We've received your request for <span className="text-cyan-400 font-semibold">{formData.projectType}</span> and will reply to <span className="text-cyan-400">{formData.email}</span> shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="glow-btn-secondary py-2.5 px-6 text-xs"
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
