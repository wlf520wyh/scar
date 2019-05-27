<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information" style="background: #fff;">
			<router-link to='/StudyResult'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新增学习成绩</span>
			<div>保存</div>
		</div>
		<div class="nav">
			<h2>*科目名称</h2>
			<input type="text" placeholder="请输入">
		</div>
		<div class="nav">
			<h2>*考试时间</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*成绩</h2>
			<input type="text" placeholder="请输入">
		</div>
		<div class="nav">
			<h2>学分</h2>
			<input type="text" placeholder="请输入">
		</div>
		<div class="nav">
			<h2>备注</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
	</div>
</template>

<script>
export default{
	
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
		width:3rem;
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
	.nav input{
		height: 0.98rem;
		width: 1.5rem;
		font-size: 0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color: #333;
		position: absolute;
		right: 0;
		top: 0;
	}
</style>



