import { createApp } from 'vue'
import App from './App.vue'
import '@varlet/touch-emulator'
import router from '@/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@unocss/reset/normalize.css'
import '@/assets/styles/index.scss'

import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
