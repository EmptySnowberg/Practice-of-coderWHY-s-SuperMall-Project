<template>
  <div class="toast" v-if="isShow">
    <div class="toast-content">
        {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    isShow:{
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        default: ''
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
.toast-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    padding: 6px 10px;
    border-radius: 20px;
    background-color: rgba(0,0,0,.5);
    font-size: 16px;
    color: rgb(246, 248, 250);
    z-index: 999;
}
</style>
