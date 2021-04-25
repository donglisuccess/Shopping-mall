<template>
	<view class="content">
		<view class="item" v-for="(item,index) in wantTosearch" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default{
		name:"",
		data(){
			return {
				
			}
		},
		props:{
			wantTosearch:{
				type:Array,
				default(){
					return [];
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0upx 20upx;
		display: flex;
		flex-wrap: wrap;
	}
	.item{
		width: 355upx;
		font-size: 13px;
		color: #808080;
		margin: 20upx 0upx 20upx 0upx;
	}
</style>
