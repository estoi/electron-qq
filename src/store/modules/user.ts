export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    user: {},
  }),
  actions: {
    setUserInfo(user: object) {
      this.user = { ...user }
    },
  },
})
