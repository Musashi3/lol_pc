<template>
    <div id="registerPage">
        <div>
            <h2>欢迎注册！</h2>
            <div>
                <span>用户名：</span>
                 <input type="text" placeholder="请输入6~12位的用户名">
            </div>
            <div>
                <span>密码：</span>
                <input type="text" placeholder="请输入6~16位的密码">
            </div>
            <div>
                <span>再次确认：</span>
                <input type="text" placeholder="请再输入一次密码">
            </div>
            <div>
                <span>邮箱：</span>
                <input type="email" placeholder="请输入用于验证的邮箱">
            </div>
            <div>
                <span>手机号：</span>
                <input type="number" placeholder="请输入用于验证的手机号">
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style>
    #registerPage{
        height:32rem;
        background:url("../../static/img/banner/2.jpg");
        position:relative;
    }
    #registerPage>div{
        padding:2rem;
        border:1px solid rgba(0,0,0,.5);
        border-radius: 2rem;
        position:absolute;
        top:2rem;
        left:50%;
        margin-left:-400px;
        text-align: center;
        width:50rem;
        height:25rem;
        background:rgba(200,200,200,0.6);
    }
    #registerPage span{
        display:inline-block;
        width:7rem;
    }
    #registerPage input{
        width:25rem;
        height:1.5rem;
        font-size:14px;
    }
</style>