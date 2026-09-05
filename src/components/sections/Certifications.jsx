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
            <Award className="w-3.5 h-3.5 text-slate-900" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Academic <span className="text-slate-500">Degree & Certifications</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Display Grid / Single Featured Card */}
        <div className="max-w-3xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="minimal-card p-6 sm:p-8 flex flex-col justify-between group bg-slate-50 border border-slate-200 shadow-sm rounded-3xl"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-sm">
                      <Award className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-bold block uppercase tracking-wider">
                        {cert.status || "Official Academic Credential"}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cert.grade && (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-mono font-extrabold shadow-xs">
                        {cert.grade}
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-600 flex items-center gap-1 font-bold px-3 py-1 rounded-full bg-white border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {cert.year}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-700 font-bold mb-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-800">
                    {cert.issuer}
                  </span>
                </div>

                {cert.details && (
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
                    {cert.details}
                  </p>
                )}

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 font-semibold shadow-2xs"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-600 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified B.Tech CSE Qualification
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-900 hover:text-slate-700 flex items-center gap-1 font-bold"
                  >
                    <span>Verify Credentials</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
