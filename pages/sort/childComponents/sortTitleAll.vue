<template>
	<view class="sortAll">
		<scroll-view scroll-y="true" class="sortItemLeft">
			<view>
				<view class="sortItemLeftOne" v-for="(item,index) in sortAll" 
				:class="{isCheckItem:currentIndex == index}" 
				:key="index" @click="clickTitleItem(index)">
					{{item.title}}
				</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="sortItemRight">
			<view class="sortRightBox">
				<view class="sortRightBoxItem" v-for="(item,index) in maitKeyData" 
				:key="'maitKeyData'+index">
					<image :src="item.image" mode=""></image>
					<view class="">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="sortRightBottomData">
				<sort-bottom-goods v-for="(item,index) in minWallKeyData" 
				:key="index" :goodsItem="item"></sort-bottom-goods>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import sortBottomGoods from "./sortBottomGoods.vue";
	export default {
		data(){
			return {
				currentIndex:0
			}
		},
		components:{
			sortBottomGoods,
		},
		props:{
			sortAll:{
				type:Array,
				default(){
					return [];
				}
			},
			maitKeyData:{
				type:Array,
				default(){
					return [];
				}
			},
			minWallKeyData:{
				type:Array,
				default(){
					return [];
				}
			}
		},
		methods:{
			clickTitleItem(index){
				this.currentIndex = index;
				this.$emit("toggleDetailContent",index);
			}
		},
		onReachBottom(){
			console.log("hhhhhhhh")
		}
	}
</script>

<style scoped>
	.sortAll{
		display: flex;
		margin-top: 150upx;
	}
	.sortItemLeft{
		flex: 1;
		text-align: center;
		background-color: #f5f5f5;
		height: 100vh;
	} 
	.sortItemLeftOne{
		height: 100upx;
		line-height: 120upx; 
		font-size: 15px;
	}
	.sortItemRight{
		flex: 3;
		height: 100vh;
	}
	.sortRightBoxItem{
		height: 200upx;
	}
	.isCheckItem{
		background-color: white !important;
		font-weight: bold !important;
		font-size: 17px;
		color: #ff8198;
	} 
	.sortRightBox{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.sortRightBoxItem{
		text-align: center;
		font-size: 16px;
		margin-top: 40upx;
	}
	.sortRightBoxItem image{
		width: 150upx;
		height: 150upx;
	}
	.sortRightBottomData{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.sortBottomItem{
		width: 250upx;
	}
</style>
