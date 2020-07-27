Component({
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  data: {
    isImgLoad:false
  },

  methods: {
    handleImgLoad() {
      if (!this.data.isImgLoad) {
        this.triggerEvent('imgLoad')
        this.setData({
          isImgLoad:true
        })
      }
    }
  }
})