<template>
    <div id="productPage">
        <div class="product_content">
        <ul>
            <li><img :src="product.img_url" alt="" class="my-small"></li>
            <li><img :src="product.img_url" alt="" class="my-small"></li>
            <li><img :src="product.img_url" alt="" class="my-small"></li>
            <li><img :src="product.img_url" alt="" class="my-small"></li>
        </ul>
        <div class="show">
            <img :src="product.img_url" alt="" class="product1img my-big">
            <img src="../../static/img/products/new.png" alt="" class="new">
            <div class="yellowPlank" :class="isShow" :style="{left:x/2+'px',top:y/2+'px'}"></div>
        </div>
        <div class="opacityPlank" @mouseenter="magnifierShow" @mouseleave="noShow" @mousemove="magnifier"></div>
        <div class="plank" :class="isShow" :style="{backgroundImage:'url('+product.img_url+')',backgroundRepeat:'no-repeat',backgroundPositionX:-x+'px',backgroundPositionY:-y+'px'}"></div>
        <div class="magnifierImg"></div>
        <div class="price">
            <h1>{{product.title}}</h1>
            <p>现价：<span class="momeny">￥{{parseInt(product.price).toFixed(2)}}</span></p>
            <p class="case">
                <span>最近销量1638</span>
                <span>累计评价 39</span>
                <span>累计收藏宝贝 36</span>
            </p>
            <p class="count">数量：
                <button @click="removeCount">-</button>
                <input type="text" v-model="count">
                <button @click="addCount">+</button>
                （库存充足）
            </p>
            <div class="buy_select">
                <button class="now_buy" @click="buy">立即购买</button>
                <button class="add_car" @click="addBuycar">加入购物车</button>
                <span><img src="../../static/img/products/mylove.jpg" alt="">收藏宝贝</span>
            </div>
            <div class="promise">
            <span>7</span>七天无理由退货
            <span>官</span>100%官方正品
            <span>邮</span>全场每单满199元包邮
            </div>  
        </div>
    </div>
    <div class="productimgs">
            <div class="buttons">
             <a href="#" class="">商品详情</a>
             <a href="#">用户点评</a>
             <a href="#">售后服务</a>
            </div> 
            <!-- 商品展示 -->
            <div class="imgs">
                <img src="../../static/img/products/0.jpg" alt="">
                <img src="../../static/img/products/1.jpg" alt="">
                <img src="../../static/img/products/2.jpg" alt="">
                <img src="../../static/img/products/3.jpg" alt="">
                <img src="../../static/img/products/4.jpg" alt="">
                <img src="../../static/img/products/5.jpg" alt="">
                <img src="../../static/img/products/6.jpg" alt="">
                <img src="../../static/img/products/7.jpg" alt="">
                <img src="../../static/img/products/8.jpg" alt="">
                <img src="../../static/img/products/9.jpg" alt="">
                <img src="../../static/img/products/10.jpg" alt="">
            </div>
         </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                product:"",
                count:1,
                isShow:"",
                plankMove:"",
                x:"",
                y:"",
                b:{
                    x:-this.x+"px",
                    y:-this.y+"px"
                }
            }
        },
        methods:{
            getProduct(){
                var pid=this.$route.query.pid;
                var classify=this.$route.query.classify;
                var url="http://127.0.0.1:3000/product?classify="+classify+"&id="+pid;
                this.axios.get(url).then(result=>{
                    this.product=result.data[0];
                    console.log(this.product)
                })
            },
            removeCount(){
                if(this.count>1){
                    this.count--;
                }else{
                    this.count=1;
                }
            },
            addCount(){
                this.count++;
            },
            buy(){
                alert('暂未实现该功能');
            },
            addBuycar(){
                var product=this.product
                var url="http://127.0.0.1:3000/addcart?title="+product.title+"&price="+product.price+"&count="+this.count+"&img_url="+product.img_url;
                this.axios.get(url).then(result=>{
                    if(result.data.code==-1){
                        alert("请登录")
                    }else{
                        alert("添加成功")
                    }
                })
            },
            magnifierShow(e){
                this.isShow="magnifierShow";
            },
            noShow(){
                this.isShow="";
            },
            magnifier(e){
                var x=e.offsetX;
                var y=e.offsetY;
                console.log(x,y)
                if(x<0)x=0;
                if(y<0)y=0;
                this.x=x;this.y=y;
            }
        },
        created(){
            this.getProduct();
        }
    }
</script>
<style>
#productPage{
    margin:0 auto;
}
#productPage .breadclumb{
    width:100%;
    border:1px solid #ccc;
    height:50px;
    margin-top:-20px;
    line-height: 50px;
}
#productPage ul{
    list-style-type:none;
}
#productPage .breadclumb>ul{
    display:flex;
    margin-left:50px;
    list-style-type:square;
}
#productPage .breadclumb li{
    margin-left:20px;
}
#productPage .breadclumb a{
    text-decoration: none;
    color:#666;
}
#productPage .product_content{
    margin-left:400px;
    display:flex;
}
#productPage .product_content ul{
    margin-top:50px;
}
#productPage .product_content>ul img{
    width:46px;
    height:44px;
}
#productPage .product_content>ul img:hover{
	cursor:pointer;
}
#productPage .show{
    position:relative;
    z-index:50;
}
#productPage .product1img{
    width:30rem;
    height:440px;
}
#productPage .new{
    width:79px;
    height:72px;
    position:absolute;
    top:30px;
    left:30px;
}
#productPage .price{
    margin-top:2rem;
    margin-left:5rem;
}
#productPage .price p{
    margin:50px 0;
}
#productPage .momeny{
    font-size:30px;
    font-weight: bold;
    color:#666;
}
#productPage .case>span{
    margin-right:80px;
    font-size:14px;
}
#productPage .count,.buy_select{
    font-size:14px;
}
#productPage .count button{
    width:20px;
    height:40px;
}
#productPage .count input{
    width:3rem;
    height:2.5rem;
    text-align:center!important;
    line-height:2.5rem;
    color:#000!important;
}
#productPage .buy_select button{
    height:48px;
    width:158px;
    margin-right:20px;
    margin-bottom:20px;
}
#productPage .now_buy,.add_car{
    background:#ed3029;
    border:none;
    font-size:20px;
    color:#fff;
}
#productPage .add_car{
    background:#00a989;
}
#productPage .promise span{
    margin-top:20px;
    width:14px;
    text-align: center;
    color:#fff;
    font-size:14px;
    background:#ed3029;
    margin:0 10px;
}
#productPage .productimgs{
    margin:2rem 25rem;
    border:1px solid #ddd;
    width:70rem!important;
}

#productPage .buttons{
    border:1px solid #ddd;
}
#productPage .buttons>a{
    display: inline-block;
    border-right:1px solid #ddd;
    width:10rem;
    height:3rem;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color:rgba(0,0,0,0.7);
}
#productPage .buttons>a:active{
    background:#222;
    color:#fff;
}
#productPage .imgs{
    margin-left:10rem;
}
#productPage .yellowPlank{
    position:absolute;
    top:0;
    left:0;
    background:rgba(255,255,0,0.3);
    width:240px;
    height:220px;
    display:none;
}
#productPage .plank{
    width:480px;
    height:440px;
    position:absolute;
    left:960px;
    z-index:80;
    background-size:960px 880px;
    display:none;
}
.magnifierShow{
    display:block!important;
}
#productPage .opacityPlank{
    width:480px;
    height:440px;
    position:absolute;
    z-index:80;
    left:28rem;
}
</style>