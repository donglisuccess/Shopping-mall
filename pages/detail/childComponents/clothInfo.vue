<template>
	<view class="content">
		<view class="clothTitle">
			{{clothes.title}}
		</view>
		<view class="priceInfo">
			<view class="price">
				{{clothes.price}}
			</view>
			<view class="prePrice" v-show="clothes.prePrice">
				{{clothes.prePrice}}
			</view>
			<view class="discountDesc" v-show="clothes.discountDesc">
				{{clothes.discountDesc}}
			</view>
		</view>
		<view class="columns">
			<view class="" v-for="(item,index) in clothes.columns" :key="index">
				{{item}}
			</view>
		</view>
		<view class="services">
			<view class="" v-for="(item,index) in clothes.services" :key="index">
				<image :src="item.icon" mode=""></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"clothInfo",
		data(){
			return {
				
			}
		},
		props:{
			clothes:{
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
}
.priceInfo{
	display: flex;
	align-items: center;
}
.priceInfo :nth-child(2){
	margin-left: 20upx;
}
.priceInfo :nth-child(3){
	margin-left: 20upx;
	padding: 5upx 10upx;
}
.columns{
	display: flex;
	margin-top: 30upx;
	text-align: center;
	font-size: 13px;
	color: #666666;
	padding-bottom: 20upx;
	border-bottom: 2px solid #EFEFEF;
}
.columns :nth-child(1){
	text-align: left;
}
.columns :nth-last-child(1){
	text-align: right;
}
.columns>view{
	flex: 1;
}
.clothTitle{
	font-weight: bold;
	color: #666666;
}
.price{
	color: #ff8198;
	font-size: 20px;
}
.prePrice{
	font-size: 12px;
	text-decoration: line-through;
	color: #808080;
}
.discountDesc{
	background-color: #ff3402;
	color: white;
	border-radius: 10upx;
}
.services{
	display: flex;
	font-size: 14px;
	color: #666666;
	flex-wrap: wrap;
	justify-content: start;
	text-align: center;
	margin-top: 20upx;
}
.services>view{
	display: flex;
	flex-direction: row;
	text-align: center;
	margin-right: 30upx;
	align-items: center;
	padding-top: 20upx;
}
.services>view>image{
	width: 30upx;
	height: 30upx;
}
</style>
