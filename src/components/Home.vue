<template>
  <div>
		<div class="header">诚信档案</div>
		<div class="home_box">
			<div style="margin:0 0 0 0.30rem; width: 6.9rem;height: 1rem;padding-top:0.26rem;"><img style="display:block;float: left;width: 0.3rem;" src="../images/ic_notice@2x.png" alt="#"><span  style="display:block;float: left;margin-top:-0.1rem;font-size: 0.30rem;">这是公告标题内容这是公告标题内容</span></div>
			<div class="banner">
				<div id="demo" class="carousel slide" data-ride="carousel">	
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="../assets/banner.png">
						</div>
						<div class="carousel-item">
							<img src="../assets/banner.png">
						</div>
						<div class="carousel-item">
							<img src="../assets/banner.png">
						</div>
					</div>
					<a class="carousel-control-prev" href="#demo" data-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					</a>
					<a class="carousel-control-next" href="#demo" data-slide="next">
						<span class="carousel-control-next-icon"></span>
					</a>
				</div>
			</div>
			<ul>
				<li>
					<router-link to="MyWallet">
						<a href="#">
							<img src="../assets/money.png" alt="#">
							<p>我的钱包</p>
						</a>
					</router-link>
				</li>
				<li style="padding: 0 0.81rem 0 0.82rem;">
					<router-link to='/StudentsManage'>
						<a href="#">
							<img src="../assets/manage.png" alt="#">
							<p>学生管理</p>
						</a>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="kong"> </div>
  </div>
</template>

<script>
export default {
	
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.carousel-inner img{
		width: 6.9rem;
	}
	.header{
		width: 7.50rem;
		height: 1.00rem;
		line-height: 1.00rem;
		font-size:0.36rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		text-align: center;
	}
	.home_box{
		width: 7.50rem;
		height: 7rem;
		padding: 0rem 0 0 0rem;
		box-sizing: border-box;
	}
	.home_box span{
		display: inline-block;
		height: 0.32rem;
		font-size: 0.24rem;
		margin: 0rem 0 0 0.10rem ;
	}
	.home_box .banner{
		width: 6.90rem;
		height: 3.20rem;
		margin: 0 auto;
	}
	.home_box .banner img{
		width: 6.90rem;
	}
	.home_box ul li{
		float:left;
		height: 1.55rem;
		text-align: center;
		padding: 0rem 0.81rem 0 1.80rem;
		margin-top: 0.32rem;
	}
	.home_box ul li a{
		width:0.94rem;
		height:0.23rem;
		font-size:0.20rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.home_box ul li a img{
		width: 1.18rem;
		display: block;
	}
	.kong{
		width: 7.50rem;
		height: 0.08rem;
		background: #eee;
	}
</style>
