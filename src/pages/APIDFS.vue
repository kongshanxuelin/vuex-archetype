<template>
  <div>
    <div style="margin:10px 0px 14px 0px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>云API</el-breadcrumb-item>
        <el-breadcrumb-item>DFS相关接口</el-breadcrumb-item>
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
              <el-form-item label="允许的最大文件大小">
                <el-input-number v-model="uploadSettings.maxsize" :min="1" :max="10" label="描述文字"></el-input-number><span> M</span>
              </el-form-item>
              <el-form-item label="允许的文件格式">
                <el-checkbox name="ckFileExt" @change="changeFileExt" v-model="uploadSettings.ext" label="1">不限</el-checkbox>
                <el-checkbox name="ckFileExt" @change="changeFileExt" v-model="uploadSettings.ext" label="2">Word类</el-checkbox>
                <el-checkbox name="ckFileExt" @change="changeFileExt" v-model="uploadSettings.ext" label="3">压缩文件类</el-checkbox>
                <el-checkbox name="ckFileExt" @change="changeFileExt" v-model="uploadSettings.ext" label="4">图片类</el-checkbox>
              </el-form-item>
              <el-form-item label-width="0" style="text-align:center">
                <el-button type="success" size="small">保存设置</el-button>
                <el-button type="default">在线调测</el-button>
              </el-form-item>
            </el-form> 
            <el-form v-else-if="selId == 2" ref="form" label-width="150px" style="border:1px solid #193d37;margin:0;padding-top:15px;padding-right:8px;">
              <el-form-item label="允许上传的图片大小">
                <el-input-number v-model="uploadSettings.maxsize" :min="1" :max="10"></el-input-number><span> M</span>
              </el-form-item>
              <el-form-item label="允许的文件格式">
                <el-input-number v-model="uploadSettings.snapWidth" :min="30" :max="150" :step="10"></el-input-number>
                <el-input-number v-model="uploadSettings.snapHeight" :min="30" :max="150" :step="10"></el-input-number>
              </el-form-item>
              <el-form-item label="原图图片水印文字">
                <el-input v-model="uploadSettings.snapText" placeholder="请输入水印文字，不输入不输出水印"></el-input>
              </el-form-item>
              <el-form-item label="水印所在位置">
                <el-select v-model="uploadSettings.snapPos" placeholder="请选择">
                  <el-option
                    v-for="item in snapPosOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label-width="0" style="text-align:center">
                <el-button type="success" size="small">保存设置</el-button>
                <el-button type="default">在线调测</el-button>
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
      uploadSettings:{
        maxsize:1,
        ext:['1']
      },
      uploadImageSettings:{
        maxsize:1,
        snapWidth:60,
        snapHeight:60,
        snapText:'图片来源：Sumslack', // 原图片水印
        snapPos:''// 水印位置，cb（底下居中），rb（右下角），lb（左下角），lt（左上角），ct（上方居中），rt（右上角）
      },
      snapPosOptions:[
        {value: 'rb', label: '右下角'},
        {value: 'cb', label: '底部居中'},
        {value: 'lb', label: '左下角'},
        {value: 'lt', label: '左上角'},
        {value: 'ct', label: '顶部居中'},
        {value: 'rt', label: '右上角'}
      ],
      defaultProps: {
          children: 'children',
          label: 'label'
      },
      apiMenus:[
        {
          id: 1,
          label: 'uploadFile',
          isLeaf:true
        },
        {
          id: 2,
          label: 'uploadImage',
          isLeaf:true
        },
        {
          id: 3,
          label: 'downloadFile',
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
    changeFileExt:function(data){
      console.log(this.uploadSettings.ext.indexOf('1'))
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
