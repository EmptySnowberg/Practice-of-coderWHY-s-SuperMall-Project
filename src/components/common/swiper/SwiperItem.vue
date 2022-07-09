<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {},
}

</script>
<style>
.swiper-item {
    width: 100%;
    /* 使item不进行收缩 */
    flex-shrink: 0;
}
.swiper-item img {
    width: 100%;
}
</style>
