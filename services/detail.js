import request from './request'

export function getDetailById(iid){
  return request({
    url:'/detail',
    data:{
      iid
    }
  })
}

export function getRecommends() {
  return request({
    url: '/recommend'
  })
}