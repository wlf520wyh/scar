<template>
	<div>
		<div class="information">
			<router-link to='/CertificationRecords'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>待处理</span>
		</div>
		<div class="toBeProcessed">
			<img src="../images/b1_btn_zxyljl@2x.png" alt="">
			
			<h2>待处理</h2>
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
		<div style="width: 7.5rem;height: 1rem;"></div>
		<div class="close">
			<div @click="close()">取消申请</div>
		</div>
		<div v-show="mask" style="width: 7.5rem;height: 50rem;z-index: 888;background: #000;opacity: 0.5;display: none;position: fixed;top: 0;left: 0;"></div>
		<div v-show="popup" class="PopupWindow">
			<p>是否取消申请</p>
			<ul>
				<li @click="cancel()">取消</li>
				<li>确定</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			mask:false,
			popup:false,
		}
	},
	methods:{
		close: function(){
			this.mask = true;
			this.popup = true;
			
		},
		cancel: function(){
			this.mask = false;
			this.popup = false;
		}
	}
	
}
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
	.close{
		width: 7.5rem;
		height: 1rem;
		padding: 0.15rem 0.3rem 0 0;
		position: fixed;
		bottom: -0.01rem;
		left: 0;
	}
	.close div{
		width:1.50rem;
		height:0.60rem;
		border:1px solid rgba(102,102,102,1);
		border-radius:0.10rem;
		text-align: center;
		line-height: 0.6rem;
		font-size: 0.28rem;
		float: right;
	}
	.PopupWindow{
		width: 5rem;
		height: 3.8rem;
		position: fixed;
		z-index: 999;
		top: 50%;
		left: 50%;
		margin: -1.9rem 0 0 -2.5rem;
		background: #fff;
		border-radius:0.10rem;
	}
	.PopupWindow p{
		width: 5rem;
		height: 0.3rem;
		text-align: center;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.48rem;
		margin-top: 1rem;
	}
	.PopupWindow ul{
		margin-top: 1.4rem;
	}
	.PopupWindow ul li{
		height: 1rem;
		width: 2.5rem;
		float: left;
		text-align: center;
		line-height: 1rem;
		color: #333;
		font-size: 0.3rem;
		border-top:1px solid #eee;
	}
</style>
