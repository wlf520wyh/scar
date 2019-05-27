<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information" style="background: #fff;">
			<router-link to='/PersonalityCharm'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新增个性风采</span>
			<router-link to="Home"><div>完成</div></router-link>
		</div>
		<div class="nav">
			<h2>*记录时间</h2>
			<h3>选择日期 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*名称</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>具体描述</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div style="width: 7.5rem;height: 0.1rem;background: #eee;"></div>
		<div class="data">
			<h2>相关资料</h2>
			<ul>
				<li>上传图片</li>
				<li>上传视频</li>
			</ul>
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
	.data{
		background: #fff;
		width: 7.5rem;
		height: 2.61rem;
		padding: 0.33rem 0 0 0.3rem;
	}
	.data h2{
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.data ul li{
		width: 1.5rem;
		height: 1.5rem;
		float: left;
		margin-right: 0.30rem;
		margin-top: 0.3rem;
		background:rgba(255,255,255,1);
		border:2px dashed rgba(187,187,187,1);
		border-radius:0.1rem;
		font-size:0.22rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(187,187,187,1);
		text-align: center;
		line-height: 1.5rem;
	} 
</style>


