<template>
	<view class="historySearchList">
		<view class="historySearchItem" v-for="(item,index) in historysearch" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default{
		name:"historySearch",
		data(){
			return {
				
			}
		},
		props:{
			historysearch:{
				type:Array, 
				default(){
					return [];
				}
			}
		}
	}
</script>

<style scoped>
	.historySearchList{
		display: flex;
		flex-wrap: wrap;
	}
	.historySearchItem{
		padding: 5upx 20upx;
		margin-top: 30upx;
		margin-right: 20upx;
		background-color: #EFEFEF;
		border-radius: 20upx;
		font-size: 14px;
		color: #555555;
	}
</style>
