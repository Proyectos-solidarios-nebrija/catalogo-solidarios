import { defineConfig } from 'astro/config'
import { defaultLang, languages } from './src/i18n/ui'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: false
    }
  }
})
