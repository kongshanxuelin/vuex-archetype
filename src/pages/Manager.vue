<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <div class="panel-header"><i style="color:#f9c152;" class="el-icon-warning"></i> 个人基本信息</div>
      <el-form ref="form" label-width="150px" style="border:1px solid #193d37;margin-top:0;">
        <el-form-item label="手机号码">
          {{user.tel}}
        </el-form-item>
        <el-form-item label="个性化域名">
          http://myapi.sumslack.com/api/{{user.domain}}
        </el-form-item>
        <el-form-item label="真实姓名">
          {{user.truename}}
        </el-form-item>
        <el-form-item label="注册时间">
          {{user.regtime}}
        </el-form-item>
        <el-form-item label="SecKey">
          {{user.secKey}}
        </el-form-item>
      </el-form>  
      <div class="panel-header"><i style="color:#f9c152;" class="el-icon-share"></i> 已安装API</div>
      <el-table
        :data="tableData"
        stripe
        border
        height="250"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="API名称">
        </el-table-column>
        <el-table-column
          prop="dt"
          label="安装日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="num"
          width="180"
          label="剩余次数">
        </el-table-column>
        <el-table-column
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看文档</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--
      <el-button @click="doTest">Get请求</el-button>
      <el-button @click="doTestPost">Post请求</el-button>
      <el-button @click="doTestDelete">Delete请求</el-button>
      <el-button @click="doTestPut">Put请求</el-button>
      -->
    </div>
  </div>
</template>

<script>
import { APIResource } from '../api/resource'
export default {
  name: 'Manager',
  data () {
    return {
      user:{
        tel:'13432323232',
        domain:'testdomain',
        truename:'姓名',
        regtime:'2017-05-23 12:23:43',
        secKey:'xxxxyyyyy'
      },
      tableData: [{
          dt: '2016-05-02',
          title: '自定义菜单',
          num: '不限'
        }, {
          dt: '2016-05-04',
          title: 'DFS文件上传',
          num: '不限'
        }]
    }
  },
  created () {
    this.list = this.$store.getters.list
  },
  methods:{
    handleClick(row) {
        console.log(row);
    },
    doTest(){
      APIResource.test.test.get({'id':'123'}).then(data => {
        console.log(data.body,data)
      })
    },
    doTestPost(){
      APIResource.test.testPost.save({'id':'123'}).then(data => {
        console.log(data.body,data)
      })
    },
    doTestDelete(){
      APIResource.test.testDelete.delete({'id':'123'}).then(data => {
        console.log(data.body,data)
      })
    },
    doTestPut(){
      APIResource.test.testPut.update({'id':'123'}).then(data => {
        console.log(data.body,data)
      })
    }
  }
}
</script>


<style scoped>
.container {
  margin: 10px 0px;
}
.el-form-item {
    margin-top: 5px;
    margin-bottom: 5px;
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color:#8f9598;
    line-height: 40px;
    padding: 0 12px 0 0;
}
</style>
