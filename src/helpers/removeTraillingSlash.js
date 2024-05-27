export const removeTraillingSlash = (url) => {
  if (url.endsWith('/')) {
    return url.slice(0, -1)
  }
  return url
}
