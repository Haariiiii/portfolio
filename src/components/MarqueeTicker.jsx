import React from 'react';

export default function MarqueeTicker() {
  const techItems = [
    { name: 'Python', category: 'Core' },
    { name: 'PyTorch', category: 'Deep Learning' },
    { name: 'YOLO11', category: 'Computer Vision' },
    { name: 'OpenCV', category: 'Vision' },
    { name: 'Scikit-Learn', category: 'Machine Learning' },
    { name: 'Power BI', category: 'Analytics' },
    { name: 'SQL', category: 'Database' },
    { name: 'NumPy & Pandas', category: 'Data Analysis' },
    { name: 'Linux & Git', category: 'Tools' }
  ];

  return (
    <div className="w-full py-3.5 bg-white border-y border-slate-200 overflow-hidden relative shadow-sm">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-minimal whitespace-nowrap">
        {[...techItems, ...techItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-6">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span className="text-xs font-extrabold font-mono text-slate-800 tracking-wider uppercase">
              {item.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
              {item.category}
            </span>
            <span className="text-slate-300 ml-4 font-mono">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
