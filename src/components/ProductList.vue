<template>
    <div id="ProductList">
        <div class="left_box">
            <h3>价格</h3>
            <ul>
              <li>100~300元</li>
              <li>300元以上</li>
            </ul>
            <h3>英雄</h3>
            <ul>
                <li v-for="(item,i) of leftList" :key="i">
                    {{item.tag}}
                </li>
            </ul>
        </div>
        <div class="right_product">
            <h1>{{title}}</h1>
            <div class="product_item">
                <div v-for="(item,i) of products" :key="i">
                    <router-link :to="{path:'/product',query:{pid:item.id,classify:classify}}">
                        <img :src="item.img_url" alt="">
                        <p class="productTitle">{{item.title}}</p>
                        <span class="price">￥{{parseInt(item.price).toFixed(2)}}</span>
                    </router-link>
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"",
            leftList:[{tag:"上单"},{tag:"中单"},{tag:"ADC"},{tag:"辅助"},{tag:"打野"},{tag:"坦克"},{tag:"法师"},{tag:"射手"},{tag:"刺客"}],
            products:"",
            pageSize:7,
            classify:this.$route.query.classify,
        }
    },
    methods:{
        getProcutList(){
            var classify=this.classify=this.$route.query.classify;
            if(classify=="clay")this.title="雕塑手办"
            else if(classify=="plush")this.title="毛绒玩偶"
            else if(classify=="clothes")this.title="男女服饰"
            else {
                this.title="暂未上架 敬请期待"
                this.products=[];
                return;
            }
            var url="http://127.0.0.1:3000/"+classify+"?pageSize="+this.pageSize;
            this.axios.get(url).then(result=>{
               this.products=result.data;
            })
        }
    },
    created(){
        this.getProcutList();
    },
    watch:{
        "$route":"getProcutList"
    }
}
</script>
<style>
    #ProductList{
        display:flex;
    }
    #ProductList .left_box li{
        margin:1rem 0;
        font-size: 15px;
        background:rgba(225,222,225,0.3)
    }
    #ProductList .left_box li:hover{
        text-decoration:underline;
        cursor:pointer;
    }
    #ProductList .left_box li:active{
        color:red;
    }
    #ProductList .left_box{
        width:15rem;
        text-align: center;
    }
    #ProductList .right_product .product_item{
        display:flex;
        justify-content: left;
        flex-wrap:wrap;
        width:80rem;
        text-align: center;
    }
    #ProductList .right_product .product_item img{
        width:20rem;
    }
    #ProductList .right_product .product_item p{
        color:rgba(0,0,0,0.7)!important;
        font-size: 16px;
    }
    #ProductList .right_product .product_item p:hover{
        color:rgba(215,0,0,1)!important;
        text-decoration:underline;
    }
</style>