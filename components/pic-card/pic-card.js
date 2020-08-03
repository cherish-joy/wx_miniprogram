Component({

  properties: {
    goodsItems:{
      type:Array,
      value:[]
    }
  },

  methods: {
    itemClick(e){

      //获取点击item的iid
      const {iid} = e.currentTarget.dataset.item
      
      //跳转到对应的详情页
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid,
      })
    }
  }
})
