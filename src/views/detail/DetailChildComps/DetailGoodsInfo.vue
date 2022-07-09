<template>
<!-- 防止报错要使数据不为null时显示组件 -->
  <div class="detail-goods-info" v-if="Object.keys(datailGoodsInfo).length !== 0 && datailGoodsInfo.detailImage[0].list !== null" >
    <div class="goodsDesc">
        <div class="beforeDesc"></div>
        <div class="goodsDesc-item">{{datailGoodsInfo.desc}}</div>
        <div class="afterDesc"></div>
    </div>
    <div class="info-key">{{datailGoodsInfo.detailImage[0].key}}</div>
    <div class="detail-goods-img" >
        <div v-for="(item,index) in datailGoodsInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="goodsImgLoad"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    datailGoodsInfo:{
        type: Object,
        default() {
            return {}
        }
    }
  },
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted() {
    
  },
  methods: {
    goodsImgLoad() {
        this.$emit('goodsImgLoad')

        
    }
  },
}

</script>
<style scoped>
.detail-goods-info {
    margin-top: 15px;
    /* margin-bottom: 200px; */
}
.goodsDesc {
    position: relative;
    padding: 0 10px;
    /* text-indent: 2em; */
    margin-top: 15px;

}
.goodsDesc-item {
    text-align: center;
    padding: 5px 15px;
    font-size: 14px;
    line-height: 18px;
}
.beforeDesc,.afterDesc {
    height: 1px;
    width: 100px;
    background-color: rgb(30, 19, 19);
}
.beforeDesc {
    position: absolute;
    left: 10px;
}
.afterDesc {
    position: absolute;
    right: 10px;
}
.beforeDesc::before,.afterDesc::after {
    content: '';
    position: absolute;
    left: 0;
    top: -5px;
    width: 5px;
    height: 5px;
    background-color: rgb(23, 19, 19);
}
.beforeDesc::before{
    left: 0;
    top: -5px;
}
.afterDesc::after {
    left: 95px;
    top: 0;
}
.info-key {
  margin: 10px 10px;
  text-align: center;;
  color: #333;
  font-size: 15px;
}
.detail-goods-img img {
    width: 100%;
}
</style>
