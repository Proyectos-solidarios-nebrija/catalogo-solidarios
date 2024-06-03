export const getEnv = () => ({
  ...import.meta.env,
  CMS_URL: process.env.CMS_URL || import.meta.env.CMS_URL
})
