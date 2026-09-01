import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Activity, ShieldCheck, Zap, Database, Terminal, Code2 } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('visual');
  const [metrics, setMetrics] = useState({
    loss: 0.0241,
    acc: 98.42,
    fps: 22.9,
    inference: 43.67
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loss: parseFloat((0.0240 + Math.random() * 0.003).toFixed(4)),
        acc: parseFloat((98.40 + Math.random() * 0.15).toFixed(2)),
        fps: parseFloat((22.5 + Math.random() * 0.8).toFixed(1)),
        inference: parseFloat((43.2 + Math.random() * 0.9).toFixed(2))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodes = [];
    const layers = [3, 5, 5, 3];
    const layerSpacing = width / (layers.length + 1);

    layers.forEach((count, lIdx) => {
      const x = layerSpacing * (lIdx + 1);
      const verticalSpacing = height / (count + 1);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x,
          y: verticalSpacing * (i + 1),
          layer: lIdx,
          radius: 4,
          pulse: Math.random() * Math.PI * 2,
          speed: 0.03 + Math.random() * 0.02
        });
      }
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach(n1 => {
        nodes.forEach(n2 => {
          if (n2.layer === n1.layer + 1) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            const alpha = 0.12 + Math.sin(n1.pulse) * 0.08;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            const progress = (Math.sin(n1.pulse) + 1) / 2;
            const signalX = n1.x + (n2.x - n1.x) * progress;
            const signalY = n1.y + (n2.y - n1.y) * progress;

            ctx.beginPath();
            ctx.arc(signalX, signalY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = progress > 0.5 ? '#00ff88' : '#6366f1';
            ctx.shadowColor = ctx.fillStyle;
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
      });

      nodes.forEach(n => {
        n.pulse += n.speed;
        ctx.beginPath();
        const r = n.radius + Math.sin(n.pulse) * 1.5;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.layer === 0 ? '#10b981' : n.layer === layers.length - 1 ? '#00ff88' : '#818cf8';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative Glow Background */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-indigo-500/20 blur-2xl opacity-80 animate-pulse-slow"></div>

      {/* Main Bento Container Window */}
      <div className="relative bento-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/90">
        
        {/* Window Bar Header */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              harigovind-ml-runtime.py
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1 text-xs font-bold font-mono rounded-lg transition-all ${
                activeTab === 'visual'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Neural Net
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 text-xs font-bold font-mono rounded-lg transition-all ${
                activeTab === 'code'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Code Stream
            </button>
          </div>
        </div>

        {/* Tab Content 1: Neural Network Canvas & Live Metrics */}
        {activeTab === 'visual' ? (
          <div className="p-6 flex flex-col gap-4">
            <div className="relative h-52 w-full bg-slate-950 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
              
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                YOLO11s Real-Time Inference
              </div>

              <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-300 flex items-center gap-1 font-bold">
                <Zap className="w-3 h-3 text-emerald-400" />
                GPU Speed: {metrics.fps} FPS
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/60 border border-white/10 p-3.5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Inference Time</div>
                    <div className="text-sm font-extrabold font-mono text-white">{metrics.inference} ms</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">Fast</span>
              </div>

              <div className="bg-slate-900/60 border border-white/10 p-3.5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">mAP@0.50 Score</div>
                    <div className="text-sm font-extrabold font-mono text-white">88.10%</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">High</span>
              </div>
            </div>
          </div>
        ) : (
          /* Tab Content 2: Live Code Pipeline Snippet */
          <div className="p-6 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[288px]">
            <div className="text-slate-500 mb-2"># Harigovind P - Real-Time YOLO11 ML Pipeline</div>
            <div className="text-purple-400">import <span className="text-slate-200">torch, cv2</span></div>
            <div className="text-purple-400">from <span className="text-slate-200">ultralytics</span> import <span className="text-emerald-400 font-bold">YOLO</span></div>
            <div className="text-purple-400">from <span className="text-slate-200">vision_analytics</span> import <span className="text-emerald-400 font-bold">LaneAnalyzer</span></div>
            <br />
            <div className="text-slate-500"># 1. Load Custom Trained YOLO11 Pothole Weights</div>
            <div><span className="text-emerald-400 font-bold">model</span> = YOLO(<span className="text-teal-300">'yolo11s_pothole.pt'</span>)</div>
            <div><span className="text-emerald-400 font-bold">results</span> = model.predict(source=<span className="text-teal-300">'video_feed.mp4'</span>, conf=<span className="text-amber-300">0.50</span>)</div>
            <br />
            <div className="text-slate-500"># 2. Process HLS Lane Boundaries</div>
            <div><span className="text-emerald-400 font-bold">lane_alerts</span> = LaneAnalyzer.sliding_window(frame)</div>
            <div className="text-slate-500"># 3. Stream Telemetry via Flask SSE Endpoint</div>
            <div><span className="text-emerald-400 font-bold">server</span>.stream_telemetry(potholes=results, lanes=lane_alerts)</div>
          </div>
        )}

        {/* Footer Status bar */}
        <div className="px-5 py-2.5 bg-slate-900/90 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            PyTorch • Scikit-Learn • OpenCV
          </span>
          <span className="text-emerald-400 font-bold">● Active Deployment</span>
        </div>
      </div>
    </div>
  );
}
