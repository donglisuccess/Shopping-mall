<template>
	<view class="content">
		<view class="left">
			<view class="servePeople">
				<image src="../../../static/addCart/kefu.png" mode=""></image>
				<view class="">
					客服
				</view>
			</view>
			<view class="shop">
				<image src="../../../static/addCart/dianpu.png" mode=""></image>
				<view class="">
					店铺
				</view>
			</view>
			<view class="save">
				<image src="../../../static/addCart/shoucang.png" mode=""></image>
				<view class="">
					收藏
				</view>
			</view>
		</view>
		<view class="right">
			<view class="addCarts" @click="addCart">
				加入购物车
			</view>
			<view class="payOut">
				购买
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"addCart",
		data(){
			return {
				
			}
		},
		methods:{
			addCart(){
				this.$toast.show("这里是toast",2000);
			}
		}
	}
</script>

<style scoped>
.content{
	display: flex;
	position: fixed;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 120upx;
	background-color: white;
	box-shadow: 0px 0px 20upx #C0C0C0;
}
.left{
	flex: 5;
	display: flex;
	text-align: center;
}
.left>view{
	flex: 1;
	font-size: 16px;
	color: #808080;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.left view>image{
	width: 65upx;
	height: 65upx;
}
.right{
	flex: 5;
	display: flex;
}
.addCarts{
	background-color: yellow;
	font-weight: bold;
	line-height: 120upx;
	flex: 1;
}
.payOut{
	background-color: #ff557f;
	flex: 1;
	text-align: center;
	line-height: 120upx;
	color: white;
	font-weight: bold;
}
</style>
