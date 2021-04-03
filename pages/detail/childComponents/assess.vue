<template>
	<view class="content">
		<view class="assessTitle">
			<view class="">
				用户评价
			</view>
			<view class="">
				更多
			</view>
		</view>
		<view class="userInfo">
			<image :src="assessInfo.avatar" mode=""></image>
			<view class="userInfoName">
				{{assessInfo.uname}}
			</view>
		</view>
		<view class="assessInfoContent">
			{{assessInfo.content}}
		</view>
		<view class="detailUser">
			<view class="time">
				{{changeTime}}
			</view>
			<view class="style">
				{{assessInfo.style}}
			</view>
		</view>
		<view class="images">
			<view class="imageBox" v-for="(item,index) in assessInfo.images" :key="index">
				<image :src="item" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {formatDate} from "../../../common/utils.js";
	export default {
		name:"assess",
		data(){
			return {
				
			}
		},
		props:{
			assessInfo:{
				type:Object,
				default(){
					return {};
				}
			}
		},
		onLoad(){
			
		},
		computed:{
			changeTime(){
				let date = new Date(this.assessInfo.created * 1000);
				return formatDate(date,"yyyy-MM-dd hh-mm-ss")
			}
		},
	}
</script>

<style scoped>
.content{
	padding: 0px 20upx;
}
.assessTitle{
	display: flex;
	height: 100upx;
	line-height: 100upx;
	color: #555555;
}
.assessTitle :nth-child(1){
	flex: 1;
	text-align: left;
}
.assessTitle :nth-child(2){
	flex: 1;
	text-align: right;
}
.userInfo{
	display: flex;
	align-items: center;
}
.userInfo image{
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
}
.userInfoName{
	font-size: 16px;
	font-weight: bold;
	color: #808080;
	margin-left: 30upx;
}
.assessInfoContent{
	color: #808080;
	margin-top: 30upx;
}
.detailUser{
	display: flex;
	margin-top: 30upx;
	color: #808080;
	font-size: 14px;
}
.time{
	
}
.style{
	margin-left: 20upx;
}
.images{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 0upx;
	width: 100%;
}
.imageBox{
	width: 300upx;
	padding-right: 20upx;
	margin-top: 30upx;
}
.imageBox image{
	width: 300upx;
}
</style>
