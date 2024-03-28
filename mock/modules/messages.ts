import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

interface MessagesItem {
  text: string
  time: number
  read?: boolean
  isMe: boolean
}

interface ListItem {
  id: number
  avatar: string
  otherName: string
  otherAvatar: string
  group: boolean
  list: Array<MessagesItem>
}
let allCounts: number = 0

const getAllCount = (list: Array<ListItem>) => {
  allCounts = 0
  list.forEach((item: ListItem) => {
    item.list.forEach((i) => {
      if (!i.isMe && !i.read) {
        allCounts++
      }
    })
  })
}

const messages = <ListItem[]>[
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
]

export default [
  {
    url: '/api/messages',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: { messages },
      }
    },
  },
  {
    url: '/api/getAllCount',
    method: 'get',
    response: () => {
      getAllCount(messages)
      return {
        code: 200,
        data: { allCounts },
      }
    },
  },
  {
    url: '/api/readMessage',
    method: 'post',
    response: ({ query }) => {
      const { id } = query
      const index = messages.findIndex((i) => i.id === Number(id))
      for (let i = 0; i < messages[index].list.length; i++) {
        if (!messages[index].list[i].isMe) {
          messages[index].list[i].read = true
        }
        getAllCount(messages)
      }
      return {
        code: 200,
        data: {},
      }
    },
  },
] as MockMethod[]
