<template>
    <div id="userPage">
        <div class="menu-top"></div>
        <!-- 主体内容 -->
        <div class="user_member">
            <!-- 左侧导航栏 -->
            <div class="left_nav">
                <ul>
                    <li>
                        <router-link to="/buycar">
                             我的购物车
                        </router-link>
                    </li>
                    <li v-for="(key,i) of leftNav" :key="i">
                        <a href="javascript:;"  @click="showMenu" :data-idx="i+1">
                            {{key.item}}
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 右侧 -->
            <div class="right_mem">
                <mt-order v-if="show==1"></mt-order>
                <mt-favor v-else-if="show==2"></mt-favor>
                <mt-coupon v-else-if="show==3"></mt-coupon>
                <mt-add v-else-if="show==4"></mt-add>
                <mt-subscribe v-else-if="show==5"></mt-subscribe>
                <mt-conduct v-else-if="show==7"></mt-conduct>
                <mt-info v-else></mt-info>
            </div>
        </div>
    </div>
</template>
<script>
    import AddressList from './userComponents/Addresslist.vue'
    import Conduct from './userComponents/Conduct.vue'
    import Favorlist from './userComponents/Favorlist.vue'
    import Info from './userComponents/Info.vue'
    import Couponlist from './userComponents/Couponlist.vue'
    import OrderList from './userComponents/OrderList.vue'
    import Subscribelist from './userComponents/Subscribelist.vue'
    export default {

        data(){
            return {
                show:-1,
                leftNav:[{item:"我的订单"},{item:"商品收藏"},{item:"福利中心"},{item:"收货地址"},{item:"订阅中心"},{item:"个人中心"},{item:"官方公告"}],
            }
        },
        methods:{
            showMenu(e){
                this.show=e.target.dataset.idx;
            }
        },
        components:{
            "mt-add":AddressList,
            "mt-conduct":Conduct,
            "mt-favor":Favorlist,
            "mt-info":Info,
            "mt-coupon":Couponlist,
            "mt-order":OrderList,
            "mt-subscribe":Subscribelist
        }
    }
</script>
<style>
    #userPage{
        margin:5rem 0;
        position:relative;
        width:75rem;
        text-align:center;
        margin:0 auto;
    }
    #userPage .menu-top{
        background-image:url("../../static/img/mem_top.jpg");
        height:7rem;
        width:75rem;
        background-repeat:no-repeat;
        position:absolute;
        margin:0 auto;
        left:0;
        right:0;
    }
    #userPage .user_member{
        display:flex;
        padding:7rem 2rem;
    }
    .user_member .left_nav{
        background:rgba(240,240,240,0.5);
        height:100%;
        width:10rem;
        margin-top:-1.3rem;
        margin-left:-2rem;
    }
    .user_member .left_nav ul{
       list-style-type:none;
    }
    .user_member .left_nav ul li{
        margin:2rem 0 0 0;
        width:100%;
        height:2rem;
        border-bottom:1px solid rgba(0,0,0,0.5)
    }
    .user_member .left_nav ul a{
        color:#333;
        font-size:15px;
    }
    .user_member .right_mem{
        margin-left:1rem;
        width:100%;
        padding:1rem;
    }
</style>