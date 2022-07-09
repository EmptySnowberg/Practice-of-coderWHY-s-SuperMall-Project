<template>
<div class="nav-bar">
  <div class="left">
      <slot name="left"></slot>
  </div>
  <div class="center">
      <slot name="center"></slot>
  </div>
  <div class="right">
      <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
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
.nav-bar {
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: rgb(252, 123, 147);
    color: #fff;
    font-size: 16px;
}
.left,.right  {
  width: 80px;
}
.center{
    flex: 1;
}

</style>
