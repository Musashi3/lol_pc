<template>
  <div id="lol_home">
        <!-- 轮播图 -->
         <mt-swipe :auto="2500">
            <mt-swipe-item v-for="(item,i) of bannerList" :key="i">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
         </mt-swipe>
        <!-- 商品展示 -->
        <div class="showProduct">
          <h3 class="hotText">热销商品</h3>
            <ul>
              <li v-for="(item,i) of showList" :key="i">
                 <div>
                     <img :src="item.img_url" alt="">
                     <p>{{item.title}}</p>
                     <span>￥:{{parseInt(item.price).toFixed(2)}}</span>
                 </div>
              </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList:[],
      showList:[],
      show:"",
    }
  },
  methods:{
    //获取轮播图列表
    getBannerList(){
      var url="http://127.0.0.1:3000/banner";
      this.axios.get(url).then(result=>{
       // console.log(result.data[3]);
        this.bannerList=result.data;
        console.log(result.data);
      })
     },
    //获取展示商品列表
    getShowList(){
      var url="http://127.0.0.1:3000/show";
      this.axios.get(url).then(result=>{
        this.showList=result.data;
      })
    }
  },
  created(){
    this.getBannerList();
    this.getShowList();
  }
}
</script>
<style>
 .mint-swipe{
    width:100%;
    height:636px!important;
    text-align:center;
  }
  .mint-swipe img{
    width:100%;
    height:100%;
  }
  .hotText{
    position:absolute;
    left:5rem;
    z-index: 10;
  }
  .showProduct {
    width:100%
  }
  .showProduct ul{
    margin:2rem 0;
    display:flex;
    list-style-type: none;
    text-align: center;
    width:100%;
  }
  .showProduct ul img{
    width:80%;
    height:80%;
  }
  .showProduct ul img:hover{
    transform:scale(1.1)
  }
  .showProduct ul p{
    color:#333;
    font-size:16px;
  }
  .showProduct ul span{
    color:#f00
  }
</style>
