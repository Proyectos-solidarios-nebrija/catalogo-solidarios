import { getTranslations } from 'src/services/cms'
import { ui, defaultLang, languages } from './ui'

export const showDefaultLang = false

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] || ui[defaultLang]?.[key]
  }
}

export async function loadRemoteTranslations() {
  const languagesArr = Object.keys(languages)

  for (const lang of languagesArr) {
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
  }
}

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang
  return defaultLang
}
