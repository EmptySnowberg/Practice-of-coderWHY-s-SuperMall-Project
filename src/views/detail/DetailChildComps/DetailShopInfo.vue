<template>
<div id="detail-shop-info">
  <div class="detail-shop-info">
    <div class="shop-title">
        <img :src="shopInfo.shopLogo" alt="">
        <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
        <div class="shop-middle-item left">
          <span>
            <div class="left-num">{{cSells}}</div>
            <div class="left-text">总销量</div>
          </span>
          <span>
            <div class="left-num">{{shopInfo.cFans}}</div>
            <div class="left-text">全部宝贝</div>
          </span>
        </div>
        <div class="shop-middle-item right">
          <table>
            <tr v-for="(item,index) in shopInfo.score" :key="index" class="right-item">
            <td>{{item.name}}</td>
            <td class="common-color" :class="{betterColor:item.isBetter}">{{item.score}}</td>
            <td v-if="item.isBetter" >
              <span class="right-item-better">高</span>
            </td>
            <td v-else >
              <span class="right-item-worse">低</span>
            </td>
          </tr>
          </table>
        </div>
    </div>
    <div class="shop-bottom">
      <span>
        <a href="javascript:;">
          进店逛逛
        </a>
      </span>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props:{
    shopInfo:{
        type:Object,
        default() {
            return {}
        }
    }
  },
  data () {
    return {}
  },
  computed: {
    cSells() {
      if(this.shopInfo.cSells<10000) {
        return this.shopInfo.cSells
      } else {
        return parseInt(this.shopInfo.cSells/10000)+'万'
      }
    }
  },
  created () {},
  mounted() {},
  methods: {},
}

</script>
<style scoped>
/* #detail-shop-info {
  position: relative;
} */
.detail-shop-info {
    /* position: absolute;
    left: 0;
    right: 0; */
    /* bottom: 49px; */
    padding: 10px 10px;
    /* height: 1000px; */
    border-bottom: 5px solid rgba(0, 0, 0, .1);
    /* margin-bottom: 30px; */
}
.shop-title {
    display: flex;
    align-items: center;
}
.shop-title  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.shop-title span {
    margin-left: 8px;
}
.shop-middle {
  display: flex;
  margin-top: 40px;
}
.shop-middle-item {
  flex: 1;
}
.left {
  display: flex;
  text-align: center;
  height: 50px;
  padding-right: 20px;
  border-right: 1px solid rgba(0,0,0,.1);
}
.left span {
  flex: 1;
}
.left-num {
  font-size: 20px;
  margin-bottom: 10px;
}
.left-text {
  font-size: 12px;
}
.right {
  margin-top: -15px;
}
.right-item {
  /* justify-content: space-around; */
  font-size: 14px;
}
.right-item td {
  padding: 5px 10px;
}
.common-color {
  color: green;
}
.betterColor {
  color: red;
}
.right-item-better {
  background-color: red;
  color: #fff; 
}
.right-item-worse {
  background-color: green;
  color: #fff;
}
.shop-bottom {
  text-align: center;
  margin: 10px 0;

}
.shop-bottom span {
    background-color: rgb(240, 240, 240);
    padding: 5px 35px;
    border-radius: 5px;
}
</style>
