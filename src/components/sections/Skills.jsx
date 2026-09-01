import React from 'react';
import { Code2, BarChart3, BrainCircuit, Globe, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Skills & <span className="text-gradient-electric">Stack</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Core technical stack spanning programming languages, data engineering libraries, AI models, and web deployment tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Dribbble Bento Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bento-card p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-emerald-500/40 transition-colors">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">{category.skills.length} core tools</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500">0{idx + 1}</span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 font-semibold">
                <span>Domain Stack</span>
                <span className="text-emerald-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
