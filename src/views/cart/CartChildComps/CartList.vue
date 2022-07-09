<template>
  <div class="cart-list" v-if="this.$store.state.cartList.length !=0">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :cartListItem="item"> </cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  components: {
    CartListItem,
  },
  data () {
    return {}
  },
  computed: {
    cartList() {
        return this.$store.state.cartList
    }
  },
  created () {},
  mounted() {},
  methods: {},
}

</script>
<style scoped>
.cart-list {
    margin-top: 44px;
    /* height: 1000px; */
    /* background-color: pink; */
}
</style>
