<template>
	<div>
		<div class="information">
			<router-link to='/MyWallet'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>转账</span>
		</div>
		<div class="newPassword_1">
			公钥地址
			<input type="text" placeholder="请输入对方的公钥地址">
		</div>
		<div class="newPassword_1">
			转账数量
			<input type="number" placeholder="请输入转账数量">
		</div>
		<div class="transfer">
			<div class="loginBtnBox">
				<router-link to="/Home"><div class="loginButton">确定</div></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
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
		margin: 4.52rem auto;
		color: #fff;
	}
</style>
