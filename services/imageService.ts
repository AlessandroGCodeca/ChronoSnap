import { TextOverlayConfig } from "../types";

/**
 * Applies a CSS filter string to a base64 image using HTML5 Canvas.
 * Returns a Promise that resolves to the new base64 image string.
 */
export const applyFilterToImage = (imageSrc: string, filterCss: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!filterCss || filterCss === 'none') {
      resolve(imageSrc);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }

        // Apply filter
        ctx.filter = filterCss;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Return new data URL
        resolve(canvas.toDataURL('image/jpeg', 0.95));
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = (err) => reject(err);
    img.src = imageSrc;
  });
};

/**
 * Renders text overlay onto a base64 image.
 */
export const applyTextOverlay = (imageSrc: string, config: TextOverlayConfig): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!config.text) {
      resolve(imageSrc);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }

        // Draw image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Configure Font
        const baseSize = Math.max(canvas.width, canvas.height) * 0.05; // Base 5% of viewport
        let sizeMultiplier = 1;
        switch(config.fontSize) {
            case 'small': sizeMultiplier = 0.6; break;
            case 'medium': sizeMultiplier = 1; break;
            case 'large': sizeMultiplier = 1.5; break;
            case 'massive': sizeMultiplier = 2.5; break;
        }
        const fontSize = baseSize * sizeMultiplier;
        
        ctx.font = `${config.isItalic ? 'italic ' : ''}${config.isBold ? 'bold ' : ''}${fontSize}px "Orbitron", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Shadow/Outline
        ctx.shadowColor = 'black';
        ctx.shadowBlur = fontSize * 0.3;
        ctx.lineWidth = fontSize * 0.08;
        ctx.strokeStyle = 'black';

        // Position
        const x = canvas.width / 2;
        let y = canvas.height * 0.9; // Default bottom
        
        if (config.position === 'top') y = canvas.height * 0.1;
        if (config.position === 'center') y = canvas.height / 2;
        
        // Draw
        ctx.strokeText(config.text, x, y);
        ctx.fillStyle = config.color;
        ctx.shadowBlur = 0; // Remove shadow for fill to keep it crisp on top
        ctx.fillText(config.text, x, y);

        resolve(canvas.toDataURL('image/jpeg', 0.95));
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = (err) => reject(err);
    img.src = imageSrc;
  });
};