<template>
<div class="navbar-container">
   
    <div class="left-item">
        <el-button type="danger" icon="el-icon-s-unfold" circle 
                   class="nav-item" @click="toggleClick" >
        </el-button>
        <el-breadcrumb separator-class="el-icon-arrow-right" 
                       style="display:inline-block"
                       class="nav-item"
        >
            <transition-group name="breadcrumb" >
                <el-breadcrumb-item v-for="(item) in levelList" :key="item.path" >
                    <a  @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
                </el-breadcrumb-item>
                
            </transition-group>
        </el-breadcrumb>
    </div>
        
    <div class="settings">
            <ul>
                <li class="avatar">
                    <el-avatar shape="circle" 
                    :size="40" 
                    :src="circleUrl" class="item">
            </el-avatar>
                </li>
                <li >
                    <span class="name item">李云飞</span> 
                </li>
                <li>
                    <el-dropdown style="display:inline-block; font-size:1.4em" class="item">
                        <i class="el-icon-setting medium-icon" ></i>
                        <el-dropdown-menu slot="dropdown" class="set-item" >
                            <el-dropdown-item>View</el-dropdown-item>
                            <el-dropdown-item>Add</el-dropdown-item>
                            <el-dropdown-item>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                     </el-dropdown> 
                </li>
            </ul>
               
    </div>
        
  
</div>
</template>

<script>

export default {
  components: {
      
  },
  data(){
    return {
        isOpen:  true,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        levelList: null,
        
    }
  },
  methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
            
        },
        
        toggleClick(){
            this.$emit('toggleClick')
        }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  }

}
</script>

<style lang="stylus" scoped>
#app
    font-size 1em
    padding 0
    margin 0
    .navbar-container
        height 60px
        background-color #fff
        position relative
        .left-item
            padding 0 15px
            margin 0px
            display inline-block
            .nav-item
                vertical-align middle
                margin 5px
        .settings
            float right
            height 100%
            overflow hidden
            margin-right 10px
            ul
                height 100%
                padding 0
                margin 0
                list-style-type: none;
                li
                    margin 0
                    list-style none
                    float left
                    height 100%
                    display inline-block
                    padding 0 8px
                    text-align: center;
                    .item
                        display inline-block
                        line-height 60px 
                    .name
                        font-size 1em 
                        font-family: 'STSong', 'Hiragino Sans GB', Arial, sans-serif;
                        color #303133
                        font-weight 400
                        cursor: pointer;
                .avatar 
                    position    relative
                    min-width 40px
                    .item
                        position absolute
                        top 50%
                        left 50%
                        transform translate(-50%,-50%)
                      
                
</style>
