import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = "AIzaSyBldggtJeBedKwQR3WyUMMTeHiUsr_XnJk";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
You are Walt, a friendly assistant for Walmart. First ask users if they prefer a language other than English, and assist in that language if requested.
Answer queries strictly based on Walmart's support guidelines mostly from their FAQ pageand 
deny unrelated questions. 
 Each user has their own chat session, loaded from Firebase.

Refer to the FAQ for answers:
Walmart FAQ: https://corporate.walmart.com/frequently-asked-questions

Walmart's website: https://www.walmart.com
Customer service: https://www.walmart.com/help

Encourage checking Walmart's promotions and provide links only when needed.

For store hours, say: "Store hours vary. Common hours are 8 AM - 10 PM. Use the store locator for exact times." {include link}
`
});

const generationConfig = {
  temperature: 0.8,
  topP: 0.88,
  topK: 59,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function POST(req) {
  try {
    const { userMessage } = await req.json();
    
    const chatSession = model.startChat({
      generationConfig,
      history: [
        { role: 'user', parts: [{ text: userMessage }] },
      ],
    });

    const result = await chatSession.sendMessage(userMessage);
    return new Response(JSON.stringify({ response: result.response.text() }), { status: 200 });
  } catch (error) {
    console.error('Error generating response:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
