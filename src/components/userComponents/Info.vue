<template>
    <div id="userList">
        <div class="listTitle">
            <span>维护您的个人信息</span>
            <p>完善以下个人信息，将有助于我们为您提供更定制化的服务</p>
        </div>
        <div class="listTabbar">
            <!-- 表单填写 -->
            <form class="listForm">  
                <tbody>
                    <tr>
                        <th class="fromTitle" style="text-align:left">个人资料</th>
                    </tr>
                    <tr>
                        <td class="right">游戏QQ账号：</td>
                        <td>
                            <input type="text">
                            <span>请填写正确的游戏账号</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="right">游戏大区：</td>
                        <td>
                            <select name="" id="">
                                <option v-for="(item,i) of reLoginId" :key="i" :value="item.value">{{item.name}}</option>
                            </select>
                            <span>请选择游戏大区</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="right">生日：</td>
                        <td>
                            <input type="text">
                            <span>请填写生日</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="right">
                            性别：
                        </td>
                        <td class="sex">
                            <input type="radio" name="sex" value="1">男
                            <input type="radio" name="sex" value="2">女
                            <span>请选择性别</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="right">
                            手机号：
                        </td>
                        <td>
                            <input type="number">
                            <span>请填写正确手机号</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="right">
                            邮箱：
                        </td>
                        <td>
                            <input type="text">
                            <span>请填写正确邮箱</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="btnTd">
                            <button class="subBtn">提交</button>
                        </td>
                    </tr>
                </tbody>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            reLoginId:[
                {value:0,name:"请选择"},
                {value:1,name:"艾欧尼亚"},
                {value:2,name:"比尔吉沃特"},
                {value:3,name:"祖安"},
                {value:4,name:"诺克萨斯"},
                {value:5,name:"班德尔城"},
                {value:6,name:"德玛西亚"},
                {value:7,name:"皮尔特沃夫"},
                {value:8,name:"战争学院"},
                {value:9,name:"弗雷尔卓德"},
                {value:10,name:"巨神峰"},
                {value:11,name:"雷瑟守备"},
                {value:12,name:"无畏先锋"},
                {value:13,name:"裁决之地"},
                {value:14,name:"黑色玫瑰"},
                {value:15,name:"暗影岛"},
                {value:16,name:"恕瑞玛"},
                {value:17,name:"钢铁烈阳"},
                {value:18,name:"水晶之痕"},
                {value:19,name:"均衡教派"},
                {value:20,name:"扭曲丛林"},
                {value:21,name:"教育网专区"},
                {value:22,name:"影流"},
                {value:23,name:"守望之海"},
                {value:24,name:"征服之海"},
                {value:25,name:"卡拉曼达"},
                {value:26,name:"巨龙之巢"},
                {value:27,name:"皮城警备"},
                {value:28,name:"男爵领域"},

            ]
        }
    }
}
</script>
<style>
    .listTitle{
        font-size:14px;
        text-align: left;
    }
    .listTabbar{
        margin:0rem 0 0 5rem;
    }
    .listTabbar td{
        display:inline-block;
        width:30rem;
        height:4rem;
        line-height:4rem;
        text-align:left;
    }
    .listTabbar tbody td{
        border-bottom:1px solid rgba(0, 0, 0, 0.3)!important;
    }
    .listTabbar tbody .right{
        width:17rem!important;
        text-align:right;
        font-size:14px;
    }
    .listTabbar input{
        margin:0!important;
        width:10rem!important;
        height:1rem!important;
    }
    .listTabbar select{
        margin:0; padding:0;
        width:10rem;
        border:1px solid #000!important;
    }
    .listTabbar .sex input{
        width:2rem!important;
    }
    .listTabbar span{
        color:#f00;
        font-size:14px;
        display:none;
    }
    .listTabbar .btnTd{
        border:none!important;
        text-align:center;
        margin-top:0.5rem;
    }
    .btnTd .subBtn{
        background:rgba(220,0,0,0.7);
        border:none;
        width:8rem;
        height:3rem;
        color:#fff;
        font-size:16px;
        font-weight:bolder!important;
    }
</style>