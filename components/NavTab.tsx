import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavTabProps {
    active: boolean;
    onClick: () => void;
    icon: LucideIcon;
    label: string;
    colorClass: string;
}

const NavTab: React.FC<NavTabProps> = ({ active, onClick, icon: Icon, label, colorClass }) => (
    <button
        onClick={onClick}
        role="tab"
        aria-selected={active}
        className={`
      relative flex-1 py-4 px-2 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-xl
      ${active
                ? `bg-slate-800 text-white shadow-lg ${colorClass} bg-opacity-90 backdrop-blur-md ring-1 ring-white/10 scale-[1.02]`
                : 'text-slate-500 hover:text-white hover:bg-white/5'
            }
    `}
    >
        <Icon size={16} className={active ? 'animate-pulse' : ''} />
        <span className="hidden sm:inline">{label}</span>
        {active && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/50 rounded-full blur-[2px]"></span>
        )}
    </button>
);

export default NavTab;
