import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

const api = {
  post: async <T>(
    url: string,
    data?: T,
    config?: InternalAxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return await instance.post<T>(url, data, config)
  },
  get: (url: string) => {
    return instance.get(url)
  },
}

export default api
