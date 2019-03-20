<template>
    <div id="buyCarPage">
        <div v-if="isLogin" class="noCar">购物车空空如也Orz 快登录去添加商品吧！</div>
        <div v-else>
            <h1>购物车({{buyCarList.length}})</h1>
            <div class="buy_car" v-for="(item,i) of buyCarList">
                <div class="product1">
                    <input type="checkbox" class="check">
                    <img :src="item.img_url" alt="" class="productImg">
                    <div class="product1_content">
                        <p>{{item.title}}</p>
                        <span>1个</span><br>
                        <span>单价：￥{{parseInt(item.price).toFixed(2)}}</span>
                    </div>
                    <div class="count">
                        <p>小计：￥{{parseInt(item.price).toFixed(2)}}</p>
                        <div>
                            <button @click="removeCount" :data-i="i">-</button>
                            <input type="text" value="1" v-model="item.count">
                            <button @click="addCount" :data-i="i">+</button>
                        </div>
                    </div>    
                </div>
            </div>
            <hr>
            <div class="total">
                <div class="total_operation">
                    <input type="checkbox" class="check" id="checkALL">全选
                    <a href="#">删除</a>
                    <span>|</span>
                    <span>共两件商品，已选择2件</span>
                </div>
                <div class="close">
                    应付（不含运费）：<span>￥{{parseInt(totalPrice).toFixed(2)}}</span>
                    <button>结算</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isLogin:true,
            buyCarList:[],
            totalPrice:"",
        }
    },
    methods:{
        getBuyCarList(){
            var url="http://127.0.0.1:3000/buyCar";
            this.axios.get(url).then(result=>{
                if(result.data.code==-1){
                    this.isLogin=true;
                }else{
                    this.buyCarList=result.data
                    console.log(result.data)
                    this.isLogin=false;
                }
            })
        },
        addCount(e){
           var i=e.target.dataset.i
           this.buyCarList[i].count++
        },
        removeCount(e){
            var i=e.target.dataset.i
            var list=this.buyCarList
            if(list[i].count>1){
                list[i].count--;
            }else{
                list[i].count=1;
            }
        },
        
    },
    created(){
        this.getBuyCarList();
    },
    watch:{
        buyCarList:{
            handler:function(val,oldVal){
                var price=0;
                val.forEach(item=>{
                    price+=(item.price*item.count)
                });
                this.totalPrice=price;
            },
            deep:true,
            immediate:true
        }
    }
}
</script>
<style>
    #buyCarPage .noCar{
        margin:10rem 0;
        text-align:center;
        font-weight:bolder;
        font-size:20px;
    }
    #buyCarPage h1{
    text-align:center;
    }
    #buyCarPage .buy_car{
        display:flex;
        min-width:1800px;
        margin:50px 400px;
    }
    #buyCarPage .product1{
        height:150px;
        display:flex;
    }
    #buyCarPage .buy_car img{
        width:10rem;
        height:10rem;
    }
    #buyCarPage .product1 input.check{
        margin-top:70px;
    }
    #buyCarPage .check{
        transform:scale(1.5)
    }
    #buyCarPage .product1_content{
        position:relative;
        top:50px;
    }
    #buyCarPage .product1_content span{
        color:#aaa;
    }
    #buyCarPage .count{
        margin-left:500px;
    }
    #buyCarPage .count>p,.close span{
        color:orangered;
        font-weight: bold;
        margin-bottom:80px;
    }
    #buyCarPage .count button,.count input{
        height:2rem;
        width:3rem;
        border:#ccc;
        text-align:center;
    }
    #buyCarPage hr{
        width:1200px;
        margin: 0 auto;
    }
    #buyCarPage .total{
        display:flex;
        min-width:1800px;
        margin:20px 300px;
    }
    #buyCarPage .total_operation{
        margin-top:15px;
        width:300px;
        margin-left:100px;
    }
    #buyCarPage .total_operation a{
        text-decoration: none;
        color:#000;
    }
    #buyCarPage .close{
        margin-left:300px;
    }
    #buyCarPage .close>button{
        width:200px;
        height:50px;
        background:orangered;
        border:none;
        color:#fff;
        font-size:20px;
    }
</style>