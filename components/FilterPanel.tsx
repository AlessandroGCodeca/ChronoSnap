import React from 'react';
import { FILTERS } from '../constants';
import { FilterOption } from '../types';

interface FilterPanelProps {
  activeFilterId: string;
  onSelectFilter: (filter: FilterOption) => void;
  previewImage: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ activeFilterId, onSelectFilter, previewImage }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
          Atmospheric Filters
        </h2>
        <p className="text-slate-400 text-sm">Apply color grading to your timeline.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onSelectFilter(filter)}
            className={`
              relative group flex flex-col items-center gap-3 p-3 rounded-2xl transition-all duration-300
              ${activeFilterId === filter.id 
                ? 'bg-slate-800 ring-1 ring-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.2)] scale-105' 
                : 'bg-slate-900/40 hover:bg-slate-800/60 border border-white/5'
              }
            `}
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black shadow-inner">
              <img 
                src={previewImage} 
                alt={filter.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: filter.css }}
                loading="lazy"
              />
              {activeFilterId === filter.id && (
                <div className="absolute inset-0 ring-2 ring-inset ring-fuchsia-500/50 rounded-xl"></div>
              )}
            </div>
            <span className={`text-xs font-bold tracking-wide uppercase ${activeFilterId === filter.id ? 'text-fuchsia-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
              {filter.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
