<template>
  <div id="detail-swiper">
    <swiper class="datail-swiper" v-if="topImages.length >0">
        <swiper-item v-for="(item,index) in topImages" :key="index">
            <img :src="item" alt="" >
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',  
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    topImages:{
        type:Array,
        default() {
            return []
        }
    }
  },
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {
  },
}

</script>
<style scoped>
.datail-swiper {
    height: 300px;
    margin: 0  2px; 
}
</style>
