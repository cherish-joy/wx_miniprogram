// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      this.setData({
        currentIndex:e.target.dataset.index
      })
      this.triggerEvent('tabClick',e.target.dataset.index)
    }
  }
})
