import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Activity, ArrowUpRight, Sparkles, Eye, Filter, Zap } from 'lucide-react';
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
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-3 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-emerald">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Real-world machine learning models, computer vision systems, and data analytics dashboards built with production tech stacks.
          </p>
          <div className="w-16 h-1 bg-emerald-400 rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wide transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900/90 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight Card */}
        {featuredProject && (activeFilter === 'All' || activeFilter === featuredProject.category) && (
          <div className="mb-12">
            <div className="futuristic-card p-8 sm:p-10 border border-emerald-500/40 relative overflow-hidden group hover:border-emerald-500/70 transition-all shadow-2xl bg-slate-950/90">
              
              {/* Top Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-black bg-emerald-400 text-slate-950 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    FLAGSHIP PROJECT
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900 border border-white/10 text-emerald-400 font-bold">
                    {featuredProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-black group/btn"
                >
                  <span>Architecture & Metrics</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Spotlight Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* High Contrast Metrics Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/90 p-4 rounded-2xl border border-white/10 mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold">Precision</div>
                      <div className="text-xl font-black font-mono text-emerald-400">84.22%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold">Recall</div>
                      <div className="text-xl font-black font-mono text-emerald-400">81.70%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold">mAP@0.50</div>
                      <div className="text-xl font-black font-mono text-emerald-400">88.10%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold">Inference</div>
                      <div className="text-xl font-black font-mono text-amber-400">~22.9 FPS</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs shadow-xl transition-all flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Deep Breakdown</span>
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs font-extrabold transition-all flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Visual Dashboard Mockup */}
                <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-2 border-b border-white/10">
                    <span className="flex items-center gap-1.5 font-black text-white">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      YOLO11 Detection Engine
                    </span>
                    <span className="text-emerald-400 font-black flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      22.9 FPS
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-slate-300">
                    <div className="flex justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-slate-400">Object Model:</span>
                      <span className="text-emerald-300 font-bold">YOLO11s Custom Potholes</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-slate-400">Lane Detection:</span>
                      <span className="text-emerald-300 font-bold">HLS + Bird's-Eye Transform</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-slate-400">Web Backend:</span>
                      <span className="text-emerald-300 font-bold">Flask SSE Live Streaming</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-slate-400">Input Source:</span>
                      <span className="text-emerald-300 font-bold">Dashcam & Smartphone Video</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold">
                    <span>F1 Score: 82.94%</span>
                    <span className="text-emerald-400">mAP@0.50-0.95: 58.62%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Futuristic Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="futuristic-card p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-emerald-300 flex items-center gap-1 font-black transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Highlights preview */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-black text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
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
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
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
                      className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors"
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
