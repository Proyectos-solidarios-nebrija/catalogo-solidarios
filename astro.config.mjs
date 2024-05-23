import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { defaultLang, languages, showDefaultLang } from './src/i18n/ui'

import sitemap from '@astrojs/sitemap'
import { cannonicalURL } from './src/constants/seo'

// https://astro.build/config
export default defineConfig({
  site: cannonicalURL,
  output: "hybrid",
  devToolbar: {
    enabled: false
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: {
          en: 'en-US',
          es: 'es-ES'
        }
      }
    })
  ],
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: showDefaultLang
    }
  }
})
