import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import { toast } from 'vue-sonner'

const http = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  withCredentials: true,
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (response) => {
    const { data, code } = response.data
    if (code !== 200) {
      toast.error(data)
    }
    return response
  },
  (error) => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

export const useHttp = (url: string, method: object) =>
  useAxios(url, { ...method }, http)
