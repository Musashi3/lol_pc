import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import qs from 'qs'

Vue.config.productionTip = false
Axios.defaults.withCredentials=true;
Vue.prototype.qs=qs
Vue.prototype.axios=Axios
Vue.prototype.watchStorage=function(key){
  var SgetItem=sessionStorage.getItem(key);
  //判断是否登录
  if(sessionStorage[key]==null){
    return "请登录";
  }
  //判断是否为字符串
  if(typeof SgetItem=="string"){
     return JSON.parse(SgetItem)
  }else{
     return SgetItem;
  }
}
//引入轮播图组件和样式
import {Swipe,SwipeItem} from "mint-ui"
import'../lib/css/style.css'
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
