// pages/category/components/sub-category/sub-category.js
import {tabBarTitle} from '../../../../constant/common'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subCategory: {
      type: Array,
      value: []
    },
    categoryDetail:{
      type:Array,
      value:[]
    },
    currentIndex:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    titles: tabBarTitle,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(e){
      this.triggerEvent('tabClick',e.detail)
    }
  }
})
