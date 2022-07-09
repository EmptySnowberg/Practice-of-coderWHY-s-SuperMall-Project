<template>
  <div class="tab-control">
        <div v-for="(item,index) in titles" class="titles" 
        :key="index" 
        :class="{isActive:index == currentIndex}" 
        @click="tabClick(index)">
        <span>{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
        type:Array,
        default() {
            return []
        }
    }
  },
  data () {
    return {
        currentIndex:0
    }
  },
  computed: {},
  created () {},
  mounted() {},
  methods: {
    tabClick(index) {
        this.currentIndex =index
        this.$emit('tabClick',index)
    }
  },
}

</script>
<style>
.tab-control {
    display: flex;
    /* position: sticky;
    top: 0px; */
    /* padding: 5px 0; */
    /* margin-bottom: 5px; */
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
    z-index: 2;
    
}
.tab-control span {
      padding: 5px;
      margin-bottom: 5px;
}
.titles {
    flex: 1;
}
.isActive {
    color: rgb(239, 96, 130);
    
}
.isActive span {
    border-bottom: 3px solid rgb(239, 96, 130);
}
</style>
