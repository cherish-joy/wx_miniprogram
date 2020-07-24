// pages/home/home.js
import {
  getMulitData,
  getHomeData
} from '../../services/home'

const goodsType = ['pop','new','sell']
const DISTANCE = 1000

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    currentType:'pop',
    isShow:false,
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
      currentType:goodsType[e.detail] 
    })
  },

  onLoad: function (options) {
    this._getMulitData(),
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
            lists: [...this.data.goods[type].lists,...list]
          }
        }
      })
    })
  },

  onReachBottom: function () {
    this._getHomeData(this.data.currentType)
    
  },
  onPageScroll(e){
    const flag = e.scrollTop >=DISTANCE
    if(flag!=this.data.isShow){
      this.setData({
        isShow:flag
      })
    }
  }
})