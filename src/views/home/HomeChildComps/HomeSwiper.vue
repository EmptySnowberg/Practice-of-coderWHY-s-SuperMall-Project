<template>
  <div id="home-swiper">
    <swiper v-if="banners.length >= 1" class="home-swiper">
        <swiper-item v-for="(item,index) in banners" :key="index">
            <img :src="item.image" alt="" @load="swiperImageLoad">            
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'


export default {
  name: 'HomeSwiper',
  components:{
    Swiper,
    SwiperItem,
  },
  props: {
    banners:{
        type:Array,
        default() {
            return []
        }
    }
  },
  data () {
    return {
      isLoaded:false
    }
  },
  computed: {},
  created () {
     
  },
  mounted() {

  },
  methods: {
    swiperImageLoad() {
      // console.log('666');
      if(!this.isLoaded) {
        this.$emit('swiperImageLoad')
        this.isLoaded = true
      }
      
    }
  },
}

</script>
<style scoped>

</style>
