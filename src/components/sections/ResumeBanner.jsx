import React from 'react';
import { FileText, Download, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ResumeBanner() {
  return (
    <section className="py-16 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative minimal-card rounded-3xl p-8 sm:p-12 border border-slate-300 overflow-hidden shadow-md bg-white">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-3 uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
                Interested in my background?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Download my complete resume for detailed information on my Computer Science degree, Data Science projects, machine learning metrics, and technical skill set.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
              <a
                href={personalInfo.resumePath}
                download="Harigovind_P_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
              <span className="text-[11px] font-mono text-slate-500 font-bold">PDF Format • Harigovind_P_Resume.pdf</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
