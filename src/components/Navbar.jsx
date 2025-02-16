import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkMode  from "../hooks/useDarkMode";

function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-gray-200 dark:bg-gray-800">
      <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Prompt Refiner
      </Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded bg-gray-300 dark:bg-gray-700"
      >
        {darkMode ? <FaSun title="Light Mode" /> : <FaMoon title="Dark Mode" />}
      </button>
    </nav>
  );
}

export default Navbar;
