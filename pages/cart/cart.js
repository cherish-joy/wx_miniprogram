// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems:[],
    totalPrice:0,
    totalCount:0,
    selectAll:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  onShow: function () {
    this.setData({
      cartItems:app.cartItems
    })
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartItems.length})`,
    })
    this._getPriceCount()
  },

  _getPriceCount(){
    const checkedItem = this.data.cartItems.filter(item => item.checked)
    const totalPrice = checkedItem.reduce((pre,cur) => {
      return pre + cur.count*cur.realPrice
    },0)
    const selectAll = !this.data.cartItems.some(item => item.checked!==true)
    this.setData({
      totalPrice:totalPrice.toFixed(2),
      totalCount:checkedItem.length,
      selectAll
    })
  },
  handleSelectAll(){
    app.changeAllStatus()
    this.refreshData()
  },
  refreshData(){
    this.setData({
      cartItems:app.cartItems
    })
    this._getPriceCount()
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