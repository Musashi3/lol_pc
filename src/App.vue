<template>
  <div id="app">
    <mt-header></mt-header>
    <router-view></router-view>
    <mt-footer></mt-footer>
  </div>
</template>

<script>
import Header from './components/sub/Header.vue';
import Footer from './components/sub/Footer.vue';
export default {
  data(){
    return {}
  },
  components:{
    "mt-header":Header,
    "mt-footer":Footer,
  }
}
</script>

<style>
*{
  margin:0;padding:0;list-style:none;
}
body{
  background:#fff!important;
}
</style>
