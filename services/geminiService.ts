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

    let finalPrompt = `
      You are a cinematic photo editor. 
      Input: An image of a person.
      Task: Create a high-quality, photorealistic image of this person in the following setting: ${eraPrompt}.
      Instructions:
      - The subject should be wearing period-appropriate clothing matching the era.
      - The background should be a detailed, cinematic scene from that era.
      - Maintain the general likeness, gender, and expression of the person.
      - Ensure high aesthetic quality, perfect lighting, and composition.
    `;

    if (figurePrompt) {
      finalPrompt += `\n      - The person should be depicted standing next to or interacting with ${figurePrompt}.`;
    }

    finalPrompt += `\n      - Return ONLY the generated image.`;

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

    // Extract image from response safely
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    // Check if there was a finishReason other than STOP which might indicate filtering
    const finishReason = response.candidates?.[0]?.finishReason;
    if (finishReason) {
       console.warn(`Generation finished with reason: ${finishReason}`);
    }

    throw new Error("No image generated. The model may have filtered the response.");
  } catch (error) {
    console.error("Time Travel Error:", error);
    throw error;
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
            text: `Edit this image: ${instruction}. Return the edited image.`,
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

    // Extract image from response safely
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image generated.");
  } catch (error) {
    console.error("Magic Edit Error:", error);
    throw error;
  }
};

/**
 * Analyzes an image using Gemini 3 Pro Preview.
 */
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
        // Using a lower thinking budget for faster analysis
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

    return response.text || "Could not analyze the image.";
  } catch (error) {
    console.error("Analysis Error:", error);
    throw error;
  }
};