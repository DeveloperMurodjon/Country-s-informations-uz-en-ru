import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function CountryList() {
  const { i18n } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [keys, setKeys] = useState({});

  useEffect(() => {
    fetch("/countries.json")
      .then((res) => res.json())
      .then((data) => {
        const lang = i18n.language || "uz";
        if (data[lang]) {
          setCountries(data[lang].countries);
          setKeys(data[lang].keys);
        } else {
          setCountries(data["uz"].countries);
          setKeys(data["uz"].keys);
        }
      })
      .catch((error) => console.error(error));
  }, [i18n.language]);

  return (
    <div className="pt-4 gap-4 px-[80px] flex flex-wrap bg-gray-100 dark:bg-gray-900">
      {countries.length > 0 ? (
        countries.map((country, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-gray-800 shadow-md rounded-lg m-2"
          >
            <img
              width={264}
              src={country.image}
              alt={country.name}
              className="rounded-lg mb-4"
            />
            <div className="p-4">
              <h2 className="font-extrabold text-[rgba(17, 21, 23, 1)] dark:text-white">
                {country.name}
              </h2>
              <p className="text-white dark:text-gray-100">
                <strong>{keys.name}:</strong> {country.name}
              </p>
              <p className="text-white dark:text-gray-100">
                <strong>{keys.population}:</strong> {country.population}
              </p>
              <p className="text-white dark:text-gray-100">
                <strong>{keys.region}:</strong> {country.region}
              </p>
              <p className="text-white dark:text-gray-100">
                <strong>{keys.capital}:</strong> {country.capital}
              </p>
              <p className="text-white dark:text-gray-100">
                <strong>{keys.language}:</strong> {country.language}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center w-full text-red-500">Mamlakatlar topilmadi</p>
      )}
    </div>
  );
}

export default CountryList;
