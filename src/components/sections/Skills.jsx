import React from 'react';
import { Code2, BarChart3, BrainCircuit, Globe, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-white" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-white" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-white" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-white" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-white" />;
      default:
        return <Cpu className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Skills & <span className="text-gradient-editorial">Stack</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-3">
            Core technical stack spanning programming languages, data science frameworks, AI models, and web deployment tools.
          </p>
          <div className="w-16 h-1 bg-white rounded-full mt-4"></div>
        </div>

        {/* Editorial Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="editorial-card p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-colors">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-400">{category.skills.length} core tools</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-black text-zinc-600">0{idx + 1}</span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-xs font-bold text-zinc-200 hover:text-white transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/5 font-bold">
                <span>Domain Stack</span>
                <span className="text-white">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
