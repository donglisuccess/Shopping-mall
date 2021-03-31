<template>
	<view :recomimglist="recomimglist" class="recommendItem">
		<image :src="recomimglist.image" mode=""></image>
		<view class="recommendItem-text">
			{{recomimglist.title}}
		</view>
	</view>
</template>

<script>
	export default{
		name:"",
		data(){
			return {
				
			}
		},
		props:{
			recomimglist:{
				type:Object,
				default(){
					return {};
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.recommendItem{
		flex: 1;
		width: 188upx;
		justify-content: space-around;
	}
	.recommendItem image{
		width: 170upx;
		height: 170upx;
		text-align: center;
		padding-left: 9upx;
	}
	.recommendItem-text{
		text-align: center;
		font-size: 12px;
		color:#808080;
	}
</style>
