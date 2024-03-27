import { MockMethod } from 'vite-plugin-mock'

interface UserInfo {
  name: string
  svip: boolean
  qq: string
  password: string
  avatar: string
}

const userInfo: UserInfo = {
  name: 'Windy',
  svip: true,
  qq: '861624449',
  password: 'windy',
  avatar: '/src/assets/images/avatar-1.jpg',
}

export default [
  {
    url: '/api/login',
    method: 'post',
    response: ({ query }) => {
      const { qq, password } = query
      if (qq === userInfo.qq && password === userInfo.password) {
        return {
          code: 200,
          data: { ...userInfo },
        }
      } else {
        return {
          code: 999,
          data: 'QQ号或密码错误',
        }
      }
    },
  },
] as MockMethod[]
