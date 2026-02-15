export enum AppMode {
  CAPTURE = 'CAPTURE',
  TIME_TRAVEL = 'TIME_TRAVEL',
  MAGIC_EDIT = 'MAGIC_EDIT',
  FILTERS = 'FILTERS',
  ANALYZE = 'ANALYZE',
}

export interface Era {
  id: string;
  name: string;
  description: string;
  prompt: string;
  icon: string; // Emoji or icon name
}

export interface HistoricalFigure {
  id: string;
  name: string;
  description: string;
  prompt: string;
  icon: string;
}

export interface HistoryItem {
  id: string;
  originalImage: string;
  resultImage?: string;
  resultText?: string;
  type: 'generation' | 'analysis';
  timestamp: number;
  description: string;
}

export interface AnalysisResult {
  text: string;
}

export interface FilterOption {
  id: string;
  name: string;
  css: string;
}
