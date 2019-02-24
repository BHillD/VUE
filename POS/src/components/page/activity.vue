<template>
    <div id="activity">
        	<el-form id='form' ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" >
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动地点">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="线上活动" name="type"></el-checkbox>
                        <el-checkbox label="主题活动" name="type"></el-checkbox>
                        <el-checkbox label="品牌引流" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item id="footer">
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button >取消</el-button>
                </el-form-item>
            </el-form>
    </div>
</template>

<script>
export default {
    data() {
	    return {
			form: {
                name: '',
                addr:'',
				date1: '',
				type: [],
				desc: ''
			}
		}
	},
	methods: {
		onSubmit() {
            this.$confirm('确认创建吗?', '提示', {
				type: 'warning'
			}).then(() => {
                console.log('创建成功')
			}).catch(() => {})
        }
    }
}
</script>

<style>
    #activity{
        float: right;
        padding: 0px;
        margin: 0px;
        height: 92%;
        width: 92%;
        background-color: #fff
    }

    #form{
        text-align: left;
        margin:20px;
        margin-bottom:0px;
        width:60%;
        min-width:600px;
    }

    #footer{
        margin-bottom: 0px;
    }
</style>


