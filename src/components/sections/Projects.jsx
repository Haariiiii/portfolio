import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Activity, ArrowUpRight, Sparkles, Eye, Filter } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Data Science & ML', 'Web & BI'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured || activeFilter !== 'All');

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Real-world machine learning models, computer vision systems, and data analytics dashboards built with modern tech stacks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight Card */}
        {featuredProject && (activeFilter === 'All' || activeFilter === featuredProject.category) && (
          <div className="mb-12">
            <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden group hover:border-cyan-500/60 transition-all shadow-2xl">
              
              {/* Top Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    FEATURED PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-400">
                    {featuredProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/btn"
                >
                  <span>View Details & Architecture</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Spotlight Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* Metrics Highlight Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">Precision</div>
                      <div className="text-lg font-bold font-mono text-cyan-400">84.22%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">Recall</div>
                      <div className="text-lg font-bold font-mono text-emerald-400">81.70%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">mAP@0.50</div>
                      <div className="text-lg font-bold font-mono text-indigo-400">88.10%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">Inference</div>
                      <div className="text-lg font-bold font-mono text-amber-400">~22.9 FPS</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Breakdown</span>
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Visual Dashboard Mockup */}
                <div className="lg:col-span-5 bg-slate-950/90 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      Telemetry Stream
                    </span>
                    <span className="text-emerald-400 font-semibold">Active Model</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-slate-300">
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-400">Object Detector:</span>
                      <span className="text-cyan-300">YOLO11s Pothole Net</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-400">Lane Departure:</span>
                      <span className="text-emerald-300">HLS + Bird's-Eye Transform</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-400">Web Backend:</span>
                      <span className="text-indigo-300">Flask SSE Live Streaming</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-slate-400">Input Source:</span>
                      <span className="text-amber-300">Dashcam / Smartphone Video</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>F1: 82.94%</span>
                    <span>mAP@0.50-0.95: 58.62%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Highlights preview */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.slice(0, 3).map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
