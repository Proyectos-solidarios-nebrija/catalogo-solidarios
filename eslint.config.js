import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import pluginJs from '@eslint/js'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'jsx-a11y/accessible-emoji': 'off'
    }
  }
]
