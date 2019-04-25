<template>
	<div>
		<div class="information">
			<router-link to='/Encrypted'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新密码</span>
			<router-link to='/Login'><div>完成</div></router-link>
		</div>
		<div class="newPassword_1">
			设置密码
			<input type="password" placeholder="6-16位数字、英文及下划线">
		</div>
		<div class="newPassword_1">
			设置密码
			<input type="password" placeholder="请再次输入密码">
		</div>
	</div>
</template>

<script>
	
</script>
<style>
	.newPassword_1{
		width: 7.5rem;
		height: 1rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height: 1rem;
		padding-left: 0.3rem;
	}
	.newPassword_1 input{
		margin: 0 0 0 0.53rem;
		width: 3.7rem;
	}
</style>