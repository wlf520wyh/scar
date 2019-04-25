<template>
	<div>
		<div class="information">
			<span>忘记密码</span>
			<div>下一个</div>
		</div>
		<router-link to="Encrypted"><div class="choose">
			<input type="radio" name="forgot" />
			通过密码保护问题
		</div></router-link>
		<router-link to="EmailBack"><div class="choose">
			<input type="radio" name="forgot" />
			通过电子邮箱
		</div></router-link>
		<router-link to="PhoneBack"><div class="choose">
			<input type="radio" name="forgot" />
			通过手机号码
		</div></router-link>
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
	.information div{
		position: absolute;
		right: 0.3rem;
		top: 0;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(0,193,96,1);
		font-size: 0.3rem;
	}
	.choose{
		width: 7.5rem;
		height: 1rem;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		text-align: left;
		line-height: 1rem;
	}
	.choose input{
		width: 0.3rem;
		height: 0.3rem;
		display: block;
		float: left;
		margin:0.36rem 0.3rem 0 0.3rem;
	}
</style>
