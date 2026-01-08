
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  if (!API_KEY) {
    return "Gemini API key is missing. Add GEMINI_API_KEY to .env.local to enable AI chat.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "You are WAW Pro AI, a world-class assistant for Waqas Ahmed Waseer's enterprise dashboard. You help Waqas with project planning, system monitoring, and summarizing data. Always address Waqas professionally. You are aware that Waqas is based in Pakistan and manages high-impact tech projects. Be concise and proactive.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I encountered an error processing your request. Please try again later.";
  }
};
