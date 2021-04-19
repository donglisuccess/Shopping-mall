<template>
	<view class="content" @click="enterDetail">
		<view class="left">
			<image :src="item.image" mode="aspectFill"></image>
		</view>
		<view class="right">
			<view class="top">
				{{item.title}}
			</view>
			<view class="bottom">
				<view class="price">
					{{item.price}}
				</view>
				<view class="common">
					看相似
				</view>
				<view class="cart">
					<image src="../../../static/TabBar/gouwuche.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default { 
		name:"",
		data(){
			return {
				
			}
		},
		props:{
			item:{
				type:Object,
				default(){
					return {};
				}
			}
		},
		methods:{
			enterDetail(){
				this.$emit("enterDetail",this.item.iid);
			}
		}
	}
</script>

<style scoped>
	.content{
		display: flex;
		padding: 10upx 0upx;
	}
	.left{
		flex: 1;
	}
	.left image{
		width: 100% ;
		height: 350upx;
	}
	.right{
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content:space-around;
		padding-left: 20upx;
		border-bottom: 1px solid #EFEFEF;
	}
	.top{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.cart{
		width: 50upx;
		height: 50upx;
		background-color: #EFEFEF;
		border-radius: 50%;
		text-align: center;
		margin-left: 20upx;
	}
	.cart image{
		width: 40upx;
		height: 40upx;
		padding-top: 5upx;
	}
	.bottom{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.common{
		padding: 5upx 20upx;
		border-radius: 20upx; 
		font-size: 14px;
		border: 1px solid #EFEFEF; 
	}
	.price{
		width: 250upx;
		color:  #ff8198;
		font-size: 16px;
	}
</style>
