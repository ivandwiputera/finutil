import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getCachedLanguage } from "@localisations/Localise";
import translationEn from "./translations/en.json";
import translationId from "./translations/id.json";

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      id: {
        translation: translationId
      }
    },
    fallbackLng: 'en',
    lng: getCachedLanguage() || 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  })