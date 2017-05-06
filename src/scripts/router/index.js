import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scirpts/components/index/Index.vue'
import Login from '@/scirpts/components/login/Login.vue'
import List from '@/scirpts/components/list/List.vue'
import Detail from '@/scirpts/components/details/Detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Index',
      	component: Index,
      	children: [
            {
        		path:'/tabulation',
        		component: tabulation
            },
            {
            	path:'/activity',
        		component: activity
            }，
            {
            	path:'/Login',
        		component: Login
            }
      	]
    },
    {
		path:'/List',
		component: List
    },
    {
    	path:'/Detail',
		component: Detail
    }
  ]
})
