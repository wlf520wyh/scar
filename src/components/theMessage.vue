<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information" style="background: #fff;">
			<span>消息</span>
		</div>
		<div class="theMessage">
			<img src="../images/d1_ic_tzgg@2x.png" alt="#">
			<router-link to="Notice"><div class="theMessageRight">
				<h2>通知公告</h2>
				<span>00:00</span>
				<h3>最新一条消息显示</h3>
			</div></router-link>
		</div>
		<div class="theMessage">
			<img src="../images/d1_ic_dtl@2x.png" alt="#">
			<router-link to="DynamicColumn"><div class="theMessageRight">
				<h2>动态栏</h2>
				<span>00:00</span>
				<h3>最新一条消息显示</h3>
			</div></router-link>
		</div>
		<router-link to="Warning"><div class="theMessage">
			<img src="../images/d1_ic_jsl@2x.png" alt="#">
			<div class="theMessageRight">
				<h2>警示栏</h2>
				<span>00:00</span>
				<h3>最新一条消息显示</h3>
			</div>
		</div></router-link>
	</div>
</template>

<script>
</script>

<style scoped>
	.theMessage{
		width: 7.5rem;
		height: 1.4rem;
		padding: 0.29rem 0.3rem 0 0.3rem;
		background: #fff;
	}
	.theMessage img{
		width: 0.9rem;
		height: 0.9rem;
		display: block;
		float: left;
	}
	.theMessage .theMessageRight{
		width: 6rem;
		height: 1.1rem;
		float: right;
		padding-left: 0.3rem;
	}
	.theMessage .theMessageRight h2{
		width:1.3rem;
		height:0.28rem;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		float: left;
		margin-top: 0.1rem;
	}
	.theMessage .theMessageRight span{
		width:0.61rem;
		height:0.19rem;
		font-size:0.24rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		float: right;
		margin-top: 0.34rem;
	}
	.theMessage .theMessageRight h3{
		width:5rem;
		height:0.23rem;
		font-size:0.24rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		float: left;
		margin-top: 0.3rem;
	}
</style>
