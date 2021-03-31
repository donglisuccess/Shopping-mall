<template>
	<view class="recommendList">
		<slot></slot>
	</view>
</template>

<script>
	export default{
		name:"",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.recommendList{
		width: 100%;
		display: flex;
		flex-direction: row;
		padding-top: 20upx;
		background-color: white;
	}
</style>
