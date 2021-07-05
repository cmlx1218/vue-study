import axios from "axios";
import {BASE_URL} from "./baseUrl";

// 未登录的请求
export function requestNotLogin(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Authorization': 'Basic Y21zOkFpbXlGaXRuZXNz',
    },
    params: {
      'grant_type': 'cmspassword'
    }
  })

  // axios拦截器
  // 1、请求拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    // config中一些信息不符合服务器要求
    // 每次发送网络请求时，希望在界面显示一个请求的图标
    // 某些网络请求(比如登录(token))，必须携带一些特殊的信息
    return config
  }, error => {
    console.log(error);
  })

  // 2、响应拦截器
  instance.interceptors.response.use(result => {
    console.log(result)
    return result.data
  }, error => {
    console.log(error)
  })

  return instance(config)
}

// 登录后需要携带token登录
export function request(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Authorization': 'Basic Y21zOkFpbXlGaXRuZXNz',
    },
    params: {
      'grant_type': 'cmspassword'
    }
  })

  return instance(config)
}
