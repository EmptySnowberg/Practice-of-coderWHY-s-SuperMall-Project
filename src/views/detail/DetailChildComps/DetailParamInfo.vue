<template>
  <div class="param-info" v-if="Object.keys(detailParamsInfo).length!=0 && detailParamsInfo!=undefined">
    <h3>我是尺码</h3> 
    <table class="tableParmas">
        <tr v-for="(item,index) in detailParamsInfo.infos" :key="index">
            <td class="item-key">{{item.key}}</td>
            <td class="item-value">{{item.value}}</td>
        </tr>
    </table>
    <table>
        <tr v-for="(tr,index) in detailParamsInfo.sizes[0]" :key="index">
            <td v-for="(td,index) in tr " :key="index">{{td}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    detailParamsInfo: {
        type:Object,
        default() {
            return {}
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
h3 {
    text-align: center;
}
 .param-info {
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .item-key {
    width: 85px;
  }
.item-value {
    color: red;
}
</style>
