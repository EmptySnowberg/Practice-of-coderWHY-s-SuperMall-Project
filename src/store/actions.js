import Vue from 'vue'
import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutation-types'

export default  {
    addCart(context,payload) {
      let oldProduct = context.state.cartList.find((item) => {
        return item.iid === payload.iid
      })

      if(oldProduct) {
        // 涉及一个浅拷贝知识点，改变oldProduct后，赋值的源对象内部也会变更
        context.commit(ADD_COUNT,oldProduct)
      } else {
        // payload.count = 1 //此方法无法实现响应式效果
        //【重要】如果要实现响应式的效果，使用Vue.set()方法，给新加入的属性匹配一对getter和setter
        Vue.set(payload,'count',1)
        // payload.checked = true
        Vue.set(payload,'checked',true)
        context.commit(ADD_TO_CART,payload)
      }
    }
  }