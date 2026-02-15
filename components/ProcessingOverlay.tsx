import React, { useEffect, useState } from 'react';
import { AppMode } from '../types';

interface ProcessingOverlayProps {
  mode: AppMode;
}

const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ mode }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = {
    [AppMode.TIME_TRAVEL]: [
      "Distorting Space-Time Continuum...",
      "Calculating Temporal Coordinates...",
      "Stabilizing Quantum Flux...",
      "Merging Timelines...",
      "Materializing Reality..."
    ],
    [AppMode.MAGIC_EDIT]: [
      "Analyzing Visual Matrix...",
      "Injecting Creative Algorithms...",
      "Refining Pixel Data...",
      "Applying Reality Filter...",
      "Finalizing Render..."
    ],
    [AppMode.ANALYZE]: [
      "Scanning Neural Patterns...",
      "Decoding Historical Data...",
      "Cross-Referencing Archives...",
      "Synthesizing Insights...",
      "Generating Report..."
    ],
    [AppMode.CAPTURE]: [],
    [AppMode.FILTERS]: []
  };

  const currentMessages = messages[mode] || messages[AppMode.TIME_TRAVEL];

  useEffect(() => {
    // Simulate progress with variable speed
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) return prev;
        // Slow down as we get closer to 100
        const increment = prev < 50 ? 1.5 : prev < 80 ? 0.8 : 0.2;
        return Math.min(prev + Math.random() * increment * 2, 99);
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % currentMessages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentMessages]);

  return (
    <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-6 z-50 overflow-hidden animate-in fade-in duration-500">

      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-[-100%] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(99,102,241,0.2)_40%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom animate-[grid-move_20s_linear_infinite]"></div>
      </div>



      {/* Main Vortex Assembly */}
      <div className="relative w-80 h-80 mb-12 flex items-center justify-center">

        {/* Glow Effects */}
        <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full animate-pulse"></div>

        {/* Outer Ring - Dashed Data Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/20 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse] scale-90"></div>

        {/* Spinning Arcs - Chromatic Aberration Simulation */}
        <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-red-500/40 border-l-red-500/40 animate-[spin_3s_linear_infinite] blur-[1px]"></div>
        <div className="absolute inset-4 rounded-full border-2 border-transparent border-b-cyan-500/40 border-r-cyan-500/40 animate-[spin_3s_linear_infinite] blur-[1px] translate-x-[2px]"></div>

        {/* Particle Ring */}
        <div className="absolute inset-8 rounded-full animate-[spin_8s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 w-1 h-4 bg-gradient-to-b from-transparent to-indigo-400 opacity-50"
              style={{ transform: `rotate(${i * 45}deg) translateY(-10px)` }}
            ></div>
          ))}
        </div>

        {/* Swirling Vortex Gradient */}
        <div className="absolute inset-12 rounded-full overflow-hidden animate-[spin_2s_linear_infinite]">
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(99,102,241,0.4)_180deg,transparent_360deg)] blur-xl"></div>
        </div>

        {/* Inner Portal Core */}
        <div className="absolute inset-24 bg-black rounded-full border border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.4)] flex items-center justify-center z-10 overflow-hidden">
          {/* Moving Core Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
          <div className="absolute inset-[-50%] opacity-30 bg-[conic-gradient(from_180deg,transparent,indigo-500,transparent)] animate-[spin_1s_linear_infinite]"></div>

          {/* Percentage Display */}
          <div className="relative z-20 flex flex-col items-center">
            <span className="font-mono font-black text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] tracking-tighter tabular-nums">
              {Math.round(progress)}
            </span>
            <span className="text-[10px] text-indigo-400 font-bold tracking-[0.2em] uppercase animate-pulse">
              SYNCING
            </span>
          </div>
        </div>
      </div>

      {/* Message Scroller */}
      <div className="h-12 relative w-full max-w-lg overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20"></div>
        {currentMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out transform
               ${idx === messageIndex
                ? 'opacity-100 translate-y-0 scale-100 blur-none'
                : idx < messageIndex
                  ? 'opacity-0 -translate-y-full scale-90 blur-sm'
                  : 'opacity-0 translate-y-full scale-90 blur-sm'
              }`}
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-cyan-200 font-bold text-lg brand-font tracking-widest uppercase shadow-indigo-500/50 drop-shadow-sm">
              {msg}
            </p>
          </div>
        ))}
      </div>

      {/* Time-Warp Progress Bar */}
      <div className="w-full max-w-md relative group">
        {/* Glow under bar */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>

        {/* Track */}
        <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-700/50 relative">
          {/* Ticks */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10%_100%]"></div>

          {/* Fill */}
          <div
            className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400 relative transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_linear_infinite] w-full transform -skew-x-12"></div>

            {/* Leading Edge Spark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_10px_white]"></div>
          </div>
        </div>

        <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          <span>Initiating</span>
          <span>Quantum Bridge</span>
          <span>Complete</span>
        </div>
      </div>


    </div>
  );
};

export default ProcessingOverlay;