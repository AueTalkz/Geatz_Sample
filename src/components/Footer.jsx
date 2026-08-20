import React from 'react';
import { Zap, Instagram, Youtube, Linkedin, ArrowUpRight, Users } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTopPage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080d] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => scrollToTopPage('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                <Zap className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="brand-font font-bold text-xl tracking-tight text-white">
                ITZ GEATZ
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A creator-focused digital studio helping creators, brands, and businesses build their identity through storytelling, editing, and creative strategy.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {['home', 'about', 'founders', 'services', 'portfolio'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => scrollToTopPage(page)}
                    className="text-slate-400 hover:text-white capitalize transition-colors"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Ecosystem</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollToTopPage('community')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Geeks Community</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTopPage('founders')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Founders & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTopPage('services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Editing & Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTopPage('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Start a Project
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Availability */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
            <div className="badge-pulse text-[11px]">
              <span className="badge-pulse-dot"></span>
              Accepting Projects
            </div>
            <h5 className="text-white font-semibold text-sm">
              Ready to transform your content?
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Where creators grow and digital ideas become viral reality.
            </p>
            <button
              onClick={() => scrollToTopPage('contact')}
              className="text-xs font-medium text-white hover:text-indigo-300 flex items-center gap-1 group"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Itz Geatz Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

