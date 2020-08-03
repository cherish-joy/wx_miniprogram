const baseURL = 'http://123.207.32.32:8000/api/x6'

//自定义一个网络请求函数 返回promise
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      success: resolve,
      fail: reject,
      data: options.data || {}
    })
  })
}