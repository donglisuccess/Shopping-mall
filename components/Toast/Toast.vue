<template>
	<view class="content" v-show="toastShow">
		{{toastSomeThings}}
	</view>
</template>

<script>
	export default {
		name:"Toast",
		data(){
			return {
				isShow:false,
			}
		},
		props:{
			toastSomeThings:{
				type:String,
				default:"",
			},
			toastShow:{
				type:Boolean,
				default:false,
			}
		}
	}
</script>

<style scoped>
.content{
	position: fixed;
	padding:15upx 30upx;
	top: 900upx;
	background-color: rgba(0,0,0,0.8);
	color: white;
	z-index: 999;
	border-radius: 15upx;
	margin-left: 210upx;
}
</style>
