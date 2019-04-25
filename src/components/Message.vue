<template>
	<div>
		<div class="massage">
			<div class="massage_box"></div>
			<h2>资讯</h2>
			<router-link to='/Information'><a href="#">更多></a></router-link>
		</div>
		<div class="massage_matter">
			<div class="massage_matterBox">
				<a href="#"><img src="../assets/massage1.png" alt="#"></a>
				<div class="massage_matter1">这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</div>
				<div class="like">
					<ul>
						<li><img src="../assets/massage1-1.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-2.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-3.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
					</ul>
				</div>
			</div>
			<div class="massage_matterBox">
				<a href="#"><img src="../assets/massage1.png" alt="#"></a>
				<div class="massage_matter1">这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</div>
				<div class="like">
					<ul>
						<li><img src="../assets/massage1-1.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-2.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-3.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
					</ul>
				</div>
			</div>
			<div class="massage_matterBox">
				<a href="#"><img src="../assets/massage1.png" alt="#"></a>
				<div class="massage_matter1">这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</div>
				<div class="like">
					<ul>
						<li><img src="../assets/massage1-1.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-2.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-3.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
					</ul>
				</div>
			</div>
			<div class="massage_matterBox">
				<a href="#"><img src="../assets/massage1.png" alt="#"></a>
				<div class="massage_matter1">这是标题内容这是标题内容这是标题内容这是标题最多两行这是标题内容最多两行...</div>
				<div class="like">
					<ul>
						<li><img src="../assets/massage1-1.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-2.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
						<li><img src="../assets/massage1-3.png" alt="#"></li>
						<li class="like_li"><p>999</p></li>
					</ul>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.massage{
		width: 7.50rem;
		height: 1.00rem;
		padding: 0.28rem 0 0 0.30rem;
		box-sizing: border-box;
		position: relative;
		margin-bottom: 0.3rem;
	}
	.massage .massage_box{
		width: 0.10rem;
		height: 0.40rem;
		background: #00C160;
		float: left;
	}
	.massage h2{
		width: 1.00rem;
		height:0.32rem;
		font-size:0.30rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-left: 0.18rem;
		margin-top:0.02rem;
	}
	.massage a{
		display: block;
		height:0.28rem;
		width: 0.8rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
		position: absolute;
		right:0.2rem;
		top:0.14rem;
	}
	.massage_matter{
		width: 7.50rem;
		height: 5.60rem;
		padding: 0 0 0 0.30rem;
		box-sizing: border-box;
		position: relative;
	}
	.massage_matter .massage_matterBox{
		width: 6.90rem;
		height: 1.5rem;
		margin:  0 0 0.3rem 0;
		position: relative;
	}
	.massage_matter .massage_matterBox a{
		width: 1.50rem;
		height: 1.50rem;
		display: block;
		float: left;
	}
	.massage_matter .massage_matterBox a img{
		width: 1.5rem;
		margin-top:-0.3rem;
	}
	.massage_matter .massage_matter1{
		width:5.12rem;
		height:0.63rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.38rem;
		float:right;
	}
	.massage_matter .like{
		height: 0.31rem;
		width: 4.00rem;
		position: absolute;
		bottom: 0rem;
		right: 0;
	}
	.massage_matter .like ul li{
		float: left;
	}
	.massage_matter .like ul li img{
		display: block;
		width: 0.34rem;
	}
	.massage_matter .like .like_li{
		margin:0 0.35rem 0 0.08rem;
	}
	.massage_matter .like ul li p{
		font-size: 0.26rem;		
		line-height: 0.30rem;
	}
</style>
