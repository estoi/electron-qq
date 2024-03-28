import router from '@/router'

export const useSidebarStore = defineStore(
  'sidebar',
  () => {
    const selectedSidebar: Ref<string> = ref('Message')
    const sidebarIncludes = ['Chat', 'Friend']
    const count = ref(0)

    router.beforeEach((to: any) => {
      const { name = '' } = to
      if (sidebarIncludes.includes(name)) {
        if (to?.redirectedFrom) {
          selectedSidebar.value = to.redirectedFrom.name
        } else {
          selectedSidebar.value = name
        }
      }
    })

    const setCount = (num: any) => {
      count.value = num
    }

    return {
      selectedSidebar,
      count,
      setCount,
    }
  },
  {
    persist: true,
  }
)
