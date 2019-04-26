<template>
	<div>
		<div class="information">
			<span>设置</span>
		</div>
		<router-link to="Help">
			<div class="myWallet">
				<span>帮助中心</span>
				<img class="imgRight" src="../images/arrow_right_gray@2x.png" alt="#">
			</div>
		</router-link>
		<router-link to="Feedback">
			<div class="myWallet">
				<span>意见反馈</span>
				<img class="imgRight" src="../images/arrow_right_gray@2x.png" alt="#">
			</div>
		</router-link>
		<router-link to="AboutUs">
			<div class="myWallet">
				<span>关于我们</span>
				<img class="imgRight" src="../images/arrow_right_gray@2x.png" alt="#">
			</div>
		</router-link>
		<router-link to="VersionInformation">
			<div class="myWallet">
				<span>版本信息</span>
				<img class="imgRight" src="../images/arrow_right_gray@2x.png" alt="#">
			</div>
		</router-link>
		<div style="width: 7.5rem;height: 0.05rem;background: #EEEEEE;"></div>
		<div class="myWallet">
			<span>版本更新</span>
			<img class="imgRight" src="../images/arrow_right_gray@2x.png" alt="#">
		</div>
		<div class="loginBtnBox">
			<router-link to="/Home">
				<div class="loginButton">退出登录</div>
			</router-link>
		</div>

	</div>
</template>

<script>
</script>

<style scoped>
	.myWallet {
		width: 7.5rem;
		height: 1rem;
		padding: 0.3rem 0.3rem 0 0.3rem;
		border-bottom: 1px solid #eee;
	}

	.myWallet .imgRight {
		width: 0.26rem;
		height: 0.26rem;
		display: block;
		float: right;
		margin: 0.1rem 0 0 0;
	}

	.myWallet span {
		width: 2rem;
		height: 0.28rem;
		font-size: 0.30rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		display: block;
		float: left;
		margin-left: 0.16rem;
	}

	.loginBtnBox {
		width: 7.5rem;
		height: 1rem;
	}

	.loginButton {
		width: 6.2rem;
		height: 1rem;
		background: #fff;
		border-radius: 0.1rem;
		font-size: 0.32rem;
		text-align: center;
		line-height: 1rem;
		margin: 0 auto;
		color: #00C160;
		border: 1px solid rgba(0, 193, 96, 1);
		margin-top: 5rem;
	}
</style>
