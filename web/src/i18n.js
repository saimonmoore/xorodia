import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EnTranslations from 'web/src/locales/en/translation.json'
import CatTranslations from 'web/src/locales/ca/translation.json'
import EsTranslations from 'web/src/locales/es/translation.json'

const resources = {
  en: { translation: EnTranslations },
  ca: { translation: CatTranslations },
  es: { translation: EsTranslations },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
