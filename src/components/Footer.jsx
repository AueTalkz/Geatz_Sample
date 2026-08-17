import React from 'react';
import { Zap, Instagram, Youtube, Linkedin, ArrowUpRight, Heart, Users } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTopPage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050609] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-violet-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              onClick={() => scrollToTopPage('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#07080c] rounded-[11px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="brand-font font-extrabold text-2xl tracking-tight text-white">
                ITZ <span className="text-gradient">GEATZ</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A creator-focused digital studio helping creators, brands, and businesses build their identity through storytelling, editing, and creative strategy.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/50 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 brand-font text-base tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {['home', 'about', 'founders', 'services', 'portfolio'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => scrollToTopPage(page)}
                    className="text-slate-400 hover:text-cyan-400 capitalize transition-colors"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 brand-font text-base tracking-wider uppercase">Ecosystem</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToTopPage('community')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-4 h-4 text-violet-400" />
                  <span>Geeks Community</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTopPage('founders')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Founders & CEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTopPage('services')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Video Editing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTopPage('contact')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Start A Project
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Tagline Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="badge-pulse text-xs">
              <span className="badge-pulse-dot"></span>
              Accepting Projects
            </div>
            <h5 className="text-white font-bold brand-font text-base">
              Ready to transform your content?
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              "A place where creators grow, people connect, and ideas become reality."
            </p>
            <button
              onClick={() => scrollToTopPage('contact')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Itz Geatz Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted for the next generation of creators</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
