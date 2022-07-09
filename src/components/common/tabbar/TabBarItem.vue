<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive" >
          <slot name="icon-img"></slot>
      </div>
      <div v-else>
          <slot name="icon-img-active"></slot>
      </div>
      <div :class="{active:isActive}">
          <slot name="icon-text"></slot>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  data() {
      return {       
      }
  },
  props: {
    tabBarItemPath: String
  },
  computed: {
      isActive() {
          return this.$route.path ===this.tabBarItemPath
      }
  },
  created () {},
  mounted() {

  },
  methods: {
      itemClick() {
        // e.preventDefault()
        // e.stopPropagation()
        //   console.log(this.tabBarItemPath);
          if(this.$route.path!=this.tabBarItemPath) {
              this.$router.push(this.tabBarItemPath)
          }
      }
  },
}

</script>
<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-weight: 700;
    color: black;
    margin-bottom: 2px;
}
.tab-bar-item img {
    text-align: center;
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 1px;
}
.active {
    color: red;
}
</style>
