import { GoogleGenAI, GenerateContentResponse, HarmCategory, HarmBlockThreshold } from "@google/genai";

/**
 * @security WARNING: The API key is embedded in the client bundle via Vite's define config.
 * For production deployments, proxy API calls through a backend server or serverless function
 * to prevent key extraction from browser DevTools.
 */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/** Shared safety settings for all Gemini API calls. */
const SAFETY_SETTINGS = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  { category: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
];

// Helper to clean base64 string
const cleanBase64 = (base64: string) => {
  return base64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
};

const getMimeType = (base64: string) => {
  const match = base64.match(/^data:image\/(png|jpeg|jpg|webp);base64,/);
  return match ? `image/${match[1]}` : 'image/jpeg';
};

/**
 * Wraps error handling to provide user-friendly messages based on error type.
 * Differentiates between network, rate-limit, safety, and generic errors.
 */
const handleApiError = (error: unknown, context: string): never => {
  console.error(`${context} Error:`, error);

  if (error instanceof Error) {
    const msg = error.message;

    // Network / connectivity issues
    if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('ERR_NETWORK')) {
      throw new Error('Network error — check your internet connection and try again.');
    }

    // Rate limiting (HTTP 429)
    if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('rate limit')) {
      throw new Error('Rate limited — the API is busy. Please wait a moment and try again.');
    }

    // API key issues
    if (msg.includes('401') || msg.includes('403') || msg.includes('API_KEY_INVALID') || msg.includes('PERMISSION_DENIED')) {
      throw new Error('API key error — your key may be invalid or expired. Check your configuration.');
    }

    // Propagate user-friendly messages as-is
    throw new Error(msg);
  }

  throw new Error(`${context} failed due to an unknown error.`);
};

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
    const mimeType = getMimeType(base64Image);
    const cleanData = cleanBase64(base64Image);

    const finalPrompt = `
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
          { inlineData: { data: cleanData, mimeType } },
          { text: finalPrompt },
        ],
      },
      config: { safetySettings: SAFETY_SETTINGS },
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
  } catch (error: unknown) {
    throw handleApiError(error, "Time Travel");
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
    const mimeType = getMimeType(base64Image);
    const cleanData = cleanBase64(base64Image);

    const finalPrompt = `
      Input image provided.
      Instruction: ${instruction}
      
      Execute the instruction on the input image. Return a photorealistic image.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: cleanData, mimeType } },
          { text: finalPrompt },
        ],
      },
      config: { safetySettings: SAFETY_SETTINGS },
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
  } catch (error: unknown) {
    throw handleApiError(error, "Magic Edit");
  }
};

export const analyzeImage = async (
  base64Image: string,
  prompt?: string
): Promise<string> => {
  try {
    const mimeType = getMimeType(base64Image);
    const cleanData = cleanBase64(base64Image);

    const userPrompt = prompt || "Analyze this image in detail. Describe the people, the setting, the historical context if any, and the overall vibe. Be witty.";

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          { inlineData: { data: cleanData, mimeType } },
          { text: userPrompt },
        ],
      },
      config: {
        thinkingConfig: { thinkingBudget: 1024 },
        safetySettings: SAFETY_SETTINGS,
      },
    });

    if (response.text) {
      return response.text;
    }

    // Use candidate check if .text helper is empty
    const candidate = response.candidates?.[0];
    const textPart = candidate?.content?.parts?.find(p => p.text);
    if (textPart?.text) return textPart.text;

    return "Could not analyze the image.";
  } catch (error: unknown) {
    throw handleApiError(error, "Analysis");
  }
};
