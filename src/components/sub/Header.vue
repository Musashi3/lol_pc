<template>
    <div id="lol_header">
        <!-- 头部组件 -->
        <div class="header-item">
            <img src="../../../static/img/index/logo.png">
            <div class="header_menu">
                <router-link to="/login"> 
                <span style="color:#ccc">您好，请登录</span>
                </router-link>
                <div class="item_buycar">
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
                    <li @mouseenter="enter(1)" @mouseleave="leave">
                        雕塑手办
                        <div class="nav-div" :class="{show:show==1}">
                            <ul>
                                <li>大型雕塑</li>
                                <li>中型雕塑</li>
                                <li>限定款手办</li>
                                <li>手办</li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseenter="enter(2)" @mouseleave="leave">
                        毛绒玩偶
                        <div class="nav-div" :class="{show:show==2}">
                            <ul>
                                <li>玩偶</li>
                                <li>帽子</li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseenter="enter(3)" @mouseleave="leave">
                        男女服饰
                        <div class="nav-div" :class="{show:show==3}">
                            <ul>
                                <li>卫衣夹克</li>
                                <li>T恤</li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseenter="enter(4)" @mouseleave="leave">
                        LPL周边
                        <div class="nav-div" :class="{show:show==4}">
                            <ul>
                                <li>英雄海报</li>
                                <li>画册</li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseenter="enter(5)" @mouseleave="leave">
                        珠宝首饰
                        <div class="nav-div" :class="{show:show==5}">
                            <ul>
                                <li>队服T恤</li>
                                <li>队服裤子</li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseenter="enter(6)" @mouseleave="leave">
                        其他
                        <div class="nav-div" :class="{show:show==6}">
                            <ul>
                                <li>鼠标垫</li>
                                <li>其他</li>
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
            show:0,
            navlist:[
                {nName:"商城首页"},
                {nName:"雕塑手办",list:[{item:"大型雕塑"},{item:"中型雕塑"},{item:"限定款手办"},{item:"手办"}]},
                {nName:"毛绒玩偶"},
                {nName:"男女服饰"},
                {nName:"LPL周边"},
                {nName:"其他"}
                ]
        }
    },
    methods:{
        enter(num){
            this.show=num;
        },
        leave(){
            this.show="";
        }
    }
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
        color:#fff;
        font-size:17px;
        padding:10px;
        position: relative;
    }
    .nav-item ul li:hover{
        color:orangered;
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
        z-index:10;
    }
    .search input{
        width:15rem!important;
        height:1.7em!important;
        background:#333!important;
        border:1px solid #666!important;
        margin-top:10px!important;
    }
</style>