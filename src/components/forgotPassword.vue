<template>
	<div>
		<div class="information">
			<span>忘记密码</span>
			<div @click="next()">下一步</div>
		</div>

			<div class="choose">
				<input value="1" v-model="param" id="color-input" class="color-input-red" type="radio" name="color-input-red" />
				<label for="color-input" style="margin: 0.3rem 0.28rem 0 0.3rem;"></label >
				通过密码保护问题
			</div>

			<div class="choose">
				<input value="2" v-model="param" id="color-input-red" class="color-input-red" type="radio" name="color-input-red" />
				<label for="color-input-red" style="margin: 0.3rem 0.28rem 0 0.3rem;"></label >
				通过电子邮箱
			</div>


			<div class="choose">
				<input value="3" v-model="param" id="color" class="color-input-red" type="radio" name="color-input-red" />
				<label for="color" style="margin: 0.3rem 0.28rem 0 0.3rem;"></label >
				通过手机号码
			</div>

	</div>
</template>

<script>

export default {
	data(){
		return{
			param:1,
		}
	},
	methods:{
		next : function(){
			if(this.param == 1){
				this.$router.push({name:'Encrypted'})
			}else if(this.param == 2){
				this.$router.push({name:'EmailBack'})
			}else if(this.param == 3){
				this.$router.push({name:'PhoneBackFind'})
			}
		}
	}
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
		width: 0.0rem;
		height: 0.0rem;
		display: block;
		float: left;
	}

	.color-input-red +label{
		display: block;
		width: 0.4rem;
		height: 0.4rem;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #eee;
		float: left;
	}
	.color-input-red:checked +label::before{
		display: block;
		content: "\2714";
		font-size: 0.3rem;
		color: #fff;
		border-radius: 50%;
		width: 0.4rem;
		height: 0.4rem;
		background: #00c160;
		line-height: 0.4rem;
		padding-left: 0.05rem;
	}
	input[type=checkbox]{
		visibility: hidden;
		border-radius: 50%;
	}
</style>
