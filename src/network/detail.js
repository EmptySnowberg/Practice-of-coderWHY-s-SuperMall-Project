import { request } from './request'

export function getHomeGoods(iid) {
    return request({
       url:'/detail',
       params: {
           iid
       }
    })
}
export function getRecommends() {
    return request({
        url:'/recommend'
    })
}

export class Goods {
    constructor(columns,itemInfo,services) {
        this.columns = columns;
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.realPrice = itemInfo.lowNowPrice;
        this.topImages = itemInfo.topImages
        this.services = services
    }
}

export class GoodsParam {
    constructor(info, rule) {
      // 注：images可能没有值(某些商品优质，某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }