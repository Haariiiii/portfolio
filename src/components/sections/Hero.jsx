import React from 'react';
import { Mail, FileText, ArrowRight, Sparkles, MapPin, Code, ChevronRight, Zap, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolioData';
import HeroVisual from '../HeroVisual';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-dots-pattern">
      
      {/* Radial Ambient Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Dribbble Top Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl mb-6 shadow-lg shadow-emerald-950/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-300 font-extrabold uppercase tracking-wider">
                Available for AI & Data Science Roles
              </span>
            </div>

            {/* Profile Avatar & Name Section */}
            <div className="flex items-center gap-5 mb-6">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-emerald-400 via-teal-400 to-indigo-500 p-[2px] shadow-2xl shadow-emerald-500/30 group-hover:scale-105 transition-all">
                  <div className="w-full h-full bg-slate-950 rounded-[22px] overflow-hidden flex items-center justify-center relative">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center font-bold text-2xl font-mono text-emerald-400 bg-slate-900">
                      HP
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Kasaragod, Kerala, India
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1">
                  {personalInfo.name}
                </h1>
                <span className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                  B.Tech CSE Graduate (8.4 CGPA)
                </span>
              </div>
            </div>

            {/* Sub-headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight">
              Transforming Data into <span className="text-gradient-electric">Intelligent AI Solutions</span>
            </h2>

            {/* Supporting Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Computer Science & Engineering graduate specializing in **Machine Learning**, **Computer Vision**, and **Python Data Analytics**. Experienced building real-time vision pipelines (YOLO11) and predictive machine learning architectures.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 hover:from-emerald-300 hover:to-indigo-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Get Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links & Quick Tags */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.emailLink}
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 border-l border-white/10 pl-6">
                <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-emerald-400 font-bold">Python</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">PyTorch</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">YOLO11</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">Power BI</span>
              </div>
            </div>

          </div>

          {/* Right Interactive Hero Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
