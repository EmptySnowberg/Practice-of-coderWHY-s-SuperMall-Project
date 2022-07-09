<template>
  <div class="detail-comment" v-if="detailComment!=null">
    <h3>我是一个评论<br /> </h3>
    <p>{{detailComment.content}}</p>
    <div class="commentDate">{{date}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    detailComment:{
        type:Object,
        default() {
            return {}
        }
    }
  },
  data () {
    return {}
  },
  computed: {
    date() {
        const date = new Date(this.detailComment.created*1000)
        return date
    }
  },
  created () {},
  mounted() {
  },
  methods: {},
}

</script>
<style scoped>
.detail-comment {
    padding: 10px 0;
    margin-top: 20px;
    /* margin-bottom: 20px; */
    text-align: center;
    border-top: 5px solid rgba(0,0,0,.1);
    border-bottom: 5px solid rgba(0,0,0,.1);
}
</style>
