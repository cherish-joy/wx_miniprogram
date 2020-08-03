//创建一个商品类
export class ItemInfo{
  constructor(result){
    const {columns,itemInfo,shopInfo} = result
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.descountDesc = itemInfo.discountDesc
    this.topImages = itemInfo.topImages
    this.columns = columns
    this.services = shopInfo.services
    this.realPrice = itemInfo.lowNowPrice
  }
}

//创建一个店铺信息类
export class ShopInfo{
  constructor(result){
    const {shopInfo} = result
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
    
  }
}

//创建一个参数类
export class ParamInfo {
  constructor(itemParams) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    const {info,rule} = itemParams
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}