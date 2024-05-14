import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import { defaultLang, languages } from './src/i18n/ui'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [mdx()],
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    fallback: {
      en: 'es'
    }
  }
})
