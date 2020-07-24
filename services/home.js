import request from './request'

export function getMulitData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    methods: 'post',
    data: {
      type,
      page
    }
  })
}