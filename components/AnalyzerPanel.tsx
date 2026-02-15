import React, { useState } from 'react';
import Button from './Button';
import { ScanSearch, Sparkles } from 'lucide-react';

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
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
          Visual Analysis
        </h2>
        <p className="text-slate-400 text-sm">Decode the visual data of your timeline.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 p-1 bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
         <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask about the image..."
            className="flex-1 bg-transparent border-none rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:ring-0 focus:outline-none"
            disabled={isProcessing}
          />
          <Button 
            type="submit" 
            isLoading={isProcessing}
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-6"
            icon={<ScanSearch size={18} />}
          >
            Analyze
          </Button>
      </form>

      {result && (
        <div className="relative bg-black/40 border border-emerald-500/30 rounded-xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="absolute top-0 right-0 p-4 opacity-20">
             <Sparkles className="text-emerald-500" size={40} />
          </div>
          <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Analysis Report
          </h3>
          <div className="prose prose-invert max-w-none text-sm leading-7 text-slate-300 font-light">
             <p>{result}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyzerPanel;
