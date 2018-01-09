<template>
    <div class="header">
        <div class="logo"><a href="/">Sumslack云控制台</a></div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    {{username}} <i class='el-icon-caret-bottom'></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import { signOut } from '../../utils/authService'
    export default {
        data() {
            return {
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('nickname');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    signOut();
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:200px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
