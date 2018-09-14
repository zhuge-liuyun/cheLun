import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Index =()=>import('../components/Index.vue')
const Type =()=>import('../components/Type.vue')
const Quotation = () => import('../components/Quotation.vue')
const Img=()=>import('../components/Img.vue')
const Detail=()=>import('../components/Detail.vue')
const Color=()=>import('../components/Color.vue')
const makeList=()=>import('../components/compon/makeList.vue')

const detailcrole=()=>import('../components/compon/detailcrole.vue')
const imgClore=()=>import('../components/compon/img.vue')
//登录页
const Login=()=>import('../components/Login.vue')
//城市列表
const city=()=>import('../components/compon/city.vue')
Vue.use(Router)

export default new Router({
   mode: 'hash',
   routes: [
    {
      path: '/index',
      component:Index,
    },
   { 
     path: '/Type',
     component:Type
     }, {
       path: '/Quotation',
       component: Quotation
     }, {
       path: '/Img',
       component: Img
     }, {
       path: '/Detail',
       component: Detail
     }, {
       path: '/Color',
       component: Color
     }, {
       path: '/makeList',
       component: makeList
     }, {
       path: '/detailcrole',
       component: detailcrole
     }, {
       path: '/imgClore',
       component: imgClore
     }, {
       path: '/Login',
       component: Login
     }, {
       path: '/city',
       component: city
     }, {
      path:'*',
      redirect:'/index'
    }
  ]
})
