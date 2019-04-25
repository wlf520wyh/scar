<template>
	<div>
		<div class="information">
			<router-link to='/StudentsManage'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>学习成绩</span>
			<div>新增</div>
		</div>
		<div class="resultNav_1">
			<ul>
				<li>2011-2012 <img src="../images/general_arrow_down_gray@2x.png" alt="#"></li>
				<li>第一学期 <img src="../images/general_arrow_down_gray@2x.png" alt="#"></li>
			</ul>
		</div>
		<div class="resultNav_2">
			<ul>
				<li style="padding: 0 0 0 0.3rem;float: left;margin: 0 0rem 0 0;text-align: left;width: 3rem;">科目名称</li>
				<li style="width: 1rem;">学分</li>
				<li style="width: 1rem;">成绩</li>
				<li style="width: 2.1rem;float: right;">认证状态</li>
			</ul>
		</div>
		<div class="resultContent">
			<ul>
				<li style="padding: 0 0 0 0.3rem;float: left;margin: 0 0rem 0 0;text-align: left;width: 3rem;">国际关系学学学学学</li>
				<li style="width: 1rem;">18</li>
				<li style="width: 1rem;">80</li>
				<li style="width: 2.1rem;float: right;">认证状态</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
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
	}
	.information img{
		width: 0.3rem;
		position: absolute;
		left: 0.24rem;
		top: 0.35rem;
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
	.resultNav_1{
		width: 7.5rem;
		height: 0.9rem;
		border-bottom: 0.05rem solid #eee;
	}
	.resultNav_1 ul li{
		font-size: 0.3rem;
		float: left;
		height: 0.9rem;
		width: 3.75rem;
		text-align: center;
		line-height: 0.9rem;
		border-left:0.01rem solid #eee;
		box-sizing: border-box;
	}
	.resultNav_1 ul li img{
		width: 0.22rem;
	}
	.resultNav_2{
		width: 7.5rem;
		height: 0.8rem;
	}
	.resultNav_2 ul li{
		width: 1.875rem;
		height: 0.8rem;
		display: block;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height:0.8rem;
		float: left;
		text-align: right;
		text-align: center;
	}
	.resultContent{
		width: 7.5rem;
		height: 1.33rem;
	}
	.resultContent ul li{
		width: 1.875rem;
		height: 0.8rem;
		display: block;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height:0.8rem;
		float: left;
		text-align: right;
		text-align: center;
	}
</style>


