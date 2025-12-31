
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants.tsx';

let chatSession: Chat | null = null;

const getGenAI = () => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const initializeChat = () => {
  const ai = getGenAI();
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    yield "Error: Chat session could not be initialized.";
    return;
  }

  try {
    const resultStream = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
            yield c.text;
        }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm having trouble connecting to the service. Please check your configuration.";
  }
};
