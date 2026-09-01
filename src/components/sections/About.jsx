import React from 'react';
import { User, Cpu, Database, Eye, Code2, CheckCircle2, MapPin, GraduationCap, Award, Sparkles } from 'lucide-react';
import { aboutData, personalInfo } from '../../data/portfolioData';

export default function About() {
  const iconMap = [
    <Cpu className="w-5 h-5 text-slate-900" />,
    <Database className="w-5 h-5 text-slate-900" />,
    <Eye className="w-5 h-5 text-slate-900" />,
    <Code2 className="w-5 h-5 text-slate-900" />,
    <CheckCircle2 className="w-5 h-5 text-slate-900" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-3 uppercase tracking-wider shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            About <span className="text-slate-500">Me</span>
          </h2>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4"></div>
        </div>

        {/* Updated Redesigned Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Personal Narrative & Education Badge (5 cols) */}
          <div className="lg:col-span-5 minimal-card p-8 sm:p-10 flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 p-[2px] shrink-0 overflow-hidden shadow-sm">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center font-bold text-base font-mono text-slate-800 bg-slate-100 rounded-full">
                    HP
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-slate-600 font-bold">Computer Science & Engineering</p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 font-mono mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-700" />
                    Kasaragod, Kerala, India
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-base mb-6 font-normal">
                {aboutData.introduction}
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                Specializing in machine learning algorithms, computer vision pipelines (YOLO11), and full-stack data analytics to convert raw datasets into intelligent, production-ready applications.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-700 font-bold">
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-slate-900" />
                  LBS College of Engineering
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-900 border border-slate-200">
                  B.Tech 2026
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Academic Record</span>
                <span className="font-extrabold text-slate-900">8.4 / 10 CGPA</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Box Competency Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.points.map((point, index) => (
              <div
                key={index}
                className="minimal-card p-6 sm:p-7 flex flex-col justify-between bg-white group hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      {iconMap[index % iconMap.length]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {point.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold">
                  <span>Core Expertise</span>
                  <span className="text-slate-900">Active</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
