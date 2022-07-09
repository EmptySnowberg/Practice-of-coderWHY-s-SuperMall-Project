export default {
    cartListNum(state) {
        return state.cartList.length
    },
    checkedProductNum(state) {
        return state.cartList.filter(item => {return item.checked}).reduce((preVaule,item) => {return preVaule+item.count},0)
         
    },
    totalPrice(state) {
        return '￥'+ state.cartList.filter(item => {return item.checked}).reduce((preVaule,item) => {return preVaule+item.count*item.realPrice},0).toFixed(2)
    },
    // isAll(state,getters) {
    //     if(getters.cartListNum == 0) {
    //         return function(stayCheck) {
    //             return stayCheck
    //         }
    //     } else {
    //         return state.cartList.some(item => item.checked == false)
    //     }
    // }
}