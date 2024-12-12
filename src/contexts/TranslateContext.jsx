import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

function TranslateProvider({ children }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
        i18n.changeLanguage(storedLanguage);
      } else {
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
      }
    }
  }, [language, i18n]);

  const handleTranslate = (l) => {
    setLanguage(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", l);
    }
    i18n.changeLanguage(l);
  };

  return (
    <TranslateContext.Provider
      value={{
        t: (key, options = {}) => t(key, options),
        i18n,
        language,
        setLanguage,
        handleTranslate,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

function useTranslate() {
  const context = useContext(TranslateContext);
  if (context === undefined) {
    throw new Error("Context used outside of the context provider");
  }
  return context;
}

export { TranslateProvider, useTranslate };
