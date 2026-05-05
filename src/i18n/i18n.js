import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const SUPPORTED_LANGS = ['pt', 'en', 'es'];

const normalizeLanguage = (lng) => {
  if (!lng) return 'pt';
  const base = lng.toLowerCase().split('-')[0];
  return SUPPORTED_LANGS.includes(base) ? base : 'pt';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'pt',
    supportedLngs: SUPPORTED_LANGS,
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'vonanaLng',
      caches: ['localStorage'],
    },
  });

const syncHtmlLang = () => {
  const lang = normalizeLanguage(i18n.language);
  document.documentElement.lang = lang;
};

syncHtmlLang();
i18n.on('languageChanged', syncHtmlLang);

export const getNormalizedLanguage = () => normalizeLanguage(i18n.language);

export default i18n;
