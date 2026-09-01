import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Work & <span className="text-slate-500">Experience</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto space-y-6 relative">
          
          {/* Connecting Line */}
          <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-slate-200"></div>

          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-12 group">
              
              {/* Timeline Icon */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Card Container */}
              <div className="minimal-card p-5 sm:p-6 bg-slate-50 border border-slate-200">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-semibold text-slate-700 mt-0.5">{exp.company}</div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-white border border-slate-200 text-slate-800 font-bold">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 text-xs leading-relaxed mb-4 font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Key Deliverables
                  </span>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
