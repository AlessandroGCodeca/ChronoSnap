import React, { useRef, useState, useCallback, useEffect } from 'react';
import Button from './Button';
import { Camera as CameraIcon, Upload, RotateCcw, ImagePlus, Aperture, Scan, Zap } from 'lucide-react';

interface CameraProps {
  onCapture: (imageSrc: string) => void;
}

const Camera: React.FC<CameraProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [flash, setFlash] = useState(false);

  const startCamera = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreamActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Could not access camera. Please check permissions.");
    }
  };

  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsStreamActive(false);
    }
  }, []);

  const takePhoto = () => {
    setFlash(true);
    setTimeout(() => {
        if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(video, 0, 0);
            const imageSrc = canvas.toDataURL('image/jpeg');
            stopCamera();
            onCapture(imageSrc);
        }
        }
        setFlash(false);
    }, 150);
  };

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onCapture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
    // Reset input value to allow selecting the same file again
    if (e.target) {
      e.target.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4 space-y-8 animate-in zoom-in duration-500">
      <div 
        className={`relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center group transition-all duration-500 
        ${isDragging ? 'border-4 border-indigo-500 bg-slate-800' : 'bg-black border border-slate-800 ring-1 ring-white/10'}
        ${isStreamActive ? 'shadow-[0_0_60px_rgba(99,102,241,0.15)] ring-indigo-500/30' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Flash Overlay */}
        <div className={`absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-150 ${flash ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Viewfinder Overlay Elements */}
        {isStreamActive && (
          <div className="absolute inset-0 pointer-events-none z-10">
             {/* Scanner Line */}
             <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-scanline opacity-30"></div>
             
             {/* Corners */}
             <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-indigo-400/60 rounded-tl-xl drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
             <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-indigo-400/60 rounded-tr-xl drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
             <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-indigo-400/60 rounded-bl-xl drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
             <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-indigo-400/60 rounded-br-xl drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
             
             {/* Center Reticle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
             </div>

             {/* UI Data Elements */}
             <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-white tracking-widest uppercase">Live Feed</span>
             </div>

             <div className="absolute bottom-8 right-8 font-mono text-[10px] text-indigo-300/80 tracking-widest flex flex-col items-end gap-1">
                 <span className="flex items-center gap-1"><Zap size={10} /> SENSORS ACTIVE</span>
                 <span>ISO 800 • F/2.4 • 1/60</span>
             </div>
          </div>
        )}

        {/* Drag Overlay */}
        {isDragging && (
             <div className="absolute inset-0 bg-indigo-600/20 backdrop-blur-sm z-30 flex flex-col items-center justify-center animate-in fade-in pointer-events-none">
                <ImagePlus size={80} className="text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                <p className="text-3xl font-bold text-white drop-shadow-md tracking-tight">Drop Signal Data</p>
             </div>
        )}

        {!isStreamActive && !isDragging && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 space-y-6 p-6 text-center pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 shadow-xl">
                  <Scan size={40} className="text-slate-400" />
              </div>
            </div>
            <div className="space-y-2">
                <p className="font-bold text-lg text-slate-300">No Signal Detected</p>
                <p className="font-light text-sm tracking-wide text-slate-500">Initialize optical sensors or upload visual data.</p>
            </div>
          </div>
        )}
        
        {/* Video Element */}
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
          className={`w-full h-full object-cover transform -scale-x-100 transition-opacity duration-500 ${isStreamActive ? 'opacity-100' : 'opacity-0'}`} 
        />
        
        <canvas ref={canvasRef} className="hidden" />

        {/* Error Message */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-20 p-8 text-center backdrop-blur-md">
            <p className="text-red-400 text-lg font-medium border border-red-500/30 p-4 rounded-xl bg-red-950/20">{error}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-6 justify-center w-full">
        {!isStreamActive ? (
          <>
            <Button onClick={startCamera} icon={<Aperture size={20} />} className="px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-indigo-400/20">
              Initialize Camera
            </Button>
            
            <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                onChange={handleFileUpload} 
                className="hidden" 
            />
            <Button 
                variant="secondary" 
                onClick={handleTriggerUpload}
                icon={<Upload size={20} />} 
                className="px-8 py-4 text-lg border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
                Upload Image
            </Button>
          </>
        ) : (
          <>
            <button 
                onClick={takePhoto} 
                className="group relative w-24 h-24 rounded-full border-4 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center focus:outline-none transition-all hover:scale-105 hover:border-white/40"
            >
                <div className="absolute inset-0 rounded-full border border-white/10 scale-125 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="w-16 h-16 bg-red-500 rounded-full group-hover:bg-red-400 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.4)]"></div>
            </button>
            <div className="absolute bottom-8 right-8 sm:static sm:flex items-center">
                 <Button onClick={stopCamera} variant="ghost" icon={<RotateCcw size={20} />} className="text-white hover:bg-white/10">
                  Abort
                </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Camera;