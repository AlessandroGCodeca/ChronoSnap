import React from 'react';
import NavTab from './NavTab';
import { AppMode } from '../types';
import { Clock, Wand2, Palette, Search } from 'lucide-react';

interface ModeSelectorProps {
    mode: AppMode;
    setMode: (mode: AppMode) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => (
    <div className="flex p-2 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/10 gap-2 mb-8 shadow-inner ring-1 ring-black/50" role="tablist">
        <NavTab
            active={mode === AppMode.TIME_TRAVEL}
            onClick={() => setMode(AppMode.TIME_TRAVEL)}
            icon={Clock}
            label="Time Travel"
            colorClass="shadow-indigo-500/20 text-indigo-100 border-indigo-500/20"
        />
        <NavTab
            active={mode === AppMode.MAGIC_EDIT}
            onClick={() => setMode(AppMode.MAGIC_EDIT)}
            icon={Wand2}
            label="Magic Edit"
            colorClass="shadow-pink-500/20 text-pink-100 border-pink-500/20"
        />
        <NavTab
            active={mode === AppMode.FILTERS}
            onClick={() => setMode(AppMode.FILTERS)}
            icon={Palette}
            label="Studio"
            colorClass="shadow-fuchsia-500/20 text-fuchsia-100 border-fuchsia-500/20"
        />
        <NavTab
            active={mode === AppMode.ANALYZE}
            onClick={() => setMode(AppMode.ANALYZE)}
            icon={Search}
            label="Analyze"
            colorClass="shadow-emerald-500/20 text-emerald-100 border-emerald-500/20"
        />
    </div>
);

export default ModeSelector;
