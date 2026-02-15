import React, { useState, useRef, useEffect } from 'react';
import { Era, HistoricalFigure } from '../types';
import { ERAS, HISTORICAL_FIGURES, SURPRISE_PROMPTS } from '../constants';
import Button from './Button';
import { Sparkles, Check, Search, ChevronDown, User, Dices } from 'lucide-react';

interface TimeTravelPanelProps {
  onGenerate: (era: Era, figure?: HistoricalFigure) => void;
  isProcessing: boolean;
}

const TimeTravelPanel: React.FC<TimeTravelPanelProps> = ({ onGenerate, isProcessing }) => {
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePresetSelect = (era: Era) => {
    setSelectedEra(era);
    setCustomPrompt('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomPrompt(e.target.value);
    if (e.target.value) {
      setSelectedEra(null);
    }
  };

  const handleSurpriseMe = () => {
    const random = SURPRISE_PROMPTS[Math.floor(Math.random() * SURPRISE_PROMPTS.length)];
    setCustomPrompt(random);
    setSelectedEra(null);
  };

  const handleGenerate = () => {
    if (customPrompt.trim()) {
      onGenerate({
        id: 'custom-era',
        name: 'Custom Timeline',
        description: 'User generated era',
        prompt: customPrompt,
        icon: '✨'
      }, selectedFigure || undefined);
    } else if (selectedEra) {
      onGenerate(selectedEra, selectedFigure || undefined);
    }
  };

  const toggleDropdown = () => {
    if (!isProcessing) {
      if (!isDropdownOpen) setSearchQuery('');
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const filteredFigures = HISTORICAL_FIGURES.filter(figure => 
    figure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    figure.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isReady = !!selectedEra || !!customPrompt.trim();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-indigo-400 tracking-wide brand-font">
          SELECT TIMELINE
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto opacity-50"></div>
        <p className="text-slate-400 text-xs uppercase tracking-widest pt-2">Choose your destination coordinates</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar pb-2">
        {ERAS.map((era) => (
          <button
            key={era.id}
            onClick={() => handlePresetSelect(era)}
            disabled={isProcessing}
            className={`
              relative p-4 rounded-xl text-left group transition-all duration-300 overflow-hidden flex flex-col gap-3
              ${selectedEra?.id === era.id 
                ? 'bg-indigo-900/40 border-2 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)] ring-1 ring-indigo-400/50' 
                : 'bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/60'
              }
            `}
          >
            {selectedEra?.id === era.id && (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
            )}
            
            <div className="flex justify-between items-start z-10">
              <span className="text-3xl filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">{era.icon}</span>
              {selectedEra?.id === era.id && (
                <div className="bg-indigo-500 text-white rounded-full p-1 shadow-lg animate-in zoom-in duration-300">
                  <Check size={14} strokeWidth={3} />
                </div>
              )}
            </div>

            <div className="z-10">
              <h3 className={`font-bold text-sm ${selectedEra?.id === era.id ? 'text-indigo-200' : 'text-slate-200 group-hover:text-indigo-200'}`}>
                {era.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2 group-hover:text-slate-400">
                {era.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Historical Figure Selector */}
      <div className="space-y-3 relative z-20" ref={dropdownRef}>
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
          Add Historical Figure (Optional)
        </label>
        
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className={`w-full flex items-center justify-between bg-slate-900/60 border ${isDropdownOpen ? 'border-indigo-500 ring-1 ring-indigo-500/50' : 'border-white/10 hover:border-white/20'} rounded-xl px-4 py-3 text-sm transition-all text-slate-300 hover:text-white`}
          >
             <div className="flex items-center gap-3">
               {selectedFigure ? (
                 <>
                   <span className="text-lg">{selectedFigure.icon}</span>
                   <span className="font-medium text-indigo-300">{selectedFigure.name}</span>
                 </>
               ) : (
                 <>
                   <User size={16} className="text-slate-500" />
                   <span className="text-slate-400">Select a figure...</span>
                 </>
               )}
             </div>
             {selectedFigure ? (
               <div 
                 onClick={(e) => { e.stopPropagation(); setSelectedFigure(null); }}
                 className="p-1 hover:bg-white/10 rounded-full"
               >
                 <span className="text-xs text-slate-500">Clear</span>
               </div>
             ) : (
               <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
             )}
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-h-60 overflow-hidden flex flex-col z-50 animate-in fade-in zoom-in-95 duration-200">
              <div className="p-2 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search figures..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                    autoFocus
                  />
                </div>
              </div>
              <div className="overflow-y-auto p-1 custom-scrollbar">
                {filteredFigures.length > 0 ? (
                  filteredFigures.map(figure => (
                    <button
                      key={figure.id}
                      onClick={() => {
                        setSelectedFigure(figure);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg transition-colors text-left"
                    >
                      <span className="text-xl w-8 text-center">{figure.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-slate-200">{figure.name}</div>
                        <div className="text-[10px] text-slate-500">{figure.description}</div>
                      </div>
                      {selectedFigure?.id === figure.id && <Check size={14} className="ml-auto text-indigo-400" />}
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-slate-500">No figures found</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 py-2">
        <div className="h-px bg-white/10 flex-1"></div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Or Custom Paradox</span>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <div className="space-y-3">
        <div className="relative group">
          <textarea
            value={customPrompt}
            onChange={handleCustomChange}
            placeholder="Describe a specific time, place, or alternate reality..."
            className={`w-full h-24 bg-black/20 border rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none resize-none transition-all
              ${customPrompt ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : 'border-white/10 focus:border-indigo-500/50'}
            `}
            disabled={isProcessing}
          />
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleSurpriseMe}
            className="absolute bottom-2 right-2 text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
            icon={<Dices size={14} />}
            type="button"
          >
            Surprise Me
          </Button>
        </div>
      </div>

      <div className="pt-2">
        <Button 
          onClick={handleGenerate} 
          disabled={!isReady || isProcessing}
          isLoading={isProcessing}
          className={`w-full py-4 text-lg font-bold tracking-wide transition-all duration-500
            ${isReady 
              ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-[0_0_30px_rgba(99,102,241,0.4)] border border-white/10' 
              : 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed'
            }
          `}
          icon={<Sparkles size={20} fill={isReady ? "currentColor" : "none"} />}
        >
          {isProcessing ? 'Opening Portal...' : 'Initiate Time Jump'}
        </Button>
      </div>
    </div>
  );
};

export default TimeTravelPanel;