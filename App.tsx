import React, { useState, useEffect } from 'react';
import Camera from './components/Camera';
import TimeTravelPanel from './components/TimeTravelPanel';
import EditorPanel from './components/EditorPanel';
import AnalyzerPanel from './components/AnalyzerPanel';
import FilterPanel from './components/FilterPanel';
import Button from './components/Button';
import ZoomableImage from './components/ZoomableImage';
import ProcessingOverlay from './components/ProcessingOverlay';
import { AppMode, Era, FilterOption, HistoricalFigure, TextOverlayConfig } from './types';
import { FILTERS } from './constants';
import { generateTimeTravelImage, editImageWithPrompt, analyzeImage } from './services/geminiService';
import { applyFilterToImage, applyTextOverlay } from './services/imageService';
import { History, Clock, Wand2, Search, ArrowLeft, Download, RefreshCw, Palette, AlertTriangle, Sparkles, Aperture, Activity } from 'lucide-react';

const App: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [mode, setMode] = useState<AppMode>(AppMode.CAPTURE);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterOption>(FILTERS[0]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const hasApiKey = !!process.env.API_KEY;

  const handleCapture = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setGeneratedImage(null);
    setAnalysisResult(null);
    setErrorMsg(null);
    setMode(AppMode.TIME_TRAVEL); 
  };

  const reset = () => {
    setCurrentImage(null);
    setGeneratedImage(null);
    setAnalysisResult(null);
    setActiveFilter(FILTERS[0]);
    setErrorMsg(null);
    setMode(AppMode.CAPTURE);
  };

  const getProcessedImage = async (): Promise<string> => {
    const baseImage = generatedImage || currentImage;
    if (!baseImage) throw new Error("No image to process");
    if (activeFilter.id !== 'none') {
      return await applyFilterToImage(baseImage, activeFilter.css);
    }
    return baseImage;
  };

  const handleTimeTravel = async (era: Era, figure?: HistoricalFigure, textOverlay?: TextOverlayConfig) => {
    if (!currentImage) return;
    setIsProcessing(true);
    setErrorMsg(null);
    try {
      const inputImage = await getProcessedImage();
      let result = await generateTimeTravelImage(inputImage, era.prompt, figure?.prompt);
      
      // Apply text overlay if provided
      if (textOverlay) {
         result = await applyTextOverlay(result, textOverlay);
      }
      
      setGeneratedImage(result);
      setActiveFilter(FILTERS[0]); 
    } catch (error) {
      console.error(error);
      setErrorMsg("Time travel failed. The vortex was unstable. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleEdit = async (prompt: string) => {
    if (!currentImage) return;
    setIsProcessing(true);
    setErrorMsg(null);
    try {
      const inputImage = await getProcessedImage();
      const result = await editImageWithPrompt(inputImage, prompt);
      setGeneratedImage(result);
      setActiveFilter(FILTERS[0]); 
    } catch (error) {
       console.error(error);
      setErrorMsg("Magic edit failed. The spell fizzled.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAnalyze = async (prompt: string) => {
    if (!currentImage) return;
    setIsProcessing(true);
    setErrorMsg(null);
    try {
      const inputImage = await getProcessedImage();
      const result = await analyzeImage(inputImage, prompt);
      setAnalysisResult(result);
    } catch (error) {
       console.error(error);
      setErrorMsg("Analysis failed. Data corrupted.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = async () => {
    const imageToDownload = generatedImage || currentImage;
    if (imageToDownload) {
      const finalImage = await applyFilterToImage(imageToDownload, activeFilter.css);
      const link = document.createElement('a');
      link.href = finalImage;
      link.download = `chronosnap-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const NavTab = ({ active, onClick, icon: Icon, label, colorClass }: any) => (
    <button
      onClick={onClick}
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

  const ModeSelector = () => (
    <div className="flex p-2 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/10 gap-2 mb-8 shadow-inner ring-1 ring-black/50">
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

  if (!hasApiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-4 text-center">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.1)] backdrop-blur-xl max-w-md">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20 animate-pulse">
             <AlertTriangle className="text-red-500" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-red-400 mb-2 brand-font tracking-wide">SYSTEM LOCKED</h1>
          <p className="font-mono text-slate-400 text-sm">CRITICAL ERROR: API_KEY MISSING</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans pb-12">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={reset}>
            <div className="relative p-2">
               <div className="absolute inset-0 bg-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
               <div className="relative bg-slate-900 border border-indigo-500/30 p-2 rounded-lg group-hover:border-indigo-400/50 transition-colors shadow-lg">
                 <Aperture className="text-indigo-400 group-hover:rotate-180 transition-transform duration-700" size={24} />
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-widest brand-font text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform origin-left">
                CHRONO<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">SNAP</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-[0.3em] uppercase hidden sm:block group-hover:text-indigo-400 transition-colors">Temporal Imaging System</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {currentImage && (
               <Button variant="secondary" onClick={reset} size="sm" className="hidden md:flex border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all">
                 <ArrowLeft size={16} className="mr-2" /> New Session
               </Button>
            )}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-full border border-white/5 text-[10px] font-mono text-emerald-400">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
               SYSTEM ONLINE
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        
        {!currentImage ? (
          <div className="flex flex-col items-center justify-center min-h-[80vh] animate-in fade-in zoom-in duration-700">
            <div className="relative mb-12 group">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
               <h1 className="relative text-6xl md:text-8xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 brand-font tracking-tighter drop-shadow-2xl">
                 REWRITE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">HISTORY</span>
               </h1>
            </div>
            <p className="text-center text-slate-400 mb-12 max-w-lg text-lg leading-relaxed font-light">
              Step into the quantum timeline. Capture your moment and transport yourself to any era with <span className="text-indigo-400 font-bold glow-text">Gemini 2.5</span>.
            </p>
            <Camera onCapture={handleCapture} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image Preview */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 z-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900/50 border border-white/10 ring-1 ring-white/5 aspect-[3/4] md:aspect-auto min-h-[500px] group transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>
                
                {generatedImage ? (
                  <>
                    <img 
                      src={generatedImage} 
                      alt="" 
                      className="w-full h-auto object-cover opacity-0 pointer-events-none" 
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 z-10">
                      <ZoomableImage 
                        src={generatedImage} 
                        alt="Generated result" 
                        className="w-full h-full animate-in fade-in duration-700"
                        filter={activeFilter.css}
                      />
                    </div>
                    
                    <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <button 
                        onClick={() => { setGeneratedImage(null); setActiveFilter(FILTERS[0]); }}
                        className="p-3 bg-black/60 hover:bg-indigo-600 rounded-full text-white backdrop-blur-md transition-all border border-white/10 shadow-lg hover:rotate-180 duration-500"
                        title="Revert to original"
                      >
                        <RefreshCw size={18} />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full z-10">
                    <img 
                       src={currentImage} 
                       alt="" 
                       className="w-full h-auto object-cover opacity-0 pointer-events-none" 
                       aria-hidden="true"
                     />
                    <div className="absolute inset-0">
                      <ZoomableImage 
                        src={currentImage} 
                        alt="Original capture" 
                        className="w-full h-full" 
                        filter={activeFilter.css}
                      />
                    </div>
                  </div>
                )}
                
                {/* Overlay for Loading State */}
                {isProcessing && <ProcessingOverlay mode={mode} />}
              </div>

              {/* Error Message Display */}
              {errorMsg && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-2 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                   <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
                   <div className="text-sm text-red-200">{errorMsg}</div>
                </div>
              )}

              {/* Save Button */}
              {(generatedImage || (currentImage && activeFilter.id !== 'none')) && (
                <Button onClick={downloadImage} icon={<Download size={20} />} className="w-full py-4 text-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-900/50 border border-indigo-400/20 transform hover:-translate-y-1">
                  Save Quantum Snapshot
                </Button>
              )}
            </div>

            {/* Right Column: Controls */}
            <div className="lg:col-span-7 bg-slate-950/40 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden ring-1 ring-white/5">
               {/* Decorative background gradients */}
               <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
               <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
               
              <div className="relative z-10">
                <ModeSelector />
                
                <div className="min-h-[400px]">
                  {mode === AppMode.TIME_TRAVEL && (
                    <TimeTravelPanel onGenerate={handleTimeTravel} isProcessing={isProcessing} />
                  )}
                  {mode === AppMode.MAGIC_EDIT && (
                    <EditorPanel onEdit={handleEdit} isProcessing={isProcessing} />
                  )}
                  {mode === AppMode.FILTERS && (
                    <FilterPanel 
                      activeFilterId={activeFilter.id} 
                      onSelectFilter={setActiveFilter} 
                      previewImage={generatedImage || currentImage} 
                    />
                  )}
                  {mode === AppMode.ANALYZE && (
                    <AnalyzerPanel onAnalyze={handleAnalyze} isProcessing={isProcessing} result={analysisResult || undefined} />
                  )}
                </div>
              </div>
            </div>
            
          </div>
        )}
      </main>
    </div>
  );
};

export default App;