<template>
	<view class="content">
		<view class="goodsSave" @click="goodsSaveShow">
			<view class="number">
				{{goodsSaveLength}}
			</view>
			<view class="">
				商品收藏
			</view>
		</view>
		<view class="shopfollow" @click="concornShop">
			<view class="number">
				{{shopConcornLength}}
			</view>
			<view class="">
				店铺关注
			</view>
		</view>
		<view class="loveThings" @click="shopHistory">
			<view class="number">
				{{shopLookAllList}}
			</view>
			<view class="">
				店铺浏览
			</view>
		</view>
		<view class="browse" @click="enterbrowse">
			<view class="number">
				{{historyItemLength}}
			</view>
			<view class="">
				商品浏览
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
			},
			goodsSaveShow(){
				this.$emit("goodsSaveShow");
			},
			concornShop(){
				this.$emit("concornShop");
			},
			shopHistory(){
				this.$emit("shopHistory");
			}
		},
		props:{
			historyItemLength:{
				type:Number,
				default:0,
			},
			goodsSaveLength:{
				type:Number,
				default:0,
			},
			shopConcornLength:{
				type:Number,
				default:0,
			},
			shopLookAllList:{
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
