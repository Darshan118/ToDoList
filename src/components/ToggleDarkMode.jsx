import React, { useState } from "react";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <button
        onClick={handleDarkToggle}
        className="p-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
