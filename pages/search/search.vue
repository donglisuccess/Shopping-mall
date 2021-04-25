<template>
	<view class="content">
		<tab-bar class="tabBarTop">
			<view class="left" slot="left">
				<image src="../../static/TabBar/wode.png" mode=""></image>
			</view>
			<view class="center" slot="center">
				<view class="">
					关注
				</view>
				<view class="">
					推荐
				</view>
			</view>
			<view class="right" slot="right" @click="searchGoods">
				<image src="../../static/category/sousuo.png" mode=""></image>
			</view>
		</tab-bar>
		<view class="recommend">
			<show-item v-for="(item,index) in recommendList" 
			:key="index" 
			:sendImagedata="item" class="showItem"></show-item>
		</view>
	</view>
</template>

<script>
	import tabBar from "../../components/tabBar.vue"
	import showItem from "../index/childcomponents/showItem.vue";
	
	// 引入js文件
	import {recommend} from "../../network/index.js"
	export default {
		data() {
			return {
				recommendList:[],
			}
		},
		components:{
			tabBar,
			showItem,
		},
		onLoad() {
			recommend().then(value=>{
				this.recommendList = value.data.list;
				console.log(this.recommendList);
			})
		},
		activated(){
			
		},
		methods: {
			searchGoods(){
				uni.navigateTo({
				    url:"../seek/seek"
				});
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-top: 160upx;
	}
	.tabBarTop image{
		width: 60upx;
		height: 60upx;
	}
	.center{
		display: flex;
		justify-content: space-evenly;
	}
</style>
