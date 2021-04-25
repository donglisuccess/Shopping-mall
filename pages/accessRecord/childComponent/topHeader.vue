<template>
	<view class="">
		<tab-bar>
			<view class="left" slot="left" @click="backTo">
				<image src="../../../static/fanhui.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				商品浏览记录
			</view>
			<view class="right" slot="right" @click="clearHistory">
				清空
			</view>
		</tab-bar>
	</view>
</template>

<script>
	import tabBar from "../../../components/tabBar.vue";
	export default{
		data(){
			return {
				
			}
		},
		components:{
			tabBar,
		},
		methods:{
			backTo(){
				this.$emit("backTo");
			},
			clearHistory(){
				this.$emit("clearHistory");
			}
		}
	}
</script>

<style scoped>
	.left{
		margin-top: 10upx;
	}
	.left image{ 
		width: 60upx; 
		height: 60upx;
	}
	.center{
		height: 80upx;
		text-align: center;
		border-radius: 40upx;
		line-height: 80upx;
		
	}
	.center image{
		width: 60upx; 
		height: 60upx;
		margin-left: 10upx;
	}
	.right{
		width: 100upx;
		display: flex;
	}
</style>
