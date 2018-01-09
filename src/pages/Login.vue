<template>
    <div class="login-wrap">
        <div class="ms-title">OpenSumslack Cloud控制台</div>
        <div class="ms-login">
            
                <div v-if="!isReg">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="手机号" prop="username">
                            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                    <p style="font-size:12px;text-align:center;line-height:30px;color:#999;">Tips : 如果还没有账号，<a class="color-red" style="font-weight:bold" href="#" @click="switchReg('reg')">点击这里注册</a></p>
                </div>
                <div v-else>
                    <el-form :model="regForm" :rules="rules" ref="regForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="手机号" prop="username">
                            <el-input v-model="regForm.username" placeholder="username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" placeholder="password" v-model="regForm.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="password2">
                            <el-input type="password" placeholder="password2" v-model="regForm.password2"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('regForm')">注册账号</el-button>
                    </div>
                    <p style="font-size:12px;text-align:center;line-height:30px;color:#999;">Tips : 如果已有账号，<a class="color-red" style="font-weight:bold" href="#" @click="switchReg('login')">点击这里登录</a></p>
                </div>
            
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data: function(){
            return {
                isReg : false,
                ruleForm: {
                    username: '',
                    password: ''
                },
                regForm : {
                    username: '',
                    password: '',
                    password2:''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
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
            switchReg(isReg){
                if(isReg === 'reg'){
                    this.isReg = true;
                }else{
                    this.isReg = false;
                }
            },
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

        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #0a0f0e;
        border:1px solid #193d37;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>