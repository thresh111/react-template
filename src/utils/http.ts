import axios from 'axios'
import { BASE_URL } from '@/config/constance'
export type ResType = {
  code: number
  data?: ResDataType
  msg?: string
}
export type ResDataType = {
  [key: string]: any
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config: any) => {
    return config
  },
  (err: any) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use((res: any) => {
  const resData = res.data || {}
  const { data, code, msg } = resData
  if (code !== 0) {
    msg && console.log(msg)
  }
  if (code === 0) {
    return data
  }
})

export default instance
