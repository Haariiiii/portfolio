import React, { useEffect } from 'react';
import { X, ExternalLink, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl futuristic-card bg-slate-950 border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                Flagship Project
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div>
            <h2 className="text-2xl font-black text-white mb-2">{project.title}</h2>
            <p className="text-emerald-400 text-sm font-bold">{project.tagline}</p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Project Overview</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Metrics */}
          {project.results && project.results.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
                <Activity className="w-4 h-4 text-emerald-400" />
                Benchmark Results & Performance Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.results.map((res, rIdx) => (
                  <div
                    key={rIdx}
                    className="bg-slate-900 border border-white/10 p-3 rounded-2xl flex flex-col items-start justify-center"
                  >
                    <span className="text-[11px] font-mono text-slate-400 font-bold">{res.label}</span>
                    <span className="text-base font-extrabold font-mono text-emerald-300 mt-1">{res.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Key Engineering Features
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-300 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Technologies & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs font-bold transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400 text-slate-950 text-xs font-black transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white font-mono"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
