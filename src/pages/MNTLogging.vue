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
      <div class="text">
        这里到时候放一些操作按钮...
      </div>
    </el-card>
    <el-row style="margin-top:5px" :gutter="5">
      <el-col :span="8" v-for="project in projects" :key="project.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{project.title}}</span>
          </div>
          <div class="card-content">
            <p v-for="log in project.logs">[{{log.time}}]{{log.d}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MNTLogging',
  data () {
    return {
      projects:[
        {title:'项目A',id:1,logs:[
          {time: '18-01-06 12:00:00', d:'日志描述123'},
          {time: '18-01-06 12:00:00', d:'日志描述23423423'},
          {time: '18-01-06 12:00:00', d:'日志描述234234234'}
        ]},
        {title:'项目B',id:2, logs:[{time:'18-01-06 12:00:00',d:'日志描述'}]},
        {title:'项目C',id:3, logs:[{time:'18-01-06 12:00:00',d:'日志描述'}]}
      ]
    }
  },
  created () {
    
  },
  mounted() {
    
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
.card-content {
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
}
.card-content p {
  line-height: 30px;
}
.text {
  font-size: 12px;
}
</style>
