<template>
    <div class="login-wrap">
        <div class="ms-title">OpenSumslack Cloud控制台</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 请输入正确的用户名和密码</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapActions([
                'login'
            ]),
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.login({
                            username:self.ruleForm.username,
                            pass:self.ruleForm.password
                        }).then(ret => {
                            if(ret && ret.body.ret){
                                localStorage.setItem('username', self.ruleForm.username);
                                localStorage.setItem('nickname', ret.body.nickname);
                                localStorage.setItem('token', ret.body.token);
                                self.$router.push('/admin');
                            }else{
                                self.$message('用户名或密码错误！');    
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>