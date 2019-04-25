<template>
	<div>
		<div class="information">
			<router-link to='/ForgotPassword'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>忘记密码</span>
			<div>下一步</div>
		</div>
		<div class="emailBack">
			验证码
			<input type="text" placeholder="请输入申请验证码"/>
		</div>
		<div class="theSign">
			我们已经将申请验证码发送到您用户信息中关联的邮箱地址中，请您注意查看！由于系统会有所延迟，邮件可能会晚一点收到！如果没有收到邮件，电此<span style="color:#F76262;">重新发送</span>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
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
	.emailBack{
		width: 7.5rem;
		height: 1rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height: 1rem;
		text-align: left;
		padding: 0 0 0 0.3rem;
	}
	.emailBack input{
		margin-left: 0.83rem;
	}
	.theSignBox{
		width: 7.5rem;
		height: 0.99rem;
	}
	.theSign{
		width:6.74rem;
		height:0.99rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:0.36rem;
		margin: 0 auto;
	}
</style>


