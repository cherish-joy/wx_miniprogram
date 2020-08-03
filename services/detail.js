import request from './request'

//根据iid获取对应商品的详情数据
export function getDetailById(iid){
  return request({
    url:'/detail',
    data:{
      iid
    }
  })
}

//获取推荐商品数据
export function getRecommends() {
  return request({
    url: '/recommend'
  })
}