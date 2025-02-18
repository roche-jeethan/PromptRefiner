const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateContent = async (prompt) => {
  const API_KEY = localStorage.getItem('geminiApiKey'); // Retrieve API key from localStorage
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
