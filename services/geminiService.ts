import { GoogleGenAI, Type } from '@google/genai';
import { TravelGuideResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const travelGuideSchema = {
  type: Type.OBJECT,
  properties: {
    location: { type: Type.STRING, description: 'The city and country of the travel guide.' },
    title: { type: Type.STRING, description: 'A catchy title for the travel guide.' },
    summary: { type: Type.STRING, description: 'A brief, engaging 2-3 sentence summary of the destination.' },
    itinerary: {
      type: Type.ARRAY,
      description: 'A detailed daily itinerary for the trip.',
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.INTEGER },
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          activities: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                time: { type: Type.STRING, description: 'e.g., "Morning", "9:00 AM"' },
                activity: { type: Type.STRING },
                details: { type: Type.STRING }
              },
              required: ['time', 'activity', 'details']
            }
          }
        },
        required: ['day', 'title', 'description', 'activities']
      }
    },
    landmarks: {
      type: Type.ARRAY,
      description: 'A list of 5 key landmarks. Generate plausible but fake latitude/longitude for map plotting, centered around a realistic point for the city (e.g., Paris around 48.85, 2.35).',
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          latitude: { type: Type.NUMBER },
          longitude: { type: Type.NUMBER }
        },
        required: ['name', 'description', 'latitude', 'longitude']
      }
    },
    travelTips: {
      type: Type.ARRAY,
      description: '3 useful travel tips (transport, safety, etc.).',
      items: {
        type: Type.OBJECT,
        properties: {
          tip: { type: Type.STRING },
          details: { type: Type.STRING }
        },
        required: ['tip', 'details']
      }
    },
    localPhrases: {
      type: Type.ARRAY,
      description: '3 essential local phrases with translations.',
      items: {
        type: Type.OBJECT,
        properties: {
          phrase: { type: Type.STRING },
          translation: { type: Type.STRING }
        },
        required: ['phrase', 'translation']
      }
    },
    scavengerHunt: {
      type: Type.OBJECT,
      description: 'A fun scavenger hunt or trivia challenge with 3 clues.',
      properties: {
        title: { type: Type.STRING },
        description: { type: Type.STRING },
        clues: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              clue: { type: Type.STRING },
              location: { type: Type.STRING }
            },
            required: ['clue', 'location']
          }
        }
      },
      required: ['title', 'description', 'clues']
    }
  },
  required: ['location', 'title', 'summary', 'itinerary', 'landmarks', 'travelTips', 'localPhrases', 'scavengerHunt']
};

export const generateTravelExperience = async (location: string, interests: string, days: number, budget: string): Promise<TravelGuideResponse> => {
  const prompt = `
    You are Journey AI, a virtual travel companion. Generate an immersive and personalized travel experience for a user planning a trip.

    **User Input:**
    - **Location:** ${location}
    - **Interests:** ${interests}
    - **Trip Duration:** ${days} days
    - **Budget:** ${budget}

    **Your Task:**
    Generate a complete travel guide in JSON format. The guide must be comprehensive, engaging, and tailored to the user's interests, trip duration, and budget. Include a detailed itinerary for the specified number of days, key landmarks with simulated geographic coordinates for a map, practical travel tips, essential local phrases, and a fun scavenger hunt. Ensure the JSON output strictly adheres to the provided schema.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: travelGuideSchema,
    },
  });

  const jsonText = response.text.trim();
  try {
    return JSON.parse(jsonText) as TravelGuideResponse;
  } catch (e) {
    console.error("Failed to parse JSON response:", jsonText);
    throw new Error("Received an invalid response from the AI model.");
  }
};