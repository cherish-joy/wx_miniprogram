import {
  getMulitData,
  getHomeData
} from '../../services/home'
import {POP,NEW,SELL,DISTANCE,tabBarTitle} from '../../constant/common'

const goodsType = [POP, NEW, SELL]

Page({
  data: {
    banners: [],
    recommends: [],
    titles: tabBarTitle,
    currentType: POP,
    isFixed: false,
    isShow: false,
    topOffSet: 0,
    goods: {
      [POP]: {
        page: 0,
        lists: []
      },
      [NEW]: {
        page: 0,
        lists: []
      },
      [SELL]: {
        page: 0,
        lists: []
      }
    }
  },

  //页面加载完成时
  onLoad: function () {

    // 获取轮播图、推荐图数据
    this._getMulitData(),

    //获取流行、新款、精选数据
    this._getHomeData(POP),
    this._getHomeData(NEW),
    this._getHomeData(SELL)
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
          //先展开所有的goods
          ...this.data.goods,
          //修改当前type的goods
          [type]: {
            //page改为当前的页
            page,
            //运用展开运算符 将新加的数据追加上去
            lists: [...this.data.goods[type].lists, ...list]
          }
        }
      })
    })
  },

  //到达底部重新请求数据
  onReachBottom: function () {
    //加载更多
    this._getHomeData(this.data.currentType)
  },

  //页面滚动时候的回调
  onPageScroll(e) {

    //如果滚动距离超过DISTANCE flag为true
    const flag = e.scrollTop >= DISTANCE

    //当滚动的距离超过tabbar的topOffSet isTabControl设为true
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
  },

  //点击tab栏触发
  handleTabClick(e) {
    this.setData({
      currentType: goodsType[e.detail]
    })
  },

  //监听图片加载
  handleImgLoad() {
    //获得tab-control的topOffSet
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.setData({
        topOffSet: rect.top
      })
    }).exec()
  },
})