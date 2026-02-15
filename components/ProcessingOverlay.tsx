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
      "Tearing Space-Time Fabric...",
      "Calibrating Flux Capacitor...",
      "Locating Temporal Coordinates...",
      "Rendering Historical Context...",
      "Stabilizing Quantum Fields...",
      "Finalizing Timeline Merge..."
    ],
    [AppMode.MAGIC_EDIT]: [
      "Deconstructing Reality...",
      "Injecting Creative Particles...",
      "Weaving Magic Spells...",
      "Polishing Pixels...",
      "Finalizing Masterpiece..."
    ],
    [AppMode.ANALYZE]: [
      "Scanning Neural Pathways...",
      "Deciphering Visual Data...",
      "Consulting Archives...",
      "Synthesizing Insights...",
      "Generating Report..."
    ],
    [AppMode.CAPTURE]: [],
    [AppMode.FILTERS]: []
  };

  const currentMessages = messages[mode] || messages[AppMode.TIME_TRAVEL];

  useEffect(() => {
    // Simulate progress: Fast start, slows down
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return prev;
        const increment = prev < 30 ? 2 : prev < 60 ? 1 : 0.2;
        return Math.min(prev + Math.random() * increment * 2, 95);
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle messages
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % currentMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentMessages]);

  return (
    <div className="absolute inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 z-50 overflow-hidden animate-in fade-in duration-500">
      
      {/* Background Star Warp Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent animate-pulse"></div>
      </div>

      {/* Vortex Container */}
      <div className="relative w-64 h-64 mb-10 flex items-center justify-center">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-[60px] animate-pulse"></div>

        {/* Spinning Rings - Layer 1 (Slow, Large) */}
        <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-spin [animation-duration:10s]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-400/50 rounded-full blur-sm"></div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400/50 rounded-full blur-sm"></div>
        </div>

        {/* Spinning Rings - Layer 2 (Medium, Reverse) */}
        <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-purple-500/50 border-b-cyan-500/50 animate-spin [animation-duration:3s] [animation-direction:reverse] shadow-[0_0_30px_rgba(168,85,247,0.2)]"></div>

        {/* Spinning Rings - Layer 3 (Fast, Particles) */}
        <div className="absolute inset-8 rounded-full border border-white/10 animate-spin [animation-duration:5s]">
           <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        </div>
        
        {/* Swirling Vortex Gradient */}
        <div className="absolute inset-10 rounded-full overflow-hidden animate-spin [animation-duration:20s]">
           <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent,rgba(99,102,241,0.5),transparent)] opacity-50"></div>
        </div>

        {/* Inner Portal Core */}
        <div className="absolute inset-16 rounded-full bg-black flex items-center justify-center shadow-[inset_0_0_40px_rgba(99,102,241,0.5)] border border-indigo-500/30">
           <div className="relative w-full h-full rounded-full overflow-hidden">
             {/* Abstract Core Animation */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.8),_transparent_70%)] animate-pulse"></div>
             <div className="absolute inset-0 opacity-50 bg-[conic-gradient(from_180deg,transparent,white,transparent)] animate-spin [animation-duration:2s]"></div>
           </div>
           
           {/* Percentage Text */}
           <div className="absolute inset-0 flex items-center justify-center z-10">
             <span className="font-mono font-black text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] tracking-tighter">
               {Math.round(progress)}<span className="text-sm align-top opacity-70">%</span>
             </span>
           </div>
        </div>
      </div>

      {/* Message Scroller */}
      <div className="h-16 flex flex-col items-center justify-center mb-6 relative w-full max-w-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
        {currentMessages.map((msg, idx) => (
           <p 
             key={idx} 
             className={`absolute w-full text-center transition-all duration-700 ease-in-out font-bold text-lg brand-font tracking-widest uppercase
               ${idx === messageIndex 
                 ? 'opacity-100 transform translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300 blur-none scale-100' 
                 : 'opacity-0 transform translate-y-8 blur-sm scale-95'
               }`}
           >
             {msg}
           </p>
        ))}
      </div>

      {/* Time-Warp Progress Bar */}
      <div className="w-full max-w-sm h-2 bg-slate-900/50 rounded-full overflow-hidden border border-slate-700/50 relative shadow-inner">
         {/* Background Grid inside bar */}
         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_100%]"></div>
         
         {/* Moving Fill */}
        <div 
          className="h-full relative overflow-hidden transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]"></div>
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px] shadow-[0_0_10px_white]"></div>
        </div>
      </div>
      
      <p className="mt-4 text-xs text-slate-500 font-mono animate-pulse">
        QUANTUM CALCULATIONS IN PROGRESS...
      </p>

      {/* Global Animation Styles for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </div>
  );
};

export default ProcessingOverlay;