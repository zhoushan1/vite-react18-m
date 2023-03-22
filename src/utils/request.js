import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://api.example.com',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

// 封装请求接口函数
export const request = (url, method = 'get', data = {}) => {
  return instance({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: data
  })
}
