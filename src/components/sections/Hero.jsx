import React from 'react';
import { Mail, FileText, ArrowRight, Sparkles, MapPin, Code, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolioData';
import HeroVisual from '../HeroVisual';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Profile Photo Avatar Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[2px] shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center relative">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center font-bold text-2xl font-mono text-cyan-400 bg-slate-900">
                      HP
                    </div>
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                </span>
              </div>

              {/* Status Pill */}
              <div className="flex flex-col items-start gap-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs text-slate-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-mono text-cyan-300 font-medium">CSE Graduate • 2026</span>
                </div>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono pl-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  Kasaragod, Kerala, India
                </span>
              </div>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400 shrink-0" />
              <span>{personalInfo.title}</span>
            </h2>

            {/* Supporting Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-cyan-400 border border-cyan-500/30 font-semibold text-sm transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Tech Badges */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.emailLink}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 border-l border-slate-800 pl-6">
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Python</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">PyTorch</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">YOLO11</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Power BI</span>
              </div>
            </div>

          </div>

          {/* Right Interactive Visual Column */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
