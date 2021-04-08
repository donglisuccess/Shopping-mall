<template>
	<view class="content">
		<view class="left">
			<image src="../../../static/cart/xuanze1.png" mode="" v-if="isShow"></image>
			<image src="../../../static/cart/xuanze.png" mode="" v-else></image>
		</view>
		<view class="right">
			<view class="topShopInfo">
				<image src="../../../static/addCart/dianpu.png" mode=""></image>
				<view class="">
					{{cartItem.name}}
				</view>
			</view>
			<view class="bottomGoodsInfo">
				<view class="goodsImage">
					<image :src="cartItem.image" mode="aspectFit"></image>
				</view>
				<view class="goodsMessage">
					<view class="goodsTitle">
						{{cartItem.title}}
					</view>
					<view class="goodsPrice">
						<view class="">
							{{"￥"+cartItem.price}}
						</view>
						<view class="">
							{{cartItem.count}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"productItem",
		data(){
			return {
				isShow:true,
			}
		},
		props:{
			cartItem:{
				type:Object,
				default(){
					return {};
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0upx 20upx;
		display: flex;
		align-items: center;
		margin-top: 30upx;
		box-shadow: 0px 0px 20upx #eeeeee;
	}
	.left{
		width: 50upx;
		height: 50upx;
	}
	.left image{
		width: 50upx;
		height: 50upx;
	}
	.right{
		display: flex;
		flex-direction: column;
	}
	.topShopInfo{
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: bold;
	}
	.topShopInfo image{
		width: 60upx;
		height: 60upx;
	}
	.bottomGoodsInfo{
		display: flex;
		flex-direction: row;
		margin-top: 20upx;
	}
	.goodsImage{
		border-radius: 30px;
	}
	.goodsImage image{
		width: 200upx;
		height: 240upx;
	}
	.goodsTitle{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-weight: bold;
	}
	.goodsPrice :nth-child(1){
		color: red;
		text-align: left;
	}
	.goodsPrice {
		display: flex;
		margin-top: 30upx;
	}
	.goodsPrice view{
		flex: 1;
	}
</style>
