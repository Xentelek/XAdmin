<template>
<div id="register">
    <nav>
        <div class='sign'>
            <el-link class='item signup' href="#">注册</el-link>
            <el-link class='item signin' href="./login">登录</el-link>
        </div>
    </nav>
    <el-card class="card-container">
        <el-form  @submit.native.prevent="submit" :model="model"  status-icon :rules="rules">
            <el-form-item label="用户名" prop="name" >
                <el-input type="text" v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item  label="邮箱" prop="email" >
                <el-input type="email" v-model="model.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  class="btn" native-type="submit">注册</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            model : {},
            rules: {
                name:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 4, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 4, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                email:[
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入准确的邮箱格式', trigger: 'blur' }
                ]     
            }
        }
    },
    methods: {
        submit(){
            this.$http.post('/api-token-auth/register/users/',{
                username:  this.model.name,
                password: this.model.password,
                email : this.model.email
            }).then(res => {
                if(res.status === 201){
                    this.$message({
                    message: '注册成功！',
                    type : 'success'
                })
                    this.$router.push('/login')
                }
            }).catch(err => {
                throw new Error('发生错误')
            })
        }
    }
}
</script>

<style scoped>
#register{
    background-color: rgba(43, 49, 55,1);
    height: 100vh;
    position: relative;
    width: 100%;
}
nav {
    width:100%;
    position: relative;
    height: 70px;
    background-color: rgba(134, 157, 180, 0.5);
    
}
nav .sign{
    position: absolute;
    right: 30px ;
    top: 50%;
    margin-top: -1em;
    width: 8em;
   
}
nav .sign .item {
    height:2em;
    border: 1px solid white;
    width: 4em;
    color: white;
    font-family: 'Courier New', Courier, monospace;
}
nav .sign .item:hover {
    color:rgb(182, 195, 207);
}
nav .sign  .signup{
    float: right;

}
nav .sign  .signin{
    float:left;
}
.card-container {
    width:25rem;
    position:absolute;
    right:200px;
    top: 120px;
    
}
.btn{
    width:100%;
}
</style>