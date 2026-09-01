import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-mono font-bold text-xs">
            HP
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-extrabold text-base tracking-tight group-hover:text-slate-700 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-semibold">
              DATA SCIENCE & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 p-1.5 rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
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
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={personalInfo.resumePath}
            download="Harigovind_P_Resume.pdf"
            className="p-2 text-xs rounded-lg bg-slate-100 text-slate-900 border border-slate-200"
            title="Download Resume"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-200 mt-2">
              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md"
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
