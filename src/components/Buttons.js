// src/components/DarkModeButton.js
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../constants";

export const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="text-black dark:text-white fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 z-[999] bg-gray-300 hover:scale-110 dark:bg-gray-800 rounded-full shadow-2xl dark:hover:bg-gray-700 transition-all duration-100"
    >
      <div className="relative w-7 h-7 md:w-8 md:h-8">
        <FaSun
          className={`absolute top-0 left-0 text-yellow-500 w-full h-full transform transition-transform duration-700 ${
            isDarkMode ? "rotate-180 opacity-100" : "rotate-100 opacity-0"
          }`}
        />
        <FaMoon
          className={`absolute top-0 left-0 text-gray-600 w-full h-full transform transition-all duration-700 ${
            isDarkMode ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
      </div>
    </button>
  );
};
