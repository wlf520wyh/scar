<template>
	<div>
		<div class="footer">
			<ul>
				<li><img src="../images/ic_share@2x.png" alt="#">&nbsp; 转发</li>
				<li><img src="../images/ic_talk@2x.png" alt="#">&nbsp; 评论</li>
				<li><img src="../images/ic_star_n@2x.png" alt="#">&nbsp; 收藏</li>
				<li><img src="../images/ic_like_n@2x.png" alt="#">&nbsp; 赞</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		
	}
</script>

<style scoped>
	.footer{
		width: 7.5rem;
		height: 1rem;
		position: fixed;
		left: 0;
		bottom: -0.01rem;
		background: #fff;
		z-index: 999;
		border-top: 1px solid #eee;
	}
	.footer ul li{
		width: 1.72rem;
		height: 0.97rem;
		float: left;
		padding: 0.28rem 0 0 0.60rem;
		box-sizing: border-box;
		font-size: 0.26rem;
	}
	.footer img{
		width: 0.44rem;
		display: block;
		float: left;
	}
	.footer span{
		height:0.25rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display:inline-block;
	}
</style>
