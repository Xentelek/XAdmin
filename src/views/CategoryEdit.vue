<template>
<div class="category">
  <el-table :data="model"   style="width:100%;" border  >
      <el-table-column  type="index"  >
    </el-table-column>
    <el-table-column    prop="date" label="创建日期"  width="150">
    </el-table-column>

    <el-table-column  fit  prop="name" label="分类名" >
    </el-table-column>

    <el-table-column    prop="order"  sortable  label="顺序"    width="120">
    </el-table-column>

    <el-table-column   prop="visiable" label="显示" width="120">
        <template slot-scope="scope">
        <el-switch v-model="scope.row.visiable" active-color="#13ce66" inactive-color="#ff4949"
        @change="changeStatus(scope.row)">
        </el-switch>
        </template>
    </el-table-column>

    <el-table-column
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" plain type="primary" size="small">查看</el-button>
        <el-button type="info" plain size="small">编辑</el-button>
        <el-button  size="small" type="danger" plain>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class='foot'>
    <el-button icon="el-icon-plus" type="primary" plain class='add'>新建分类</el-button>
    <el-button icon="el-icon-download" type="primary" plain class='export'>导出</el-button>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
        handleClick(row) {
            console.log(row);
        },
        async save(){
            const  res = await this.$http.post('categories',this.model)
            this.$router.push('/backend/api/categories/list')
            this.$message({
                type:'success',
                message: '保存成功'
            })
        },
        changeStatus(param){
            // change status request
            console.log(param)
        }

    },
    data() {
      return {
        model: [
         {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        }, {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        }, {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        }, {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        },
        {
          date: '2016-05-02',
          name: '担任豪华套餐',
          order: 8,
          visiable: true
        },
        {
          date: '2016-05-02',
          name: '担任豪华套餐',
          order: 1,
          visiable: true
        }, {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        },
        {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        },
         {
          date: '2016-05-04',
          name: '多人豪华套餐',
          order: 2 ,
          visiable: false
        },]
      }
    },
  }
</script>

<style lang="stylus">
    
  .el-table 
    th
      text-align: center !important
      padding: 0
      height: 50px
    td
      text-align: center !important
      padding: 0
      height: 40px 
  .foot
    .el-button
      margin-top: 10px
      &:hover 
        color: #000;
        background-color: rgba(22, 233, 188, .3);
  
</style>

