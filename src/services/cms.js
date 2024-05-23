import { getEnv } from 'src/helpers/getEnv'

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

export const getProjects = async () => {
  try {
    const resp = await fetch(`${CMS_URL}/api/projects?limit=0`)
    const data = await resp.json()
    return data
  } catch (error) {
    console.error(error)
  }

  return null
}
