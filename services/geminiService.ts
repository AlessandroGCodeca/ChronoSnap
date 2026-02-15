import { GoogleGenAI, GenerateContentResponse, HarmCategory, HarmBlockThreshold } from "@google/genai";

// Helper to clean base64 string
const cleanBase64 = (base64: string) => {
  return base64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
};

const getMimeType = (base64: string) => {
  const match = base64.match(/^data:image\/(png|jpeg|jpg|webp);base64,/);
  return match ? `image/${match[1]}` : 'image/jpeg';
}

/**
 * Generates a time travel image using Gemini 2.5 Flash Image.
 * It takes the user's photo, a prompt describing the era, and an optional historical figure.
 */
export const generateTimeTravelImage = async (
  base64Image: string,
  eraPrompt: string,
  figurePrompt?: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const mimeType = getMimeType(base64Image);
    const cleanData = cleanBase64(base64Image);

    // Simplified prompt to be more direct about the transformation
    let finalPrompt = `
      Input image provided.
      
      Task: Transform the person in the input image to appear in this setting: ${eraPrompt}.
      
      Requirements:
      - Keep the person's facial identity and features from the input image.
      - Change their clothing to match the setting.
      - ${figurePrompt ? `Include ${figurePrompt} in the scene.` : 'Ensure the background is detailed and accurate to the era.'}
      - Photorealistic, cinematic lighting, high resolution.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanData,
              mimeType: mimeType,
            },
          },
          {
            text: finalPrompt,
          },
        ],
      },
      config: {
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
        ],
      }
    });

    if (!response.candidates || response.candidates.length === 0) {
      throw new Error("The AI model blocked the request. Try a different photo or era.");
    }

    const candidate = response.candidates[0];
    const parts = candidate.content?.parts;
    
    // 1. Check for image
    const inlineDataPart = parts?.find(p => p.inlineData);
    if (inlineDataPart?.inlineData?.data) {
      return `data:image/png;base64,${inlineDataPart.inlineData.data}`;
    }
    
    // 2. Check for text refusal (and return it as the error message)
    const textPart = parts?.find(p => p.text);
    if (textPart?.text) {
        console.warn("Model returned text instead of image:", textPart.text);
        throw new Error(textPart.text); 
    }
    
    // 3. Check finish reason if no content was found
    const finishReason = candidate.finishReason;
    if (finishReason) {
       console.warn(`Generation finished with reason: ${finishReason}`);
       if (finishReason === 'SAFETY') {
         throw new Error("The generation was stopped by safety filters. The prompt or image may have been flagged.");
       }
       throw new Error(`The generation finished with reason: ${finishReason} but no image was returned.`);
    }

    throw new Error("No image generated. The model response was empty.");
  } catch (error: any) {
    console.error("Time Travel Error:", error);
    // Propagate the error message directly if it's user-friendly
    throw new Error(error.message || "Time travel failed due to an unknown error.");
  }
};

/**
 * Edits an image based on a text prompt using Gemini 2.5 Flash Image.
 */
export const editImageWithPrompt = async (
  base64Image: string,
  instruction: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const mimeType = getMimeType(base64Image);
    const cleanData = cleanBase64(base64Image);

    // Direct instruction prompt
    const finalPrompt = `
      Input image provided.
      Instruction: ${instruction}
      
      Execute the instruction on the input image. Return a photorealistic image.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanData,
              mimeType: mimeType,
            },
          },
          {
            text: finalPrompt,
          },
        ],
      },
      config: {
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
        ],
      }
    });

    if (!response.candidates || response.candidates.length === 0) {
      throw new Error("No candidates returned.");
    }

    const candidate = response.candidates[0];
    const parts = candidate.content?.parts;
    
    const inlineDataPart = parts?.find(p => p.inlineData);
    if (inlineDataPart?.inlineData?.data) {
      return `data:image/png;base64,${inlineDataPart.inlineData.data}`;
    }

    const textPart = parts?.find(p => p.text);
    if (textPart?.text) {
        throw new Error(textPart.text);
    }

    const finishReason = candidate.finishReason;
    if (finishReason === 'SAFETY') {
      throw new Error("The edit was blocked by safety filters.");
    }

    throw new Error("No edited image generated.");
  } catch (error: any) {
    console.error("Magic Edit Error:", error);
    throw new Error(error.message || "Magic edit failed.");
  }
};

export const analyzeImage = async (
  base64Image: string,
  prompt?: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const mimeType = getMimeType(base64Image);
    const cleanData = cleanBase64(base64Image);

    const userPrompt = prompt || "Analyze this image in detail. Describe the people, the setting, the historical context if any, and the overall vibe. Be witty.";

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanData,
              mimeType: mimeType,
            },
          },
          {
            text: userPrompt,
          },
        ],
      },
      config: {
        thinkingConfig: { thinkingBudget: 1024 },
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
          { category: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
        ],
      }
    });
    
    if (response.text) {
        return response.text;
    }
    
    // Use candidate check if .text helper is empty
    const candidate = response.candidates?.[0];
    const textPart = candidate?.content?.parts?.find(p => p.text);
    if (textPart?.text) return textPart.text;

    return "Could not analyze the image.";
  } catch (error) {
    console.error("Analysis Error:", error);
    throw error;
  }
};
