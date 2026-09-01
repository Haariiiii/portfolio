import React from 'react';
import { FileText, Download, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ResumeBanner() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 overflow-hidden shadow-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          
          {/* Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Interested in my background?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Download my complete resume for a detailed breakdown of my Computer Science degree, Data Science projects, machine learning metrics, and technical expertise.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
                <Download className="w-4 h-4 ml-1" />
              </a>
              <span className="text-[11px] font-mono text-slate-400">PDF Format • Harigovind_P_Resume.pdf</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
