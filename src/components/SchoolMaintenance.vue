<template>
	<div>
		<div class="information">
			<router-link to='/StudentHome'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>档案管理</span>
		</div>
		<div class="nav">
			<ul>
				<router-link to="SStudentResult">
					<li>
						<img src="../images/b1_btn_xxcj@2x.png" alt="#">
						学习成绩
					</li>
				</router-link>
				<router-link to="StudentGraduated">
					<li>
						<img src="../images/b1_btn_bypy@2x.png" alt="#">
						毕业评语
					</li>
				</router-link>
				<router-link to="SStudentLoans">
					<li>
						<img src="../images/b1_btn_zxdk@2x.png" alt="#">
						助学贷款
					</li>
				</router-link>
				<router-link to="StudentBadRecord">
					<li>
						<img src="../images/b1_btn_zxbljl@2x.png" alt="#">
						在校不良记录
					</li>
				</router-link>
				<router-link to="StudentLackRecord">
					<li>
						<img src="../images/b1_btn_qfjl@2x.png" alt="#">
						欠费记录
					</li>
				</router-link>
				<router-link to="StudentGrowth">
					<li>
						<img src="../images/b1_btn_czzb@2x.png" alt="#">
						成长指标
					</li>
				</router-link>
				<router-link to="StudentAttendance">
					<li>
						<img src="../images/b1_btn_kqjl@2x.png" alt="#">
						考勤记录
					</li>
				</router-link>
				<router-link to="StudentGood">
					<li>
						<img src="../images/b1_btn_zxyljl@2x.png" alt="#">
						在校优良记录
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.nav{
		width: 7.5rem;
		height: 7.5rem;
	}
	.nav ul li{
		width: 2.5rem;
		height: 2.5rem;
		float: left;
		border: 0.01rem solid #eee;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
		text-align: center;
	}
	.nav ul li img{
		width: 1rem;
		height: 1rem;
		display: block;
		margin: 0.5rem 0 0.3rem 0.75rem;
	}
</style>
