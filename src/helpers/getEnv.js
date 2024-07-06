export const getEnv = () => ({
  ...import.meta.env,
  CMS_URL: process.env.CMS_URL || import.meta.env.CMS_URL,
  NEWSLETTER_URL: process.env.NEWSLETTER_URL || import.meta.env.NEWSLETTER_URL,
  SUSCRIBERS_LIST_UUID:
    process.env.SUSCRIBERS_LIST_UUID || import.meta.env.SUSCRIBERS_LIST_UUID
})
