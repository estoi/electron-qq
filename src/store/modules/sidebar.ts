import router from '@/router'

export const useSidebarStore = defineStore(
  'sidebar',
  () => {
    const selectedSidebar: Ref<string> = ref('Message')
    const sidebarIncludes = ['Message', 'Friend']

    router.beforeEach((to: any) => {
      const { name = '' } = to
      if (sidebarIncludes.includes(name)) {
        selectedSidebar.value = name
        // if (to?.redirectedFrom) {
        //   selectedSidebar.value = to.redirectedFrom.name
        // } else {
        //   selectedSidebar.value = name
        // }
      }
    })

    return {
      selectedSidebar,
    }
  },
  {
    persist: true,
  }
)
