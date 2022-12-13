import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: "What meal do you prefer today?",
          inputPlaceholder: "Type name of a meal",
          subtitle: "Or maybe you want random meal for today?",
          search: "Search",
          click: "Click here",
          typePlaceholder: "Filter by:",
          optionPlaceholder: "Select...",
        },
      },
      ua: {
        translation: {
          title: "Яку страву сьогодні бажаєте?",
          inputPlaceholder: "Напишіть ім'я страви",
          subtitle: "Або можна обрати рандомну страву?",
          search: "Шукати",
          click: "Натисніть сюди",
          typePlaceholder: "Фільтрувати по:",
          optionPlaceholder: "Обрати...",
        },
      },
    },
  });

export default i18n;
