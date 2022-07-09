<template>
  <div class="go-back" :class="{isShow:!showBack}" @click="backClick">

  </div>
</template>

<script>
export default {
  name: 'GoBack',
  props: {
    showBack:{
        type:Boolean,
        default:false
    }
  },
  data () {
    return {
        
    }
  },
  computed: {
  },
  created () {},
  mounted() {
    
  },
  beforeDestroy() {

  },
  methods: {
    backClick() {
      this.$emit('backClick')
    }
  },
}

</script>
<style scoped>
.go-back {
    position: fixed;
    right: 10px;
    bottom: 60px;
    width: 50px;
    height: 50px;
    background: url('assets/img/common/top.png') no-repeat 0/50px 50px ;
}
.isShow {
    display: none;
    z-index: 2;
}
</style>
