<template>
    <div id="container">
      <div id="vip">
        <div id="nav">
          Table
        </div>
        <div class="toolbar">
            <el-col :span="24">
              <el-form :inline="true" :model="search">
                <el-form-item>
                  <el-input v-model="search" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="searchUser">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">添加</el-button>
                </el-form-item>
            </el-form>
          </el-col>
        </div>
        <div id="table" >
          <el-table  :data="users"  style="width: 100%;" height="89%" v-loading="loading">
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120" >
            </el-table-column>
            <el-table-column prop="sex" label="性别" :formatter="formatSex" width="100" >
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100" >
            </el-table-column>
            <el-table-column prop="birth" label="生日" width="140" >
            </el-table-column>
            <el-table-column prop="addr" label="地址" min-width="180" >
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>          
          </el-table>
          <div class="toolbar"></div>
          <el-dialog title="添加"  :visible.sync="addVisible" class="dialog" ref="add">
            <el-form :model="add.name"  label-width="80px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="add.name"></el-input>
		          </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="add.sex">
                <el-radio class="radio" :label="1">男</el-radio>
                <el-radio class="radio" :label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="年龄">          
              <el-input-number v-model="add.age" :min="0" :max="200"></el-input-number>
				    </el-form-item>
            <el-form-item label="生日">
				      <el-date-picker type="date" placeholder="选择日期" v-model="add.birth"></el-date-picker>
				    </el-form-item>
				    <el-form-item label="地址">
					    <el-input type="textarea" v-model="add.addr"></el-input>
			    	</el-form-item>
            </el-form>              
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="addVisible = false">取消</el-button>
				      <el-button type="primary" @click.native="addSubmit">提交</el-button>               
            </div>
          </el-dialog>
          <el-dialog title="修改"  :visible.sync="editVisible" class="dialog" ref="edit">
            <el-form :model="edit"  label-width="80px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="edit.name"></el-input>
		          </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="edit.sex">
                <el-radio class="radio" :label="1">男</el-radio>
                <el-radio class="radio" :label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="年龄">          
              <el-input-number v-model="edit.age" :min="0" :max="200"></el-input-number>
				    </el-form-item>
            <el-form-item label="生日">
				      <el-date-picker type="date" placeholder="选择日期" v-model="edit.birth"></el-date-picker>
				    </el-form-item>
				    <el-form-item label="地址">
					    <el-input type="textarea" v-model="edit.addr"></el-input>
			    	</el-form-item>              
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="editVisible = false">取消</el-button>
				      <el-button type="primary" @click.native="editSubmit">提交</el-button>               
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
</template>

<script>

import  {removeUser, editUser, addUser, getUserList } from "../../axios/api"

Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  

export default {
  data(){
    return{
      search:"",

      loading:false,

      users:[],

      add:{
        name:'',
        sex:'',
        age:'',
        birth:'',
        addr:''
      },

      edit:{
        name:'',
        sex:'',
        age:'',
        birth:'',
        addr:''
      },

      editVisible: false,
      addVisible: false,
      
    }
  },
  methods:{
    formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
    },
    
    handleEdit:function(index, row)
    {
        this.edit = Object.assign({}, row);
        this.editVisible = true;
    },

    handleAdd:function()
    {
      this.addVisible=true;
    },

    getUsers:function() {
      let para={
        name:''
      };
      getUserList(para).then((res) => {
					this.users = res.data.users;
      	});
    },

    searchUser:function(){
      let para={
        name:this.search
      }  
      this.loading = true;         
      getUserList(para).then((res) => {
        this.loading = false
				this.users = res.data.users;
			});
    },

    handleDel:function(index,row)
    {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
          this.loading = true;
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.$message({
							message: '删除成功',
							type: 'success'
            });
            this.getUsers();
            this.loading = false
					});
				}).catch(() => {				
      });
    },

    editSubmit: function () {
			this.$confirm('确认提交吗？', '提示', {}).then(() => {
          let para = Object.assign({}, this.edit);
          this.loading = true;
          para.birth = (!para.birth || para.birth == '') ? '' : new Date(para.birth).Format("yyyy-MM-dd");
						editUser(para).then((res) => {
							this.$message({
								message: '提交成功',
								type: 'success'
							});
              this.editVisible = false;
              this.loading = false
              this.getUsers();
            })
        })
      },
      
		addSubmit: function () {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
          let para = Object.assign({}, this.add);
          this.loading = true
          para.birth = (!para.birth || para.birth == '') ? '' : new Date(para.birth).Format("yyyy-MM-dd");
					addUser(para).then((res) => {
						this.$message({
							message: '提交成功',
              type: 'success'
            })
            this.add={
								name:'',
                sex:'',
                age:'',
                birth:'',
                addr:''
            }
            this.addVisible = false;
            this.loading = false
						this.getUsers();
					});
				});
		},
  },
  mounted() {
    this.getUsers()
  },
}
</script>



<style scoped>
    #container{
         float: right;
         padding: 0px;
         margin: 0px;
         height: 92%;
         width: 92%;
         background-color: #fff
    }

    #vip{
      margin: 0 auto;
      width: 85%;
      height: 80%;

    }

    #nav{
      margin-left:0px;
      margin-top:20px;
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-weight: bold;
    }

    .toolbar{
      height: 40px;
      text-align: left;
      padding: 10px;
      background-color: #f2f2f2;
    }

    .dialog{
      text-align: left;
    }

    #table{
      height: 80%;
    }
</style>