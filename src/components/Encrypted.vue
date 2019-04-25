<template>
	<div>
		<div class="information">
			<router-link to='/ForgotPassword'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>忘记密码</span>
			<router-link to='/NewPassword'><div>下一个</div></router-link>
		</div>
		<div class="question_1">
			密保问题1：网站名称为？
		</div>
		<div class="questionAnswer_1">
			<p>问题1答案</p><br />
			<input type="text" placeholder="请输入" />
		</div>
		<div class="question_1">
			密保问题2：网站地址为？
		</div>
		<div class="questionAnswer_1">
			<p>问题1答案</p><br />
			<input type="text" placeholder="请输入" />
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.information{
		width: 7.50rem;
		height: 1.00rem;
		line-height: 1.00rem;
		font-size:0.36rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		text-align: center;
		position: relative;
		border-bottom: 0.01rem solid #eee;
		
	}
	.information img{
		width: 0.3rem;
		position: absolute;
		left: 0.24rem;
		top: 0.35rem;
	}
	.information div{
		position: absolute;
		right: 0.3rem;
		top: 0;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(0,193,96,1);
		font-size: 0.3rem;
	}
	.question_1{
		width: 7.5rem;
		height: 1rem;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height: 1rem;
		padding-left: 0.3rem;
		border-bottom: 0.01rem solid #eee;
	}
	.questionAnswer_1{
		width: 7.5rem;
		height: 2.3rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		padding-left: 0.3rem;
		padding-top: 0.3rem;
		border-bottom: 0.03rem solid #eee;
	}
	.questionAnswer_1 input{
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
</style>


