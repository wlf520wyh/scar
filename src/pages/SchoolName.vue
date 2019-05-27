<template>
	<div>
		<div class="information">
			<router-link to='/AddTheRecord'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>新增教育经历</span>
			<router-link to="AddTheRecord"><div>完成</div></router-link>
		</div>
		<div class="search">
			<input type="text" placeholder="请输入">
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.search{
		width: 7.5rem;
		height: 1rem;
		padding: 0.33rem 0 0 0.3rem;
	}
	.search input{
		width: 5rem;
		height:0.30rem;
		display: block;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
</style>
