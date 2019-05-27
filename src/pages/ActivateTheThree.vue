<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information" style="background: #fff;">
			<router-link to="/ActivateTheTwo"><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>激活</span>
			<router-link to="KeyAddress"><div>下一步</div></router-link>
		</div>
		<div class="nav">
			<div class="navLeft">*电子邮箱</div>
			<div class="navRight"><input type="text" placeholder=""/></div>
		</div>
		<div class="input-red">
			<input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" value="#00c160" />
			<label  for="color-input-red"></label >
			<span class="account">不重用账号</span>
		</div>
		<div class="nav">
			<div class="navLeft">*密保问题1</div>
			<div class="navRight"><input type="text" placeholder=""/></div>
		</div>
		<div class="nav">
			<div class="navLeft">*问题1答案</div>
			<div class="navRight"><input type="text" placeholder=""/></div>
		</div>
		<div class="nav">
			<div class="navLeft">*密保问题2</div>
			<div class="navRight"><input type="text" placeholder=""/></div>
		</div>
		<div class="nav">
			<div class="navLeft">*问题2答案</div>
			<div class="navRight"><input type="text" placeholder=""/></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.nav{
		width: 7.5rem;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 0.01rem solid #eee;
		background: #fff;
	}
	.nav div{
		font-size: 0.3rem;
		color: #333;
		margin-left: 0.3rem;
	}
	.nav div input{
		height: 0.8rem;
		width: 5rem;
	}
	.account{
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		display: block;
		float: left;
		margin-top: 0.3rem;
	}
	#color-input-red +label{
		display: block;
		width: 0.4rem;
		height: 0.4rem;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #eee;
		float: left;
		margin: 0.3rem 0.3rem 0 0.3rem;
	}
	#color-input-red:checked +label::before{
		display: block;
		content: "\2714";
		text-align: center;
		font-size: 0.3rem;
		color: #fff;
		border-radius: 50%;
		width: 0.4rem;
		height: 0.4rem;
		background: #00c160;
	}
	input[type=checkbox]{
		visibility: hidden;
		border-radius: 50%;
	}
	.input-red{
		height: 1rem;
		width: 7.5rem;
	}
</style>
