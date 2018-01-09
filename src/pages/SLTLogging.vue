<template>
  <div>
    <div style="margin:10px 0px 14px 0px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>解决方案</el-breadcrumb-item>
        <el-breadcrumb-item>日志监控中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 500px;margin-left:10px;">
      <el-steps direction="vertical" :active="step">
        <el-step :status="'process'" title="先决条件">
          <template slot="description">
            <div :class="step>0 ? 'finishCls':'waitCls'">
                <ol>
                  <li>服务器网络连通要求：<span class="code">telnet logging.sumslack.com 23105</span>通</li>
                  <li>编程语言：Java/C++，分别使用Log4j，Log4CPP输出日志</li>
                </ol>
                <p class="btnCenter">
                  <el-button @click="stepOne" v-show="step == 0">该步骤已完成</el-button>
                </p>
            </div>
          </template>
        </el-step>
        <el-step title="修改配置文件">
          <template slot="description">
            <div :class="step>1 ? 'finishCls':'waitCls'">
                <ol>
                  <li>Java语言：打开Log4j2.xml，添加Appender，增加配置如下：</li>
                  <li>C++语言：打开Log4CPP.xml，添加Appender，增加配置如下：</li>
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
                  <li>点击这里打开日志实时监控面板</li>
                  <li>点击这里打开日志采集分析面板</li>
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
