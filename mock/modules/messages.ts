import { MockMethod } from 'vite-plugin-mock'
import Mock, { Random } from 'mockjs'

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
  unreadCount?: number
  list: Array<MessagesItem>
}

let allCounts: number
const messages = <ListItem[]>[
  {
    id: Mock.mock('@id'),
    otherName: '搬砖仔',
    otherAvatar: '/src/assets/images/avatar-2.jpg',
    group: false,
    list: [
      {
        text: '@csentence(5, 10)',
        time: Mock.mock('@now'),
        isMe: false,
        read: false,
      },
      {
        text: '@csentence(5, 10)',
        time: Mock.mock('@now'),
        isMe: true,
      },
    ],
  },
  {
    id: Mock.mock('@id'),
    otherName: '搬砖仔2',
    otherAvatar: '/src/assets/images/avatar-1.jpg',
    group: false,
    list: [
      {
        text: '@csentence(5, 10)',
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
      allCounts = 0
      messages.forEach((item: ListItem, index: number) => {
        let count: number = 0
        item.list &&
          item.list.forEach((i) => {
            !i.read && count++
          })
        messages[index].unreadCount = count
        allCounts += item.unreadCount || 0
      })
      return {
        code: 200,
        data: { messages, allCounts },
      }
    },
  },
  {
    url: '/api/readMessage',
    method: 'post',
    response: ({ query }) => {
      const { id } = query
      console.log(id)
      const index = messages.findIndex((i) => i.id === id)
      messages[index].unreadCount = 0
      return {
        code: 200,
        data: {},
      }
    },
  },
] as MockMethod[]
