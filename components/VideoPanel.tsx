import React, { useState, useEffect } from 'react';
import { Era } from '../types';
import { ERAS } from '../constants';
import Button from './Button';
import { Film, MonitorPlay, Smartphone, Lock, ExternalLink, Zap } from 'lucide-react';

interface VideoPanelProps {
  onGenerate: (era: Era, aspectRatio: '16:9' | '9:16') => void;
  isProcessing: boolean;
}

const VideoPanel: React.FC<VideoPanelProps> = ({ onGenerate, isProcessing }) => {
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('9:16');
  const [hasApiKey, setHasApiKey] = useState<boolean>(false);
  const [checkingKey, setCheckingKey] = useState<boolean>(true);

  useEffect(() => {
    checkKeyStatus();
  }, []);

  const checkKeyStatus = async () => {
    try {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      } else {
        // Fallback for dev environments without the injection
        setHasApiKey(true); 
      }
    } catch (e) {
      console.error("Error checking key status", e);
    } finally {
      setCheckingKey(false);
    }
  };

  const handleUnlock = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
      // Assume success after interaction to mitigate race condition
      setHasApiKey(true);
    }
  };

  if (checkingKey) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div></div>;
  }

  if (!hasApiKey) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-6 text-center border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-sm">
        <div className="p-4 bg-slate-800 rounded-full text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
          <Lock size={32} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Unlock Video Generation</h2>
          <p className="text-slate-400 max-w-md">
            Veo video generation requires a paid Google Cloud API key. 
            Please select a project with billing enabled to proceed.
          </p>
        </div>
        <Button onClick={handleUnlock} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
          Select Paid API Key
        </Button>
        <a 
          href="https://ai.google.dev/gemini-api/docs/billing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          View Billing Documentation <ExternalLink size={12} />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
            Veo Motion
          </h2>
          <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20">PREVIEW</span>
        </div>
        <p className="text-slate-400 text-sm">Generate cinematic videos with Veo 3.1.</p>
      </div>

      {/* Aspect Ratio Selector */}
      <div className="flex justify-center gap-4 bg-black/20 p-1.5 rounded-xl border border-white/5 w-fit mx-auto backdrop-blur-md">
        <button
          onClick={() => setAspectRatio('9:16')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${aspectRatio === '9:16' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
        >
          <Smartphone size={16} /> Portrait (9:16)
        </button>
        <button
          onClick={() => setAspectRatio('16:9')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${aspectRatio === '16:9' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
        >
          <MonitorPlay size={16} /> Landscape (16:9)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ERAS.map((era) => (
          <button
            key={era.id}
            onClick={() => setSelectedEra(era)}
            disabled={isProcessing}
            className={`
              relative p-4 rounded-xl border text-left group transition-all duration-300 overflow-hidden
              ${selectedEra?.id === era.id 
                ? 'bg-slate-800 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]' 
                : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-800/60'
              }
            `}
          >
            {selectedEra?.id === era.id && (
               <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50" />
            )}
            <div className="relative z-10 flex items-start justify-between mb-2">
              <span className="text-3xl filter drop-shadow-md">{era.icon}</span>
               {selectedEra?.id === era.id && (
                <Film className="text-red-500 animate-pulse" size={18} />
              )}
            </div>
            <h3 className={`relative z-10 font-bold text-sm ${selectedEra?.id === era.id ? 'text-red-400' : 'text-slate-200 group-hover:text-white'}`}>
              {era.name}
            </h3>
          </button>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button 
          onClick={() => selectedEra && onGenerate(selectedEra, aspectRatio)} 
          disabled={!selectedEra || isProcessing}
          isLoading={isProcessing}
          className={`w-full sm:w-auto px-12 py-4 text-lg font-bold tracking-wide transition-all duration-300 ${!selectedEra ? 'opacity-50 grayscale' : 'shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)]'}`}
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #c2410c 100%)'
          }}
          icon={<Zap size={20} fill="currentColor" />}
        >
          {isProcessing ? 'Generating...' : 'Generate Video'}
        </Button>
      </div>
    </div>
  );
};

export default VideoPanel;
