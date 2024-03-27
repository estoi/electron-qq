import router from '@/router'

export const useSidebarStore = defineStore(
  'sidebar',
  () => {
    const selectedSidebar: Ref<string> = ref('message')
    const count = ref(0)

    router.beforeEach((to) => {
      const { path } = to
      selectedSidebar.value = path.substring(path.lastIndexOf('/') + 1)
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
