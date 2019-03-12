import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import User from '../components/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/Home"},
    {path:"/Home",component:Home},
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/user",component:User}
  ]
})
