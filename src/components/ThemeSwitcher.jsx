import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="m-4 text-center">
      <h3
        className="cursor-pointer text-sm font-normal text-[rgba(17, 21, 23, 1)] dark:text-white"
        onClick={toggleTheme}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </h3>
    </div>
  );
}

export default ThemeSwitcher;
