<template>
	<view class="content" @click="enterShop">
		<view class="left">
			<image :src="itemTwo.shopLogo" mode=""></image>
		</view>
		<view class="right">
			<view class="top">
				{{itemTwo.name}}
			</view>
			<view class="bottom">
				<view class="starimage">
					<image src="../../../static/retailer/xing1.png" v-for="(item,index) in 4" :key="index" mode=""></image>
					<image src="../../../static/retailer/xing12.png" mode=""></image>
				</view>
				<view class="care">
					{{itemTwo.cFans}}人关注
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				itemTwo:{},
			}
		},
		props:{
			concornItem:{
				type:Array,
				default(){
					return [];
				}
			}
		},
		mounted(){
			this.itemTwo = this.concornItem[2];
			console.log(this.itemTwo);
		},
		methods:{
			enterShop(){
				this.$emit("enterShop",this.itemTwo.shopId);
			}
		}
	}
</script>

<style scoped>
	.content{
		display: flex;
		border-bottom: 1px solid #EFEFEF;
		height: 180upx;
		align-items: center;
	}
	.left{
		border: 1px solid #C0C0C0;
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
	}
	.left image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.bottom image{
		width: 10px;
		height: 10px;
	}
	.bottom{
		display: flex;
		font-size: 12px;
		color: #808080;
		align-items: center;
	}
	.right{
		margin-left: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.starimage{
		padding: 5upx 10upx;
		background-color: #EFEFEF;
		border-radius: 15upx;
	}
	.starimage image{
		margin: 0upx 2upx;
	}
	.care{
		margin-left: 30upx;
	}
	.top{
		font-size: 15px;
		font-weight: bold;
	}
</style>
