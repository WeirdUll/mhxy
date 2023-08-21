import request from '@/utils/request'

export function getDeviceList(query) {
  return request({
    url: '/canoon/mhxysy/device/list',
    method: 'get',
    params: query
  })
}

/**
 * 更新别名
 * @param {*} query 
 * @returns 
 */
export function updateDeviceNickName(data) {
  return request({
    url: '/canoon/mhxysy/device/updateDeviceNickName',
    method: 'post',
    data
  })
}

/**
 * 远程列表
 * @param {*} query 
 * @returns 
 */
export function getDeviceAccountList(query) {
  return request({
    url: '/canoon/mhxysy/device/getDeviceAccountList',
    method: 'get',
    params: query
  })
}

/**
 * 更新远程列表
 * @param {*} query 
 * @returns 
 */
export function updateDeviceAccountList(data) {
  return request({
    url: '/canoon/mhxysy/device/updateDeviceAccountList',
    method: 'post',
    data
  })
}

/**
 * 绑定设备
 * @param {*} query 
 * @returns 
 */
export function bindDevice(data) {
  return request({
    url: '/canoon/mhxysy/device/bind',
    method: 'post',
    data
  })
}