// pages/category/category.js
import {getCategory,getSubcategory,getCategoryDetail} from '../../services/category'
Page({
  data: {
    categoryList:[],
    currentIndex:0
  },
  handleItemClick(e){
    this.setData({
      currentIndex:e.detail.currentIndex
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this._getCategory()
  },
  _getCategory(){
    getCategory().then(res => {
      const {list} = res.data.data.category
      const categoryList = []
      list.map((item,index) => {
      return categoryList[index] = {
          category:item,
          subCategory:[],
          categoryDetail:[]
        }
      })
      this.setData({
        categoryList
      })
    
      this._getSubcategory(0);
      this._getCategoryDetail(0)
      console.log(this.data.categoryList)
    })
  },
  _getSubcategory(index){
    const maitKey = this.data.categoryList[index].category.maitKey
    getSubcategory(maitKey).then(res => {
      const {list} = res.data.data
      const newCategoryList = this.data.categoryList 
      newCategoryList[index].subCategory = list
      this.setData({
        categoryList:newCategoryList
      })
    })
  },
  _getCategoryDetail(index){
    const miniWallkey = this.data.categoryList[index].category.miniWallkey
    getCategoryDetail(miniWallkey,'pop').then(res => {
      console.log(res);
    })
  }
})