import { FilterOption } from "../types";

export const FILTERS: FilterOption[] = [
  { id: 'none', name: 'Original', css: 'none' },
  { id: 'sepia', name: 'Sepia', css: 'sepia(1)' },
  { id: 'grayscale', name: 'B&W', css: 'grayscale(1)' },
  { id: 'vintage', name: 'Vintage', css: 'sepia(0.5) contrast(1.2) brightness(0.9)' },
  { id: 'cool', name: 'Ice Cold', css: 'hue-rotate(180deg) sepia(0.2) contrast(1.1)' },
  { id: 'warm', name: 'Warmth', css: 'sepia(0.4) saturate(1.5) contrast(1.1)' },
  { id: 'invert', name: 'Negative', css: 'invert(1)' },
  { id: 'dreamy', name: 'Dreamy', css: 'blur(0.5px) brightness(1.2) contrast(0.8) saturate(1.2)' },
  { id: 'cyber', name: 'Cyber', css: 'contrast(1.2) saturate(2) hue-rotate(20deg)' },
];