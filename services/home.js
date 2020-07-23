import request from './request'
const baseURL = 'http://123.207.32.32:8000/api/m3'

export function getMulitData() {
  return request({
    url: baseURL + '/home/multidata'
  })
}