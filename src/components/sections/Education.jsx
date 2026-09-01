import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Education & <span className="text-gradient-electric">Degrees</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Formal Computer Science engineering degree and foundational science education.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bento-card p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-emerald-400" />
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border border-white/10 text-emerald-300">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {edu.degree}
                </h3>
                
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {edu.institution}
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1 mb-4 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 font-bold">{edu.status}</span>
                
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-black text-xs font-mono">
                  <Award className="w-4 h-4" />
                  <span>{edu.grade}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
