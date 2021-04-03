<template>
	<view class="content">
		<view class="detail-all" v-for="(item,index) in detailimg">
			<view class="detail-title">
				{{item.key}}
			</view>
			<view class="detail-image" v-for="(it,index) in item.list">
				<image :src="it" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"detailImg",
		data(){
			return {
				
			}
		},
		props:{
			detailimg:{
				type:Array,
				default(){
					return [];
				}
			}
		}
	}
</script>

<style scoped>
.detail-title{
	text-align: left;
	padding-left:20upx;
	padding-bottom: 20upx;
	color: #808080;
}
.detail-image image{
	width: 100%;
}
</style>
