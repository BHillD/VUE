<template>
    <div id="header">
        <div id="logo">
            VUEADMIN
        </div>
        <div id="user">
            <el-dropdown>
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link"><i class="iconfont icon-character-avatar"></i>用户</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name:'mainheader',
    methods:{
        logout(){
            this.$router.push({ path: '/login' });
        }
    }
}
</script>

<style>
    #header{
        width: 100%;
        height: 8%;
        min-height: 50px;
        background-color: #20a0ff;
        padding: 0px;
        margin: 0px;
        color: #fff;
    }

    #logo{
        line-height: 50px;
        padding-left: 5px;
        float: left;
        text-align: center;
        font-size:21px;
    }

    #user{
        padding:5px;
        height: 50%;
        width: 6%;
        cursor: pointer;
        float: right;
    }

    #user .el-dropdown-link{
        color: #fff;
        line-height: 50px;
        font-size:15px;
    }

    .icon-character-avatar{
        font-size: 23px;
        margin: 10px 10px 0px 10px;
    }


</style>


