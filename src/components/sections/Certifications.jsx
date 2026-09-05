import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export default function Certifications() {
  const primaryCert = certificationsData[0];
  const otherCerts = certificationsData.slice(1);

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
            Academic Degree & <span className="text-slate-500">Certifications</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          
          {/* Primary Featured Academic Card (B.Tech Degree) */}
          {primaryCert && (
            <div className="minimal-card p-6 sm:p-8 flex flex-col justify-between group bg-slate-900 text-white shadow-md rounded-3xl border border-slate-800">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-white backdrop-blur-xs">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-300 font-bold block uppercase tracking-wider">
                        {primaryCert.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {primaryCert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {primaryCert.grade && (
                      <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-extrabold shadow-xs">
                        {primaryCert.grade}
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-300 flex items-center gap-1 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-slate-300" />
                      {primaryCert.year}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-300 font-bold mb-3">
                  <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-slate-200">
                    {primaryCert.issuer}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {primaryCert.details}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {primaryCert.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-mono text-slate-200 font-semibold"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Verified Engineering Qualification
                </span>
              </div>
            </div>
          )}

          {/* 4 Professional Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCerts.map((cert, idx) => (
              <div
                key={idx}
                className="minimal-card p-6 flex flex-col justify-between group bg-slate-50 border border-slate-200 shadow-sm rounded-3xl"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                      {cert.status}
                    </span>
                    <span className="text-xs font-mono text-slate-600 flex items-center gap-1 font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-700 font-bold mb-3">
                    {cert.issuer}
                  </div>

                  {cert.grade && (
                    <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold mb-3">
                      {cert.grade}
                    </div>
                  )}

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
                    {cert.details}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.skills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Certificate
                  </span>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-900 hover:text-slate-700 flex items-center gap-1 font-bold"
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

      </div>
    </section>
  );
}
