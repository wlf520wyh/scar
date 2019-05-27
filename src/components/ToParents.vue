<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information" style="background: #fff;">
			<router-link to='/StudentsManage'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>发送信息</span>
		</div>
		<div class="people">
			<ul>
				<li>收件人</li>
				<li style="float: right;">紫大静</li>
			</ul>
		</div>
		<div class="theTheme">
			<p>*主题</p>
			<input type="text" placeholder="请输入"/>
		</div>
		<div class="theTheme" style="border: none;">
			<p>*内容</p>
			<input type="text" placeholder="请输入"/>
		</div>
		<div class="send">
			发送
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>



<style scoped>
	.people{
		width: 7.5rem;
		height: 1rem;
		border-bottom: 0.01rem solid #eee;
		padding: 0 0.3rem 0 0.3rem;
		background: #fff;
	}
	.people ul li{
		font-size: 0.3rem;
		float: left;
		line-height: 1rem;
	}
	.theTheme{
		width: 7.5rem;
		height: 1.96rem;
		padding: 0.3rem 0 0 0.3rem;
		border-bottom: 0.1rem solid #eee;
		background: #fff;
	}
	.theTheme P{
		font-size: 0.3rem;
	}
	.theTheme input{
		height: 1rem;
		width: 7rem;
		font-size: 0.3rem;
		display: block;
	}
	.send{
		width: 5rem;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		font-size: 0.3rem;
		background:rgba(0,193,96,1);
		border-radius:10px;
		color: #fff;
		margin: 1.7rem auto;
	}
</style>
