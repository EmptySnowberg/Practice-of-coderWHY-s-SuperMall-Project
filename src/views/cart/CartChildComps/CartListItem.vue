<template>
  <div class="cart-list-item">
    <div class="selector">
        <img src="../../../assets/img/cart/tick.svg" alt="" :class="{isChecked:this.cartListItem.checked}" @click="seleClick">
    </div>
    <div class="item-img">
        <img :src="cartListItem.image" alt="">
    </div>
    <div class="item-text">
        <div class="item-text-title">{{cartListItem.title}}</div>
        <div class="item-text-desc">{{cartListItem.desc}}</div>
        <div class="item-text-price">
            <span class="price">￥{{cartListItem.realPrice}}</span>
            <span class="count">×{{cartListItem.count}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    cartListItem: {
        type:Object,
        default() {
            return {}
        }
    }
  },
  data () {
    return {
        count:0,
    }
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {
    seleClick() {
        // this.cartListItem.checked = !this.cartListItem.checked
        this.$store.commit('seleClick',this.cartListItem.iid)
    }
  },
}

</script>
<style scoped>
.cart-list-item {
    display: flex;
    width: 100%;
    height: 150px;
    /* background-color: pink; */
    border-bottom: 1px solid rgba(0,0,0,.2);
}
.selector {
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.selector img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgb(74, 70, 71);
    /* background-color: rgb(74, 70, 71); */
}
.selector .isChecked {
    border: 1px solid rgb(244, 91, 117);
    background-color: rgb(244, 91, 117);
}
.item-img {
    width: 30%;
    height: 100%;
    padding: 10px 10px;
}
.item-img img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
}
.item-text {
    width: 60%;
}
.item-text-title,.item-text-desc {
    white-space: nowrap;
            /* 2.溢出的部分隐藏起来 */
    overflow: hidden;
            /* 3. 文字溢出的时候用省略号来显示 */
    text-overflow: ellipsis;
}
.item-text-title {
    font-size: 15px;
    margin-top: 10px;
}
.item-text-desc {
    font-size: 13px;
    margin-top: 20px;
}
.item-text-price {
    display: flex;
    margin-top: 50px;
    padding-right: 30px;
    justify-content: space-between;
}
.price {
    color: rgb(240, 90, 15);
    font-size: 18px;
}
</style>
