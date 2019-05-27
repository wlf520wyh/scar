<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information" style="background: #fff;">
			<router-link to='/Family'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新增家庭成员</span>
			<div>完成</div>
		</div>
		<div class="nav">
			<h2>*姓名</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*性别</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<router-link to="SchoolName"><div class="nav">
			<h2>出生日期</h2>
			<h3>请选择日期 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div></router-link>
		<div class="nav">
			<h2>*关系</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>政治面貌</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div style="width: 7.5rem;height: 0.1rem;background: #eee;"></div>
		<div class="nav">
			<h2>职业</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>工作单位</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>联系电话</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
	</div>
</template>

<script>
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
		width:2.5rem;
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
</style>




