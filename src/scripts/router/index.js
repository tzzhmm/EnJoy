import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index.vue'
import Home from '@/scripts/components/home/Home.vue'
import Tabulation from '@/scripts/components/tabulation/Tabulation.vue'
import Magazine from '@/scripts/components/magazine/Magazine.vue'
import Shopping from '@/scripts/components/shopping/Shopping.vue'
import Login from '@/scripts/components/my/Login.vue'
import List from '@/scripts/components/list/List.vue'
import Detail from '@/scripts/components/detail/Detail.vue'
import Search from '@/scripts/components/search/Search.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Index',
      	component: Index,
        redirect:'/Home',
      	children: [
            {
                path:'/Home',
                component: Home
            },
            {
        		path:'/Tabulation',
        		component: Tabulation
            },
            {
        		path:'/Magazine',
        		component: Magazine
            },
            {
        		path:'/Shopping',
        		component: Shopping
            }
      	]
    },
    {
        path:'/Login',
        component: Login
    },
    {
		path:'/List',
		component: List
    },
    {
    	path:'/Detail/:type',
		  component: Detail
  },
  {
    path:'/Search',
    component:Search
  }
  ]
})
