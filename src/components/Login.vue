<template>
    <div id="loginPage">
        <div class="loginForm">
            <h2>欢迎登录！</h2>
            <div>
                <span>用户名：</span> <input type="text" placeholder="请输入用户名" v-model="uname">
            </div>
            <div>
                <span>密码：</span> <input type="password" placeholder="请输入密码" v-model="upwd">
            </div>
            <button class="loginBtn" @click="login">登录！</button>
            <div class="loginHelp">
                <span>忘记密码？</span>
                <router-link to="/register">
                    <span>没有账号？点我注册！</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
           if(!this.uname){
               alert("用户名不能为空！");
               return;
           }
           if(!this.upwd){
               alert("密码不能为空！");
               return;
           }
           var url="http://127.0.0.1:3000/login";
           var user={
               uname:this.uname,
               upwd:this.upwd,
           }
           this.axios.post(url,this.qs.stringify(user)).then(result=>{
               if(result.data.data==1){
                   alert("登录成功");
                   sessionStorage.setItem("userData",JSON.stringify(user));
                   this.$router.push("/");
               }else{
                   alert("用户名或密码错误！ 请重新输入！")
               }
           })
        }
    }
}
</script>
<style>
    #loginPage{
        background-image: url("../../static/img/banner/3.jpg");
        width:100%;
        height:39rem;
    }
    #loginPage .loginForm{
        background:rgba(0,0,0,.4);
        width:35rem;
        height:25rem;
        text-align: center;
        position:absolute;
        left:70rem;
        top:12rem;
        border-radius:2rem;
    }
    .loginForm input{
        width:20rem!important;
        margin:1.5rem;
        padding:0 2rem!important;
        font-size:14px;
        border-radius:2rem!important;
    }
    .loginForm .loginBtn{
        margin:2.2rem;
        height:4rem!important;
        width:16rem!important;
        background: linear-gradient(#fff,#aaa,#000);
        color:#fff;
        font-size:16px;
        font-weight: bolder;
        border:none;
        border-radius: 1rem;
    }
    .loginForm span{
        display:inline-block;
        width:5rem;
        color:#fff;
    }
    .loginHelp{
        width:100%;
        display:flex;
        justify-content: space-between;
        color:#fff!important;
    }
    .loginHelp span{
        width:12rem;
    }
</style>