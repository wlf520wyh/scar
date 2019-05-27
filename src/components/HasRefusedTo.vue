<template>
	<div>
		<div class="information">
			<router-link to='/CertificationRecords'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>认证详情</span>
		</div>
		<div class="toBeProcessed">
			<img src="../images/b2_ic_yjj@2x.png" alt="">
			<h2>已拒绝</h2>
		</div>
		<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		<div class="toContent">
			<ul class="toContentLeft">
				<li>姓名</li>
				<li>身份证号</li>
				<li>班级</li>
				<li>信用编号</li>
				<li>入学时间</li>
				<li>联系电话</li>
				<li>联系电话</li>
			</ul>
			<ul class="toContentRight">
				<li>紫小鲸</li>
				<li>440183198607291778</li>
				<li>2008法学2班</li>
				<li>201000002054841</li>
				<li>2008-09-07</li>
				<li>-</li>
				<li>这是申请原因内容这是申请原因内容</li>
			</ul>
		</div>
		<div class="theTrial">
			拒绝理由：<div>审定说明：内容属实！</div>
		</div>
		<div class="toBeProcessed">
			<div style="width: 0.18rem;height: 0.18rem;background: #00C160;"></div>
			<h2>培训经历</h2>
		</div>
		<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		<div class="toContent" style="height: 4.69rem;;">
			<ul class="toContentLeft">
				<li>开始时间</li>
				<li>结束时间</li>
				<li>培训机构</li>
				<li>培训地点</li>
				<li>培训内容</li>
				<li>获得证书名称</li>
				<li>证明人</li>
				<li>证明人联系方式</li>
			</ul>
			<ul class="toContentRight">
				<li>紫小鲸</li>
				<li>440183198607291778</li>
				<li>2008法学2班</li>
				<li>201000002054841</li>
				<li>2008-09-07</li>
				<li>-</li>
				<li>这是申请原因内容这是申请原因内容</li>
				<li>这是申请原因内容这是申请原因内容</li>
				
			</ul>
		</div>
		<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		<div class="toContent" style="height: 4.69rem;;">
			<ul class="toContentLeft">
				<li>开始时间</li>
				<li>结束时间</li>
				<li>培训机构</li>
				<li>培训地点</li>
				<li>培训内容</li>
				<li>获得证书名称</li>
				<li>证明人</li>
				<li>证明人联系方式</li>
				<li>附件</li>
			</ul>
			<ul class="toContentRight">
				<li>紫小鲸</li>
				<li>440183198607291778</li>
				<li>2008法学2班</li>
				<li>201000002054841</li>
				<li>2008-09-07</li>
				<li>-</li>
				<li>这是申请原因内容这是申请原因内容</li>
				<li>这是申请原因内容这是申请原因内容</li>
				<li style="color:#F76262;" >查看</li>
			</ul>
		</div>
		<div class="theTrial" style="color:#F76262;">
			审定说明：无法确定其真实性
		</div>
		<div class="toBeProcessed" style="border-top:0.01rem solid #eee">
			<div style="width: 0.18rem;height: 0.18rem;background: #00C160;"></div>
			<h2>教育经历</h2>
			<img style="width: 0.4rem;height: 0.4rem;margin-top: 0.31rem;" src="../images/general_ic_certified@2x.png" alt="#">
		</div>
		<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		<div class="toContent" style="height: 6.5rem;;">
			<ul class="toContentLeft">
				<li>入学日期</li>
				<li>毕业时间</li>
				<li>学校名称</li>
				<li>毕业证编号</li>
				<li>专业类别</li>
				<li>专业名称</li>
				<li>学历/学位 </li>
				<li>学位编号</li>
				<li>主修课程</li>
				<li>证明人</li>
				<li>证明人联系方式</li>
				<li>附件</li>
			</ul>
			<ul class="toContentRight">
				<li>2008-09-07      </li>
				<li>2008-09-07 </li>
				<li>广州大学 </li>
				<li>-</li>
				<li>计算机应用技术</li>
				<li>计算机应用技术</li>
				<li>本科</li>
				<li>35522241</li>
				<li>c语言、数据</li>
				<li>高等数学</li>
				<li>鞠婧祎</li>
				<li style="color:;#F76262">查看</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.toBeProcessed{
		width: 7.5rem;
		height: 1rem;
		padding: 0 0 0 0.3rem;
	}
	.toBeProcessed img{
		width: 0.5rem;
		height: 0.5rem;
		display: block;
		float: left;
		margin-top: 0.26rem;
	}
	.toBeProcessed div{
		display: block;
		float: left;
		margin-top: 0.4rem;
		border-radius: 50%;
	}
	.toBeProcessed h2{
		font-size:0.36rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-top: 0.34rem;
		float: left;
		margin-left: 0.2rem;
	}
	.toContent{
		width: 7.5rem;
		height: 3.86rem;
		padding: 0.3rem 0 0 0.3rem;
		border-bottom:0.01rem solid #eee ;
		
	}
	.toContent .toContentLeft{
		width: 2rem;
		height: 3.50rem;
		float: left;
	}
	.toContent .toContentRight{
		width: 4.5rem;
		height: 3.50rem;
		float: left;
	}
	.toContent ul li{
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.5rem;
	}
	.theTrial{
		width: 7.5rem;
		height: 1rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#333;
		line-height:0.5rem;
		line-height: 1rem;
		padding: 0 0 0 0.3rem;
	}
	.theTrial div{
		width: 3rem;
		height: 1rem;
		float: right;
		color: #F76262;
	}
</style>


