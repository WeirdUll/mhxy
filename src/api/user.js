import request from '@/utils/request'
//获取验证码
export function loginCheckMsg(data) {
  return request({
    url: '/canoon/mhxysy/sendVerification',
    method: 'post',
    data
  })
}
//获取token
export function login(data) {
  return request({
    url: '/canoon/mhxysy/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
