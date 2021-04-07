<template>
	<view>
		<!-- 头部导航start -->
		<tab-bar class="tabBar">
			<navigator url="../index/index" open-type="switchTab" slot="left">
				<image src="../../static/fanhui.png" mode="" class="tabBar-image"></image>
			</navigator>
			<view class="tabBar-center" slot="center">
				<view class="goods">商品</view>
				<view class="">参数</view>
				<view class="">评论</view>
				<view class="">推荐</view>
			</view>
		</tab-bar>
		<!-- 头部导航end -->
		<!-- 展示顶部图片start -->
		 <swiper class="swiper" indicator-dots=true autoplay=true interval="3000" duration="1000">
		    <swiper-item v-for="(item,index) in topImage" :key="index">
				<image :src="item" mode="aspectFill"></image>
		    </swiper-item>
		</swiper>
		<!-- 展示顶部图片end -->
		<!-- 展示衣服信息 start -->
		<cloth-info :clothes="clothes"></cloth-info>
		<!-- 展示衣服信息 end -->
		<!-- 设置店铺信息start -->
		<shop-info :shopInfoma="shopInfoma" @entryShop="entryShop"></shop-info>
		<!-- 设置店铺信息end -->
		<!-- 这里展示细节图片start -->
		<detail-img :detailimg="detailimg"></detail-img>
		<!-- 这里展示细节图片end -->
		<!-- 这里展示参数start -->
		<params v-if="paramsInfo.tables" :paramsInfo="paramsInfo"></params>
		<!-- 这里展示参数end -->
		<!-- 这里是用户评价start -->
		<assess :assessInfo="assessInfo"></assess>
		<!-- 这里是用户评价end -->
		<!-- 这里展示的是推荐start -->
		<view class="recommendText">
			精选推荐
		</view>
		<view class="recommend">
			<show-item v-for="(item,index) in recommendList" 
			:key="index" 
			:sendImagedata="item" class="showItem"></show-item>
		</view>
		<!-- 这里展示用户推荐end -->
		<!-- 设置请求购物车start -->
		<add-cart :cart-item="cartItem" @toastInfo="toastInfo"></add-cart>
		<!-- 设置请求购物车end -->
		<!-- toast start -->
		<Toast :toastSomeThings="toastSomeThings" :toastShow="toastShow"></Toast>
		<!-- toast end -->
	</view>
</template>

<script>
	// 这里是导入组件
	import tabBar from "../../components/tabBar.vue"
	import clothInfo from "./childComponents/clothInfo.vue";
	import shopInfo from "./childComponents/shopInfo.vue";
	import detailImg from "./childComponents/detailImg.vue";
	import params from "./childComponents/params.vue";
	import assess from "./childComponents/assess.vue";
	import showItem from "../index/childcomponents/showItem.vue";
	import addCart from "./childComponents/addCart.vue";
	import Toast from "../../components/Toast/Toast.vue";
	
	// 这里是导入js文件
	import {requestByiid,clothInfomation,shopInfomation,
	detailImage,clothParams,assessItem,recommend,addCartInfo} from "../../network/index.js"; 
	export default {
		name:"detail",
		data() {
			return {
				iid:"",
				data:{},
				topImage:[],
				clothes:{},  //这里是商品信息
				shopInfoma:{},// 这里存放的是店铺的数据
				detailimg:[],
				paramsInfo:{}, //这里存放的是商品参数信息
				assessInfo:{},  //这里是用户评价信息
				recommendList:[],
				cartItem:{},//保存添加购物车所需要的信息
				toastSomeThings:"",
				toastShow:false,
			}
		},
		components:{
			tabBar,
			clothInfo,
			shopInfo,
			detailImg,
			params,
			assess,
			showItem,
			addCart,
			Toast,
		},
		methods: {
			entryShop(url){
				console.log(url)
			},
			toastInfo(value){
				this.toastSomeThings = value;
				this.toastShow = true;
				setTimeout(()=>{
					this.toastShow = false;
				},2000);
			}
		},
		onLoad(e){
			this.iid = e.iid;
			requestByiid(this.iid).then(value=>{
				this.data = value;
			}).then(value=>{
				this.topImage = this.data.result.itemInfo.topImages;
				var result = this.data.result;
				console.log(result)
				this.clothes = new clothInfomation(result);
				this.shopInfoma = new shopInfomation(result);
				this.detailimg = new detailImage(result).image;
				// console.log(result.itemParams)
				this.paramsInfo = new clothParams(result.itemParams);
				this.assessInfo = new assessItem(result.rate);
				// console.log(this.assessInfo);
				this.cartItem = new addCartInfo(result);
				// console.log(this.addCart);
			})
			recommend().then(value=>{
				this.recommendList = value.data.list;
				console.log(this.recommendList);
			},error=>{
				console.log("失败")
			})
		}
	}
</script>

<style>
.swiper{
	width: 100%;
	height: 600upx;
	margin-top: 65px;
}
.swiper image{
	width: 100%;
	height: 600upx;
}
.backToIndex{
	width: 80upx;
	height: 80upx;
	position: fixed;
	top: 20px;
	left: 20px;
	z-index: 1;
}
.backToIndex image{
	width: 80upx;
	height: 80upx;
}
.tabBar-image{
	width: 60upx;
	height: 60upx;
}
.tabBar-center{
	display: flex;
	background-color: white;
}
.tabBar-center view{
	flex: 1;
	text-align: center;
	font-size: 17px;
}
.tabBar{
	height: 80upx;
	position: fixed;
	top: 0px;
	right: 0px;
	left: 0px;
	z-index: 10;
	background-color: white;
	box-shadow: 0px 0px 10upx #C0C0C0;
}
.goods{
	color:#ff8198;
}
.recommend{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 30upx;
}
.recommendText{
	color:#ff8198;
	padding-left: 20upx;
	margin-top: 30upx;
}
</style>
