import React from 'react';
import { Code2, BarChart3, BrainCircuit, Globe, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-slate-800" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-slate-800" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-slate-800" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-slate-800" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-slate-800" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-3 uppercase tracking-wider shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Skills & <span className="text-slate-500">Stack</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mt-3">
            Core technical stack spanning programming languages, data engineering libraries, AI models, and web deployment tools.
          </p>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4"></div>
        </div>

        {/* Minimal Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="minimal-card p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">{category.skills.length} core tools</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-100 font-bold">
                <span>Domain Stack</span>
                <span className="text-slate-900">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
