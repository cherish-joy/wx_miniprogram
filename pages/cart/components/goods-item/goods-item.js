// pages/cart/components/goods-item/goods-item.js
const app  = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItems:{
      type:Array,
      value:[]
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
    handleCheckClick(e){
      const goodsTitle = e.target.dataset.goodsitem.title
      app.changeStatus(goodsTitle)
      this.triggerEvent('refreshData')
    }
  }
  
})
