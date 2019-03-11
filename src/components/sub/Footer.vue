<template>
    <!-- 尾部组件 -->
    <div id="lol_footer">
        <!-- 服务保障 -->
        <div>
            <ul class="footer_fuwubar">
                <li v-for="(item,i) of fuwubar">
                    <span>{{item.fw}}</span>
                    <a href="javascript:;">{{item.fu}}</a>
                </li>
            </ul>
        </div>
        <!-- 服务条款 -->
        <div class="footer_helpbardiv">
            <ul class="footer_helpbar">
                <li v-for="(item,i) of helpbar">
                    <h3>
                        <a href="javascript:;">{{item.tip}}</a>
                    </h3>
                    <a href="javascript:;" v-for="(item2,i) of item.list">{{item2.tip}}</a>
                </li>
            </ul>
        </div>
        <!-- tips -->
        <div class="bottomTips">
            <a href="javascript" v-for="(item,i) of bottomLinks">{{item.tip}}</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            fuwubar:[{fw:"7",fu:"七天无理由退货"},{fw:"正",fu:"100%官方正品"},{fw:"免",fu:"全场每单满199元包邮"}],
            helpbar:[
                {tip:"购物指南",list:[{tip:"账号注册与登录"},{tip:"购买流程介绍"},{tip:"支付方式"},{tip:"常见问题"}]},
                {tip:"配送服务",list:[{tip:"全场满199元免运费"},{tip:"配送范围及运费"},{tip:"配送进度查询"}]},
                {tip:"售后服务",list:[{tip:"七天无理由退换货"},{tip:"退换货流程"},{tip:"商品送错的处理方案"},{tip:"售后服务及投诉"}]},
                {tip:"服务中心",list:[{tip:"售前咨询"},{tip:"售后咨询"},{tip:"客服热线：0755-257278667"},{tip:"售后：service@lolriotmall.qq.com"}]}
                ],
            bottomLinks:[{tip:"关于商城"},{tip:"服务条款"},{tip:"合作伙伴"},{tip:"法律声明"}]
        }
    }
}
</script>
<style>
    #lol_footer{
        margin:6rem auto;
        width:100%;
        position:relative;
    }
    .footer_fuwubar, footer_fuwubar ul{
        display:flex;
        flex-direction: center;
        list-style-type: none;
        position:absolute;
        left:50%;
        margin-left:-465px;
    }
    .footer_fuwubar li{
        width:20rem;
    }
    .footer_fuwubar span{
        display: inline-block;
        text-align: center;
        width:1.5rem;
        height:1.5rem;
        border-radius: 50%;
        background:#f00;
        color:#fff;
        font-weight: bold;
    }
    .footer_fuwubar a{
        color:#333;
        text-decoration: none;
    }
    .footer_fuwubar li:hover,.footer_fuwubar a:hover{
        cursor:text;
    }
    .footer_helpbar{
      position:absolute;
      left:50%;
      margin-left:-480px;
      display:flex;
    }
    .footer_helpbar h3 a{
        color:#333;
        font-weight: normal;
        font-size:17px;
        text-decoration: none;
    }
    .footer_helpbardiv{
      position:absolute;
      width:100%;
      top:5rem;
    }
    .footer_helpbar li{
        display:flex;
        flex-direction: column;
        margin:0 3rem;
    }
    .footer_helpbar li>a{
        color:#666;
        font-size:14px;
        margin:0.2rem 0;
        text-decoration: none;
    }
    .footer_helpbar a:hover{
        text-decoration:underline;
    }
    .footer_helpbar li>a:hover{ 
        color:#aaa;
    }
    .bottomTips{
        position:absolute;
        left:50%;
        text-align: center;
        margin-left:-25rem;
        top:17rem;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        height:3rem;
        width:50rem;
        line-height: 3rem;
    }
    .bottomTips a{
        color:#666;
        margin:1rem;
        font-size:14px;
        text-decoration: none;
    }
</style>    