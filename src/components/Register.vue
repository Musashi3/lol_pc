<template>
    <div id="registerPage">
        <div>
            <h2>欢迎注册！</h2>
            <div>
                <span>用户名：</span>
                 <input type="text" placeholder="请输入6~12位的用户名" v-model="uname">
                <p class="err" :class="{show:show==1}">格式不正确！请重新输入</p>
            </div>
            <div>
                <span>密码：</span>
                <input type="text" placeholder="请输入3~16位的密码" v-model="upwd">
                <p class="err" :class="{show:show==2}">格式不正确！请重新输入</p>
            </div>
            <div>
                <span>再次确认：</span>
                <input type="text" placeholder="请再输入一次密码" v-model="checkupwd">
                <p class="err" :class="{show:show==3}">格式不正确！请重新输入</p>
            </div>
            <div>
                <span>邮箱：</span>
                <input type="text" placeholder="请输入用于验证的邮箱" v-model="email">
                <p class="err" :class="{show:show==4}">格式不正确！请重新输入</p>
            </div>
            <div>
                <span>手机号：</span>
                <input type="number" placeholder="请输入用于验证的手机号" v-model="phone">
                <p class="err" :class="{show:show==5}">格式不正确！请重新输入</p>
            </div>
            <button @click="register" class="registerBtn">注册！</button>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            show:0,
            uname:"",
            upwd:"",
            checkupwd:"",
            email:"",
            phone:""
        }
    },
    methods:{
        register(){
            var url="http://127.0.0.1:3000/register";
            if(!this.uname||this.uname.length<6){
                this.show=1;
                return;
            }
            if(!this.upwd||this.upwd.length<6){
                this.show=2;
                return;
            }
            if(this.checkupwd!=this.upwd){
                this.show=3;
                return;
            }
            if(!this.email){
                this.show=4;
                return;
            }
            if(!this.phone||this.phone.length<11){
                this.show=5;
                return;
            }
            var user={
                uname:this.uname,
                upwd:this.upwd,
                email:this.email,
                phone:this.phone
            }
            this.axios.post(url,this.qs.stringify(user)).then(result=>{
                if(result.data.data==1){
                alert("注册成功！");
                this.$router.push("/login")
                }else{
                alert("注册失败，请检查格式填写是否正确")
                }
            })
        }
    }
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
    #registerPage>div>h2{
        margin-bottom:2rem;
    }
    #registerPage>div>div{
       height:3rem;
    }
    #registerPage span{
        display:inline-block;
        width:7rem;
        color:#111;
        font-size:18px;
        font-weight:bold;
    }
    #registerPage input{
        width:25rem;
        height:1.5rem;
        font-size:14px;
        border-radius:2rem;
        margin:0
    }
    .registerBtn{
        width:15rem!important;
        height:3rem!important;
        color:#ddd;
        border:none;
        border-radius:2rem;
        background:linear-gradient(#444,#222,#000);
    }
    .err{
        margin:0;
        color:#c00;
        font-size:14px;
        display:none;
    }
    .show{
        display:block!important;
    }
</style>