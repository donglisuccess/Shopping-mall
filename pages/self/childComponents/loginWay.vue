<template>
	<view class="content">
		<view class="item">
			<image src="../../../static/setting/weixin.png" mode="" @click="login" data-loginway="weixin"></image>
			<view class="">
				微信登录
			</view>
		</view>
		
		<view class="item">
			<image src="../../../static/setting/qq.png" mode="" @click="login" data-loginway="qq"></image>
			<view class="">
				QQ登录
			</view>
		</view>
		
		<view class="item">
			<image src="../../../static/setting/weibo.png" mode="" @click="login" data-loginway="sinaweibo"></image>
			<view class="">
				微博登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"loginWay",
		data(){
			return{
				
			}
		},
		methods:{
			login(e){
				this.$emit("login",e.currentTarget.dataset.loginway);
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0upx 20upx;
		display: flex;
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 30upx;
	}
	.item{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		justify-content: space-evenly;
	}
	.item image{
		width: 65upx;
		height: 65upx;
	}
	.item view{
		margin-top: 15upx;
	}
</style>
