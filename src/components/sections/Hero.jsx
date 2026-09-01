import React from 'react';
import { Mail, FileText, ArrowRight, MapPin, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-minimal-grid bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Clean Minimalist Typography & 2 Essential Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Minimal Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Data Science & AI Roles</span>
            </div>

            {/* Sub-headline */}
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold mb-2">
              Computer Science & Engineering Graduate
            </span>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-4 leading-none">
              {personalInfo.name}
            </h1>

            {/* Core Specialty */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-700 mb-6 leading-snug">
              Data Science, Machine Learning & AI Specialist
            </h2>

            {/* Concise Bio */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              Focused on turning complex data into practical, intelligent solutions using Python, Machine Learning, Computer Vision (YOLO11), and modern software engineering.
            </p>

            {/* ONLY TWO ESSENTIAL ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.social.emailLink}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 border-l border-slate-200 pl-6">
                <MapPin className="w-3.5 h-3.5 text-slate-700" />
                <span>Kasaragod, Kerala • B.Tech CSE (8.4 CGPA)</span>
              </div>
            </div>

          </div>

          {/* Right Column: LARGE Clean Minimalist Profile Photo Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Minimal Photo Card Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-white p-2.5 border border-slate-200 shadow-xl group transition-all duration-300">
              
              {/* Photo Image Container */}
              <div className="w-full h-[380px] sm:h-[430px] rounded-[22px] overflow-hidden relative bg-slate-100 border border-slate-200">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center font-bold text-4xl font-mono text-slate-700 bg-slate-100">
                  HP
                </div>

                {/* Minimal Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-slate-900 font-mono">Harigovind P</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                    CSE 2026
                  </span>
                </div>
              </div>

              {/* Minimal Badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-mono text-slate-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>88.1% mAP</span>
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-mono text-slate-800 font-bold">
                <Award className="w-4 h-4 text-slate-700" />
                <span>8.4 CGPA</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
