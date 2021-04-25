<template>
	<view>
		<tab-bar>
			<view class="left" slot="left" @click="backTo">
				<image src="../../static/fanhui.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				关注店铺
			</view>
			<view class="right" slot="right">
				清空
			</view>
		</tab-bar>
		<view class="concornList">
			<concorn-shop-item v-for="(item,index) in concornShop" :key="index" :concornItem="item" @enterShop="enterShop"></concorn-shop-item>
		</view>
	</view>
</template>

<script>
	import tabBar from "../../components/tabBar.vue";
	import concornShopItem from "./childComponents/concornShopItem.vue";
	export default {
		data() {
			return {
				concornShop:[],
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
		onLoad(){
			this.$store.dispatch("getConcornShop").then(value=>{
				this.concornShop = value;
				console.log(this.concornShop);
			})
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
	.concornList{
		margin-top: 150upx;
		padding: 0upx 20upx;
	}
</style>
