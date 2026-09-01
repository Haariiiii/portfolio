import React from 'react';
import { User, Cpu, Database, Eye, Code2, CheckCircle2, Sparkles, GraduationCap, Award, MapPin } from 'lucide-react';
import { aboutData, personalInfo } from '../../data/portfolioData';

export default function About() {
  const iconMap = [
    <Cpu className="w-5 h-5 text-emerald-400" />,
    <Database className="w-5 h-5 text-emerald-400" />,
    <Eye className="w-5 h-5 text-emerald-400" />,
    <Code2 className="w-5 h-5 text-emerald-400" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About <span className="text-gradient-emerald">Me</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-400 rounded-full mt-4"></div>
        </div>

        {/* Futuristic Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Narrative Card (5 cols) */}
          <div className="lg:col-span-5 futuristic-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none"></div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border border-emerald-500/40 p-[2px] shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center relative">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center font-black text-lg font-mono text-emerald-400 bg-slate-900">
                      HP
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-emerald-400 font-bold">Computer Science & Engineering</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 font-mono mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    Kasaragod, Kerala, India
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base mb-6 font-normal">
                {aboutData.introduction}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Specializing in machine learning algorithms, computer vision pipelines, and full-stack web integration to translate complex real-world challenges into production technical solutions.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between text-xs font-mono text-slate-400 font-bold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                LBS College of Engineering
              </span>
              <span className="text-emerald-400 font-extrabold">B.Tech 2026</span>
            </div>
          </div>

          {/* Card 2: Competencies Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.points.map((point, index) => (
              <div
                key={index}
                className="futuristic-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-emerald-500/40 transition-colors">
                      {iconMap[index % iconMap.length]}
                    </div>
                    <span className="text-xs font-mono font-black text-slate-600">0{index + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {point.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold">
                  <span>Core Skill</span>
                  <span>Active</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
