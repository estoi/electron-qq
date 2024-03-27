import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
      },
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'var-avatar': ['src'],
        },
      },
    }),
    UnoCSS(),
    components({
      resolvers: [VarletImportResolver()],
    }),
    autoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      resolvers: [
        VarletImportResolver({
          autoImport: true,
        }),
      ],
    }),
    viteMockServe({
      mockPath: './mock/modules',
      logger: true,
      enable: true,
    }),
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: 'electron/main.ts',
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      // Ployfill the Electron and Node.js API for Renderer process.
      // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: {},
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
