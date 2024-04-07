import type { App } from 'vue'
import { setupTemporaryDirective } from './temporary'

export const setupGlobalDirective = (app: App) => {
  setupTemporaryDirective(app)
}
