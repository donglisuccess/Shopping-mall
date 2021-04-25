<template>
	<view class="">
		<tab-bar>
			<view class="left" slot="left" @click="backTo">
				<image src="../../../static/fanhui.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				<image src="../../../static/category/sousuo.png" mode=""></image>
				<input type="text" value="" />
			</view>
			<view class="right" slot="right">
				<image src="../../../static/category/xiangji.png" mode=""></image>
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
		display: flex;
		background-color: #EFEFEF;
		height: 80upx;
		align-items: center;
		border-radius: 40upx;
	}
	.center image{
		width: 60upx; 
		height: 60upx;
		margin-left: 10upx;
	}
	.right{
		text-align: center;
	}
	.right image{
		width: 60upx;
		height: 60upx;
	}
</style>
