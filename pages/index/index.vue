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
		<toggle-data :toggleData="toggleData" 
		@toggleStyle="toggleStyle" 
		:currentIndex="currentIndex" class="toggleData" ref="sss"></toggle-data>
		<!-- 设置切换数据组件end -->
		<!-- 将展示pop,sell,news,start -->
		<view class="showImageAll">
			<show-item v-for="(item,index) in nowData" :key="index" :sendImagedata="item" @click.native="clickTodetail(item)"></show-item>
		</view>
		<!-- 展示pop，sell,new，end -->
	</view>
</template>

<script>
	// 引入组件
	import recommendList from "./childcomponents/recommendList.vue";
	import recommendItem from "./childcomponents/recommendItem.vue";
	import popular from "./childcomponents/popular.vue";
	import toggleData from "./childcomponents/toggleData.vue";
	import showItem from "./childcomponents/showItem.vue"
	import backTop from "../../components/backTop.vue";
	// 引入外部js文件
	import {swipper,showImage} from "../../network/index.js"
	export default {
		data() {
			return {
				topImage:[],
				midImage:[],
				currentIndex: 0,
				toggleData:["流行","热销","上新"],
				sendData:['pop','sell',"new"],
				popData:[],
				sellData:[],
				newsData:[],
				currentData:[],
				nowData:[],
				afterIndex:0,// 这里是后来切换的数据index
				currentPage:[2,2,2], //这里存放当前的请求到的页数,
				toggleSpeData:true,
				backShow:true,
			}
		},
		components:{
			recommendList,
			recommendItem,
			popular,
			toggleData,
			showItem,
			backTop,
		},
		activated(){
			
		},
		methods: {
			toggleStyle(index){
				this.afterIndex = index;
				this.nowData = this.currentData[index];
			},
			clickTodetail(item){
				uni.navigateTo({
					url:"../detail/detail?iid=" + item.iid
				})
			},
			scrollPosition(e){
				console.log(e);
			}
		},
		onLoad(){
			this.currentData = [this.popData,this.sellData,this.newsData];
			this.nowData = this.currentData[0];
			swipper().then(value=>{
				// 抽取轮播图图片
				var banner = value.data.data.banner.list;
				for(let item of banner){
					this.topImage.push(item.image);
				}
				// 设置设置中间展示的图片
				this.midImage = value.data.data.recommend.list;
			},error=>{
				console.log(error);
			}),
			// 首页图片数据等
			showImage('pop',1).then(value=>{
				this.popData.push(...value.data.list);
			});
			showImage("sell",1).then(value=>{
				this.sellData.push(...value.data.list);
			});
			showImage("new",1).then(value=>{
				this.newsData.push(...value.data.list);
			});
			
		},
		onReachBottom(){
			uni.showToast({
				title:"正在加载数据...",
			    icon:"loading",
				duration: 1000,
			    success:()=>{
					showImage(this.sendData[this.afterIndex],this.currentPage[this.afterIndex]).then(value=>{
						this.currentData[this.afterIndex].push(...value.data.list);
						this.currentPage[this.afterIndex] += 1;
					},error=>{
						console.log("加载失败")
					})
				}
			});
		},
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
.toggleData{
	background-color: white;
}
.showImageAll{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	background-color: white;
}
.toggleSpe{
	
}
</style>
