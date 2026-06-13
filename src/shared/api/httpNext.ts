import axios, { InternalAxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

const api = {
  post: <T>(url: string, data?: T, config?: InternalAxiosRequestConfig) => {
    return instance.post<T>(url, data, config)
  },
}

export default api
