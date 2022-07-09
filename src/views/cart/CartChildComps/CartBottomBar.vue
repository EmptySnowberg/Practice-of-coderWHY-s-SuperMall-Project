<template>
  <div class="cart-bottom-bar">
    <div class="left">
        <div class="selector">
            <img src="../../../assets/img/cart/tick.svg" alt=""  :class="{isShow:!(isSelcAll)}" @click="allClick">全选
        </div>
        <div class="countPrice">合计：{{totalPrice}}</div>
    </div>
    <div class="right payMoney" @click="buyClcik">去结算({{checkedProductNum}})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  data () {
    return {
      stayCheck:false
    }
  },
  computed: {
    ...mapGetters(['checkedProductNum','totalPrice','cartListNum']),
    isSelcAll() {
      if(this.cartListNum == 0) {
        return this.stayCheck
      } else {
        return this.$store.state.cartList.some(item => item.checked == false)
    }
      }
         
  },
  created () {},
  mounted() {},
  methods: {
    allClick() {
      if(this.cartListNum == 0) {
        this.stayCheck = !this.stayCheck 
      } else {
        this.stayCheck = this.isSelcAll
        this.$store.state.cartList.forEach(item => item.checked = this.stayCheck)
      // this.isSelcAll = !this.isSelcAll
      //this.$store.getters.isAll(stayCheck)
      }
    },

    // 设置未选择商品去结算时的弹框
    buyClcik() {
      this.$emit('buyClcik')
    }
  },
}

</script>
<style scoped>
.cart-bottom-bar {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    height: 40px;
    background-color: rgb(240, 235, 236);
    
}
.left  {
    flex: 2;
    display: flex;
    align-items: center;
}
.right {
    flex: 1;
}
.countPrice {
    flex: 70%;
}
.selector {
flex: 30%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;

}
.selector img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgb(74, 70, 71);
    
    margin-right: 10px;
}
.selector .isShow {
  border: 1px solid rgb(244, 91, 117);
  background-color: rgb(244, 91, 117);
}
</style>
