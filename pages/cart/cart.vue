<template>
	<view class="content">
		<tab-bar>
			<view class="tabBar-left" slot="left">
				<image src="../../static/fanhui.png" mode=""></image>
			</view>
			<view class="tabBar-center" slot="center">
				购物车
			</view>
		</tab-bar>
		<view class="cartListAll">
			<product-item v-for="(item,index) in cartList" :key="index" :cartItem="item"></product-item>
		</view>
		<!-- 总计 start -->
		<price-all></price-all>
		<!-- 总计 end -->
	</view>
</template>

<script>
	import productItem from "./childComponent/productItem.vue";
	import tabBar from "../../components/tabBar.vue";
	import priceAll from "./childComponent/priceAll.vue";
	export default {
		data() {
			return {
				cartList:[], 
			}
		},
		components:{
			productItem,
			tabBar,
			priceAll,
		},
		methods: {
			
		},
		onLoad(){
			this.cartList = this.$store.state.cartList;
		}
	}
</script>

<style scoped>
	.content{
		
	}
	.tabBar-left{
		
	}
	.tabBar-left image{
		width: 70upx;
		height: 70upx;
		margin-top: 10upx;
	}
	.tabBar-center{
		text-align: center;
	}
	.cartListAll{
		margin-top: 150upx;
		width: 100%;
		height: 100%;
		padding-bottom: 100upx;
	}
</style>
