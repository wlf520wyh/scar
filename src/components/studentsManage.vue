<template>
	<div>
		<div style="width: 7.5rem;height: 50rem;z-index: -999;background: #f5f7f7;position: fixed;top: 0;left: 0;"></div>
		<div class="information">
			<router-link to='/Home'><a href="#"><img src="../images/general_arrow_left_gray.png" alt=""></a></router-link>
			<span>学生管理</span>
		</div>
		<router-link to="StudentSearch">
			<div class="search" v-show="search">
				<input class="input_earch" type="text"><img src="../images/general_ic_search_gray@2x.png" alt=""><span>搜索</span>
			</div>
		</router-link>
		<div class="nav" v-show="nav">
			<ul>
				<li>综合</li>
				<li>学号&nbsp;<img src="../images/general_ic_sorting@2x.png" alt="#"></li>
				<li style="border-right: none;">班级&nbsp;<img src="../images/general_ic_sorting@2x.png" alt="#"></li>
			</ul>
		</div>
		<div v-show="main">
			<div v-bind:style="{height:mainHeight + 'rem'}" class="studentsDetails">
				<div class="studentsBox" v-show="studentsDetailsNav">
					<ul>
						<li><router-link to="/StudyResult"><a href='#'>学习成绩</a></router-link></li>
						<li><router-link to="/Graduation"><a href="#">毕业评语</a></router-link></li>
						<li><router-link to="/GoodRecord"><a href="#">优良记录</a></router-link></li>
						<li><router-link to="/BadRecord"><a href="#">不良记录</a></router-link></li>
						<li><router-link to="/StudentLoans"><a href="#">助学贷款</a></router-link></li>
						<li><router-link to="/LackRecord"><a href="#">欠费记录</a></router-link></li>
						<li><router-link to="/Growth"><a href="#">成长指标</a></router-link></li>
						<li><router-link to="/Attendance"><a href="#">考勤记录</a></router-link></li>
						<li><router-link to="/Archives"><a href="#">查看档案</a></router-link></li>	
					</ul>
				</div>
				
				<input 
					id="btn2"
					class="btn checkItem"
					type="checkbox"
					name="btn"
					v-model="checkData"
					value="a"
				/>
				<label  for="btn2"></label >
				<img 
					style="display: block;float: right;width: 0.24rem;"
					src="../images/general_ic_triangle_down@2x.png"
					@click="openswitch()"
					alt="#"
					v-show="kai"
				/>
				<img 
					style="display: block;float: right;width: 0.24rem;"
					src="../images/general_ic_triangle_up@2x.png"
					@click="guanswitch()"
					alt="#"
					v-show="guan"
				/>
				<div class="studentsName">
					<p>鞠婧祎</p>
					<p>学号学号，</p><p class="banJi">班级班级班级</p>
					<p>电话：<span>18855556666</span></p>
					<p>入学时间：<span>0000-00-00</span></p>
					<p>共建时间：<span>0000-00-00</span></p>
				</div>
			</div>
			
		</div>
		
		<div class="footer" v-show="footer">
			
			<input 
				id="btnAll"
				class="btn"
				type="checkbox"
				name="btn"
				@click="checkAll($event)"
				
			/>
			<label style="margin-top: 0.28rem;" for="btnAll"></label >
			<span>全选</span>
			<ul>
				<li @click="insideLetter()">发站内信</li>
				<router-link to="/PasswordReset"><li>密码重置</li></router-link>
			</ul>
		</div>
		<div v-show="mask" style="width: 7.5rem;height: 50rem;z-index: 888;background: #000;opacity: 0.5;display: none;position: fixed;top: 0;left: 0;"></div>
		<div class="insideLetter" v-show="letter">
			<ul>
				<li style="border-radius: 0.2rem 0.2rem 0 0;" @click="ToStudents()">发给学生</li>
				<li style="border-radius: 0 0 0.2rem 0.2rem;" @click="ToParents()">发给家长</li>
				<li style="margin: 0.5rem auto;" @click="close()">取消</li>
			</ul>
		</div>
	</div>
</template>

<script>


export default {
	data(){
		return{
			letter:false,
			mask:false,
			footer:true,
			search:true,
			nav:true,
			main:true,
			checkData: [],
			studentsDetailsNav:false,
			mainHeight: '2.5',
			kai:true,
			guan:false,
		}
	},
	watch: {
		checkData: {
			handler(){
				if(this.checkData.length == 1){
					document.querySelector('#btnAll').checked = true;
				}else {
					document.querySelector('#btnAll').checked = false;
				}
			}
		}
	},
	methods:{
		insideLetter: function(){
			this.letter = true;
			this.mask = true;
			this.footer = false;
			this.search = false;
			this.nav = false;
			this.main = false;
		},
		close: function(){
			this.letter = false;
			this.mask = false;
			this.footer = true;
			this.search = true;
			this.nav = true;
			this.main = true;
		},
		ToStudents: function(){
			this.$router.push({name:"ToStudents"})
		},
		ToParents: function(){
			this.$router.push({name:'ToParents'})
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
		},
		openswitch: function(){
			this.kai = false,
			this.guan = true,
			this.studentsDetailsNav = true;
			this.mainHeight = '5.75';
		},
		guanswitch: function(){
			this.kai = true,
			this.guan = false,
			this.studentsDetailsNav = false;
			this.mainHeight = '2.5';
		}
	}
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
		background: #fff;
	}
	.information img{
		width: 0.3rem;
		position: absolute;
		left: 0.24rem;
		top: 0.35rem;
	}
	.search{
		width: 7.5rem;
		height: 1.2rem;
		position: relative;
		background: #fff;
		padding: 0.2rem 0 0 0;
	}
	.search .input_earch{
		display: block;
		height: 0.8rem;
		width: 6.9rem;
		background-color: #eee;
		margin: 0 auto;
		font-size: 0.3rem;
	}
	.search img{
		width: 0.3rem;
		position: absolute;
		top: 0.45rem;
		left: 3.3rem;
	}
	.search span{
		width:0.53rem;
		height:0.26rem;
		font-size:0.24rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		position: absolute;
		top: 0.42rem;
		left: 3.7rem;
	}
	.nav{
		width: 7.5em;
		height: 0.9rem;
		background: #fff;
	}
	.nav ul li{
		width: 2.49rem;
		height: 0.88rem;
		border: 0.01rem solid #eee;
		border-left: none;
		float: left;
		font-size:0.30rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		text-align: center;
		line-height: 0.88rem;
		
	}
	.nav ul li img{
		width: 0.3rem;
	}
	.studentsDetails{
		width: 7.5rem;
		height: 2.5rem;
		padding: 0.29rem;
		box-sizing: border-box;
		position: relative;
		background: #fff;
	}
	.studentsDetails input{
		width: 0.3rem;
		height: 0.3rem;
		border-radius: 50%;
		display: block;
		float: left;
		border: 0.01rem solid #000;
	}
	.studentsDetails .studentsName{
		width: 2.84em;
		height: 2.17em;
		display: block;
		float:left;
		margin-left: 0.23rem;
		position: relative;
	}
	.studentsDetails .studentsName p,.studentsDetails .studentsName span{
		font-size: 0.25rem;
	}
	.studentsDetails .studentsName .banJi{
		position: absolute;
		top: 0.4rem;
		right: 0;
	}
	.studentsDetails .studentsBox{
		width: 7.5rem;
		height: 3rem;
		display: block;
		position: absolute;
		left: 0rem;
		bottom: 0;
		z-index: 999;
		box-sizing: border-box;
	}
	.studentsDetails .studentsBox ul li a{
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.6rem;
		text-align: center;
		display: block;
	}
	.studentsDetails .studentsBox ul li{
		width:1.50rem;
		height:0.60rem;
		border:1px solid rgba(102,102,102,1);
		border-radius:0.10rem;
		float: left;
		display: block;
		margin:0 0.0rem 0.3rem 0.3rem;
	}
	.footer{
		width: 7.5rem;
		height: 0.9rem;
		position: fixed;
		bottom: -0.01rem;
		left: 0;
		z-index: 999;
		background: #fff;
	}
	.footer input{
		display: block;
		float: left;
		margin: 0.3rem 0 0 0.29rem;
	}
	.footer span{
		font-size: 0.28rem;
		display: block;
		float: left;
		margin: 0.21rem 0 0 0.03rem;
	}
	.footer ul li{
		width: 1.5rem;
		height: 0.6rem;
		float: right;
		border-radius: 0.1rem;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:0.6rem;
		text-align: center;
		border: 1px solid #666;
		margin: 0.14rem 0.30rem 0 0;
	}
	
	.btn +label{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #eee;
		float: left;
		margin-left: -0.3rem;
	}
	.btn:checked +label::before{
		display: block;
		content: "\2714";
		text-align: center;
		font-size: 0.26rem;
		color: #fff;
		border-radius: 50%;
		width: 0.3rem;
		height: 0.3rem;
		background: #00c160;
		line-height: 0.39rem;
		float: left;
		line-height: 0.33rem;
	}
	input[type=checkbox]{
		visibility: hidden;
		border-radius: 50%;
	}
	.insideLetter{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 7.5rem;
		height: 4rem;
		z-index: 999;
	}
	.insideLetter ul li{
		width: 7rem;
		height: 1rem;
		font-size: 0.3rem;
		text-align: center;
		line-height: 1rem;
		margin: 0.02rem auto;
		background: #fff;
		border-radius: 0.2rem;
		color: #C21F39;
	}
</style>
