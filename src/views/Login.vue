<template>
<div id='page'>
<el-card class="login-container" >
    <span class='card-header'>欢迎你</span>
    <el-form  @submit.native.prevent="signin" v-if="loginbyusername">
        <el-form-item label="用户名">
            <el-input type="text" v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item  label="密码">
            <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="btn" native-type="submit">登录</el-button>
        </el-form-item>
        <label label="其他登录方式">其他登录方式：
            <el-link type="primary" class='other' @click="change">手机短信登录</el-link>
        </label>
    </el-form>
    <el-form  @submit.native.prevent="signin" v-else>
        <el-form-item label="手机号">
            <el-input type="text" v-model="user.phone">
                <template slot="prepend">+86</template>
            </el-input>
        </el-form-item>
        <el-form-item  label="验证码">
            <el-input type="password" v-model="user.yzm" >
                <el-button slot="append"  @click="sendyzm">获取验证码</el-button>
            </el-input>
            
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="btn" native-type="submit">登录</el-button>
        </el-form-item>
        <label label="其他登录方式">其他登录方式：
            <el-link type="primary" class='other' @click="change">账号登录</el-link>
        </label>
    </el-form>
</el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            user : {},
            loginbyusername: true,
           
        }
    },
    methods: {
        change(){
            this.loginbyusername = !this.loginbyusername
        },
        signin(){   
            // this.$http.post('/api-token-auth/',{
            //     username:this.user.name,
            //     password:this.user.password,
            // }).then(res => {
            //     localStorage.setItem('token',JSON.stringify(res.data.token))
            //     this.$message({
            //         message: '登录成功！',
            //         type : 'success'
            //     })
            //     this.$router.push('/')
            // }).catch(err => {
            //     this.$message({
            //         message:"登录失败，请重新登录",
            //         type:  ""
            //     })
            //     throw new Error(err);
                
            // })
            // if (this.user.name ='telek' && this.user.password === '123456') {
                this.$router.push('/')
            // } 
        },
        sendyzm(){
            alert('发送验证码')
        }
       
    },
}
</script>
<style scoped >
#page{
    background-size: 100% 100%;
    background: url('~@/assets/login.jpg') center center no-repeat;
    height: 100%;
    position: fixed;
    width: 100%
}
#page >>> .el-input-group__append {
    color: #000;    
}
#page >>> .el-input-group__append:hover {
    color: rgb(100, 30, 244);    
}
.card-header{
    display: block;
    text-align: center;
    font-size: 1.5em;
    font-family: monospace;
    margin-bottom: 10px;
}
.login-container {
    width: 23em;
    margin: 100px auto;
}
.btn{
    width: 100%;
}
.other {
    height:20px;
    line-height: 20px;
}

</style>