import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
        Welcome to Prompt Refiner
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
        Enhance your AI prompts for better responses. Start refining now!
      </p>

      {/* Get Started Button */}
      <button
        onClick={() => navigate("/chat")}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
