<template>
	<view class="content" v-show="isShow">
		{{message}}
	</view>
</template>

<script>
	export default {
		name:"Toast",
		data(){
			return {
				message:"",
				isShow:false,
			}
		},
		methods:{
			show(message,during){
				this.message = message;
				this.isShow = true;
				setTimeout(()=>{
					this.isShow = false;
					this.message = "";
				},during);
			}
		}
	}
</script>

<style scoped>
.content{
	position: fixed;
	padding:15upx 30upx;
	top: 500upx;
	background-color: rgba(0,0,0,0.8);
	color: white;
	z-index: 999;
	border-radius: 15upx;
	margin-left: 210upx;
}
</style>
