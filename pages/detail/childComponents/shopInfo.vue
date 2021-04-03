<template>
	<view class="content">
		<!-- 店铺头像和名称 -->
		<view class="headPhoto">
			<image :src="shopInfoma.shopLogo" mode=""></image>
			<view class="">
				{{shopInfoma.name}}
			</view>
		</view>
		<!-- 详细数据 -->
		<view class="shopDetailInfo">
			<view class="left">
				<view class="">
					<view class="shopNumber">
						{{shopInfoma.cSells}}
					</view>
					<view class="">
						总销量
					</view>
				</view>
				<view class="">
					<view class="shopNumber">
						{{shopInfoma.cGoods}}
					</view>
					<view class="">
						全部宝贝
					</view>
				</view>
			</view>
			<view class="right">
				<view class="right-item" v-for="(item,index) in shopInfoma.score">
					<view class="">
						{{item.name}}
					</view>
					<view :class="{scorItem:item.isBetter}">
						{{item.score}}
					</view>
					<view class="scoreTextOne scoreText" v-if="item.isBetter">
						高
					</view>
					<view class="scoreTextTwo scoreText" v-else>
						低
					</view>
				</view>
			</view>
		</view>
		<!-- 进店看看 -->
		<view class="entryShop" @click="entryShop">
			进店看看
		</view>
	</view>
</template>

<script>
	export default {
		name:"shopInfo",
		data(){
			return {
				
			}
		},
		props:{
			shopInfoma:{
				type:Object,
				default(){
					return {};
				}
			}
		},
		methods:{
			entryShop(){
				this.$emit("entryShop",this.shopInfoma.shopUrl);
			}
		}
	}
</script>

<style scoped>
.content{
	padding:0upx 20upx;
	margin-top: 40upx;
}
.headPhoto{
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 20upx;
}
.headPhoto image{
	width: 140upx;
	height: 140upx;
}
.headPhoto view{
	font-size: 18px;
	font-weight: bold;
	color: #555555;
	margin-left: 50upx;
}
.shopDetailInfo{
	display: flex;
	margin-top: 30upx;
}
.left{
	flex: 1;
	display: flex;
	justify-content: space-evenly;
	text-align: center;
	color: #808080;
	border-right: 2px solid #cecece;
	margin-top: 20upx;
}
.shopNumber{
	margin-bottom: 30upx;
}
.right{
	flex: 1;
}
.right-item{
	display: flex;
	margin-bottom: 10upx;
	margin-top: 10upx;
	color: #808080;
}
.right-item :nth-child(1){
	flex: 2;
	padding-left: 20upx;
}
.right-item :nth-child(2){
	flex: 1;
	text-align: center;
	margin-right: 10upx;
}
.right-item :nth-child(3){
	text-align: right;
}
.scoreTextOne{
	background-color: #4CD964;
}
.scoreText{
	color: white;
}
.scoreTextTwo{
	background-color: red;
}
.scorItem{
	color: #4CD964;
}
.entryShop{
	width: 400upx;
	height: 100upx;
	background-color: #C0C0C0;
	margin: 80upx auto;
	text-align: center;
	line-height: 100upx;
	font-size: 18px;
	color: #555555;
	border-radius: 15upx;
}
</style>
