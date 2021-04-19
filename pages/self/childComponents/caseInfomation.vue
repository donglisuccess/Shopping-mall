<template>
	<view class="content">
		<view class="item">
			<view class="image">
				<image src="../../../static/self/fukuan.png" mode=""></image>
			</view>
			<view class="">
 				待付款
			</view>
		</view>
		
		<view class="item">
			<view class="image">
				<image src="../../../static/self/daishouhuo3.png" mode=""></image>
			</view>
			<view class="">
				待收货
			</view>
		</view>
		
		<view class="item">
			<view class="image">
				<image src="../../../static/self/daipingjia.png" mode=""></image>
			</view>
			<view class="">
				待评价
			</view>
		</view>
		
		<view class="item">
			<view class="image">
				<image src="../../../static/self/shouhou.png" mode=""></image>
			</view>
			<view class=""> 
				退换/售后
			</view>
		</view>
		
		<view class="item"> 
			<view class="image">
				<image src="../../../static/self/dingdan.png" mode=""></image>
			</view>
			<view class="">
				我的订单
			</view>
			<view class="specal"> 
				查看电子发票
			</view>
		</view>
	</view>
</template> 

<script>
	export default {
		name:"caseInfomation",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.content{
		margin-top: 100upx;
		margin-left: 20upx;
		margin-right: 20upx; 
		height: 150upx;
		box-shadow: 0px 0px 7upx #C0C0C0;
		border-radius: 20upx;
		display: flex;
	}
	.item{
		flex: 1;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		justify-content: center; 
		align-items: center;
		color: #555555;
	}
	.specal{
		font-size: 10px;
		color: #aaa;
	}
	.item image{
		width: 55upx;
		height: 55upx;
	}
</style>
