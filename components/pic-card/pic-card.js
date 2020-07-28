Component({

  properties: {
    goodsItem:{
      type:Object,
      value:{}
    }
  },

  methods: {
    itemClick(){
      const iid = this.data.goodsItem.iid
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid,
      })
    }
  }
})
