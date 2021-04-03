<template>
	<view class="contain">
		<view class="left">
			<slot name="left"></slot>
		</view>
		<view class="center">
			<slot name="center"></slot>
		</view>
		<view class="right">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.contain{
	display: flex;
	height: 100upx;
	box-shadow: 0px 0px 5px #C0C0C0;
	align-items: center;
	padding-top: 50upx;
}
.left{
	width: 150upx;
	text-align: center;
}
.center{
	flex: 1;
}
.right{
	width: 150upx;
}
</style>
