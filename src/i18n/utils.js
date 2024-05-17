import { ui, defaultLang, routes } from './ui'

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
    const pathName = path.replaceAll('/', '')
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined
    const translatedPath = hasTranslation ? `/${routes[l][pathName]}` : path

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`
  }
}

export function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname
  const parts = pathname?.split('/')
  const path = parts.pop() || parts.pop()

  if (path === undefined) {
    return undefined
  }

  const currentLang = getLangFromUrl(url)

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0]
    return route[path] !== undefined ? route[path] : undefined
  }

  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value)
  }

  const reversedKey = getKeyByValue(routes[currentLang], path)

  if (reversedKey !== undefined) {
    return reversedKey
  }

  return undefined
}
