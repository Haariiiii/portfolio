import React from 'react';

export default function MarqueeTicker() {
  const techItems = [
    { name: 'Python', category: 'CORE' },
    { name: 'PyTorch', category: 'DEEP LEARNING' },
    { name: 'YOLO11', category: 'COMPUTER VISION' },
    { name: 'OpenCV', category: 'VISION' },
    { name: 'Scikit-Learn', category: 'ML' },
    { name: 'Power BI', category: 'ANALYTICS' },
    { name: 'SQL', category: 'DATABASE' },
    { name: 'Flask', category: 'BACKEND' },
    { name: 'NumPy & Pandas', category: 'DATA PIPELINES' },
    { name: 'Linux & Git', category: 'DEVOPS' }
  ];

  return (
    <div className="w-full py-5 bg-zinc-950/90 border-y border-white/10 overflow-hidden relative backdrop-blur-xl">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-editorial whitespace-nowrap">
        {[...techItems, ...techItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-base font-black font-mono text-white tracking-widest uppercase">
              {item.name}
            </span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400">
              {item.category}
            </span>
            <span className="text-zinc-700 ml-6 font-mono font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
