import React from 'react';
import { Cpu, Terminal, Database, Eye, Code, Zap } from 'lucide-react';

export default function MarqueeTicker() {
  const techItems = [
    { name: 'Python', category: 'Language' },
    { name: 'PyTorch', category: 'Deep Learning' },
    { name: 'YOLO11', category: 'Computer Vision' },
    { name: 'OpenCV', category: 'Vision' },
    { name: 'Scikit-Learn', category: 'Machine Learning' },
    { name: 'Power BI', category: 'Data Analytics' },
    { name: 'SQL', category: 'Database' },
    { name: 'Flask', category: 'Backend' },
    { name: 'NumPy & Pandas', category: 'Data Analysis' },
    { name: 'Linux & Git', category: 'DevOps' }
  ];

  return (
    <div className="w-full py-6 bg-slate-950/80 border-y border-white/5 overflow-hidden relative backdrop-blur-md">
      {/* Fade Gradients at Left & Right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render list twice for seamless infinite loop */}
        {[...techItems, ...techItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-extrabold font-mono text-slate-200 uppercase tracking-wider">
              {item.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400/90">
              {item.category}
            </span>
            <span className="text-slate-700 ml-4 font-mono">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
