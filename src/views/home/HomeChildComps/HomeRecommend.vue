<template>
  <div class="home-recommend"> 
    <div v-for="(item,index) in recommends" :key="index" class="recom-content">
        <div class="recom-img">
            <a :href="item.link">
                <img :src="item.image" alt=""/>
            </a>
        </div>
        <div class="recom-text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends:{
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
  methods: {},
}

</script>
<style scoped>
.home-recommend {
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 10px solid rgba(204,204,204,.3);
}
.recom-content {
    width: 20%;
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
}
.recom-content img {
    width: 75%;
    
}
.recom-text {
    margin-top: 10px;
    font-size: 12px;
}

</style>
