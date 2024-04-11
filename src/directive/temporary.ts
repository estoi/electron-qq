import type { Directive, App } from 'vue'
import { toast } from 'vue-sonner'

const temporaryDirective: Directive = {
  beforeMount(el) {
    el.addEventListener('click', () => {
      console.log('--------------------------------')
      toast.warning('待开发')
    })
  },
}

export const setupTemporaryDirective = (app: App) => {
  app.directive('temporary', temporaryDirective)
}

export default temporaryDirective
