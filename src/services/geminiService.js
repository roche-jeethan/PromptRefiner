const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Changed model name

const generateContent = async (prompt) => {
  try {
    console.log("API Key:", API_KEY);
    const result = await model.generateContent(prompt);
    console.log("Gemini API Response:", result);

    const responseText = result.response.text();
    return { response: responseText };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return { error: error.message };
  }
};

export { generateContent };
