<template>
    <div id="lol_header">
        <!-- 头部组件 -->
        <div class="header-item">
            <img src="../../../static/img/index/logo.png">
            <div class="header_menu">
                <span style="color:#ccc" @click="jump">{{isloginText}}</span>
                <div class="item_buycar" @click="jumpCar">
                        <img src="../../../static/img/index/buy_car.png" alt="">
                        <span>购物车</span>
                        <span class="carNum">0</span>
                </div>
                <div class="item_kefu">
                    <img src="../../../static/img/index/kefu.png" alt="">
                    <span>客服咨询</span>
                </div>
                <span>微信商城</span>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="nav">
            <div class="nav-item">
                <ul>
                    <li>
                    <router-link to="/" style="color:#fff">
                        商城首页
                    </router-link>    
                    </li>
                    <li @mouseenter="enter(i+1)" @mouseleave="leave" v-for="(item,i) of navlist" :key="i">
                        <router-link :to="{path:'/productList',query:{classify:item.classifay}}">
                            {{item.nName}}
                        </router-link>
                        <div class="nav-div" :class="{show:show==i+1}">
                            <ul>
                                <li v-for="(item,i) of item.list" :key="i">
                                    <router-link to="">
                                    {{item.item}}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="search">
                <input type="text" placeholder="KDA阿狸">
                <img src="../../../static/img/index/search.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isloginText:"请登录",
            user:"",
            show:"",
            navlist:[
                {nName:"雕塑手办",classifay:"clay",list:[{item:"大型雕塑"},{item:"中型雕塑"},{item:"限定手办"},{item:"手办"}]},
                {nName:"毛绒玩偶",classifay:"plush",list:[{item:"玩偶"},{item:"帽子"}]},
                {nName:"男女服饰",classifay:"clothes",list:[{item:"卫衣夹克"},{item:"T恤"}]},
                {nName:"LPL周边",list:[{item:"英雄海报"},{item:"画册"}]},
                {nName:"珠宝首饰",list:[{item:"队服T恤"},{item:"队服裤子"}]},
                {nName:"其他",list:[{item:"鼠标垫"},{item:"其他"}]}
                ]
        }
    },
    methods:{
        enter(num){
            this.show=num;
        },
        leave(){
            this.show="";
        },
        isLogin(){
         //this.watchStorage("uname")
         var wS=this.watchStorage
         if(wS("userData").uname!=undefined){
            this.isloginText="欢迎您！"+wS("userData").uname;
         }
         else{
             this.isloginText="请登录"
         }
        },
        jump(){
            if(this.isloginText=="请登录"){
                this.$router.push("/login")
            }else{
                this.$router.push("/user")
            }
        },
        jumpCar(){
            this.$router.push("/buycar")
        }
    },
    watch:{
        "$route":'isLogin'
    },
}
</script>
<style>
    #lol_header{
        color:#ccc;
        width:100%;
        padding:0px 0px;
    }
    #lol_header .header-item{
        display:flex;
        justify-content: space-between;
        background:#000;
    }
    #lol_header .header-item .header_menu{
        display:flex;
        align-items: center;
        justify-content:space-around;
    }
    .header_menu>*{
        margin:0 10px;
    }
    .header_menu>*:hover{
        cursor: pointer;
    }
    .item_buycar,.item_kefu{
        display:flex;
        align-items: center;
    }
    .item_buycar .carNum{
        color:#fff;
        background:#f00;
        border-radius:60%;
        width:15px;
        text-align: center;
    }
    .nav,.nav .nav-item ul,.search{
        display:flex;
        list-style: none;
        align-items:center;
    }
    .nav{
        justify-content: space-between;
        background:#222;
    }
    .nav-item ul li{
        margin:0 15px;
        font-size:17px;
        padding:10px;
        position: relative;
    }
    .nav-item ul li a{
        color:#fff;
    }
    .nav-item ul li a:hover{
        color:orangered!important;
        font-weight: bolder;
        cursor: pointer;
    
    }
    .nav-div{
        position: absolute;
        background:#222;
        width:100px;
        left:0;
        display:none;
    }
    .nav-div ul{
        display:flex;
        flex-direction: column;
    }
    .nav-div ul li{
        border-bottom:1px solid orangered;
        font-size:12px;
    }
    .show{
        display:block!important;
        z-index:1000;
    }
    .search input{
        width:15rem!important;
        height:1.7em!important;
        background:#333!important;
        border:1px solid #666!important;
        margin-top:10px!important;
    }
</style>