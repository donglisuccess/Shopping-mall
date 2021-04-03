<template>
	<view class="content">
		<view>
			<image :src="showImage" mode=" aspectFit"></image>
			<view class="goodsTitle">
				{{sendImagedata.title}}
			</view>
			<view class="praise">
				<view class="price">
					{{"￥" + sendImagedata.price}}
				</view>
				<view class="fans">
					{{sendImagedata.cfav}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"showItem",
		data(){
			return {
				
			}
		},
		props:{
			sendImagedata:{
				type:Object,
				default(){
					return {};
				}
			}
		},
		created(){
			
		},
		computed:{
			showImage(){
				if(this.sendImagedata.showLarge)
				{
					return this.sendImagedata.showLarge.img 
				}else{
					return this.sendImagedata.image;
				}
			}
		}
	}
</script>

<style scoped>
.content{
	width: 350upx;
	padding-bottom: 30upx;
	background-color: white !important;
}
.content image{
	width: 100%;
	border-radius: 20upx;
}
.goodsTitle{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 16px;
	color: #666666;
	font-weight: bold;
}
.praise{
	display: flex;
	margin-top: 10upx;
}
.price{
	flex: 1;
	color: #ff5777;
	font-size: 14px;
}
.fans{
	flex: 1;
	position: relative;
	font-size: 14px;
}
.fans::before{
	content: "";
	position: absolute;
	width: 30upx;
	height: 30upx;
	/* background-color: red; */
	background-image: url(../../../static/shoucang.png);
	background-repeat: no-repeat;
	background-size: 30upx 30upx;
	left: -34upx;
	top: 4upx;
}
</style>
