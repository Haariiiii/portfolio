import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Certifications & <span className="text-gradient-editorial">Badges</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-3">
            Verified course completions across Machine Learning, Computer Vision, SQL, and Business Intelligence.
          </p>
          <div className="w-16 h-1 bg-white rounded-full mt-4"></div>
        </div>

        {/* Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-white group-hover:border-white/30 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1 font-bold">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-zinc-300 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="text-xs font-mono text-zinc-400 font-semibold mb-4">
                  {cert.issuer}
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white hover:text-zinc-300 flex items-center gap-1 font-bold"
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
