<template>
	<div>
		<div class="information">
			<router-link to='/EducationExperience'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新增教育经历</span>
			<router-link to="AddTheRecord"><div>完成</div></router-link>
		</div>
		<div class="nav">
			<h2>*开始时间</h2>
			<h3>请选择开始时间 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*结束时间</h2>
			<h3>请选择结束时间 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<router-link to="SchoolName"><div class="nav">
			<h2>*学校名称</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div></router-link>
		<div class="nav">
			<h2>*学历</h2>
			<input v-model="chooseTo" type="text" placeholder="请选择"><img v-show="display" class="choose" src="../images/arrow_right_gray@2x.png" alt="#">
			<div class="layer" @click="choose()"></div>
		</div>
		<div style="width: 7.5rem;height: 0.1rem;background: #eee;"></div>
		<div class="nav" v-show="category">
			<h2>专业类别</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav" v-show="name">
			<h2>专业名称</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>毕业证标号</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav" v-show="serial">
			<h2>学位编号</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav" v-show="degreeTo">
			<h2>学位</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>主修课程</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>证明人</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>证明人联系方式</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>附件</h2>
			<input type="file" id="attachment" style="width: 0;height: 0;">
			<label for="attachment">点击上传</label>
		</div>
		<div class="degree" v-show="record">
			<div @click="Dr()">博士</div>
			<div @click="degree()">硕士</div>
			<div @click="course()">本科</div>
			<div @click="specializedSubject()">专科</div>
			<div @click="high()">高中</div>
			<div @click="jobHigh()">职高</div>
			<div @click="highSkill()">高技</div>
			<div @click="secondary()">中专</div>
			<div @click="junior()">初中</div>
			<div @click="primary()">小学</div>
			<div @click="other()">其他</div>
			<div style="background: #DDDDDD;" @click="close()">取消</div>
		</div>
		<div v-show="cover" @click="closeContent()" style="width: 7.5rem;height: 50rem;z-index: 99;background: #000;position: fixed;top: 0;left: 0;opacity: 0.5;"></div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			chooseTo:'',
			record:false,
			display:true,
			cover:false,
			category:false,
			name: false,
			serial: false,
			degreeTo:false,
		}
	},
	methods:{
		choose: function(){
			this.record = true
			this.cover = true
			this.category = false
			this.name = false
			this.serial = false
			this.degreeTo = false
		},
		close: function(){
			this.record = false
			this.chooseTo = "";
			this.cover = false
			this.display = true
			this.category = false
			this.name = false
			this.serial = false
			this.degreeTo = false
		},
		Dr: function(){
			this.chooseTo = "博士";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		degree: function(){
			this.chooseTo = "硕士";
			this.display = false
			this.cover = false
			this.record = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		course: function(){
			this.chooseTo = "本科";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		specializedSubject: function(){
			this.chooseTo = "专科";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		high: function(){
			this.chooseTo = "高中";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		jobHigh: function(){
			this.chooseTo = "职高";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		highSkill: function(){
			this.chooseTo = "高技";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		secondary: function(){
			this.chooseTo = "中专";
			this.display = false
			this.record = false
			this.cover = false
			this.category = true
			this.name = true
			this.serial = true
			this.degreeTo = true
		},
		junior: function(){
			this.chooseTo = "初中";
			this.display = false
			this.record = false
			this.cover = false
			this.category = false
			this.name = false
			this.serial = false
			this.degreeTo = false
		},
		primary: function(){
			this.chooseTo = "小学";
			this.display = false
			this.record = false
			this.cover = false
			this.category = false
			this.name = false
			this.serial = false
			this.degreeTo = false
		},
		other: function(){
			this.chooseTo = "其他";
			this.display = false
			this.record = false
			this.cover = false
			this.category = false
			this.name = false
			this.serial = false
			this.degreeTo = false
		},
		closeContent: function(){
			this.record = false
			this.cover = false
		}
	}
}
</script>

<style scoped>
	.nav{
		width: 7.5rem;
		height: 1rem;
		position: relative;
		padding: 0 0 0 0.3rem;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.nav h2{
		width:4rem;
		height:1rem;
		display: block;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height: 1rem;
		float: left;
	}
	.nav h3{
		width:3rem;
		height:1rem;
		display: block;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height: 1rem;
		text-align: right;
		float: left;
		position: absolute;
		top: 0;
		right: 0.3rem;
	}
	.nav h3 img{
		width: 0.2rem;
	}
	.nav label{
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(247,98,98,1);
		float: right;
		margin: 0.3rem 0.3rem 0.3rem 1.7rem;
	}
	.nav input{
		width:2rem;
		height:0.9rem;
		display: block;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height: 1rem;
		text-align: right;
		float: left;
		position: absolute;
		top: 0;
		right: 0.57rem;
	}
	.nav .layer{
		width:2rem;
		height:0.9rem;
		display: block;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		float: left;
		position: absolute;
		top: 0;
		right: 0.57rem;
		z-index: 10;
	}
	.nav .choose{
		width: 0.2rem;
		height: 0.2rem;
		position: absolute;
		right: 0.3rem;
		top: 0.36rem;
	}
	.degree{
		height: 12rem;
		width: 7.5rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
	}
	.degree div{
		width: 7.5rem;
		height: 1rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:1rem;
		text-align: center;
	}
</style>
