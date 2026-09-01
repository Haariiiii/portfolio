import React from 'react';
import { User, GraduationCap, Award, MapPin, CheckCircle2, Cpu, Database, Eye } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <Eye className="w-4 h-4 text-slate-900" />,
      title: "Computer Vision & AI",
      desc: "Real-time object detection (YOLO11), OpenCV video processing & lane detection."
    },
    {
      icon: <Cpu className="w-4 h-4 text-slate-900" />,
      title: "Machine Learning",
      desc: "Predictive regression models, multi-model evaluation & feature engineering."
    },
    {
      icon: <Database className="w-4 h-4 text-slate-900" />,
      title: "Data Analytics & SQL",
      desc: "DAX calculations, Star Schema modeling, and interactive Power BI dashboards."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-2 uppercase tracking-wider shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Background & <span className="text-slate-500">Overview</span>
          </h2>
          <div className="w-10 h-1 bg-slate-900 rounded-full mt-3"></div>
        </div>

        {/* Compact Single Container Card */}
        <div className="minimal-card p-6 sm:p-8 bg-white shadow-sm border border-slate-200">
          
          {/* Top Row: Short Bio + Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-6 border-b border-slate-200">
            
            <div className="md:col-span-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Computer Science & Engineering Graduate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                I am a B.Tech Computer Science graduate from **LBS College of Engineering, Kerala**. Passionate about designing end-to-end data systems—from data extraction and exploratory analytics to training deep learning models and building real-world AI applications.
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="md:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Degree</span>
                <span className="text-sm font-extrabold text-slate-900 font-mono">B.Tech CSE</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Academic CGPA</span>
                <span className="text-sm font-extrabold text-slate-900 font-mono">8.4 / 10</span>
              </div>
            </div>

          </div>

          {/* Bottom Row: 3 Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
