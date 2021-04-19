<template>
	<view class="content">
		<search-goods></search-goods>
		<sort-title-all :sortAll="sortAll" class="sortTitleAll" 
		:maitKeyData ="maitKeyData" :minWallKeyData="minWallKeyData" @toggleDetailContent="toggleDetailContent"></sort-title-all>
	</view>
</template>
 
<script>
	// 加载组件模块
	import searchGoods from "./childComponents/searchGoods.vue";
	import sortTitleAll from "./childComponents/sortTitleAll.vue";
	// 加载js文件
	import {getSortList,getMinWallKeyData,getmaitKeyData} from "../../network/sort.js";
	export default {
		data() {
			return {
				sortAll:[],
				maitKeyData:[],
				minWallKeyData:[],
			}
		},
		components:{
			searchGoods,
			sortTitleAll,
		}, 
		onLoad() {
			getSortList().then(value=>{
				this.sortAll = value;
				// console.log(this.sortAll);
			}).then(()=>{
				getMinWallKeyData(this.sortAll[0].miniWallkey).then(value=>{
					this.minWallKeyData = value;
					console.log(this.minWallKeyData);
				});
				getmaitKeyData(this.sortAll[0].maitKey).then(value=>{
					this.maitKeyData = value;
				})
			});
			this.$bus.$on("enterSortDetail",value=>{
				uni.navigateTo({
					url:'../detail/detail?iid=' + value,
				})
			})
		},
		activated(){
			
		},
		methods: {
			toggleDetailContent(index){
				getMinWallKeyData(this.sortAll[index].miniWallkey).then(value=>{
					this.minWallKeyData = value;
				});
				getmaitKeyData(this.sortAll[index].maitKey).then(value=>{
					this.maitKeyData = value;
				})
			}
		}
	}
</script>

<style scoped>
.content{
	
}
.sortTitleAll{
	
}
</style>
