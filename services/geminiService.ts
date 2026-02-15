import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

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
      Task: Transport this person into the following historical/fictional setting: ${eraPrompt}.
      Requirements:
      - Maintain the facial features and identity of the person in the input image.
      - Change their clothing to match the era perfectly.
      - Change the background to a high-quality, photorealistic scene from that era.
      - Ensure lighting and composition are cinematic.
    `;

    if (figurePrompt) {
      finalPrompt += `\n      - IMPORTANT: The person MUST be depicted standing next to or interacting with ${figurePrompt}. Ensure the historical figure looks authentic.`;
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
        // Using a lower thinking budget for faster analysis, or 0 if speed is critical
        thinkingConfig: { thinkingBudget: 1024 } 
      }
    });

    return response.text || "Could not analyze the image.";
  } catch (error) {
    console.error("Analysis Error:", error);
    throw error;
  }
};