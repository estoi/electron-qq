import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

interface FriendsList {
  id: string | number
  name: string
  status: number
  avatar?: string
  qq: string | number
  gender: number
  likes: number
  age: number
  birthday: string
  location: string
  remarks?: string
  group: string | number
}

interface GroupItem {
  id: string | number
  title: string
  count?: number
  list: Array<FriendsList>
}

interface FriendsGroups {
  groups: Array<GroupItem>
}

const friends: Array<FriendsGroups> = Mock.mock({
  'groups|4': [
    {
      'id|+1': 1,
      title: '@csentence(5)',
      count: Mock.Random.natural(1, 999),
      'list|10-50': [
        {
          'id|+1': 1,
          name: '@csentence(3)',
          status: '@natural(1, 2)',
          avatar: '@image("100x100")',
          qq: '@natural(100000000, 1000000000)',
          gender: '@natural(1, 2)',
          likes: '@natural(1, 10000)',
          age: '@natural(1, 100)',
          birthday: '@date("MM-dd")',
          location: '@city(true)',
          remarks: '@csentence(5)',
          group: '@natural(1, 10)',
        },
      ],
    },
  ],
})

export default [
  {
    url: '/api/friends',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: friends,
      }
    },
  },
  {
    url: '/api/groups',
    method: 'get',
    response: () => {
      const groups = friends.groups.map(({ id, title }) => ({
        id,
        title,
      }))
      return {
        code: 200,
        data: [],
      }
    },
  },
] as MockMethod[]
