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
