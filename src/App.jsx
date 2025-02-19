import "./i18n";
import React from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full mx-auto">
        <div className="drop-shadow-sm bg-white dark:bg-gray-800 px-[80px] py-[10px] flex items-center justify-between">
          <h1 className="font-bold text-2xl text-[rgba(17, 21, 23, 1)] dark:text-white">
            Where in the world?
          </h1>
          <div className="flex items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
        <CountryList />
      </div>
    </div>
  );
}

export default App;
