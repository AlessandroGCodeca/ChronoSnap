import React, { useState } from 'react';
import Button from './Button';
import { Wand2, Zap, Sparkles, MoveRight } from 'lucide-react';

interface EditorPanelProps {
  onEdit: (prompt: string) => void;
  isProcessing: boolean;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ onEdit, isProcessing }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onEdit(prompt);
    }
  };

  const handleQuickAction = (actionPrompt: string) => {
    onEdit(actionPrompt);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 brand-font tracking-wide">
          MAGIC EDITOR
        </h2>
        <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto opacity-70"></div>
        <p className="text-slate-400 text-xs uppercase tracking-widest pt-2">Modify reality with generative AI</p>
      </div>

      {/* Quick Enhancements */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleQuickAction("Reduce noise, remove grain, sharpen details, and improve overall image clarity. High quality, photorealistic.")}
          disabled={isProcessing}
          className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-yellow-500/30 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.2)]">
             <Sparkles size={24} />
          </div>
          <div className="text-center z-10">
             <span className="text-sm font-bold text-slate-200 group-hover:text-white block">Enhance Clarity</span>
             <span className="text-[10px] text-slate-500 group-hover:text-slate-400">Upscale & Denoise</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleQuickAction("Color correct the image, balance exposure, enhance saturation and vibrancy for a professional look.")}
          disabled={isProcessing}
          className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Zap size={24} />
          </div>
          <div className="text-center z-10">
             <span className="text-sm font-bold text-slate-200 group-hover:text-white block">Auto Color</span>
             <span className="text-[10px] text-slate-500 group-hover:text-slate-400">Correct & Vibrance</span>
          </div>
        </button>
      </div>

      <div className="flex items-center gap-4 py-2 opacity-50">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Or Custom Prompt</span>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your edit (e.g., 'Add neon sunglasses', 'Turn background to Mars', 'Make it a watercolor painting')..."
            className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-5 text-white placeholder-slate-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 focus:outline-none resize-none transition-all backdrop-blur-sm font-mono text-sm shadow-inner"
            disabled={isProcessing}
          />
          <div className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <Wand2 size={80} className="text-pink-500/5 rotate-12" />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            type="submit" 
            disabled={!prompt.trim() || isProcessing}
            isLoading={isProcessing}
            variant="primary"
            icon={<Wand2 size={18} />}
            className={`w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 border border-white/10 ${prompt.trim() ? 'shadow-[0_0_30px_rgba(236,72,153,0.3)]' : ''}`}
          >
            {isProcessing ? 'Working Magic...' : 'Apply Magic'}
          </Button>
        </div>
      </form>
      
      <div className="bg-slate-900/30 p-5 rounded-2xl border border-white/5">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Sparkles size={12} className="text-pink-400" />
            Suggested Transformations
        </h4>
        <div className="flex flex-wrap gap-2">
          {["Turn into a cyborg", "Oil painting style", "Add a crown", "Cyberpunk background", "Remove background", "Make it sketchy"].map(example => (
            <button
              key={example}
              type="button"
              onClick={() => setPrompt(example)}
              className="group flex items-center gap-2 text-xs bg-black/40 hover:bg-slate-800 text-slate-400 hover:text-white px-3 py-2 rounded-lg border border-white/5 hover:border-pink-500/30 transition-all duration-300"
            >
              {example}
              <MoveRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;