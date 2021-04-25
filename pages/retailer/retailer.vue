<template>
	<view>
		<search-goods @backTo="backTo"></search-goods>
		<retailer-detail :shopName="shopName" :isConcern="isConcern" @toggleConcern="toggleConcern"></retailer-detail>
		<scroll-view scroll-x="true" >
			<view class="scroll-view-box">
				<view class="scroll-view-item" v-for="(item,index) in cheapParper" :key="index" @click="getCheap">
					<view class="">
						{{item}}
					</view>
					<view class="" v-if="isGet">
						优惠券
					</view>
					<view class="" v-else>
						已领取
					</view>
				</view>
			</view>
		</scroll-view>
		<swiper :indicator-dots="true" :autoplay="false" :interval="3000" class="swiper">
			<swiper-item v-for="(item,index) in imageList" :key="index">
				<image :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<score :shopInfoma="score"></score>
		<Toast :toastSomeThings="toastSomeThings" :toastShow="toastShow" class="toast"></Toast>
	</view>
</template>

<script>
	import searchGoods from "../../pages/sort/childComponents/searchGoods.vue";
	import retailerDetail from "./childComponent/retailDetail.vue";
	import score from "./childComponent/score.vue";
	import Toast from "../../components/Toast/Toast.vue";
	// 这里是引入js文件
	import {shopName,praiseScore} from "../../network/retailer.js";
	export default {
		data() {
			return {
				shopInfo:{},
				shopName:{},
				score:{},
				cheapParper:[],
				imageList:[],
				isGet:true,
				isConcern:true,
				shopId:"",
				toastSomeThings:"",
				toastShow:false,
			}
		},
		components:{
			searchGoods,
			retailerDetail,
			score,
			Toast,
		},
		methods: {
			backTo(){
				uni.navigateBack({
					delta:1
				})
			},
			getCheap(){
				this.isGet = !this.isGet;
			},
			toggleConcern(){
				this.$store.dispatch("toggleConcern",this.shopId).then(value=>{
					// console.log(value);
					this.toastSomeThings = value;
					this.toastShow = true;
					setTimeout(()=>{
						this.toastShow = false;
					},2000);
				})
			}
		},
		onLoad(e){
			this.shopId = e.shopId;
			this.$store.dispatch("findStore",this.shopId).then(value=>{
				this.shopInfo = value;
				this.shopName = new shopName(this.shopInfo[2]);
				this.score = new praiseScore(this.shopInfo[2]);
				this.cheapParper = this.shopInfo[1];
				this.imageList = this.shopInfo[0];
				this.isConcern = this.shopInfo[2].isConcern;
			})
		}
	}
</script> 

<style scoped>
.retailer-detail{
	margin-top: 150upx;
}
.swiper{
	height: 700upx;
}
.swiper image{
	height: 700upx;
	width: 100%;
}
.scroll-view-box{
	width: 100%;
	white-space: nowrap;
	display: flex;
}
.scroll-view-item{
	margin:15upx;
	display: flex;
	align-items: center;
	border: 1px solid #C0C0C0;
	height: 100upx;
	border-radius: 20upx;
}
.scroll-view-item :nth-child(1){
	background-color: #0ba2ff;
	color: white;
	/* padding: 20upx 30upx; */
	height: 100upx;
	line-height: 100upx;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	border-radius: 20upx 0upx 0upx 20upx;
	padding: 0upx 20upx;
}
.scroll-view-item :nth-child(2){
	background-color: white;
	color: #007AFF;
	padding: 10upx 30upx;
	border-radius: 20upx;
}
</style>
