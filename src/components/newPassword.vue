<template>
	<div>
		<div class="information">
			<router-link to='/Encrypted'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新密码</span>
			<div @click="complete()">完成</div>
		</div>
		<div class="newPassword_1" >
			设置密码
			<input type="password" placeholder="6-16位数字、英文及下划线" v-model="passwordOne">
		</div>
		<div class="newPassword_1">
			设置密码
			<input type="password" placeholder="请再次输入密码" v-model="passwordTwo">
		</div>
		<div class="regular" v-show="error">
			密码输入格式有误
		</div>
		<div class="regular" v-show="errorTo">
			两次密码不一致
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			passwordOne:'',
			passwordTwo:'',
			error:false,
			errorTo: false,
		}
	},
	methods:{
		complete: function(){
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
			if(!reg.test(this.passwordOne) && !reg.test(this.passwordTwo)){
				this.error = true;
				setTimeout(()=>{
					this.error = false;
				},1500)
			}else if(this.passwordOne !== this.passwordTwo){
				this.errorTo = true;
				setTimeout(()=>{
					this.errorTo = false;
				},1500)
			}else {
				this.$router.push({name:'Home'});
			}
		}
	}	
}
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