<template>
	<view>
		<tab-bar class="tabbar">
			<view class="left" slot="left" @click="backTo">
				<image src="../../static/fanhui.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				<image src="../../static/category/sousuo.png" mode=""></image>
				<input type="text" value="" placeholder="请输入要搜索的关键词" />
			</view>
			<view class="right" slot="right">
				搜索   
			</view>
		</tab-bar>
		<view class="historyTitle">
			<view class="">
				历史搜索
			</view>
			<view class="">
				<image src="../../static/seek/laji.png" mode=""></image>
			</view>
		</view>
		<history-search :historysearch="historysearch" class="historySearch"></history-search>
		<view class="wantToSearch">
			你可能想搜
		</view>
		<want-to-search :wantTosearch="wantTosearch"></want-to-search>
	</view> 
</template>

<script>
	import tabBar from "../../components/tabBar.vue";
	import historySearch from "./childComponent/historySearch.vue";
	import wantToSearch from "./childComponent/wantToSearch.vue";
	export default {
		data() {
			return {
				historysearch:["惠普暗影精灵",'耐克男鞋','李宁篮球鞋','裙子','牙膏'],
				wantTosearch:["卡西欧",'瑞士手表','夹克外套','华为笔记本','梵高装饰画'],
			}
		},
		components:{
			tabBar,
			historySearch,
			wantToSearch,
		},
		methods: {
			backTo(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
.tabbar image{
	width: 60upx;
	height: 60upx;
}
.center{
	display: flex;
	align-items: center;
	background-color: #EFEFEF;
	height: 70upx;
	border-radius: 40upx;
}
.right{
	text-align: center;
}
.historyTitle{
	padding: 0upx 20upx;
	margin-top: 170upx; 
	display: flex;
	color: #555555;
}
.historyTitle view{ 
	flex:1;
}
.historyTitle :nth-child(1){
	text-align: left;
}
.historyTitle :nth-child(2){
	text-align: right;
}
.historyTitle image{
	width: 50upx;
	height: 50upx;
} 
.historySearch{
	margin-top:10upx;
	padding: 0upx 20upx;
}
.wantToSearch{
	padding: 0upx 20upx;
	margin-top: 40upx;
	color: #555555;
}
</style>
