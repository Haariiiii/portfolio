import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-16 relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Certifications & <span className="text-slate-500">Badges</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="minimal-card p-5 flex flex-col justify-between group bg-slate-50 border border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 font-bold">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {cert.title}
                </h3>
                
                <div className="text-[11px] font-mono text-slate-500 font-semibold mb-3">
                  {cert.issuer}
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 font-semibold"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-slate-900 hover:text-slate-700 flex items-center gap-1 font-bold"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
