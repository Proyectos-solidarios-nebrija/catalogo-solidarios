import { ui, defaultLang } from './ui'

export const showDefaultLang = false

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang
  return defaultLang
}

export function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
