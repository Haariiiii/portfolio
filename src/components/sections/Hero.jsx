import React from 'react';
import { Mail, FileText, ArrowRight, Sparkles, MapPin, Code, ChevronRight, Zap, Award, Activity, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-futuristic-grid">
      
      {/* Ambient Neon Emerald Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Streamlined Grid: Left Content, Right Large Futuristic Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clean Futuristic Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/40 backdrop-blur-xl mb-6 shadow-lg shadow-emerald-950/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-300 font-extrabold uppercase tracking-wider">
                Available for AI & Data Science Roles
              </span>
            </div>

            {/* Role Header */}
            <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Computer Science & Engineering Graduate
            </span>

            {/* Name Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-none">
              {personalInfo.name}
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-200 mb-6 leading-snug">
              Turning Data into <span className="text-gradient-emerald">Intelligent AI Solutions</span>
            </h2>

            {/* Bio Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              Specializing in **Machine Learning**, **Computer Vision**, **Python Data Analytics**, and **AI**. Experienced in building real-time vision pipelines (YOLO11) and predictive data solutions.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-white/10 font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Icons & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.emailLink}
                  className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 border-l border-white/10 pl-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kasaragod, Kerala • B.Tech CSE 2026</span>
              </div>
            </div>

          </div>

          {/* Right Column: LARGE Futuristic Profile Photo Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-teal-500/10 rounded-3xl blur-3xl opacity-70 animate-pulse-emerald"></div>

            {/* Large Futuristic Photo Card Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-slate-950 p-2.5 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20 group transform hover:scale-[1.02] transition-all duration-500">
              
              {/* Photo Image Container */}
              <div className="w-full h-[360px] sm:h-[420px] rounded-[22px] overflow-hidden relative bg-slate-900 border border-white/10">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center font-black text-4xl font-mono text-emerald-400 bg-slate-900">
                  HP
                </div>

                {/* Bottom Overlay Pill inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-xs font-mono text-white font-extrabold">Harigovind P</span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                    AI & ML Specialist
                  </span>
                </div>
              </div>

              {/* Floating Metric Badges around the photo */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/50 backdrop-blur-xl shadow-xl flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>88.1% mAP</span>
              </div>

              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/50 backdrop-blur-xl shadow-xl flex items-center gap-2 text-xs font-mono text-slate-200 font-bold">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>8.4 CGPA</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
