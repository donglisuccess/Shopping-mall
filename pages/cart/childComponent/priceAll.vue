<template>
	<view class="content">
		<view class="left">
			<view class="checked" v-if="true">
				<image src="../../../static/cart/xuanze1.png" mode=""></image>
			</view>
			<view class="checked" v-else>
				<image src="../../../static/cart/xuanze.png" mode=""></image>
			</view>
			<view class="checkAllText">
				全选
			</view>
		</view>
		<view class="center">
			合计 : ￥0.00
		</view>
		<view class="right">
			去结算(0)
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100upx;
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0upx;
		padding: 0upx 20upx;
		display: flex;
		align-items: center;
		box-shadow: 0px 0px 20upx #C0C0C0; 
		background-color: white;
	}
	.left{
		display: flex;
		align-items: center;
	}
	.checked image{
		width: 50upx;
		height: 50upx;
		margin-top: 10upx ;
	}
	.center{
		flex: 1;
		margin-left: 30upx;
	}
	.right{
		background-color: red;
		margin-right: 50upx;
		padding: 15upx 30upx;
		color: white;
		border-radius: 40upx;
	}
	.checkAllText{
		margin-left: 20upx;
	}
</style>
