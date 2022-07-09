<template>
  <div class="detail-base-info">
    <p class="detail-base-title">{{goods.title}}</p>
    <div class="detail-base-price">
        
        <span class="oldprice"><del>{{goods.oldPrice}}</del></span>
        <span class="newprice">￥{{goods.realPrice}}</span>
        <span class="dicountdesc" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
        <span v-for="(item,index) in goods.columns" :key="index" class="columns-item">{{item}}</span>
    </div>
    <div class="services">
        <div class="services-item" v-for="(item,index) in goods.services" :key="index" >
            <img :src="item.icon" alt="" v-show="item.icon">
            <span>{{item.name}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props :{
    goods: {
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
  },
  created () {},
  mounted() {},
  methods: {},
}

</script>
<style scoped>
.detail-base-title {
    text-indent: 2em;
    color: black;
    padding: 5px 10px;
}
.detail-base-price {
    position: relative;
    margin: 4px  10px;
}
.detail-base-price .newprice {
    font-size: 22px;
    color: rgb(236, 95, 145);
    margin-right: 10px;
}
.detail-base-price .oldprice {
    font-size: 14px;
    margin-right: 10px;
}
.dicountdesc {
    position: absolute;
    background-color: rgb(243, 94, 134);
    padding: 3px 10px;
    margin-top: -3px;
    border-radius: 8px;
    text-align: center;
    color: #fff;

}
.columns {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding-bottom: 8px;

}
.columns-item {
    /* flex: 1; */
    color: rgba(0, 0, 0, .3);
    font-size: 12px;
}
.services {
    display: flex;
    justify-content: space-between;
    padding: 20px 6px;
    padding-right: 15px;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 5px solid rgba(0, 0, 0, .05);
}
.services-item {
    flex: 1;
    /* margin: 0 2px; */
}
.services-item img {
    position: relative;
    top: 3px;
    width: 15px;
    height: 15px;
    /* padding: 2px; */
}
.services-item span {
    font-size: 14px;
}
</style>
