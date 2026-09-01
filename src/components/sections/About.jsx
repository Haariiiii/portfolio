import React from 'react';
import { User, Cpu, Database, Eye, Code2, CheckCircle2, Sparkles } from 'lucide-react';
import { aboutData, personalInfo } from '../../data/portfolioData';

export default function About() {
  const iconMap = [
    <Cpu className="w-5 h-5 text-cyan-400" />,
    <Database className="w-5 h-5 text-emerald-400" />,
    <Eye className="w-5 h-5 text-indigo-400" />,
    <Code2 className="w-5 h-5 text-purple-400" />,
    <CheckCircle2 className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none"></div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 shrink-0">
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
                    <div className="hidden w-full h-full items-center justify-center font-bold text-lg font-mono text-cyan-400 bg-slate-900">
                      HP
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">CS & Engineering Graduate</p>
                  <p className="text-[11px] text-slate-400">Kasaragod, Kerala</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base mb-6">
                {aboutData.introduction}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                With a focus on machine learning algorithms, computer vision pipelines, and full-stack web integration, I specialize in bridging complex algorithmic concepts with practical production applications.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-8 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Location: Kerala, India
              </span>
              <span className="text-cyan-400 font-semibold">B.Tech CSE 2026</span>
            </div>
          </div>

          {/* Key Competencies Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.points.map((point, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {iconMap[index % iconMap.length]}
                  </div>
                  <h4 className="text-base font-semibold text-slate-100">{point.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
