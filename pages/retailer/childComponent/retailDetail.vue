<template>
	<view class="content">
		<view class="left">
			<image :src="shopName.logo" mode=""></image>
		</view>
		<view class="center">
			<view class="shopName">
				{{shopName.name}}
			</view>
			<view class="praise">
				<view class="star">
					<image src="../../../static/retailer/xing1.png" mode="" v-for="index in 4"></image>
					<image src="../../../static/retailer/xing12.png" mode="" v-for="index in 1"></image>
				</view>
				<view class="care">
					{{shopName.fans}}人关注
				</view>
				<view class="goodThing">
					{{shopName.goods}}好物
				</view>
			</view>
		</view>
		<view class="right" @click="toggleConcern">
			<view class="attend" v-if="isCon">
				已关注
			</view>
			<view class="attend" v-else>
				关注
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				isCon:false,
			}
		},
		props:{
			shopName:{
				type:Object,
				default(){
					return {};
				}
			},
			isConcern:{
				type:Boolean,
				default:false,
			}
		},
		methods:{
			toggleConcern(){
				this.isCon = !this.isCon;
				this.$emit("toggleConcern");
			}
		},
		mounted(){
			this.isCon = this.isConcern;
		}
	}
</script>

<style scoped>
.content{
	padding: 30upx 20upx;
	margin-top: 150upx;
	display: flex;
	align-items: center;
}
.left{
	box-shadow: 0px 0px 5upx #C0C0C0;
}
.left image{
	width: 100upx;
	height: 100upx;
}
.center{
	flex: 1;
	margin-left: 20upx;
}
.praise{
	display: flex;
	font-size: 12px;
	align-items: center;
	color: #555;
}
.star{
	margin-right: 20upx;
}
.care{
	margin-right: 20upx;
}
.shopName{
	font-size: 18px;
	font-weight: bold;
	color: #555555;
}
.attend{
	padding: 10upx 20upx;
	border:1px solid #C0C0C0;
	font-size: 12px;
	border-radius: 30upx;
}
.star{
	display: flex;
}
.star image{
	width: 10px;
	height: 10px;
}
</style>
