import en from 'src/i18n/en.json'
import ru from 'src/i18n/ru.json'

const DICTIONARIES = {
  en, ru
}

export const getDefaultLang = () => (window.navigator.language || window.navigator.userLanguage).substring(0, 2)

export const translate = (lang, key) => DICTIONARIES[lang][key] || key