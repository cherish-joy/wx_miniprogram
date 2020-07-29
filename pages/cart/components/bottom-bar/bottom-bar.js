// pages/cart/components/bottom-bar/bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalPrice:{
      type:Number,
      value:0
    },
    totalCount:{
      type:Number,
      value:0
    },
    selectAll:{
      type:Boolean,
      value:true
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
    handleSelectAll(){
      this.triggerEvent('handleSelectAll')
      
    }
  }
})
