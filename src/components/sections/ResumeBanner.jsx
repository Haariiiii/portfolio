import React from 'react';
import { FileText, Download, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ResumeBanner() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bento-card rounded-3xl p-8 sm:p-12 border border-emerald-500/40 overflow-hidden shadow-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          
          {/* Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">
                Interested in my background?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Download my full resume for detailed information on my Computer Science degree, Data Science projects, machine learning metrics, and technical skill set.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 hover:from-emerald-300 hover:to-indigo-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
              <span className="text-[11px] font-mono text-slate-400 font-bold">PDF Format • Harigovind_P_Resume.pdf</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
