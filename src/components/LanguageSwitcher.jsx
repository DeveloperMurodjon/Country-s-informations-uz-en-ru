import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className="m-4">
      <select
        className="font-normal text-[rgba(17, 21, 23, 1)] dark:text-white text-sm p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="uz">O'zbekcha</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
