import React from 'react';
import { Mail, FileText, ArrowRight, Sparkles, MapPin, Code, ChevronRight, Zap, Award, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolioData';
import HeroVisual from '../HeroVisual';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-editorial">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Pill */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-300 font-black uppercase tracking-wider">
              Available for Data Science & AI Opportunities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Profile Avatar Card + Headline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              
              {/* Dribbble Editorial Portrait Avatar Frame */}
              <div className="relative group shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/10 border border-white/20 p-[2.5px] shadow-2xl group-hover:border-white/40 transition-all duration-500">
                  <div className="w-full h-full bg-zinc-950 rounded-[22px] overflow-hidden relative">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center font-black text-3xl font-mono text-white bg-zinc-900">
                      HP
                    </div>
                  </div>
                </div>
                
                {/* Floating Tech Tag */}
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/20 text-[10px] font-mono text-white font-black shadow-xl flex items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  AI / ML
                </div>
              </div>

              {/* Title & Location */}
              <div className="flex flex-col">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  Kasaragod, Kerala, India
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mt-1">
                  {personalInfo.name}
                </h1>
                <span className="text-sm font-mono text-zinc-300 font-extrabold mt-1">
                  Computer Science & Engineering Graduate
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                  CGPA: 8.4 / 10 • Class of 2026
                </span>
              </div>
            </div>

            {/* Sub-headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              Turning Raw Data into <span className="text-gradient-editorial">Intelligent AI Solutions</span>
            </h2>

            {/* Supporting Description */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Computer Science & Engineering graduate specializing in **Data Science**, **Machine Learning**, **Computer Vision**, and **AI**. Experienced in building real-time vision pipelines (YOLO11), predictive regression algorithms, and analytical Power BI dashboards.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-black text-sm shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-zinc-300" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Stack Badges */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.emailLink}
                  className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 border-l border-white/10 pl-6">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-white font-extrabold">Python</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">PyTorch</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">YOLO11</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">Power BI</span>
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
