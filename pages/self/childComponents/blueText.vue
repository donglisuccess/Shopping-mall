<template>
	<view class="content">
		
		<view class="item">
			<view class="top">
				<view class="image">
					<image src="../../../static/self/huangguan.png" mode=""></image>
				</view>
				<view class="text">
					PLUS会员
				</view>
			</view>
			<view class="bottom">  
				购物返10倍京豆>
			</view>
		</view>
		
		<view class="item">
			<view class="top">
				<view class="image">
					<image src="../../../static/self/huangguan.png" mode=""></image>
				</view>
				<view class="text">
					PLUS会员
				</view>
			</view>
			<view class="bottom">
				购物返10倍京豆>
			</view>
		</view>
		
		<view class="item">
			<view class="top">
				<view class="image">
					<image src="../../../static/self/huiyuan.png" mode=""></image>
				</view>
				<view class="text">
					送PLUS会员
				</view>
			</view> 
			<view class="bottom">
				购物返10倍京豆>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"blueText",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.content{
		display: flex;
		background-color: #2C405A; 
		position: absolute;
		left: 30upx;
		right: 30upx;
		top: 440upx;
		height: 120upx;
		border-radius: 20upx;
	}
	.item{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.item image{ 
		width: 35upx;
		height: 35upx;
	} 
	.top{
		display: flex;
		justify-content:space-evenly;
		align-items: center; 
		color: #ea986c;
		font-size: 14px;
	}
	.bottom{
		text-align: center;
		font-size: 12px;
		color: rgba(255,255,255,0.5);
	}
</style>