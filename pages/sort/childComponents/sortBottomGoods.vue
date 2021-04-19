<template>
	<view class="content" @click="enterGoodsDetail">
		<image :src="goodsItem.img" mode="aspectFit" class="goodsImage"></image>
		<view class="goodsTitle">
			{{goodsItem.title}}
		</view>
		<view class="praise">
			<view class="price">
				{{'￥' + goodsItem.price}}
			</view>
			<view class="cfan">
				{{goodsItem.cfav}}
			</view>
		</view>
	</view>
</template>

<script>
	 export default {
		 data(){
			 return {
				 
			 }
		 },
		 props:{
			 goodsItem:{
				 type:Object,
				 default(){
					 return {};
				 }
			 }
		 },
		 methods:{
			 enterGoodsDetail(){
			 	this.$bus.$emit("enterSortDetail",this.goodsItem.iid);
			 }
		 }
	 }
</script>

<style scoped>
	.content{
		width: 250upx;
	}
	.goodsImage{
		width: 250upx;
		border-radius: 20upx;
		height: 400upx;
	}
	.goodsTitle{
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
		font-size: 14px;
		font-weight: bold;
		color:#808080;
	}
	.praise{
		display: flex;
		justify-content: space-around;
		font-size: 14px;
	}
	.price{
		color: #ff8198;
		text-align: left;
		margin-right: 40upx;
	}
	.cfan{
		text-align: right;
		position: relative;
	}
	.cfan::before{
		position: absolute;
		content: "";
		width: 40upx;
		height: 40upx;
		background: url(../../../static/shoucang.png);
		background-size: 40upx 40upx;
		top: 0upx;
		left: -40upx;
	}
</style>
