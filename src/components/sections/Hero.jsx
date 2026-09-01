import React from 'react';
import { Mail, FileText, ArrowRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-minimal-grid bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column: Clean Typography & 2 Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold mb-2">
              Computer Science & Engineering Graduate
            </span>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-3 leading-none">
              {personalInfo.name}
            </h1>

            {/* Specialty */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-700 mb-5 leading-snug">
              Data Science, Machine Learning & AI Specialist
            </h2>

            {/* Bio */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-normal">
              Focused on turning complex data into practical, intelligent solutions using Python, Machine Learning, Computer Vision (YOLO11), and modern data engineering.
            </p>

            {/* 2 ESSENTIAL ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-slate-200/80 w-full">
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

          {/* Right Column: EXTRA LARGE ROUND PROFILE AVATAR (NO TEXT ABOVE) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full bg-slate-200/50 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>

              {/* Extra Large Round Profile Avatar */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-[410px] lg:h-[410px] rounded-full bg-white p-2.5 border-4 border-slate-200/90 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-102">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center font-bold text-5xl font-mono text-slate-700 bg-slate-100 rounded-full">
                  HP
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
