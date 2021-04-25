<template>
	<view class="content">
		<tab-bar class="tab-bar">
			<view class="left" slot="left" @click="backTo">
				<image src="../../static/fanhui.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				商品收藏
			</view>
			<view class="right" slot="right">
				清除
			</view>
		</tab-bar>
		<view class="historyList">
			<history-item v-for="(item,index) in saveGoodsList" :key="index" :item="item" @enterDetail="enterDetail"></history-item>
		</view>
	</view>
</template>

<script>
	import tabBar from "../../components/tabBar.vue";
	import historyItem from "../accessRecord/childComponent/historyItem.vue";
	export default {
		data() {
			return {
				saveGoodsList:[],
			}
		},
		components:{
			tabBar,
			historyItem,
		},
		methods: {
			enterDetail(value){
				uni.navigateTo({
					url:"../detail/detail?iid=" +value,
				})
			},
			backTo(){
				uni.navigateBack({
					
				})
			}
		},
		onLoad(){
			this.saveGoodsList = this.$store.state.saveGoods;
		}
	}
</script>

<style scoped>
.tab-bar{
	align-items: center; 
}
.tab-bar image{
	width: 60upx;
	height: 60upx;
	padding-top: 10upx;
}
.center{
	text-align: center;
}
.historyList{
	margin-top: 150upx;
}
</style>
