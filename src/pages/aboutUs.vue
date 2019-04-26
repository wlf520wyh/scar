<template>
	<div>
		<div class="information">
			<router-link to='/Fit'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>标题文字</span>
		</div>
		<div class="information_details">
			<div class="image_content">
				
			</div>
			<div class="content">
				<p>
					这是资讯内容，由甲方后台编辑。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</p>
			</div>
		</div>
		<div class="information_details">
			<div class="image_content">
				
			</div>
			<div class="content">
				<p>
					这是资讯内容，由甲方后台编辑。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</p>
			</div>
		</div>
		<div class="information_details">
			<div class="image_content">
				
			</div>
			<div class="content">
				<p>
					这是资讯内容，由甲方后台编辑。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
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
		border-bottom: 0.01rem solid #eee;
		
	}
	.information img{
		width: 0.3rem;
		position: absolute;
		left: 0.24rem;
		top: 0.35rem;
	}
	.information_details{
		width: 7.5rem;
		height: 7.5rem;
		box-sizing: border-box;
		padding: 0.31rem 0 0 0.31rem;
		
	}
	.information_details h2{
		width:6.88rem;
		height:0.82rem;
		font-size:0.32rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:0.48rem;
		margin-bottom: 0.28rem;
	}
	.information_details .time{
		width:3rem;
		height:0.5rem;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:0.48rem;
	}
	.image_content{
		width: 6.90rem;
		height: 4.00rem;
		margin: 0.2rem 0 0 0;
		background: #00C160;
		border-radius:0.10rem;
		margin: 0 0 0.2rem 0;
	}
	.information_details .content{
		width:6.84rem;
		height:2.52rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.44rem;
	}
</style>

