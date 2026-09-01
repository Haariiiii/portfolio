import React from 'react';
import { User, Cpu, Database, Eye, Code2, CheckCircle2, Sparkles, GraduationCap, Award, MapPin } from 'lucide-react';
import { aboutData, personalInfo } from '../../data/portfolioData';

export default function About() {
  const iconMap = [
    <Cpu className="w-5 h-5 text-white" />,
    <Database className="w-5 h-5 text-white" />,
    <Eye className="w-5 h-5 text-white" />,
    <Code2 className="w-5 h-5 text-white" />,
    <CheckCircle2 className="w-5 h-5 text-white" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About <span className="text-gradient-editorial">Me</span>
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mt-4"></div>
        </div>

        {/* Dymas Alfin Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Main Narrative (5 cols) */}
          <div className="lg:col-span-5 editorial-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all pointer-events-none"></div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-white/10 border border-white/20 p-[2px] shrink-0">
                  <div className="w-full h-full bg-zinc-950 rounded-[14px] overflow-hidden flex items-center justify-center relative">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center font-black text-lg font-mono text-white bg-zinc-900">
                      HP
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-zinc-300 font-bold">Computer Science & Engineering</p>
                  <p className="text-[11px] text-zinc-400 flex items-center gap-1 font-mono mt-0.5">
                    <MapPin className="w-3 h-3 text-white" />
                    Kasaragod, Kerala, India
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-base mb-6 font-normal">
                {aboutData.introduction}
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm">
                Specializing in machine learning algorithms, computer vision pipelines, and full-stack web integration to translate complex real-world challenges into production technical solutions.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between text-xs font-mono text-zinc-400 font-bold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                LBS College of Engineering
              </span>
              <span className="text-white">B.Tech 2026</span>
            </div>
          </div>

          {/* Bento Card 2: Editorial Competencies Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.points.map((point, index) => (
              <div
                key={index}
                className="editorial-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-colors">
                      {iconMap[index % iconMap.length]}
                    </div>
                    <span className="text-xs font-mono font-black text-zinc-600">0{index + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                    {point.title}
                  </h4>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 font-bold">
                  <span>Core Expertise</span>
                  <span className="text-white">Active</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
