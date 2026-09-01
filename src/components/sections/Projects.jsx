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
    <section id="projects" className="py-20 md:py-28 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-3 uppercase tracking-wider shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Featured <span className="text-slate-500">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mt-3">
            Real-world machine learning models, computer vision systems, and data analytics dashboards built with production tech stacks.
          </p>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight Card */}
        {featuredProject && (activeFilter === 'All' || activeFilter === featuredProject.category) && (
          <div className="mb-12">
            <div className="minimal-card p-8 sm:p-10 border border-slate-300 relative overflow-hidden group shadow-md bg-white">
              
              {/* Top Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    FLAGSHIP PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                    {featuredProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-900 font-bold hover:text-slate-600 group/btn"
                >
                  <span>Architecture & Metrics</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* High Contrast Metrics Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">Precision</div>
                      <div className="text-xl font-extrabold font-mono text-slate-900">84.22%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">Recall</div>
                      <div className="text-xl font-extrabold font-mono text-slate-900">81.70%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">mAP@0.50</div>
                      <div className="text-xl font-extrabold font-mono text-slate-900">88.10%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">Inference</div>
                      <div className="text-xl font-extrabold font-mono text-emerald-600">~22.9 FPS</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Breakdown</span>
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Dashboard Overview */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-4 pb-2 border-b border-slate-200 font-bold">
                    <span className="flex items-center gap-1.5 text-slate-900">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      YOLO11 Detection Engine
                    </span>
                    <span className="text-emerald-600 font-extrabold">22.9 FPS</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-slate-700">
                    <div className="flex justify-between p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-slate-500">Object Model:</span>
                      <span className="text-slate-900 font-bold">YOLO11s Potholes</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-slate-500">Lane Detection:</span>
                      <span className="text-slate-900 font-bold">HLS + Bird's-Eye</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-slate-500">Web Backend:</span>
                      <span className="text-slate-900 font-bold">Flask SSE Live Stream</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-slate-500">Input Source:</span>
                      <span className="text-slate-900 font-bold">Dashcam Video</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600 font-bold">
                    <span>F1 Score: 82.94%</span>
                    <span className="text-slate-900">mAP@0.50: 88.10%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Minimal Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="minimal-card p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-bold">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1 font-bold transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-700 flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-extrabold text-slate-900 hover:text-slate-700 flex items-center gap-1.5"
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
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
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
                      className="p-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
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
