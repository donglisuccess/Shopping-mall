<template>
	<view>
		<tab-bar>
			<view class="left" slot="left" @click="backTo">
				<image src="../../static/fanhui.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				店铺浏览记录
			</view>
			<view class="right" slot="right">
		
			</view>
		</tab-bar>
		<view class="historyListAll">
			<concorn-shop-item v-for="(item,index) in historyAllList" :key="index" :concornItem="item" @enterShop="enterShop"></concorn-shop-item>
		</view>
	</view>
</template>

<script>
	import tabBar from "../../components/tabBar.vue";
	import concornShopItem from "../concornShop/childComponents/concornShopItem.vue";
	export default {
		data() {
			return {
				historyAllList:[],
			}
		},
		components:{
			tabBar,
			concornShopItem 
		},
		methods: {
			backTo(){
				uni.navigateBack({
					delta:1
				})
			},
			enterShop(id){
				uni.navigateTo({
					url:"../retailer/retailer?shopId=" + id,
				})
			}
		},
		onShow(){
			this.historyAllList = this.$store.state.enterStore;
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
	.historyListAll{
		margin-top: 150upx;
		padding: 0upx 20upx;
	}
</style>
