<template>
  <div>
    <div style="margin:10px 0px 14px 0px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>解决方案</el-breadcrumb-item>
        <el-breadcrumb-item>文件异地同步</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 450px;margin-left:10px;">
      <el-steps direction="vertical" :active="step">
        <el-step :status="'process'" title="先决条件">
          <template slot="description">
            <div :class="step>0 ? 'finishCls':'waitCls'">
                <ol>
                  <li>在需要同步的文件服务器的地方安装Agent，并开通sftp；</li>
                  <li>确保sftp与被同步服务器网络连通；</li>
                </ol>
                <p class="btnCenter">
                  <el-button @click="stepOne" v-show="step == 0">该步骤已完成</el-button>
                </p>
            </div>
          </template>
        </el-step>
        <el-step title="下载包">
          <template slot="description">
            <div :class="step>1 ? 'finishCls':'waitCls'">
                <ol>
                  <li>Agent：点击这里下载</li>
                </ol>
                <p class="btnCenter">
                  <el-button @click="stepTwo" v-show="step <= 1">该步骤已完成</el-button>
                </p>
            </div>
          </template>
        </el-step>
        <el-step title="验证">
          <template slot="description">
            <div :class="step>2 ? 'finishCls':'waitCls'">
                <ol>
                  <li>点击这里打开文件同步实时监控面板</li>
                </ol>
                <p class="btnCenter">
                  <el-button @click="stepThree" v-show="step <= 2">该步骤已完成</el-button>
                </p>
            </div>
          </template>
        </el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SLT_Logging',
  data () {
    return {
      step : 0
    }
  },
  created () {
    
  },
  mounted() {
    
  },
  methods: {
    stepOne:function(){
        this.step = 1
    },
    stepTwo:function(){
        this.step = 2
    },
    stepThree:function(){
        this.step = 3
    }
  }
}
</script>

<style scoped>
.el-tree-node {
  height: 35px;
  line-height: 35px;
}
.btnCenter {
  margin: 20px 0px;
  text-align: center;
}
.waitCls {
  color:#79c4ff;
  font-size:13px;
  line-height:30px;
}
.finishCls {
  color:#535353;
  font-size:13px;
  line-height:30px;
}
</style>
