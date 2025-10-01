import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.5-flash", 
    });

    const prompt = "Fala sobre Manuel Pires ! .";

    const result = await model.generateContent(prompt);

    console.log("Resposta da IA:");
    console.log(result.response.text());
  } catch (err) {
    console.error("Erro ao chamar a API Gemini:", err);
  }
}

run();
