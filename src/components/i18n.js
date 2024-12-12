import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "../../src/locales/en/translation.json";
import tDe from "../../src/locales/de/translation.json";

const resources = {
  en: {
    translation: tEn,
  },
  de: {
    translation: tDe,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
