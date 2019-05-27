<template>
	<div>
		<div class="information">
			<span>信息认证</span>
		</div>
		<div class="nav">
			<router-link to="InformationAuthentication"><div style="color:#333;">申请认证</div></router-link>
			<router-link to="CertificationRecords"><div style="border-bottom: 1px solid #00C160;color:rgba(0,193,96,1);border-left: 1px solid #eee;">认证记录</div></router-link>
		</div>
		<div class="nav_2">
			<input id="all" class="color-input-red" type="checkbox" name="color-input-red" value="#00c160" />
			<label for="all"></label >
			<span>全部</span>
			<input id="toBeProcessed" class="color-input-red" type="checkbox" name="color-input-red" value="#00c160" />
			<label for="toBeProcessed"></label >
			<span>待处理</span>
			<input id="toAcceptThe" class="color-input-red" type="checkbox" name="color-input-red" value="#00c160" />
			<label for="toAcceptThe"></label >
			<span>受理中</span>
			<input id="success" class="color-input-red" type="checkbox" name="color-input-red" value="#00c160" />
			<label for="success"></label >
			<span>认证成功</span>
			<input id="refused" class="color-input-red" type="checkbox" name="color-input-red" value="#00c160" />
			<label for="refused"></label >
			<span>已拒绝</span>
		</div>
		<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		<div>
			<div class="creContent">
				申请时间：<span>2009/00/00</span><p>待处理</p>
			</div>
			<router-link to="ToBeProcessed"><div class="creContent">
				<span style="color:#333;">认证内容：培训经历、个人风采</span><p><img src="../images/arrow_right_gray@2x.png" alt="#"></p>
			</div></router-link>
			<div class="creContent">
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
			<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		</div>
		<div>
			<div class="creContent">
				申请时间：<span>2009/00/00</span><p>受理中</p>
			</div>
			<router-link to="ToAcceptThe"><div class="creContent">
				<span style="color: #333;">认证内容：培训经历、个人风采</span><p><img src="../images/arrow_right_gray@2x.png" alt="#"></p>
			</div></router-link>
			<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		</div>
		<div>
			<div class="creContent">
				申请时间：<span>2009/00/00</span><p>认证成功</p>
			</div>
			<router-link to="AuthenticationSuccess"><div class="creContent">
				<span style="color: #333;">认证内容：培训经历、个人风采</span><p><img src="../images/arrow_right_gray@2x.png" alt="#"></p>
			</div></router-link>
			<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		</div>
		<div>
			<div class="creContent">
				申请时间：<span>2009/00/00</span><p>已拒绝</p>
			</div>
			<router-link to="HasRefusedTo"><div class="creContent">
				<span style="color: #333;">认证内容：培训经历、个人风采</span><p><img src="../images/arrow_right_gray@2x.png" alt="#"></p>
			</div></router-link>
			<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		</div>
		<div>
			<div class="creContent">
				申请时间：<span>2009/00/00</span><p>已取消</p>
			</div>
			<router-link to="HasBeenCancelled"><div class="creContent">
				<span style="color: #333;">认证内容：培训经历、个人风采</span><p><img src="../images/arrow_right_gray@2x.png" alt="#"></p>
			</div></router-link>
			<div style="width: 7.5rem;height: 0.05rem;background: #eee;"></div>
		</div>
		<div style="width: 7.5rem;height: 1rem;"></div>
	</div>
</template>

<script>
	
export default {
	data(){
		return{
			popup:false,
			mask:false,
			
		}
	},
	methods:{
		close : function(){
			this.popup = true,
			this.mask = true
		},
		cancel : function(){
			this.popup = false,
			this.mask = false
		}
	}
}

</script>

<style scoped> 
	.nav{
		width: 7.5rem;
		height: 1rem;
		border-bottom:0.01rem solid #eee ;
		
	}
	.nav div{
		width: 3.75rem;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		font-size:0.34rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		float: left;
		
	}
	.nav_2{
		width: 7.5rem;
		height: 1rem;
		padding: 0.3rem 0 0 0rem;
		overflow: hidden;
		border-bottom:0.01rem solid #eee ;
		overflow: hidden;
	}
	.nav_2 input{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		float: left;
		/* margin-left: 0.1rem; */
	}
	.nav_2 span{
		width: 1.rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display: block;
		float: left;
		margin-top: -0.04rem;
		margin-left: 0.05rem;
	}
	.creContent{
		width: 7.5rem;
		height: 1rem;
		font-size: 0.28rem;
		line-height: 1rem;
		border-bottom: 0.01rem solid #eee;
		padding: 0 0.3rem 0 0.3rem;
	}
	.creContent p{
		float: right;
	}
	.creContent img{
		width: 0.2rem;
	}
	.creContent div{
		width:1.50rem;
		height:0.60rem;
		border:1px solid rgba(102,102,102,1);
		border-radius:0.10rem;
		text-align: center;
		line-height: 0.6rem;
		float: right;
		margin-top: 0.2rem;
		color:#333333;
	}
	.color-input-red +label{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #eee;
		float: left;
		margin: 0;
	}
	.color-input-red:checked +label::before{
		display: block;
		content: "\2714";
		text-align: center;
		font-size: 0.28rem;
		color: #fff;
		border-radius: 50%;
		width: 0.3rem;
		height: 0.3rem;
		background: #00c160;
		line-height: 0.3rem;
	}
	input[type=checkbox]{
		visibility: hidden;
		border-radius: 50%;
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

