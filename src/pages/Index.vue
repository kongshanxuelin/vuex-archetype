<template>
<el-container>
  <el-header height="270px">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#193d37"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0">OpenSumslackAPI</el-menu-item>
      <el-submenu index="2">
        <template slot="title">开发教程</template>
        <el-menu-item index="2-1">云API的使用</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">解决方案</template>
        <el-menu-item index="5-1">日志监控中心</el-menu-item>
        <el-menu-item index="5-2">异地数据库同步</el-menu-item>
        <el-menu-item index="5-3">异地文件同步</el-menu-item>
      </el-submenu>
      <el-menu-item style="float:right" v-if="!isLogin" index="1"><a href="#">注册/登录</a></el-menu-item>
      <el-menu-item style="float:right" v-if="isLogin" index="3"><a href="#">{{nickname}}, 退出</a></el-menu-item>
      <el-menu-item style="float:right" v-if="isLogin" index="100">控制台</el-menu-item>
    </el-menu>
    <el-carousel indicator-position="outside" :interval="8000" height="200px" style="border:1px solid #193d37">
      <el-carousel-item v-for="item in textItems" :key="item.title">
        <h3>{{ item.title }}</h3>
        <div v-html="item.c"></div>
      </el-carousel-item>
    </el-carousel>
  </el-header>
  <el-main>
    <div class="anno"><i style="color:#f9c152;" class="el-icon-warning"></i> 这里显示公告</div>
    <el-collapse v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="navheader navheader-default"><i class="header-icon el-icon-tickets"></i> 云API工厂</div>
        </template>
        <div style="margin:0px 0px;">
          <el-row :gutter="5" type="flex" justify="start">
            <el-col :span="6" v-for="(o, index) in cloudAPIItems" :key="o.id" style="margin-top:5px">
              <el-card :body-style="{ padding: '0px',height:'360px' }">
                <div :class="'navheader  navheader-' + o.cls">{{o.title}}</div>
                <img :src="o.icon" class="image">
                <div style="padding: 14px;">
                  <span class="api-desc" v-html="o.d"></span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">查看文档</el-button>
                    <el-button type="text" @click="sendFeedback" class="button">意见反馈(2)</el-button>
                    <el-button type="text" size="mini" class="button">{{o.sts=='1'?'移除':'安装'}}</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <div class="navheader navheader-default"><i class="header-icon el-icon-news"></i> 解决方案</div>
        </template>
        <div>
          <el-row :gutter="5" type="flex" justify="start">
            <el-col :span="6" v-for="(o, index) in cloudSolutionItems" :key="o.id" style="margin-top:5px">
              <el-card :body-style="{ padding: '0px',height:'360px' }">
                <div :class="'navheader  navheader-' + o.cls">{{o.title}}</div>
                <img :src="o.icon" class="image">
                <div style="padding: 14px;">
                  <span class="api-desc" v-html="o.d"></span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">查看文档</el-button>
                    <el-button type="text" @click="sendFeedback" class="button">意见反馈(2)</el-button>
                    <el-button type="text" size="mini" class="button">{{o.sts=='1'?'移除':'安装'}}</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>  

  </el-main>
  <el-footer>
      <div class="footer">
        <p>版权所有© 2016-2018 Sumslack.保留一切权利</p>
        <p>浙ICP备16036695号</p>
      </div>
  </el-footer>

  <el-dialog title="意见反馈" width="350px" :visible.sync="dialogFeedback">
    <el-form :model="form" :label-position="'top'">
      <el-form-item label="输入您的意见和反馈：">
        <textarea placeholder="输入您的宝贵意见..." class="textarea" rows="5" style="width:98%"></textarea>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFeedback = false">取 消</el-button>
      <el-button type="primary" @click="dialogFeedback = false">确 定</el-button>
    </div>
  </el-dialog>

</el-container>
</template>

<script>
import { isLogin,signOut } from '../utils/authService'
export default {
  name: 'Index',
  data () {
    return {
      dialogFeedback:false,
      list: [],
      activeName: ['1','2'],
      nickname:'',
      textItems:[
          {title:'云API工厂',c:`<p>无需后端编程开发，无需购买服务器资源享受个性化的后台服务</p>
          <p>0维护成本，选择您需要的云接口，自动生成管理后台配置您的接口，即可使用，极速提升开发效率</p>`},
          {title:'云解决方案',c:`<p>极速解决异地数据备份，异地文件备份功能</p>
          <p>搭建监控中心，帮您收集线上日志输出，及时预警提醒，支持Java/C++</p>`}
      ],
      cloudAPIItems:[
        {id:'1',title:'自定义树型菜单',icon:'https://cdn.it120.cc/apifactory/2017/11/09/61692f9fd53b9b3d7c097518a60b28b5.jpeg',sts:'0',d:`创建自定义树菜单`,dt:'2018-01-04',cls:'normal'},
        {id:'2',title:'DFS文件上传下载',icon:'https://cdn.it120.cc/apifactory/2017/11/09/61692f9fd53b9b3d7c097518a60b28b5.jpeg',sts:'1',d:`分布式文件上传服务，下载文件，图片按自定义设置生成缩略图`,dt:'2018-01-04',cls:'important'},
        {id:'3',title:'分布式KV存储',icon:'https://cdn.it120.cc/apifactory/2017/11/09/61692f9fd53b9b3d7c097518a60b28b5.jpeg',sts:'0',d:`分布式的KV值存储，提供读取写入服务`,dt:'2018-01-04',cls:'normal'}
      ],
      cloudSolutionItems:[
        {id:'1',title:'异地同步数据库',icon:'https://cdn.it120.cc/apifactory/2017/11/09/61692f9fd53b9b3d7c097518a60b28b5.jpeg',sts:'0',d:`MySQL/SQL Server数据库同步，binlog分发，不影响业务`,dt:'2018-01-04',cls:'normal'},
        {id:'2',title:'日志监控分析中心',icon:'https://cdn.it120.cc/apifactory/2017/11/09/61692f9fd53b9b3d7c097518a60b28b5.jpeg',sts:'1',d:`收集线上项目日志，通过Log4XX收集存储，客户端支持Java/C++`,dt:'2018-01-04',cls:'important'},
        {id:'3',title:'异地文件同步',icon:'https://cdn.it120.cc/apifactory/2017/11/09/61692f9fd53b9b3d7c097518a60b28b5.jpeg',sts:'0',d:`异地文件存储同步，确保文件异地灾备`,dt:'2018-01-04',cls:'normal'}
      ],
      isLogin : false
    }
  },
  created () {
    this.isLogin = isLogin();
    this.nickname = localStorage.getItem('nickname');
  },
  methods:{
    nav(id){
      if(id === 'logout'){
        signOut();
        location.reload();
      }else{
        this.$router.push({path: '/' + id});
      }
    },
    sendFeedback(item) {
      this.dialogFeedback = true;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key === '1'){
        this.nav('login')
      }else if(key === '3'){
        this.nav('logout')
      }else if(key === '100'){
        this.nav('admin')
      }  
    }
  }
}
</script>
<style scoped>
  .el-menu--horizontal {
      border-right: none;
      border-bottom: solid 1px #193d37;
  }
  .el-carousel__item h3 {
      color:#f9c152;
      font-size: 24px;
      opacity: 0.75;
      line-height: 60px;
      margin: 0;
      text-align: center;
  }
  .bottom {
    position:absolute;
    bottom:1px;
    text-align: right;
    border:0px solid #fff;
  }
  .button {
    margin-right: 4px;
  }
  .el-carousel__item div {
    font-size: 18px;
    opacity: 0.75;
    line-height: 45px;
    margin: 0;
    padding:10px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #0a0f0e;
    color:#ff3b54;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #0a0f0e;
    color:#ffda9a;
  }
  .anno {
    height: 30px;
    line-height: 30px;
    font-size:14px;
    color:#8f9598;
    background:#121a19;
    padding-left: 5px;
    margin:2px 0px;
  }
  .api-desc {
    color:#8f9598;
    font-size:12px;
  }
  .image {
    padding-top:6px;
    width:220px;
    height:220px;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-collapse {
    border-top: 0px solid #193d37;
    border-bottom: 0px solid #193d37;
}
  .el-collapse-item.is-active .el-collapse-item__header {
    background-color: #fff;
  }
  .el-collapse-item__header {
        border-bottom: 0px solid #193d37;
  }
  .el-collapse-item__content {
    background:#0a0f0e;
    color:#fff;
  }
  .navheader {
    padding-left:8px;
    font-size:16px;
  }
  .navheader-default {
    background:#172422;
  }
  .navheader-normal {
    background:#2d5d96;
  }
  .navheader-important {
    background:#b03030;
  }
  .navheader-solution {
    background:#608e2d;
  }
  .footer {
    text-align: center;
    line-height: 30px;
    color:#535353;
    font-size:12px;
  }
</style>
