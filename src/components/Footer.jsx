import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-center">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 font-mono font-bold flex items-center justify-center text-xs">
                HP
              </div>
              <span className="text-xl font-extrabold tracking-tight">{personalInfo.name}</span>
            </div>

            <p className="text-slate-400 text-sm font-mono italic">
              "Building intelligent solutions with data, AI and code."
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex items-center md:justify-end gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.social.emailLink}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Crafted for Data Science, ML & AI Excellence</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl transition-all transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
