import Vue from 'vue'
import Router from 'vue-router'
import Vip from '@/components/page/vip'
import Echart from '@/components/page/echart'
import Activity from '@/components/page/activity'
import Login from '@/components/page/login'
import leftNav from '@/components/common/leftNav'
import mainHeader from '@/components/common/mainHeader'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },

    {
      path: '/vip',
      name: 'vip',
      components:{
        header:mainHeader,
        leftnav:leftNav,
        default:Vip
      }
    },

    {
      path: '/',
      name: 'chart',
      components:{
        header:mainHeader,
        leftnav:leftNav,
        default:Echart
      }
    },

    {
      path:'/activity',
      name:'activity',
      components:{
        header:mainHeader,
        leftnav:leftNav,
        default:Activity
      }
    }

  ]
})
