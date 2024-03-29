export const useMessagesStore = defineStore('messages', () => {
  const active = ref()

  const setActive = (id: string) => {
    active.value = id
  }

  return {
    active,
    setActive,
  }
})
