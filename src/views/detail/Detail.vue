<template>
  <div class="detail">
    <!-- {{this.$store.state.cartList}} -->
    <detail-nav-bar @tabClick="tabClick" ref="nav" class="detail-nav-bar" />
    <div class="content" @scroll="detailScroll($event)" ref="content">
      <detail-swiper :topImages="goods.topImages" class="detail-swiper" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :datail-goods-info="datailGoodsInfo"  @goodsImgLoad="goodsImgLoad" />
      <detail-comment :detailComment="detailComment" ref="comment" />
      <detail-param-info  :detailParamsInfo="detailParamsInfo" ref="param" />
      <goods-list  :goodsList="recommend" class="detail-goods-recommend" ref="recommend"/>
    </div>
    <detail-base-control-bar @addToCart="addToCart" />
    <go-back :showBack="showBack" @backClick="backClick()" />

    <toast :isShow="showToast" :message="toastMessage" />
  </div>
</template>

<script>
import DetailNavBar from './DetailChildComps/DetailNavBar.vue'
import DetailSwiper from './DetailChildComps/DetailSwiper.vue'
import DetailBaseInfo from './DetailChildComps/DetailBaseInfo.vue'
import DetailShopInfo from './DetailChildComps/DetailShopInfo.vue'
import DetailGoodsInfo from './DetailChildComps/DetailGoodsInfo.vue'
import DetailComment from './DetailChildComps/DetailComment.vue'
import DetailParamInfo from './DetailChildComps/DetailParamInfo.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import DetailBaseControlBar from './DetailChildComps/DetailBaseControlBar.vue'

import GoBack from '@/components/common/goback/GoBack'
import Toast from '@/components/common/toast/Toast.vue'

import {getHomeGoods,Goods,GoodsParam,getRecommends} from 'network/detail.js'
import { debounce } from '@/common/utils'
 
export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailComment,
    DetailParamInfo,
    GoodsList,
    DetailBaseControlBar,

    GoBack,
    Toast
  },
  data () {
    return {
        iid:null,

        // 商品的基础数据
        goods: {},

        // 商店的数据
        shopInfo:{},

        // 商品详细数据
        datailGoodsInfo:{},

        // 商品评论
        detailComment:{},

        // 是否显示回到顶部按钮
        showBack:false,

        // 商品尺码参数
        detailParamsInfo:{},

        // 推荐的商品数据
        recommend:[],

        //  记录当前滚动的高度
        currentTop:0,

        // 防抖函数来记录各元素滚动的高度
        getTops:null,

        product: {},

        showToast:false,

        toastMessage:''
    }
  },
  computed: {},
  created () {
    // console.log(this);
    this.iid=this.$route.params.iid
    // console.log(this.iid);
    getHomeGoods(this.iid).then(res => {
        // console.log(res.result);
        this.data = res.result
        // 获取商品基本信息
        this.goods = new Goods(this.data.columns,this.data.itemInfo,this.data.shopInfo.services)

        // 获取商铺信息
        this.shopInfo =this.data.shopInfo

        // 获取商品详细信息
        this.datailGoodsInfo=this.data.detailInfo
        // console.log(this.data.detailInfo);

        // 获取评论信息
        if (this.data.rate.cRate !== 0) {
        this.detailComment = this.data.rate.list[0];
      }

        // 获取尺码信息
        this.detailParamsInfo=new GoodsParam(this.data.itemParams.info,this.data.itemParams.rule)

    })

    // 获取推荐的商品信息
    getRecommends().then(res => {
      // console.log(res.data.list);
      this.recommend = res.data.list
    })

    //在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中
    //在created()钩子进行的DOM操作一定要放在nextTick()的回调函数中
    // 获取各元素加载之后的offsetTop
    this.$nextTick(() => {
      // 使用一个数组来记录各元素的offsetTop高度
      this.getTops=debounce(() => {
        this.scrollTopYs=[]
        // if(this.$refs.nav.$el.offsetHeight) {
        this.scrollTopYs.push(0)
        this.scrollTopYs.push(this.$refs.comment.$el.offsetTop-44)
        this.scrollTopYs.push(this.$refs.param.$el.offsetTop-44)
        this.scrollTopYs.push(this.$refs.recommend.$el.offsetTop-44)
        this.scrollTopYs.push(Number.MAX_VALUE) //存入一个最大值
        // console.log(this.scrollTopYs);
        // }
      },100)
    })
  },
  mounted() {
    
  },
  methods: {
    detailScroll(e) {
      // console.log(this.currentTop);
      this.showBack = e.target.scrollTop >800

      // 记录当前滚动的高度
      this.currentTop = this.$refs.content.scrollTop
      // console.log(this.currentTop);

      // 使navbar的元素跟随滚动进行变化
      this.currentIndex = this.$refs.nav.currentIndex
      if(this.scrollTopYs) {
        for(let i = 0 ; i < this.scrollTopYs.length-1; i++) {
        if(this.currentIndex != i && this.currentTop>=this.scrollTopYs[i]-1 && this.currentTop<this.scrollTopYs[i+1]) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      }
    },
    backClick() {
        // this.$refs.content.scrollTop=0
        this.$refs.content.scrollTo({
                    left:0,
                    top: 0,
                    behavior: "smooth"
                })
      },
      //通过点击事件获取的index来使得content跳转到对应的位置
    tabClick(index) {
      // console.log('666');
      switch(index) {
        case 0:
          // console.log(this.$refs.baseInfo.$el.offsetTop);
          this.$refs.content.scrollTop=this.scrollTopYs[0]
        break;

        case 1:
          // console.log(this.$refs.comment.$el.offsetTop);
          this.$refs.content.scrollTop=this.scrollTopYs[1]
        break;

        case 2:
          // console.log('2');
          this.$refs.content.scrollTop=this.scrollTopYs[2]
        break;

        case 3:
          // console.log('3');
          this.$refs.content.scrollTop=this.scrollTopYs[3]
        break;
      }
    },

    // 等所有图片加载完成后获取各元素高度的数组集合
    goodsImgLoad() {
      // console.log('666');
      this.getTops()
    },

    //加入购物车
    addToCart() {
      // console.log('addToCart');
      // 拿到商品的唯一表示iid
      this.product.iid = this.iid
      this.product.image = this.goods.topImages[0]
      this.product.title = this.goods.title
      this.product.desc = this.goods.desc
      this.product.realPrice = this.goods.realPrice
      // this.product.count = 0
 
      // 将数据放入vuex中进行统一管理
      // this.$store.commit('addCart',this.product)
      this.$store.dispatch('addCart',this.product)

      // 加入购物车成功的提示框
      this.showToast = true
      this.toastMessage = '加入购物车成功'
      setTimeout(() => {
        this.showToast = false
        this.toastMessage = ''
      },1000)
  },
    }
    
}

</script>
<style scoped>
.detail {
  position: relative;
  /* height: 100vh; */
  z-index: 3;

}
.detail-nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.content {
  position: absolute;
  /* top: 44px; */
  background-color: #fff;

  /* 如果要使用@scroll则必须加上如下两个属性 */
  overflow: scroll;
  height: 100vh;
}
.detail-swiper {
  margin-top: 44px;
}
.detail-goods-recommend {
  margin-bottom: 58px;
  margin-top: 20px;
}

</style>
