<template>
	<div>
		<div class="information">
			<router-link to='/ProjectExp'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新增培训经历</span>
			<router-link to="TrainedExperience"><div>完成</div></router-link>
		</div>
		<div class="nav">
			<h2>*开始时间</h2>
			<h3>请选择开始时间 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*结束时间</h2>
			<h3>请选择结束时间 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*培训机构</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>培训地点</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>*培训内容</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div style="width: 7.5rem;height: 0.1rem;background: #eee;"></div>
		<div class="nav">
			<h2>所获证书</h2>
			<h3>请选择 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div class="nav">
			<h2>发证机构</h2>
			<h3>请输入 <img src="../images/arrow_right_gray@2x.png" alt="#"> </h3>
		</div>
		<div style="width: 7.5rem;height: 0.1rem;background: #eee;"></div>
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
	.nav label{
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(247,98,98,1);
		float: right;
		margin: 0.3rem 0.3rem 0.3rem 3.2rem;
	}
</style>


