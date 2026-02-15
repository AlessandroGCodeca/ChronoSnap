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
