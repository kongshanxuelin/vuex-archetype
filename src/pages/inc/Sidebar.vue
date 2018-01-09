<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '/admin',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'apilist',
                        title: '我的云API',
                        subs: [
                            {
                                index: '/admin/api-kv',
                                title: 'KeyValue相关接口'
                            },
                            {
                                index: '/admin/api-menu',
                                title: '自定义菜单'
                            },
                            {
                                index: '/admin/api-dfs',
                                title: '文件上传相关接口'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'solutionlist',
                        title: '解决方案',
                        subs: [
                            {
                                index: '/admin/slt-logging',
                                title: '日志监控中心'
                            },
                            {
                                index: '/admin/slt-datasync',
                                title: '数据库异地同步'
                            },
                            {
                                index: '/admin/slt-filesync',
                                title: '文件异地同步'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'monitorlist',
                        title: '监控台',
                        subs: [
                            {
                                index: '/admin/mnt-logging',
                                title: '日志采集中心'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
