<template>
	<view class="content-box">
		<view class="content">
			<view class="left">
				<image :src="avator" mode=""></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name" @click="winxinLogin">
						{{nickName}}
					</view>
					<view class="addFriend">
						<image src="../../../static/self/addfriend.png" mode=""></image>
					</view>
					<view class="setting" @click="toggleToset">
						<image src="../../../static/self/shezhi.png" mode=""></image>
					</view>
					<view class="infomation">
						<image src="../../../static/self/shijian-.png" mode=""></image>
					</view>
				</view>
				<view class="bottom">
					<view class="">
						京东值4325
					</view>
					<view class="">
						小白信用64.6
					</view>
					<view class="">  
						家庭号
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		components:{
			
		},
		methods:{
			toggleToset(){
				this.$bus.$emit("toggleToset");
			},
			winxinLogin(){
				// #ifdef MP-WEIXIN 
					this.$emit("login",'weixin');
				// #endif
			}
		},
		props:{
			nickName:{
				type:String,
				default:""
			},
			avator:{
				type:String,
				default:""
			}
		}
	}
</script>

<style scoped>
.content-box{
	background-color: #F92727;
	overflow: hidden;
	height: 500upx;
}
.selfInfo{
	margin-top: 100upx;
}
.content{
		padding: 0px 20upx;
		display: flex;
		flex-direction: row;
		margin-top: 100upx;
		height: 120upx;
	}
	.left{
		width: 120upx;
		height: 120upx;
		background-color: white;
		border-radius: 50%;
	}
	.left image{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.right{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
 	}
	.top{
		display: flex;
		flex-direction: row;
		color: white;
	}
	.name{
		flex: 1;
		padding-left: 30upx;
		font-size: 20px;
	}
	.addFriend{
		width: 80upx;
	}
	.setting{
		width: 80upx;
	}
	.infomation{
		width: 80upx;
	}
	.top image{
		width: 60upx;
		height: 60upx;
	}
	.bottom{
		display: flex;
		flex-direction: row;
		font-size: 12px; 
		color: white;
		margin-left: 20upx;
	}
	.bottom view{
		background-color: rgba(0,0,0,0.2);
		padding: 10upx 15upx;
		border-radius: 20upx;
		margin-right: 30upx;
	}
</style>
