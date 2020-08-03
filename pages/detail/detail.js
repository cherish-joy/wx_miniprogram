import {
  getDetailById,
  getRecommends
} from '../../services/detail'
import {
  ItemInfo,
  ShopInfo,
  ParamInfo
} from '../../utils/itemInfo'

//获取app是来
const app = getApp()

Page({
  data: {
    itemInfo: {},
    shopInfo: {},
    paramsInfo: {},
    detailInfo: {},
    commentInfo: {},
    recommends: []
  },

  onLoad: function (options) {

    //获取options里传过来的iid
    this._getDetailById(options.iid)

    //获取推荐商品信息
    this._getRecommends()
  },

  _getDetailById(iid) {
    getDetailById(iid).then(res => {
      const {
        result
      } = res.data
      //创建一个商品详情类
      const itemInfo = new ItemInfo(result)
      //创建一个店铺详情类
      const shopInfo = new ShopInfo(result)
      //创建一个商品参数类
      const paramsInfo = new ParamInfo(result.itemParams)
      //定义一个评论对象
      let commentInfo = {}
      if (result.rate && result.rate.cRate > 0) {
        commentInfo = result.rate.list[0]
      }

      this.setData({
        itemInfo,
        shopInfo,
        detailInfo: result.detailInfo,
        paramsInfo,
        commentInfo
      })
    })
  },

  _getRecommends(){
    getRecommends().then(res => {
      const {
        list
      } = res.data.data
      this.setData({
        recommends: list
      })
    })
  },

  //添加到购物车
  addCart() {
    app.addCart(this.data.itemInfo)
  },
})