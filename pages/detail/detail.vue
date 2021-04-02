<template>
	<view>
		<navigator url="../index/index" open-type="switchTab" class="backToIndex">
			<image src="../../static/fanhui.png" mode=""></image>
		</navigator>
		<!-- 展示顶部图片start -->
		 <swiper class="swiper" indicator-dots=true autoplay=true interval="3000" duration="1000">
		    <swiper-item v-for="(item,index) in topImage" :key="index">
				<image :src="item" mode="aspectFill"></image>
		    </swiper-item>
		</swiper>
		<!-- 展示顶部图片end -->
	</view>
</template>

<script>
	import {requestByiid} from "../../network/index.js"; 
	export default {
		name:"detail",
		data() {
			return {
				iid:"",
				data:{},
				topImage:[],
			}
		},
		methods: {
			
		},
		onLoad(e){
			this.iid = e.iid;
			requestByiid(this.iid).then(value=>{
				this.data = value;
			}).then(value=>{
				this.topImage = this.data.result.itemInfo.topImages;
			})
		}
	}
</script>

<style>
.swiper{
	width: 100%;
	height: 550upx;
}
.swiper image{
	width: 100%;
	height: 550upx;
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
</style>
