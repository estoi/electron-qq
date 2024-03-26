interface MessagesItem {
  avatar: string
  name?: string
  text: string
  isMe: boolean
}

interface ListItem {
  avatar: string
  name: string
  group: boolean
  messages: Array<MessagesItem>
}

export const useMessagesStore = defineStore(
  'messages',
  () => {
    const list = ref<ListItem[]>([
      {
        avatar: '@/assets/images/avatar-1.jpg',
        name: '搬砖仔',
        group: false,
        messages: [
          {
            avatar: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
            text: '你好',
            isMe: true,
          },
          {
            avatar: '@/assets/images/avatar-2.jpg',
            text: '你好',
            isMe: false,
          },
        ],
      },
      {
        avatar: '@/assets/images/avatar-4.jpg',
        name: '小微',
        group: false,
        messages: [
          {
            avatar: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
            text: '你好',
            isMe: true,
          },
          {
            avatar: '@/assets/images/avatar-2.jpg',
            text: '你好',
            isMe: false,
          },
        ],
      },
    ])

    return {
      list,
    }
  },
  {
    persist: true,
  }
)
