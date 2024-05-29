export const getEnv = () => ({
  CMS_URL: process.env.CMS_URL,
  ...import.meta.env
})
