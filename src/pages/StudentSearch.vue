<template>
	<div>
		<div class="studentSearch">
			<router-link to='/StudentsManage'>
				<img src="../images/general_arrow_left_gray.png" alt="#">
			</router-link>
			<div class="search">
				<input v-model="judge" @blur="testTo()" @focus="test()" class="input_earch" type="text">
				<img v-show="searchImg" class="searchImg" src="../images/general_ic_search_gray@2x.png" alt="#">
				<p v-show="searchTxt">搜索</p>
			</div>
		</div>
		<div class="historySearch">
			<p>历史搜索</p>
			<ul>
				<li>广州</li>
				<li>紫鲸</li>
				<li>设备</li>
				<li>广州</li>
				<li>紫鲸</li>
				<li>设备</li>
				<li>广州</li>
				<li>紫鲸</li>
				<li>设备</li>
				<li>广州</li>
				<li>紫鲸</li>
				<li>设备</li>
			</ul>
		</div>
		<div class="StudentArchives">
			<ul>
				<li>紫小鲸</li>
				<li>学号学号，班级班级班级</li>
				<li>电话：1511218299</li>
				<li>入学时间：2019.01.23</li>
				<li>共建时间：2019.01.23</li>
			</ul>
			<div class="lookArchivesBox">
				<div class="lookArchives">查看档案</div>
			</div>
		</div>
	</div>
</template>

<script>
	
export default{
	data(){
		return{
			searchImg:true,
			searchTxt:true,
			judge:'',
		}
	},
	methods:{
		test: function(){
			this.searchImg = false
			this.searchTxt = false
		},
		testTo:function(){
			if(this.judge.length > 0){
				this.searchImg = false
				this.searchTxt = false
			}else{
				this.searchImg = true
				this.searchTxt = true
			}
			
		}
	}
}
</script>

<style scoped>
.studentSearch{
	width: 7.5rem;
	height: 1rem;
	position: relative;
}
.studentSearch img{
	width: 0.32rem;
	height: 0.32rem;
	display: block;
	float: left;
	margin: 0.34rem 0 0 0.3rem;
}
.studentSearch input{
	font-size: 0.28rem;
	color: #999;
	float: left;
	width: 6.3rem;
	height: 0.6rem;
	background: #eee;
	margin: 0.2rem 0 0 0.3rem;
	text-align: center;
}
.searchImg{
	position: absolute;
	top: 0;
	left: 45%;
}
.studentSearch p{
	font-size: 0.28rem;
	color: #999;
	position: absolute;
	top: 0;
	left: 45%;
	margin: 0.28rem 0 0 0.8rem;
}
.historySearch{
	width: 7.5rem;
	height: 5.5rem;
	padding: 0.29rem 0 0 0.25rem;
}
.historySearch p{
	font-size:0.26rem;
	font-family:SourceHanSansSC-Regular;
	font-weight:400;
	color:rgba(34,34,34,1);
}
.historySearch ul{
	margin-top: 0.3rem;
}
.historySearch ul li{
	width:1.10rem;
	height:0.70rem;
	background:rgba(238,238,238,1);
	border-radius:0.10rem;
	font-size:0.30rem;
	font-family:SourceHanSansSC-Regular;
	font-weight:400;
	color:rgba(34,34,34,1);
	text-align: center;
	line-height: 0.7rem;
	float: left;
	margin: 0 0.3rem 0.3rem 0;
} 
.StudentArchives{
	width: 7.5rem;
	height: 3.66rem;
	padding: 0.29rem 0 0 0.82rem;
}
.StudentArchives ul li{
	font-size: 0.26rem;
	color: #333c;
	line-height: 0.49rem;
}
.StudentArchives .lookArchivesBox{
	width: 6.5rem;
	height: 0.9rem;
	margin: 0 auto;
	border-top: 0.01rem solid #eee;
}
.StudentArchives .lookArchives{
	width:1.50rem;
	height:0.60rem;
	border:1px solid rgba(102,102,102,1);
	border-radius:0.10rem;
	font-size:0.28rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:0.6rem;
	text-align: center;
	float: right;
	margin: 0.14rem 0.3rem 0 0;
}
</style>
