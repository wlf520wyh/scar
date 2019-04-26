<template>
	<div>
		<div class="information">
			<a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a>
		</div>
		<div class="loginPhoto">
			<div class="headPortrait">
				
			</div>
			诚信档案
		</div>
		<h2>登陆者可以获得以下权限</h2>
		<h3>·获得你的公开信息（昵称、头像等）</h3>
		<div class="loginBtnBox">
			<router-link to="/BindingAccount"><div class="loginButton">确认登录</div></router-link>
		</div>
	</div>
</template>

<script>

export default {
	
}
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
		border-bottom: 0.01rem solid #EEEEEE;
		
	}
	.information img{
		width: 0.3rem;
		position: absolute;
		left: 0.24rem;
		top: 0.35rem;
	}
	.loginPhoto{
		width: 7.5rem;
		height: 2.5rem;
		font-size:0.32rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		text-align: center;
	}
	.loginPhoto .headPortrait{
		width:1.50rem;
		height:1.50rem;
		background:rgba(163,162,162,1);
		border-radius:0.10rem;
		margin: 0 auto;
		margin-top: 1.1rem;
		margin-bottom: 0.3rem;
	}
	.loginBtnBox{
		width: 7.5rem;
		height: 1rem;
	}
	.loginButton{
		width: 6.2rem;
		height: 1rem;
		background: #00C160;
		border-radius: 0.1rem;
		font-size: 0.32rem;
		text-align: center;
		line-height: 1rem;
		margin: 0 auto;
		color: #fff;
	}
	h2,h3{	
		width: 7.5rem;
		font-size:0.32rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.39rem;
		margin-left: 1.06rem;
		margin-bottom: 0.5rem;
	}
	h2{
		margin: 1.34rem 0 0.5rem 1.06rem;
	}
	h3{
		color:#AAAAAA;
		margin-bottom: 1.5rem;
	}
</style>