import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/login',
      name: 'login',
      component: Login,
      meta: {isPublic: true}
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: "/categories/edit",component: CategoryEdit,meta:{title:'分类/编辑'}}
      ]
    },{
      path:'/register',
      name:'register',
      component: Register,
      meta: {isPublic:true}
    },
    
  ]
})

// router.beforeEach((to,from,next) => {
//     console.log(to)
//     if(!to.meta.isPublic && !localStorage.token){
//       return  next('/login')
//     }
    
//     next()
// })

export default router