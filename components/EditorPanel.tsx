import React, { useState } from 'react';
import Button from './Button';
import { Wand2, Zap, Sparkles } from 'lucide-react';

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
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
          Magic Editor
        </h2>
        <p className="text-slate-400 text-sm">Modify reality with generative AI.</p>
      </div>

      {/* Quick Enhancements */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleQuickAction("Reduce noise, remove grain, sharpen details, and improve overall image clarity. High quality, photorealistic.")}
          disabled={isProcessing}
          className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-yellow-500/30 transition-all"
        >
          <div className="p-2 rounded-full bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
             <Sparkles size={20} />
          </div>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white">Enhance Clarity</span>
        </button>
        <button
          type="button"
          onClick={() => handleQuickAction("Color correct the image, balance exposure, enhance saturation and vibrancy for a professional look.")}
          disabled={isProcessing}
          className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all"
        >
          <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
            <Zap size={20} />
          </div>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white">Auto Color</span>
        </button>
      </div>

      <div className="flex items-center gap-4 py-2">
        <div className="h-px bg-white/10 flex-1"></div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Or Custom Prompt</span>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your edit (e.g., 'Add neon sunglasses', 'Turn background to Mars', 'Make it a watercolor painting')..."
            className="w-full h-32 bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 focus:outline-none resize-none transition-all backdrop-blur-sm"
            disabled={isProcessing}
          />
          <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Wand2 size={100} className="text-pink-500/5 rotate-12" />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            type="submit" 
            disabled={!prompt.trim() || isProcessing}
            isLoading={isProcessing}
            variant="primary"
            icon={<Wand2 size={18} />}
            className={`w-full sm:w-auto min-w-[200px] px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 ${prompt.trim() ? 'shadow-lg shadow-pink-500/20' : ''}`}
          >
            {isProcessing ? 'Working Magic...' : 'Apply Magic'}
          </Button>
        </div>
      </form>
      
      <div className="bg-slate-900/30 p-4 rounded-xl border border-white/5">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Try these:</h4>
        <div className="flex flex-wrap gap-2">
          {["Turn into a cyborg", "Oil painting style", "Add a crown", "Cyberpunk background"].map(example => (
            <button
              key={example}
              type="button"
              onClick={() => setPrompt(example)}
              className="text-xs bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/5 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
