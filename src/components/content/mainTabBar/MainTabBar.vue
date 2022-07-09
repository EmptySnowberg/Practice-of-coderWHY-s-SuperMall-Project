<template>
  <div class="main-tab-bar">
      <tab-bar>
          <tab-bar-item tab-bar-item-path='/home'>
              <img slot="icon-img" src="../../../assets/img/tabbar/home.svg" alt="">
              <img slot="icon-img-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
              <div slot="icon-text">首页</div>
          </tab-bar-item>
          <tab-bar-item tab-bar-item-path='/category'>
              <img slot="icon-img" src="../../../assets/img/tabbar/category.svg" alt="">
              <img slot="icon-img-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
              <div slot="icon-text">目录</div>
          </tab-bar-item>
          <tab-bar-item tab-bar-item-path='/cart'>
              <img slot="icon-img" src="../../../assets/img/tabbar/shopcart.svg" alt="">
              <img slot="icon-img-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
              <div slot="icon-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item tab-bar-item-path='/profile'>
              <img slot="icon-img" src="../../../assets/img/tabbar/profile.svg" alt="">
              <img slot="icon-img-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
              <div slot="icon-text">我的</div>
          </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'


export default {
  name: 'MainTabBar',
  components: {
      TabBar,
      TabBarItem
  },
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {},
}

</script>
<style scoped>
</style>
