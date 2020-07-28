import {
  getDetailById,
  getRecommends
} from '../../services/detail'
import {
  ItemInfo,
  ShopInfo,
  ParamInfo
} from '../../utils/itemInfo'

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemInfo: {},
    shopInfo: {},
    paramsInfo: {},
    detailInfo: {},
    commentInfo: {},
    recommends:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getDetailById(options.iid).then(res => {
      const {
        result
      } = res.data
      const itemInfo = new ItemInfo(result)
      const shopInfo = new ShopInfo(result)
      const paramsInfo = new ParamInfo(result.itemParams)
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
    getRecommends().then(res => {
      const {list} = res.data.data
      this.setData({
        recommends:list
      })
    })
  },
  addCart(){
    app.addCart(this.data.itemInfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})