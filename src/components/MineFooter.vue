<template>
	<div>
		<div class="footer">
			<ul>
				<li><router-link to="Home"><a href="#"><img src="../images/tab_home_n@2x.png" alt=""></a><p>首页</p></router-link></li>
				<li><a href="#"><img src="../images/tab_authentication_n@2x.png" alt=""></a><p style="margin-left:-0.15rem;">信息认证</p></li>
				<li><router-link to="TheMessage"><a href="#"><img src="../images/tab_massage_n@2x.png" alt=""></a><p>消息</p></router-link></li>
				<li><a href="#"><img src="../images/tab_student_s@2x.png" alt=""></a><p>我的</p></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>	
	.footer{
		width: 7.5rem;
		height: 0.97rem;
		border-top:0.03rem solid #eee;
		background: #fff;
		z-index: 999;
		position: fixed;
		bottom: -0.01rem;
		left: 0;
	}
	.footer ul li{
		width: 1.87rem;
		height: 0.97rem;
		float: left;
		padding: 0.14rem 0 0 0.86rem;
		box-sizing: border-box;
	}
	.footer img{
		width: 0.44rem;
		display: block;
		
	}
	.footer p{
		height:0.21rem;
		font-size:0.18rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#555;
	}
</style>
