<template>
	<view class="content">
		<view class="left">
			
		</view>
		<view class="right">
			<image :src="cartItem.image" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"productItem",
		data(){
			return {
				
			}
		},
		props:{
			cartItem:{
				type:Object,
				default(){
					return {};
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0upx 20upx;
	}
</style>
