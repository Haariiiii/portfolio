import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC DEGREES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Education & <span className="text-slate-500">Qualifications</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="minimal-card p-6 flex flex-col justify-between group bg-white border border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-slate-900" />
                  </div>

                  <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-100 border border-slate-200 text-slate-800">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {edu.degree}
                </h3>
                
                <div className="text-xs font-semibold text-slate-700 mb-1">
                  {edu.institution}
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-1 mb-3 font-mono">
                  <MapPin className="w-3 h-3 text-slate-700" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
                  {edu.details}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">{edu.status}</span>
                
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 text-white font-bold text-xs font-mono shadow-sm">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
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
