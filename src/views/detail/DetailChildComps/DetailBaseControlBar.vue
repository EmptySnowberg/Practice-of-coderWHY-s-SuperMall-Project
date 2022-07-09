<template>
  <div class="base-bar">
    <div class="left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon fav"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add-cart" @click="addClick">
        <div>加购物车</div>
      </div>
      <div class="purchase">
        <div>购买</div>
      </div>
      <div class="linkCart" @click="cartClcik"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'DetailBaseControlBar',
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {
    addClick() {
      // 在当前组件中无法（较难）获取到商品的相关信息，因此通过父组件拿到商品信息
      this.$emit('addToCart')
    },
    cartClcik() {
      this.$router.push('/cart')
    }
  },
}

</script>
<style scoped>
.base-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgb(249, 249, 249);
  height: 58px;
  box-shadow: 0 -1px 1px rgba(0,0,0,.05);
}
.left,.right {
  flex: 1;
  display: flex;
  font-size: 14px;
}
.left>div {
  text-align: center;
  padding: 10px 2px;
  flex: 1;
}
.left .icon {
  display: block;
  width: 24px;
  height: 26px;
  margin-left: 19px;
  background-image: url('../../../assets/img/detail/detail_bottom.png');
  background-position: 0 -49px;
  background-size: 24px 144px;
}
.left .shop {
  background-position: 0 -93px;
}
.left .fav {
  background-position: 0 -142px; 
}
.right {
  display: flex;
  position: relative;
}
.add-cart,.purchase {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* line-height: 58px; */
  font-size: 14px;
  flex: 1;
}
/* .add-cart {
  color: black;
} */
.add-cart div {
  /* padding: 10px 14px; */
  width: 90%;
  height: 60%;
  line-height: 230%;
  border-radius: 50px;
  color: rgb(247, 235, 235);
  font-size: 15px;
  font-weight: 700;
  background-color:#ff5d17;
}
.purchase div{
  display: block;
  width: 90%;
  height: 60%;
  line-height: 230%;
  /* padding: 0 5px; */
  border-radius: 50px;
  color: rgb(247, 235, 235);
  font-size: 15px;
  font-weight: 700;
  background-color: rgb(243, 134, 168);
  color: white;
}
.linkCart {
  position: absolute;
  top: -95px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: url('../../../assets/img/detail/cart.png') no-repeat 0 0;
  background-size: 40px 40px;
}
</style>
