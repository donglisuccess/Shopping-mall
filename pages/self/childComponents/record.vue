<template>
	<view class="content">
		<view class="goodsSave">
			<view class="number">
				0
			</view>
			<view class="">
				商品收藏
			</view>
		</view>
		<view class="shopfollow">
			<view class="number">
				0
			</view>
			<view class="">
				店铺关注
			</view>
		</view>
		<view class="loveThings">
			<view class="number">
				0
			</view>
			<view class="">
				喜欢内容
			</view>
		</view>
		<view class="browse" @click="enterbrowse">
			<view class="number">
				{{historyItemLength}}
			</view>
			<view class="">
				浏览记录
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"record",
		data(){
			return {
				
			}
		},
		methods:{
			enterbrowse(){
				this.$emit("enterbrowse");
			}
		},
		props:{
			historyItemLength:{
				type:Number,
				default:0,
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0upx 20upx;
		display: flex;
		margin-top: 50upx;
		position: absolute;
		left: 0upx;
		right: 0upx;
		top:250upx;
		font-size: 13px;
	}
	.content>view{
		flex: 1;
		text-align: center;
		color: white;
	}
	.number{
		font-weight: bold;
	}
</style>
