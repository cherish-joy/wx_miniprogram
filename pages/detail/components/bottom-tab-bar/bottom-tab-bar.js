// pages/detail/components/bottom-tab-bar/bottom-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBuyClick(){
      this.triggerEvent('addCart')
      wx.showToast({
        title: '加入购物车成功!',
        icon: 'success',
        duration: 2000
      })
    }
  }
})
