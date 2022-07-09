<template>
  <div id="swiper" >
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <slot></slot>
    </div>
    <!-- 设置小圆点 -->
    <div class="indicator" v-show="swiperCount>1">
      <slot name="indicator">
        <div v-for="(index) in swiperCount" :key="index" class="dots" :class="{isActive:index==currentIndex}">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props:{
    transitionTime:{
        type:Number,
        default:300
      }
  },

  data () {
    return {
      swiperCount:0,
      swiperStyle:{},
      swiperItemWidth:0,
      currentIndex:1,
      flag:false,
    }
  },
  computed: {},
  created () {
    // setTimeout(() => {
    //   this.handleDOM()
    //   this.setAutoPlay() 
   
    // },100) 
  },
  mounted() { 
    // html挂载后，延迟一定时间操作DOM
    setTimeout(() => {
      this.handleDOM()
      this.setAutoPlay() 
   
    },100) 

  },
  methods: {
    handleDOM() {
      // 获取DOM元素
      let swiper = document.querySelector('.swiper')
      let swiperItems = swiper.querySelectorAll('.swiper-item')
      // 获取初始图片的数量
      this.swiperCount = swiperItems.length

      // 获取第一张轮播图加到图片序列最后,获取最后一张轮播图加到图片序列最前  
      if(this.swiperCount>1) {
        let firstItem = swiperItems[0].cloneNode(true)
        let lastItem = swiperItems[this.swiperCount-1].cloneNode(true)
        swiper.appendChild(firstItem)
        swiper.insertBefore(lastItem,swiperItems[0])

      // 获取swiper（一张图片）的宽度，并将swiper.style赋值给swiperStyle
        this.swiperItemWidth = swiper.offsetWidth
        this.swiperStyle = swiper.style

      // 让图片显示初始的第一张
        this.setTransform(-this.swiperItemWidth)
      }

    },

    // 设置滚动功能
    setTransform(transDistance) {
        this.swiperStyle.transform = 'translateX('+transDistance+'px)'
    },

    // 设置自动播放
    setAutoPlay() {
      this.timer = setInterval(() => {
          this.currentIndex++
          // this.howToTrans()
          this.swiperStyle.transition = 'all '+this.transitionTime+'ms'
          // console.log(this.currentIndex);
          this.setTransform(-this.currentIndex*this.swiperItemWidth)
          this.howToTrans()
      },2000)
    },

    // 设置无缝滚动的规则
    howToTrans() {
          // setTimeout(() => {
          //   this.swiperStyle.transition = 'none'
          //   if(this.currentIndex>=this.swiperCount+1) {
          //   this.currentIndex = 1
          //   // this.swiperStyle.transition = 'none'
          //   this.setTransform(-this.currentIndex*this.swiperItemWidth)
          // } else if(this.currentIndex<=0) {
          //   this.currentIndex = this.swiperCount
          //   // this.swiperStyle.transition = 'none'
          //   this.setTransform(-this.currentIndex*this.swiperItemWidth)
          // }
          // },this.transitionTime)

          // 尽快让currentIndex变化，让无缝滚动时小圆点也能及时变化
            if(this.currentIndex>=this.swiperCount+1) {
              this.currentIndex = 1
            } else if(this.currentIndex<=0) {
              this.currentIndex = this.swiperCount
            }
              setTimeout(() => {
                  this.swiperStyle.transition = 'none'   
                  this.setTransform(-this.currentIndex*this.swiperItemWidth)                 
              },this.transitionTime)
            

    },
    // 设置touchStart
    touchStart(e) {
      clearInterval(this.timer)
      this.startX = e.targetTouches[0].pageX
    },
    
    // 设置touchMove
    touchMove(e) {
      this.moveX = e.targetTouches[0].pageX - this.startX
      this.scrollX = -this.currentIndex*this.swiperItemWidth + this.moveX 
      this.setTransform(this.scrollX)
      // 手指移动过再进行下一步touchend的结果
      this.flag = true
      // 阻止浏览器的默认滚动屏幕的行为
      e.preventDefault()

    },
    
    // 设置touchEnd
    touchEnd(e) {
      if(this.flag) {
        if(Math.abs(this.moveX)>0.15*this.swiperItemWidth) {
          if(this.moveX>0) {
            this.currentIndex--
          } else {
            this.currentIndex++
          }
          this.swiperStyle.transition = 'all '+this.transitionTime+'ms'
          this.setTransform(-this.currentIndex*this.swiperItemWidth)
        } else {
          // 如果移动距离小就回弹
          this.swiperStyle.transition = 'all '+this.transitionTime+'ms'
          this.setTransform(-this.currentIndex*this.swiperItemWidth)
        }
      }
      // 校正位置(还能解决手指拖动有延时的感觉，原因未知)
      this.howToTrans()

      // 手指移动结束后重启定时器
      this.setAutoPlay()
    },
  },
  destroyed() {
    // clearInterval(this.timer)
  }
}

</script>
<style>
#swiper {
    overflow: hidden;
    position: relative;
}
.swiper {
    display: flex;
}
.indicator {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 10px;

}
/* 这只滚动的小圆点的大小 */
.indicator .dots {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 4px 4px;
  background-color: rgb(250, 250, 250);
}
.indicator .isActive {
  width: 14px;
  background-color: rgb(245, 46, 6);
  /* transition: all .3s; */
}
</style>
