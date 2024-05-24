import { getTranslations } from 'src/services/cms'
import { ui, defaultLang, routes, languages } from './ui'

export const showDefaultLang = false

// Retrieve translations from the CMS
await loadRemoteTranslations()

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] || ui[defaultLang]?.[key]
  }
}

export function loadRemoteTranslations() {
  Object.keys(languages).forEach(async (lang) => {
    const translations = await getTranslations(lang)
    const translationsObject = translations?.docs?.reduce(
      (acc, { key, value }) => ({
        [key]: value,
        ...acc
      }),
      {}
    )

    ui[lang] = {
      ...ui[lang],
      ...translationsObject
    }
  })
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
