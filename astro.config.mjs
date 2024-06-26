import { defineConfig } from 'astro/config'
import { defaultLang, languages, showDefaultLang } from './src/i18n/ui'
import sitemap from '@astrojs/sitemap'
import { cannonicalURL } from './src/constants/seo'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  site: cannonicalURL,
  devToolbar: {
    enabled: false
  },
  output: 'server',
  integrations: [
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
  },
  adapter: node({
    mode: 'standalone'
  })
})
