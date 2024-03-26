// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'
import { presetVarlet } from '@varlet/preset-unocss'

export default defineConfig({
  presets: [presetUno(), presetVarlet(), presetIcons()],
})
