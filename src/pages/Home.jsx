import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center mt-32 mb-4">
        Welcome to Prompt Refiner
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
        Enhance your AI prompts for better responses. Start refining now!
      </p>
      <button
        onClick={() => navigate("/chat")}
        className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-all"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
