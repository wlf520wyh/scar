<template>
	<div>
		<div class="information">
			<span>信息认证</span>
		</div>
		<div class="nav">
			<div style="border-bottom: 1px solid #00C160;color:rgba(0,193,96,1);">申请认证</div>
			<router-link to="CertificationRecords"><div style="color:#999;">认证记录</div></router-link>
		</div>
		<div class="educationBox">
			<div class="content">
				<input 
					id="quan" 
					class="color-input-red" 
					type="checkbox" 
					name="color-input-red" 
					@click="checkAll($event)"
				/>
				<label for="quan"></label >
				<span>教育经历</span>
				<div 
					@click="open()" 
					v-show="btn">
					<img src="../images/general_arrow_down_gray@2x.png" alt="">
				</div>
				<div @click="openTo()" v-show="btnTo">
					<img src="../images/general_arrow_up_gray@2x.png" alt="">
				</div>
			</div>
			<div v-show="content">
				<div class="contentNav">
					<input 
						id="color-input-red-1" 
						class="color-input-red checkItem" 
						type="checkbox" 
						name="color-input-red" 
						value="one" 
						v-model="checkData"
					/>
					<label for="color-input-red-1" style="margin-top: 0.3rem"></label >
					<div>
						<h2>这是学校名称</h2>
						<h3>2019.12.12-2019.09.1</h3>
						<h4>培训地点</h4>
					</div>
					<p>学历</p>
				</div>
				<div class="contentNav">
					<input 
						id="color-input-red-2" 
						class="color-input-red checkItem" 
						type="checkbox" 
						name="color-input-red" 
						value="two" 
						v-model="checkData"
					/>
					<label for="color-input-red-2" style="margin-top: 0.3rem;"></label >
					<div>
						<h2>这是学校名称</h2>
						<h3>2019.12.12-2019.09.1</h3>
						<h4>培训地点</h4>
					</div>
					<p>学历</p>
				</div>
			</div>
		</div>
		<div class="toApplyFor">
			<p>申请说明</p>
			<img src="../images/arrow_right_gray@2x.png" alt="">
		</div>
		<div class="toApplyFor">
			<p>上传材料证明</p>
			<input type="file" id="btnApply" style="width: 0;height: 0;">
			<label for="btnApply" class="btnApply">点击上传</label>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return{
			content:false,
			btn:true,
			btnTo:false,
			checkData: [],
		}
	},
	watch: {
		checkData: {
			handler(){
				if(this.checkData.length == 2){
					document.querySelector('#quan').checked = true;
				}else {
					document.querySelector('#quan').checked = false;
				}
			}
		}
	},
	methods:{
		open : function(){
			this.content = true;
			this.btn = false;
			this.btnTo = true;
		},
		openTo : function(){
			this.content = false;
			this.btn = true;
			this.btnTo = false;
		},
		checkAll(e){
			var checkObj = document.querySelectorAll('.checkItem');
			if(e.target.checked){
				for(var i = 0;i<checkObj.length;i++){
					if(!checkObj[i].checked){
						this.checkData.push(checkObj[i].value);
					}
				}
			}else {
				this.checkData = [];
			}
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
		border-left:0.01rem solid #eee ;
	}
	.content{
		height: 1rem;
		width: 7.5rem;
		padding: 0.3rem 0.39rem 0 0.3rem;
		border-bottom: 0.01rem solid #eee;
	}
	.content input{
		width: 0;
		height: 0;
		display: block;
		float: left;
	}
	.content span{
		width:1.5rem;
		height:0.28rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display: block;
		float: left;
		margin-top: -0.04rem;
		margin-left: 0.19rem;
	}
	.content img{
		width: 0.2rem;
		height: 0.2rem;
		display: block;
		float: right;
	}
	.contentNav{
		width: 7.5rem;
		height: 1.85rem;
		border-bottom: 0.01rem solid #eee;
	}
	.contentNav input{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		float: left;
		margin-left: 0.8rem;
		margin-top: 0.3rem;
	}
	.contentNav div{
		float: left;
		width: 4rem;
		height: 1.6rem;
		margin-left: 0.2rem;
		margin-top: 0.25rem;
	}
	.contentNav h2{
		font-size: 0.3rem;
		color: #333;
		line-height: 0.5rem;
	}
	.contentNav h3{
		font-size: 0.3rem;
		color: #333;
	}
	.contentNav h4{
		font-size: 0.26rem;
		color: #999;
		line-height: 0.5rem;
	}
	.contentNav p{
		font-size: 0.3rem;
		color: #333;
		float: right;
		margin: 0.3rem 0.3rem 0 0;
	}
	
	.color-input-red +label{
		display: block;
		width: 0.4rem;
		height: 0.4rem;
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
		font-size: 0.3rem;
		color: #fff;
		border-radius: 50%;
		width: 0.4rem;
		height: 0.4rem;
		background: #00c160;
	}
	input[type=checkbox]{
		visibility: hidden;
		border-radius: 50%;
	}
	.toApplyFor{
		width: 7.5rem;
		height: 1rem;
		position:relative;
		padding: 0rem 0 0 0.28rem;
		border-bottom: 1px solid #eee;
		font-size: 0.3rem;
	}
	.toApplyFor p{
		font-size: 0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height: 1rem;
		float: left;
	}
	.toApplyFor img{
		height: 0.22rem;
		display: block;
		float: right;
		margin: 0.36rem 0.39rem 0 0;
	}
	.toApplyFor input{
		font-size: 0.3rem;
	}
	.toApplyFor .btnApply{
		float: right;
		font-size:0.30rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(247,98,98,1);
		margin: 0.3rem 0.39rem 0 0 ;
	}
</style>
