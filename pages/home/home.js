// pages/home/home.js
import {
  getMulitData,
  getHomeData
} from '../../services/home'

const goodsType = ['pop', 'new', 'sell']
const DISTANCE = 1000

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    currentType: 'pop',
    isFixed: false,
    isShow: false,
    topOffSet: 0,
    goods: {
      pop: {
        page: 0,
        lists: []
      },
      new: {
        page: 0,
        lists: []
      },
      sell: {
        page: 0,
        lists: []
      }
    }
  },

  handleTabClick(e) {
    this.setData({
      currentType: goodsType[e.detail]
    })
  },

  handleImgLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.setData({
        topOffSet: rect.top
      })
    }).exec()
  },
  //页面加载完成时
  onLoad: function () {
    // 获取轮播图、推荐图数据
    this._getMulitData(),
    //获取流行、新款、精选数据
    this._getHomeData('pop'),
    this._getHomeData('new'),
    this._getHomeData('sell')
  },

  _getMulitData() {
    getMulitData().then(res => {
      const {
        banner,
        recommend
      } = res.data.data;
      this.setData({
        banners: banner.list,
        recommends: recommend.list
      })
    })
  },

  _getHomeData(type) {
    const page = this.data.goods[type].page + 1
    getHomeData(type, page).then(res => {
      const {
        list
      } = res.data.data
      this.setData({
        goods: {
          ...this.data.goods,
          [type]: {
            page,
            lists: [...this.data.goods[type].lists, ...list]
          }
        }
      })
    })
  },
  //到达底部重新请求数据
  onReachBottom: function () {
    this._getHomeData(this.data.currentType)

  },

  onPageScroll(e) {
    const flag = e.scrollTop >= DISTANCE
    const isTabControl = e.scrollTop >= this.data.topOffSet
    if (flag != this.data.isShow) {
      this.setData({
        isShow: flag
      })
    }
    if (isTabControl != this.data.isFixed) {
      this.setData({
        isFixed: isTabControl
      })
    }
  }
})