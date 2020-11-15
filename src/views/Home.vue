<template>
<el-container>
  <el-aside :width="isCollapse ? '56px' : '220px' "
            @mouseenter.native="collapseOpen"          
            @mouseleave.native="collapseClose" 
  >
    <el-scrollbar style="height:100%">
    <el-menu router :default-openeds="[]" 
              unique-opened :collapse="isCollapse"  :collapse-transition="false"
              :default-active="$route.path">
      
      <el-menu-item index="/" class="logo" v-show="!isCollapse">孟思饭店助手</el-menu-item>
      <el-menu-item index="/" class="logo" v-show="isCollapse">
        *
      </el-menu-item>
      
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-s-home icon"></i><span class="item-title">首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">首页</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-order icon"></i><span class="item-title">订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
          <el-menu-item index="/categories/edit">分类编辑</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-1">食物列表</el-menu-item>
          <el-menu-item index="1-2">食物编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu icon"></i><span class="item-title">商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">食物列表</el-menu-item>
          <el-menu-item index="2-2">食物编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom icon"></i><span class="item-title">顾客</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-finance icon"></i><span class="item-title">财务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-place icon"></i><span class="item-title">门店</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-data icon"></i><span class="item-title">数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-marketing icon"></i><span class="item-title">营销</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-help icon"></i><span class="item-title">帮助</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-scrollbar>
  </el-aside>

  <el-container>
    <el-header>
      <navbar @toggleClick="toggleClick" />
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      isCollapse: true
    }

  },
  methods:{
    toggleClick(){
      this.isCollapse = !this.isCollapse
    },
    collapseOpen(){
      
      this.isCollapse = false
    },
    collapseClose(){
      this.isCollapse = true
    }
  }
  
  
};
</script>
<style lang="stylus">
.el-container
  height: 100vh
  .el-menu
    border 0
    .logo
      height 60px
      background-color: #002b49
      text-align center
      font-weight 600
      font-size 22px
      color #ffca28
      
  .el-aside
    color: #fff
    background-color: #002b49
    overflow-y: auto;
    overflow-x: hidden;
    transition  width .5s ;
    
    &:hover
      width: 220px;

    .el-submenu
      background-color: #002b49
      color: #fff
      .el-submenu__title
        color #fcc
        .item-title
          text-align center
        &:hover
          color #000
      .el-menu
        .el-menu-item-group
          background-color: #002b49
          color #fff
          .el-menu-item
            color #cddc39

  .el-container
    .el-header  
      background-color: #fff
      border: 1px solid #ccc
      border-left 0
      padding 0
      color: #000
      

  .el-main
    background-color #f9fbfd
</style>

