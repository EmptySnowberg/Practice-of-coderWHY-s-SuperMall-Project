<template>
<nav-bar class="detail-nav-bar">
        <div slot="left">
                <img src="~assets/img/common/back.svg" alt="" @click="backClick" >
        </div>
        <div slot="center" class="center">
            <div v-for="(item,index) in titles" 
            :key="index" 
            class="center-item" 
            :class="{isActive:currentIndex==index}"
            @click="tabClick(index)">
                {{item}}
            </div>
        </div>
</nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
  name: 'DetailNavBar',
  components:{
    NavBar
  },
  data () {
    return {
        titles:['商品','评论','参数','推荐'],
        currentIndex:0
    }
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {
    backClick() {
        this.$router.go(-1)
    },
    tabClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
    }
  },
}

</script>
<style scoped>
.detail-nav-bar {
    /* position: relative; */
    /* top: 0; */
    background-color: #fff;
    font-weight: 700;
    box-shadow: 0 1px 1px 1px rgba(231, 211, 211, 0.2);
}
.detail-nav-bar img {
    margin-top: 11px;
    transform: translateX(-15px);
}
.center {
    display:flex;
}
.center-item {
    flex: 1;
    color: black;
    font-size: 18px;
}
.isActive {
    color: red;
}
</style>
