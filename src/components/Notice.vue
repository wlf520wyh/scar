<template>
	<div>
		<div class="information" style="background: #fff;">
			<span>消息</span>
		</div>
		<router-link to="MessageDetails"><div class="notice">
			<div class="noticeMain">
				<h2 class="noticeTime">00:00</h2>
				<p>消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字</p>
			</div>
		</div></router-link>
		<router-link to="MessageDetails"><div class="notice">
			<div class="noticeMain">
				<h2 class="noticeTime">00:00</h2>
				<p>消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字消息标题文字</p>
			</div>
		</div></router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.notice{
		width: 7.5rem;
		height: 2.2rem;
	}
	.notice .noticeMain{
		width: 6.9rem;
		height: 2.2rem;
		margin: 0.3rem auto;
		padding: 0.31rem;
		border: 1px solid #eee;
		background: #fff;
	}
	.notice .noticeMain .noticeTime{
		width:0.61rem;
		height:0.19rem;
		font-size:0.24rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-bottom: 0.3rem;
	}
	.notice .noticeMain p{
		width:6.28rem;
		height:1.08rem;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.40rem;
	}
</style>
