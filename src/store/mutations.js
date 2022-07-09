import {
    ADD_COUNT,
    ADD_TO_CART
} from './mutation-types'

export default  {
    // mutations唯一的目的就是修改state中的状态
    // mutations中的每个方法都尽可能完成的事件单一一些
        [ADD_COUNT](state,payload) {
          payload.count++
        },
        [ADD_TO_CART](state,payload) {          
          state.cartList.push(payload)
        },
        seleClick(state,payload) {
          let sele = state.cartList.find(item => item.iid === payload)
          sele.checked = !sele.checked
        },
        
}