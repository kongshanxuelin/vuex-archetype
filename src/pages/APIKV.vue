<template>
  <div>
    <div style="margin:10px 0px 14px 0px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>云API</el-breadcrumb-item>
        <el-breadcrumb-item>KeyValue相关接口</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="panel-header panel-header-important"> 接口设置</div>
    <el-row style="margin-top:5px" :gutter="5">
      <el-col :span="6">
         <div class="panel-header panel-header-default"> 接口列表</div>
         <el-tree style="margin-top:8px"
          ref="apiListTree"
          :data="apiMenus" 
          :props="defaultProps" 
          node-key="id"
          :default-expand-all="true"
          :highlight-current="true"
          @current-change="treeNodeChange"
          @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="18">
        <div class="panel-header panel-header-default"> 接口配置</div>
        <div>
            <el-form v-if="selId == 1" ref="form" label-width="150px" style="border:1px solid #193d37;margin:0;padding-top:15px;padding-right:8px;">
              <el-form-item label="是否需要持久化">
                <el-switch
                  v-model="form.isStore"
                  active-color="#136c5e"
                  inactive-color="#193d37">
                </el-switch>&nbsp;&nbsp;<span>注：不打开此项，在Redis重启时会丢失</span>
              </el-form-item>
              <el-form-item label-width="0" style="text-align:center">
                <el-button type="success" size="small">保存设置</el-button>
                <el-button>在线调测</el-button>
              </el-form-item>
            </el-form> 
            <div style="text-align:center;margin:30px auto;" v-else>
                该接口无需设置参数
                 <p style="margin:15px 0px"> <el-button>在线调测</el-button> </p>
            </div>  
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      selId:1,
      form:{
        name:'',
        isStore:false
      },
      defaultProps: {
          children: 'children',
          label: 'label'
      },
      apiMenus:[
        {
          id: 1,
          label: 'setValue',
          isLeaf:true
        },
        {
          id: 2,
          label: 'getValue',
          isLeaf:true
        }
      ]
    }
  },
  created () {
    
  },
  mounted() {
    this.$refs.apiListTree.setCurrentKey(1)
  },
  methods: {
    handleNodeClick:function(e){
      console.log(e)
    },
    treeNodeChange:function(data,node){
      this.selId = data.id;
    }
  }
}
</script>

<style scoped>
.el-tree-node {
  height: 35px;
  line-height: 35px;
}
</style>
