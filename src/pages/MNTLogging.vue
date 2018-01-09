<template>
  <div>
    <div style="margin:10px 0px 14px 0px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>监控台</el-breadcrumb-item>
        <el-breadcrumb-item>日志采集中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>过滤条件</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-row style="margin-top:5px" :gutter="5">
      <el-col :span="6">
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MNTLogging',
  data () {
    return {
      
    }
  },
  created () {
    
  },
  mounted() {
    this.$refs.apiListTree.setCurrentKey(1)
  },
  methods: {
   
  }
}
</script>

<style scoped>
.el-tree-node {
  height: 35px;
  line-height: 35px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
