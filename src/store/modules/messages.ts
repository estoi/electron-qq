import Mock from 'mockjs'
interface MessagesItem {
  text: string
  time: number
  read?: boolean
  isMe: boolean
}

interface ListItem {
  id: number
  otherName: string
  otherAvatar: string
  group: boolean
  list: Array<MessagesItem>
}

export const useMessagesStore = defineStore('messages', () => {
  const active = ref()
  const dataSource = reactive({
    allCounts: 0,
    list: [
      {
        id: 1,
        otherName: '搬砖仔',
        otherAvatar: '/src/assets/images/avatar-2.jpg',
        group: false,
        list: [
          {
            text: 'Hello',
            time: Mock.mock('@now'),
            isMe: false,
            read: false,
          },
          {
            text: '你好',
            time: Mock.mock('@now'),
            isMe: true,
          },
        ],
      },
      {
        id: 2,
        otherName: '搬砖仔2',
        otherAvatar: '/src/assets/images/avatar-3.jpg',
        group: false,
        list: [
          {
            text: '大师兄，大事不好了',
            time: Mock.mock('@now'),
            isMe: false,
            read: true,
          },
        ],
      },
    ],
  })

  const getAllCount = () => {
    dataSource.allCounts = 0
    dataSource.list.forEach((item: ListItem) => {
      item.list.forEach((i) => {
        if (!i.isMe && !i.read) {
          dataSource.allCounts++
        }
      })
    })
  }

  const setActive = (id: string) => {
    active.value = id
  }

  const readMessage = (id: number) => {
    const index = dataSource.list.findIndex((i) => i.id === Number(id))
    for (let i = 0; i < dataSource.list[index].list.length; i++) {
      if (!dataSource.list[index].list[i].isMe) {
        dataSource.list[index].list[i].read = true
      }
      getAllCount()
    }
  }

  const sendMessage = (item: any) => {
    const { id, ...other } = item
    const index = dataSource.list.findIndex((i: any) => i.id === Number(id))
    dataSource.list[index].list.push({ ...other })
    dataSource.list[index].list.push({
      text: Mock.mock('@csentence(5)'),
      time: Mock.mock('@now'),
      isMe: false,
      read: true,
    })
  }

  watch(
    dataSource.list,
    () => {
      getAllCount()
    },
    {
      immediate: true,
    }
  )

  return {
    active,
    setActive,
    getAllCount,
    readMessage,
    sendMessage,
    dataSource,
  }
})
