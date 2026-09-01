import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Work & <span className="text-gradient-editorial">Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-3">
            Applied engineering experience in Machine Learning pipelines, Computer Vision research, and software solutions.
          </p>
          <div className="w-16 h-1 bg-white rounded-full mt-4"></div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto space-y-8 relative">
          
          {/* Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-white via-zinc-500 to-zinc-800"></div>

          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-14 group">
              
              {/* Timeline Icon */}
              <div className="absolute left-0 top-1.5 w-12 h-12 rounded-2xl bg-zinc-900 border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 text-white" />
              </div>

              {/* Card Container */}
              <div className="editorial-card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300 mt-1">{exp.company}</div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/20 text-white font-bold">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-400 mt-1 flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-black block mb-2">
                    Key Deliverables & Impact
                  </span>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-mono">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
