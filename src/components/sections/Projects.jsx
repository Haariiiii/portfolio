import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Activity, ArrowUpRight, Sparkles, Eye, Filter } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Data Science & ML', 'Data Analytics & BI'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured || activeFilter !== 'All');

  return (
    <section id="projects" className="py-12 md:py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Featured <span className="text-slate-500">Projects</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight Card */}
        {featuredProject && (activeFilter === 'All' || activeFilter === featuredProject.category) && (
          <div className="mb-8">
            <div className="minimal-card p-6 sm:p-8 border border-slate-300 relative overflow-hidden group shadow-sm bg-white">
              
              {/* Top Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    FLAGSHIP PROJECT
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                    {featuredProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-900 font-bold hover:text-slate-600 group/btn"
                >
                  <span>Architecture & Metrics</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* Metrics Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">Precision</div>
                      <div className="text-base font-extrabold font-mono text-slate-900">84.22%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">Recall</div>
                      <div className="text-base font-extrabold font-mono text-slate-900">81.70%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">mAP@0.50</div>
                      <div className="text-base font-extrabold font-mono text-slate-900">88.10%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-bold">Inference</div>
                      <div className="text-base font-extrabold font-mono text-emerald-600">~22.9 FPS</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Breakdown</span>
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Dashboard Overview */}
                <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-3 pb-2 border-b border-slate-200 font-bold">
                    <span className="flex items-center gap-1 text-slate-900">
                      <Activity className="w-3.5 h-3.5 text-emerald-600" />
                      YOLO11 Detection Engine
                    </span>
                    <span className="text-emerald-600 font-extrabold">22.9 FPS</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs text-slate-700">
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-500">Object Model:</span>
                      <span className="text-slate-900 font-bold">YOLO11s Potholes</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-500">Lane Detection:</span>
                      <span className="text-slate-900 font-bold">HLS + Bird's-Eye</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-500">Streaming:</span>
                      <span className="text-slate-900 font-bold">Flask SSE Endpoint</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600 font-bold">
                    <span>F1 Score: 82.94%</span>
                    <span className="text-slate-900">mAP@0.50: 88.10%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Minimal Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="minimal-card p-6 flex flex-col justify-between group bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-bold">
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

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-extrabold text-slate-900 hover:text-slate-700 flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
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
