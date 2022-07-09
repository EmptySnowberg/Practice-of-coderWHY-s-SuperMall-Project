<template>
  <div>
      <!-- <h1>购物车</h1> -->
      <cart-nav-bar />
      <cart-list class="cart-list" />
      <cart-bottom-bar @buyClcik="buyClcik" />
      <toast :isShow="showToast" :message="toastMessage" />
  </div>
</template>

<script>
import CartNavBar from './CartChildComps/CartNavBar.vue'
import CartList from './CartChildComps/CartList.vue'
import CartBottomBar from './CartChildComps/CartBottomBar.vue'
import Toast from '@/components/common/toast/Toast.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartList,
    CartNavBar,
    CartBottomBar,
    Toast
  },
  data () {
    return {
      // 设置toast的显示
      showToast:false,

      // 设置toast的文字内容
      toastMessage: ''
    }
  },
  computed: {
    ...mapGetters(['checkedProductNum','cartListNum'])
  },
  created () {},
  mounted() {},
  methods: {
    buyClcik() {
      if(this.cartListNum == 0) {
        this.toastMessage = '购物车内无商品'
        this.showToast = true
        clearTimeout(toastTimer)
        let toastTimer = setTimeout(() => {
          this.showToast = false
          this.toastMessage = ''
        },1000)
      } else if(this.checkedProductNum == 0) {
        this.toastMessage = '请选择商品'
        this.showToast = true
        clearTimeout(toastTimer)
        let toastTimer = setTimeout(() => {
          this.showToast = false
          this.toastMessage = ''
        },1000)
      }
    },  
  },
}

</script>
<style scoped>
.cart-list {
  margin-bottom: 90px;
}
</style>
