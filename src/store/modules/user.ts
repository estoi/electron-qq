interface UserInfo {
  name: string
  svip: boolean
  qq: string
  password: string
  avatar: string
}

export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    user: {} as UserInfo,
  }),
  actions: {
    setUserInfo(user: UserInfo) {
      this.user = { ...user }
    },
  },
})
