import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useDarkMode  from "../hooks/useDarkMode";
import iconLight from "../assets/logo-light.png";
import iconDark from "../assets/logo-dark.png";

function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white-200 dark:bg-gray-900">
      <div className="flex items-center">
        <img src={darkMode ? iconDark : iconLight} alt="Logo" className="w-8 h-8 mr-2" />
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Prompt Refiner
        </Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded bg-gray-300 dark:bg-white-700"
      >
        {darkMode ? <IoSunnyOutline title="Switch to Light Mode" /> : <IoMoonOutline title="Switch to Dark Mode" />}
      </button>
    </nav>
  );
}

export default Navbar;
