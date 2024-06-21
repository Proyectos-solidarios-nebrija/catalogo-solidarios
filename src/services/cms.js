import { getEnv } from 'src/helpers/getEnv'
import { defaultLang } from 'src/i18n/ui'

const { CMS_URL } = getEnv()

export const getGallery = async () => {
  try {
    const resp = await fetch(`${CMS_URL}/api/gallery?limit=0`)
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}

export const getProjects = async (locale = defaultLang) => {
  try {
    const resp = await fetch(`${CMS_URL}/api/projects?limit=0&locale=${locale}`)
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}

export const getProject = async (slug, locale = defaultLang) => {
  try {
    const resp = await fetch(
      `${CMS_URL}/api/projects?where[slug][equals]=${slug}&locale=${locale}`
    )
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}

export const getNews = async (locale = defaultLang, limit = 0) => {
  try {
    const resp = await fetch(
      `${CMS_URL}/api/news?limit=${limit}&locale=${locale}&sort=-date`
    )
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}

export const getSingleNews = async (slug, locale = defaultLang) => {
  try {
    const resp = await fetch(
      `${CMS_URL}/api/news?where[slug][equals]=${slug}&locale=${locale}`
    )
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}

export const getTranslations = async (locale = defaultLang) => {
  try {
    const resp = await fetch(
      `${CMS_URL}/api/translations?limit=0&locale=${locale}`
    )
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}
