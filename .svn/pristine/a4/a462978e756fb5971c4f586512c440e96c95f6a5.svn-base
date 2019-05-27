<template>
	<div>
		<div class="information" style="background: #fff;">
			<router-link to='/ForgotPassword'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>忘记密码</span>
			<router-link to="/Authorization"><div>下一步</div></router-link>
		</div>
		<div class="newPassword_1">
			手机号
			<input type="number" placeholder="请输入手机号">
		</div>
		<div class="newPassword_1">
			验证码
			<input type="text" placeholder="请输入验证码">
		</div>
		<div class="verificationCode">
			<span v-show="show" @click="getCode">发送验证码</span>
			<span v-show="!show" class="count">{{count}} s</span>	
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			show: true,
			count: '',
			timer: null,
		}
	},
	methods:{
		getCode(){
			const TIME_COUNT = 60;
			if (!this.timer) {
				this.count = TIME_COUNT;
				this.show = false;
				this.timer = setInterval(() => {
					if (this.count > 0 && this.count <= TIME_COUNT) {
						this.count--;
					} else {
						this.show = true;
						clearInterval(this.timer);
						this.timer = null;
					}
				}, 1000)
			}
		}
	}
}
</script>

<style scoped>
	.newPassword_1{
		border-bottom: 0.01rem solid #eee;
	}
	.newPassword_1 input{
		height: 0.9rem;
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
		margin: 4.52rem auto;
		color: #fff;
	}
	.verificationCode{
		position: relative;
	}
	.verificationCode span{
		width:2rem;
		height:0.6rem;
		display: block;
		background:rgba(247,98,98,1);
		border-radius:0.1rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 0.6rem;
		padding-top:0.05rem;
		position: absolute;
		top: -1.82rem;
		right: 0.31rem;
	}
</style>
