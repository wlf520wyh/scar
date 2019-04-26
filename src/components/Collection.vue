<template>
	<div>
		<div class="information">
			<span>我的收藏</span>
			<div>编辑</div>
		</div>
		<div class="collevtion">
			<div class="collevtionMain">
				<div class="collevtionImg"></div>
				<p>这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</p>
				<div class="look">
					<img src="../images/ic_browse@2x.png" alt="">
					999
				</div>
			</div>
		</div>
		<div class="collevtion">
			<div class="collevtionMain">
				<div class="collevtionImg"></div>
				<p>这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</p>
				<div class="look">
					<img src="../images/ic_browse@2x.png" alt="">
					999
				</div>
			</div>
		</div>
		<div class="collevtion">
			<div class="collevtionMain">
				<div class="collevtionImg"></div>
				<p>这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</p>
				<div class="look">
					<img src="../images/ic_browse@2x.png" alt="">
					999
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	
}
</script>

<style scoped>
	.collevtion{
		height: 2.1rem;
		width: 7.5rem;
	}
	.collevtion .collevtionMain{
		width: 6.9rem;
		height: 2.1rem;
		margin: 0.3rem auto;
		margin-bottom: 0;
	}
	.collevtion .collevtionMain .collevtionImg{
		width:1.50rem;
		height:1.50rem;
		border-radius:0.1rem;
		background: #00C160;
		float: left;
	}
	.collevtion .collevtionMain p{
		width:5.2rem;
		height:0.63rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.38rem;
		float: right;
	}
	.collevtion .collevtionMain .look{
		width: 1rem;
		height: 0.34rem;
		font-size:0.28rem;
		font-family:HelveticaExt-Normal;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:0.38rem;
		float: right;
		margin-top: 0.56rem;
	}
	.collevtion .collevtionMain .look img{
		width: 0.34rem;
		height: 0.34rem;
		
	}
</style>
