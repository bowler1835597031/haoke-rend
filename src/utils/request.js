import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 5000
})
request.interceptors.request.use(
  //想在发送请求前做什么
  //config本次请求的配置
  //必须要返回出去
  (config) => {
    // console.log(config)
    // config添加token
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = `${token}`
    }

    return config
  },
  //请求错误时 处理的方法
  (error) => {
    return Promise.reject(error)
  }
)
export default request
