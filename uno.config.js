// uno.config.js
import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  transformers: [
    transformerVariantGroup()
  ],
  rules: [
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
    }
  ]
})
