import request from './request'

//获取首页轮播图数据
export function getMulitData() {
  return request({
    url: '/home/multidata'
  })
}

//获取首页商品数据
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