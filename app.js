App({
  cartItems: [],

  addCart(obj) {
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
    const flag = this.cartItems.some(item => item.checked == false)
    const newCartItems = this.cartItems.map(item => {
      return {
        ...item,
        checked: flag
      }
    })
    this.cartItems = newCartItems
  }
})