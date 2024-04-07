import { createApp } from 'vue'
import App from './App.vue'
import '@varlet/touch-emulator'
import router from '@/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { setupGlobalDirective } from '@/directive'

import '@unocss/reset/normalize.css'
import '@/assets/styles/index.scss'

import 'splitpanes/dist/splitpanes.css'

import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

setupGlobalDirective(app)
app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
// if (process.env.NODE_ENV === 'production') {
import('../mock/_createProductionServer').then(({ setupProdMockServer }) => {
  setupProdMockServer()
})
// }
