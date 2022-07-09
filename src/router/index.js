import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title: '首页'
    }
    // children: [
    //   {
    //     path:'/detail/:iid',
    //     component:Detail
    //   }
    // ]
  },
  {
    path: '/category',
    name: 'Category',
    component:Category,
    meta:{
      title: '商品分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart,
    meta:{
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile,
    meta:{
      title: '档案'
    }
  },
  {
    path:'/home/detail/:iid',
    name:'Detail',
    component:Detail,
    meta:{
      title: '商品目录'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 设置全局导航守卫
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
