<template>
  <div id="home">
      <nav-bar class="home-nav-bar">
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control @tabClick="tabClick" :titles="titles"  ref="tabControl1" v-show="isTabFixed" class="tabcontrol" />
      <div class="content" @scroll="homeScroll($event)" ref="content">
        <home-swiper :banners="bannersList" @swiperImageLoad="swiperImageLoad" class="home-in-swiper"/>
        <home-recommend :recommends="recommends" />
        <home-feature />
        <tab-control @tabClick="tabClick" :titles="titles"  ref="tabControl2"   />
        <goods-list :goodsList = "showGoods" class="goods-list"/>
      </div>
          <!-- 监听组件的原生事件要在事件加上native修饰符 -->
      <go-back :showBack="showBack" @click.native="backClick()" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './HomeChildComps/HomeSwiper'
import HomeRecommend from './HomeChildComps/HomeRecommend'
import HomeFeature from './HomeChildComps/HomeFeature'
import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import GoBack from '@/components/common/goback/GoBack'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    GoBack
  },
  data () {
    return {
      bannersList: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType:'pop',
      showBack:false,
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created () {
    //  请求轮播图和推荐的数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // setTimeout(() => {
    // this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
    // console.log(this.tabOffsetTop);
    // },200)
  },
  // 回到首页时直接到滚动时保存的saveY值处
  activated() {
    this.$refs.content.scrollTop = this.saveY
  },
  // destroyed() {
  //   console.log('destroyed');
  // },
  methods: {
    // 网络请求的方法

    // 1请求轮播图和推荐数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {   
        // console.log(res);   
        this.bannersList = res.data.banner.list
        this.recommends = res.data.recommend.list
        })
      },
      // 2请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          // console.log(res);
          // 注：如果不使用...red.data.list而是res.data.list的话，则传入的是一个数组，而不是将每个数组元素解析出来再push进去
          // 注:有数据再进行请求以免报错（当page达到最大的时候没有新数据可以获取了）
          if(res) {
            this.goods[type].list.push(...res.data.list)
          // console.log(this.goods[type].list);
          // 请求完数据后页数加一
            this.goods[type].page+=1
          }
        })
      },

    //元素操作的方法 
    // 1、点击tabControl获取需要展示的商品类型
      tabClick(index) {    
        this.goodListType = Object.keys(this.goods)
        this.currentType = this.goodListType[index]
        // console.log(this.currentType);
        this.$refs.tabControl2.currentIndex=index
        this.$refs.tabControl1.currentIndex=index
      },
      // 2、滚动时的方法
      homeScroll(e) {
            e.preventDefault()
            //记录当前滚动的值
            this.saveY = e.target.scrollTop
            // console.log(this.saveY);
            // console.log(e.srcElement.scrollTop);
            // 滚动超过一定值时显示回到顶部按钮
            this.showBack = e.target.scrollTop >800
              // console.log(e.target.scrollHeight);
              // console.log(e.target.scrollTop+e.target.offsetHeight);

            // 拉到底部时进一步刷新后续的商品数据，+100是为了保证快到底部时提前刷新，避免卡顿阻塞的体验
            if(e.target.scrollTop+e.target.offsetHeight+100>=e.target.scrollHeight) {
              // this.getHomeGoods(this.currentType)
              this.getHomeGoods('pop')
              this.getHomeGoods('new')
              this.getHomeGoods('sell')
            }

            this.isTabFixed = e.target.scrollTop>=this.tabOffsetTop-44
            

      },
      // 由于滚动时在监听滚动事件，因此页面滚动时无法监听到点击事件，停止滚动时可以监听到（目前暂未想到解决方案），所以必须停止滚动时点击才生效
      backClick() {
        // document.querySelector('.content').scrollTop=0
        // this.$refs.content.scrollTop=-10
        this.$refs.content.scrollTo({
                    left:0,
                    top: 0,
                    behavior: "smooth"
                })
      },

      // 等待轮播图的图片加载完获取tabcontrol距离顶部的高度
      swiperImageLoad() {
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      },
  },
}

</script>
<style scoped>
#home {
  position: relative;
}
.home-nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.tabcontrol {
  position: absolute;
  top: 44px;
}
.content {
  /* margin-top: 44px; */
  position: absolute;
  /* top: 44px;  不可使用该属性，否则会增大整个home界面的高度，导致拉到底部时nav-bar上移消失*/
  /* margin-bottom: 49px; */

  /* 如果要使用@scroll则必须加上如下两个属性 */
  overflow: scroll;
  height: 100vh;
  /* transition: all .3s; */
}
.home-in-swiper {
  margin-top: 44px;
}
.goods-list {
  margin-bottom: 49px;
}
</style>
