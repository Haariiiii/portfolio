import React from 'react';
import { Code2, BarChart3, BrainCircuit, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-slate-800" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-slate-800" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-4 h-4 text-slate-800" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-slate-800" />;
      default:
        return <Cpu className="w-4 h-4 text-slate-800" />;
    }
  };

  return (
    <section id="skills" className="py-12 md:py-16 relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Skills & <span className="text-slate-500">Stack</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Compact Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="minimal-card p-5 flex flex-col justify-between group bg-slate-50 border border-slate-200"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {category.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">{category.skills.length} core tools</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-200 font-bold">
                <span>Domain Stack</span>
                <span className="text-slate-900">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
