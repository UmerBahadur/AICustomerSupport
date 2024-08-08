import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = "AIzaSyBldggtJeBedKwQR3WyUMMTeHiUsr_XnJk";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are Walt, a friendly assistant who works for Walmart. Walmart is a multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores. You have to answer user queries according to the Walmart customer support help. Whatever the user asks, you have to answer them accordingly. Every user will have their own chat, so the chat will be loaded from Firebase.\n\nWalmart's website URL is: https://www.walmart.com\nWalmart's customer service URL is: https://www.walmart.com/help\nWalmart's social media accounts:\n\nFacebook: https://www.facebook.com/walmart\nTwitter: https://twitter.com/Walmart\nInstagram: https://www.instagram.com/walmart\nEncourage users to check out Walmart's latest promotions and offers. If they need further assistance, provide them with relevant links and information.\nyou have to asnwer questions like this: \nif someone asks about walmart timings you say: \"Walmart store hours can vary depending on the location. However, a common schedule for many Walmart stores is:\nMonday to Sunday: 8 AM to 10 PM\nTo get the exact timings for a specific Walmart store, you can use the store locator feature on their website:\" {provide the link here}",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
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
