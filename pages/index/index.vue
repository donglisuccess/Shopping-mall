<template>
	<view class="content">
		<!-- 首页轮播图 start -->
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="500">
            <swiper-item v-for="(item,index) in topImage" :key="index">
                <image :src="item" mode=""></image>
            </swiper-item>
        </swiper>
		<!-- 首页轮播图 end -->
		<!-- 设置推荐组件 start -->
		<recommend-list v-show="midImage.length" :recommendImage="midImage" class="recommendList">
			<recommend-item v-for="(item,index) in midImage" :key="index" :recomimglist="item" class="recommendItem"></recommend-item>
		</recommend-list>
		<!-- 设置推荐组件end -->
		<!-- 设置分类 start-->
		<popular></popular>
		<!-- 设置分类组件end -->	
		<!-- 设置切换数据组件 start-->
		<toggle-data :toggleData="toggleData" @toggleStyle="toggleStyle" :currentIndex="currentIndex"></toggle-data>
		<!-- 设置切换数据组件end -->
	</view>
</template>

<script>
	// 引入组件
	import recommendList from "./childcomponents/recommendList.vue";
	import recommendItem from "./childcomponents/recommendItem.vue";
	import popular from "./childcomponents/popular.vue";
	import toggleData from "./childcomponents/toggleData.vue";
	// 引入外部js文件
	import {swipper} from "../../network/index.js"
	export default {
		data() {
			return {
				topImage:[],
				midImage:[],
				currentIndex: 0,
				toggleData:["流行","新款","精选"],
				sendData:['pop','new','sell'],
			}
		},
		components:{
			recommendList,
			recommendItem,
			popular,
			toggleData,
		},
		onLoad() {

		},
		activated(){
			
		},
		methods: {
			toggleStyle(index){
				console.log(index)
			}
		},
		onLoad(){
			swipper().then(value=>{
				console.log(value)
				// 抽取轮播图图片
				var banner = value.data.data.banner.list;
				for(let item of banner){
					this.topImage.push(item.image);
				}
				// 设置设置中间展示的图片
				this.midImage = value.data.data.recommend.list;
				console.log(this.midImage);
			},error=>{
				console.log(error);
			})
		}
	}
</script>

<style scoped>
.content{
	background-color:#efefef;
}
.swiper{
	width: 100%;
	height: 400upx;
	background-color: white;
}
.swiper image {
	width: 100%;
	height: 400upx;
}
</style>
