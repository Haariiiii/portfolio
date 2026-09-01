import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-3 uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC DEGREES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Education & <span className="text-slate-500">Qualifications</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mt-3">
            Formal Computer Science engineering degree and foundational science education.
          </p>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4"></div>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="minimal-card p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-slate-900" />
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 border border-slate-200 text-slate-800">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {edu.degree}
                </h3>
                
                <div className="text-sm font-semibold text-slate-700 mb-1">
                  {edu.institution}
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-1 mb-4 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">{edu.status}</span>
                
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs font-mono shadow-sm">
                  <Award className="w-4 h-4 text-emerald-400" />
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
