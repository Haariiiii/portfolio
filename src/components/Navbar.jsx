import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 p-[1px] group-hover:border-white/40 transition-all">
            <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg tracking-tight group-hover:text-zinc-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">
              DATA SCIENCE & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-white text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Download Resume */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download="Harigovind_P_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-full bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={personalInfo.resumePath}
            download="Harigovind_P_Resume.pdf"
            className="p-2.5 text-xs rounded-xl bg-white/10 text-white border border-white/20"
            title="Download Resume"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-zinc-950/98 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-2xl text-left text-sm font-extrabold transition-all ${
                    isActive
                      ? 'bg-white text-zinc-950'
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10 mt-2">
              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-zinc-950 font-black text-sm shadow-xl"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
