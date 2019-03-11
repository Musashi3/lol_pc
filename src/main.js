import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import qs from 'qs'

Vue.config.productionTip = false
Axios.defaults.withCredentials=true;
Vue.prototype.qs=qs
Vue.prototype.axios=Axios
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
