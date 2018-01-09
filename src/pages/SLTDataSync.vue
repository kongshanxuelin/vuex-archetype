<template>
  <div>
    <div style="margin:10px 0px 14px 0px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>解决方案</el-breadcrumb-item>
        <el-breadcrumb-item>数据库异地同步</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 500px;margin-left:10px;">
      <el-steps direction="vertical" :active="step">
        <el-step :status="'process'" title="先决条件">
          <template slot="description">
            <div :class="step>0 ? 'finishCls':'waitCls'">
                <ol>
                  <li>MySQL开启<span class="imp">binlog</span>，版本在<span class="imp">5.5+</span></li>
                  <li>JDK <span class="imp">1.7+</span></li>
                  <li>如果服务端与客户端不在同一机房，确保客户端服务器与服务端服务器<span class="imp">网络连通</span></li>
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
                  <li>绿色服务端包：<a class="imp" target="_blank" href="https://github.com/kongshanxuelin/canalClientEx/files/1375087/canal.deployer-1.0.24.tar.gz">点击这里下载</a></li>
                  <li>绿色客户端包：<a class="imp" target="_blank" href="https://github.com/kongshanxuelin/canalClientEx/blob/master/canal.canalClientEx-1.0.24.zip">点击这里下载</a></li>
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
                  <li>在源数据库随意修改一条数据，观察数据库异步同步控制台是否有同步日志消息</li>
                  <li>如果您需要监控数据变化自己做处理，请点击下载基础包，并<span class="imp">继承类XXX</span>自己实现数据变化的处理</li>
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
.imp {
  color:#ff3b54;
  font-weight: bold;
}
</style>
