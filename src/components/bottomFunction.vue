<template>
	<div>
		<div @click="maskTo()" v-show="mask" style="width: 7.5rem;height: 50rem;z-index: 888;background: #000;opacity: 0.5;display: none;position: fixed;top: 0;left: 0;"></div>
		<div class="footer">
			<ul>
				<li @click="forwardingTo()"><img src="../images/ic_share@2x.png" alt="#">&nbsp; 转发</li>
				<li @click="commentsTo()"><img src="../images/tab_massage_n@2x.png" alt="#"> 评论</li>
				<li @click="collection()"><img :src="this.imgOne.src">&nbsp; 收藏</li>
				<li @click="like()"><img :src="this.imgTwo.src">&nbsp; 赞</li>
			</ul>
		</div>
		<div v-show="forwarding" class="forwarding">
			<div class="forwardingTop">
				<ul>
					<li>
						<img src="../images/share_ic_wechat@2x.png" alt="">
						<p>微信</p>
					</li>
					<li>
						<img src="../images/share_ic_moment@2x.png" alt="">
						<p>朋友圈</p>
					</li>
					<li>
						<img src="../images/share_ic_qq@2x.png" alt="">
						<p>QQ</p>
					</li>
					<li>
						<img src="../images/share_ic_qzore@2x.png" alt="">
						<p>QQ空间</p>
					</li>
				</ul>
			</div>
			<div class="forwardingBottom" @click="close()">
				取消
			</div>
		</div>
		<div class="comments" v-show="comments">
			<textarea placeholder="写评论..." />
			<button>发送</button>
		</div>
	</div>
</template>

<script>
	
export default {
	data(){
		return{
			mask: false,
			forwarding: false,
			comments:false,
			imgOne:{src:require('../images/ic_star_n@2x.png')},
			imgTwo:{src:require('../images/ic_like_n@2x.png')},
		}
	},
	
	methods:{
		forwardingTo: function(){
			this.forwarding = true;
			this.mask = true;
		},
		close: function(){
			this.forwarding = false;
			this.mask = false;
		},
		commentsTo: function(){
			this.comments = true;
			this.mask = true;
		},
		maskTo: function(){
			this.forwarding = false;
			this.mask = false;
			this.comments = false;
		},
		collection: function(){
			this.imgOne.src = this.imgOne.src === require ("../images/ic_star_n@2x.png") ? require("../images/ic_star_s@2x.png") : require("../images/ic_star_n@2x.png");
		},
		like: function(){
			this.imgTwo.src = this.imgTwo.src === require ("../images/ic_like_n@2x.png") ? require("../images/ic_like_s@2x.png") : require("../images/ic_like_n@2x.png");
		}
	}
}
</script>

<style scoped>
	.comments{
		width: 7.5rem;
		height: 2.5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		background:rgba(245,247,247,1);
		z-index: 999;
		padding: 0.3rem 0 0 0.31rem;
	}
	.comments textarea{
		width: 5.60rem;
		height: 1.9rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:0.48rem;
		background:rgba(255,255,255,1);
		border-radius:0.1rem;
		border: none;
		padding: 0.3rem;
		float: left;
	}
	.comments button{
		width: 1rem;
		height: 0.6rem;
		float: left;
		font-size:0.3rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(0,193,96,1);
		line-height:0.6rem;
		background: #fff;
		margin: 1.3rem 0 0 0.29rem;
	}
	.forwarding{
		height: 3.6rem;
		width: 7.5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 999;
	}
	.forwarding .forwardingTop{
		width: 7.5rem;
		height: 2.6rem;
	}
	.forwarding .forwardingTop ul li{
		height: 2.6rem;
		width: 25%;
		float: left;
	}
	.forwarding .forwardingTop ul li img{
		width: 0.9rem;
		height: 0.9rem;
		display: block;
		margin: 0.6rem auto;
		margin-bottom: 0;
	}
	.forwarding .forwardingTop ul li p{
		height: 0.3rem;
		width: 100%;
		text-align: center;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		margin: 0.3rem 0 0 0;
	}
	
	.forwarding .forwardingBottom{
		width: 7.5rem;
		height: 1rem;
		background:rgba(221,221,221,1);
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:1rem;
		text-align: center;
	}
	.footer{
		width: 7.5rem;
		height: 1rem;
		position: fixed;
		left: 0;
		bottom: -0.01rem;
		background: #fff;
		z-index: 888;
		border-top: 1px solid #eee;
	}
	.footer ul li{
		width: 1.72rem;
		height: 0.97rem;
		float: left;
		padding: 0.28rem 0 0 0.60rem;
		box-sizing: border-box;
		font-size: 0.26rem;
	}
	.footer img{
		width: 0.44rem;
		display: block;
		float: left;
	}
	.footer span{
		height:0.25rem;
		font-size:0.26rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display:inline-block;
	}
</style>
