App({
  cartItems: [],
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
  addCart(obj) {
    console.log(obj);
    const isExist = this.cartItems.find(item =>
      item.title === obj.title
    )

    if (!isExist) {
      obj.count = 1
      obj.checked = true
      this.cartItems.push(obj)
    } else {
      isExist.count++
    }
  },
  changeStatus(e) {
    const item = this.cartItems.find(item => item.title === e)
    item.checked = !item.checked
  },
  changeAllStatus() {
    const flag = this.cartItems.some(item => item.checked ==false)
    const newCartItems = this.cartItems.map(item => {
        return {...item,checked:flag}
    })
    this.cartItems = newCartItems
  }
})