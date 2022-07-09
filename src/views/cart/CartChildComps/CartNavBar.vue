<template>
  <div class="cart-nav-bar">
    <nav-bar>
        <div slot="left" >
                <div @click="backClick" class="cart-nav-left"> </div>
        </div>
        <div slot="center">购物车({{cartListNum}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

import {mapGetters} from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
    NavBar,
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['cartListNum'] ),
    // carNum() {
    //     return this.$store.state.cartList.length
    // }
  },
  created () {},
  mounted() {},
  methods: {
    backClick() {
      console.log('666');
      this.$router.go(-1)
    }
  },
}

</script>
<style scoped>
.cart-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.cart-nav-bar .left {
  position: relative;
}
.cart-nav-left {
  /* margin-top: 12px; */
  position: absolute;
  top: 15px;
  left: 18px;
  width: 14px;
  height: 14px;
  /* background-color: blue; */
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
}
</style>
