<template>
	<div>
		<div class="information" style="background: #fff;">
			<router-link to='/ForgotPassword'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>忘记密码</span>
			<div @click="next()">下一步</div>
		</div>
		<div class="newPassword_1">
			手机号
			<input type="number" placeholder="请输入手机号" v-model="phoneOne">
		</div>
		<div class="newPassword_1">
			验证码
			<input type="text" placeholder="请输入验证码" v-model="vsCode">
		</div>
		<div class="verificationCode">
			<span v-show="show" @click="getCode">发送验证码</span>
			<span v-show="!show" class="count">{{count}} s</span>	
		</div>
		<div class="regular" v-show="error">
			请输入正确的手机号
		</div>
		<div class="regular" v-show="vsCodeTwo" v-text="window">
			
		</div>
		
	</div>
</template>

<script>
import Api from '../api.js'
export default {
	data(){
		return {
			show: true,
			count: '',
			timer: null,
			phoneOne:'',
			error:false,
			vsCode: '',
			vsCodeTwo:false,
			window:'',
			firstNone:false,
			account:'',
			picToken:'',
		}
	},
	methods:{
		getCode(){
			const data = {
				account:this.phoneOne,
			}
			Api.toObtain(data,(res) => {
				console.log(res);
				}, (res) => {
				console.log(res);	
			})
			
			if(this.firstNone){
				this.vsCodeTwo = true;
				this.window = '已再次发送验证码';
				setTimeout(()=>{
					this.vsCodeTwo = false;
				},1500)
			}else{
				this.firstNone = true
			}
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
		},
		next: function(){
			var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
			if(!reg.test(this.phoneOne)){
				this.error = true;
				setTimeout(()=>{
					this.error = false;
				},1500)
			}else if(this.vsCode !== '1234'){
				this.vsCodeTwo = true;
				this.window = '验证码错误';
				setTimeout(()=>{
					this.vsCodeTwo = false;
				},1500)
			}else{
				this.$router.push({name: 'PhoneNewPsaaword'})
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
	.regular{
		width:5rem;
		height:0.9rem;
		background:rgba(42,44,47,1);
		opacity:0.5;
		border-radius:0.08rem;
		position: fixed;
		top: 7.3rem;
		left: 3.75rem;
		margin-left: -2.18rem;
		line-height: 0.9rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
	}
</style>
