<template>
<div class="goods-list-item" @click="goodsItemClick">
    <img :src="showImg" alt="">
    <div class="item-content">
        <div class="item-content-title">
            {{goodsListItem.title}}
        </div>
        <span class="price">
            <span class="price-del" v-if="goodsListItem.orgPrice">
                <del>{{goodsListItem.orgPrice}}</del>
            </span>
            <span class="price-current">
                ￥{{goodsListItem.price}}
            </span>
        </span>
        <span class="cfav">
            {{goodsListItem.cfav}}
        </span>
    </div>
</div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsListItem:{
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
    showImg() {
        //  为了在home和detail中都能使用的通用性
        return this.goodsListItem.img || this.goodsListItem.image || this.goodsListItem.show.img 
    }
  },
  created () {},
  mounted() {},
  methods: {
    goodsItemClick() {
        // console.log('goodsItemClick');
        if(this.goodsListItem.iid) {
            // this.$router.push('/detail/'+this.goodsListItem.iid)
            this.$router.push('/home/detail/'+this.goodsListItem.iid)
        }
        
        // if(this.goodsListItem.image) {
        //     console.log(this.goodsListItem.image);
        // } else {
        //     console.log('000');
        // }
    }
  },
}

</script>
<style scoped>
.goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    /* height: 320.75px; */
}
.goods-list-item  img{
    width: 100%;
    height: 100%;
    border-radius: 12px;
}
.item-content {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}
.price-del {
    font-size: 10px;
}
.price-current {
    font-size: 14px;
    color: rgb(255, 104, 165);
}
.item-content-title {
    text-align: center;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-content .cfav {
    position: relative;
    font-size: 12px;
    left: 20px;
}
.item-content .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background-image: url('assets/img/common/collect.svg');
    /* background-color: pink; */
    background-position: center ;
    background-size: 14px 14px;
}
</style>
