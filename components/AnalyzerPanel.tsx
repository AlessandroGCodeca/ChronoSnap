import React, { useState } from 'react';
import Button from './Button';
import { ScanSearch, Sparkles, Terminal, Activity } from 'lucide-react';

interface AnalyzerPanelProps {
  onAnalyze: (prompt: string) => void;
  isProcessing: boolean;
  result?: string;
}

const AnalyzerPanel: React.FC<AnalyzerPanelProps> = ({ onAnalyze, isProcessing, result }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(prompt);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 brand-font tracking-wide">
          VISUAL DECODER
        </h2>
        <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto opacity-70"></div>
        <p className="text-slate-400 text-xs uppercase tracking-widest pt-2">Analyze timeline data points</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 p-1.5 bg-slate-900/60 rounded-xl border border-slate-700/50 backdrop-blur-md shadow-lg">
         <div className="relative flex-1">
            <Terminal size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500/50" />
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Query visual database (e.g., 'Describe the mood')..."
                className="w-full bg-black/20 border-none rounded-lg pl-9 pr-4 py-3 text-white placeholder-slate-500 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none font-mono text-sm"
                disabled={isProcessing}
            />
         </div>
          <Button 
            type="submit" 
            isLoading={isProcessing}
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            icon={<ScanSearch size={18} />}
          >
            Scan
          </Button>
      </form>

      {result && (
        <div className="relative bg-black/60 border border-emerald-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)] animate-in fade-in slide-in-from-bottom-4 duration-500 group">
          {/* Header Bar */}
          <div className="bg-emerald-950/30 border-b border-emerald-500/20 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
                 <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Analysis Log</span>
              </div>
              <Activity size={14} className="text-emerald-500/50" />
          </div>

          <div className="p-6 relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles className="text-emerald-500" size={80} />
            </div>
            
            <div className="prose prose-invert max-w-none text-sm leading-7 text-emerald-100/90 font-mono">
               <p className="whitespace-pre-wrap">{result}</p>
            </div>
            
            {/* Blinking cursor effect at end */}
            <div className="mt-4 w-2 h-4 bg-emerald-500/50 animate-pulse"></div>
          </div>
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
        </div>
      )}
    </div>
  );
};

export default AnalyzerPanel;