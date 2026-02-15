import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  filter?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className = '', filter = 'none' }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (scale > 1 || e.ctrlKey) {
      e.preventDefault();
      e.stopPropagation();
      const intensity = 0.001;
      const newScale = Math.min(Math.max(1, scale + e.deltaY * -intensity * 5), 5);
      setScale(newScale);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
    }
  };

  const zoomIn = () => setScale(s => Math.min(5, s + 0.5));
  const zoomOut = () => {
    setScale(s => {
      const next = Math.max(1, s - 0.5);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };
  const reset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden touch-none group ${className}`}
      onWheel={handleWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100 ease-linear origin-center"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          filter: filter,
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
        }}
        draggable={false}
        onClick={scale === 1 ? zoomIn : undefined}
      />

      {/* Controls Overlay */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md rounded-full px-4 py-2 border border-slate-700 transition-opacity duration-300 ${scale > 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <button onClick={zoomOut} className="p-1 hover:text-indigo-400 transition-colors" title="Zoom Out" aria-label="Zoom out">
          <ZoomOut size={16} />
        </button>
        <span className="text-xs font-mono w-12 text-center text-slate-300">{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn} className="p-1 hover:text-indigo-400 transition-colors" title="Zoom In" aria-label="Zoom in">
          <ZoomIn size={16} />
        </button>
        <div className="w-px h-4 bg-slate-600 mx-1"></div>
        <button onClick={reset} className="p-1 hover:text-indigo-400 transition-colors" title="Reset" aria-label="Reset zoom">
          <Maximize size={16} />
        </button>
      </div>
    </div>
  );
};

export default ZoomableImage;
