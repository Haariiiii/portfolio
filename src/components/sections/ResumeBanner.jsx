import React from 'react';
import { FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ResumeBanner() {
  return (
    <section className="py-10 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative minimal-card rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-sm bg-white">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
                Interested in my background?
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Download my resume for detailed information on my CSE degree, Data Science projects, machine learning metrics, and technical skill set.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1.5 shrink-0">
              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <span className="text-[10px] font-mono text-slate-500 font-bold">PDF • Harigovind_P_Resume.pdf</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
