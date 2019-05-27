<template>
	<div>
		<div class="information" style="background: #fff;">
			<router-link to="/ActivateTheThree"><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>私钥地址</span>
			<router-link to="Home"><div>完成</div></router-link>
		</div>
		<p style="margin: 1.99rem 0 0 0">您已激活成功！</p>
		<p>私钥地址请手抄保存，不要截图</p>
		<div class="address address1">公钥地址： <span>5KYZdUEo39z3Fyyr2SC1j299sBCnWjss</span></div>
		<div class="address address2">私钥地址： <span>5KYZdUEo39z3Fyyr2SC1j299sBCnWjss</span></div>
	</div>
</template>

<script>
</script>

<style scoped>
	p{
		font-size: 0.3rem;
		text-align: center;
	}
	.address span{
		font-size: 0.3rem;
		display: block;
	}
	.address{
		text-align: center;
		margin: 1.2rem 0 0 ;
		font-size: 0.3rem;
	}
</style>
