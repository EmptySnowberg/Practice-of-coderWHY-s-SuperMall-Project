<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodsList" :key="index" :goodsListItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props : {
    goodsList:{
        type:Array,
        default() {
            return []
        }
    }
  },
  data () {
    return {
        
    }
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {},
}

</script>
<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 3px;
}
</style>
