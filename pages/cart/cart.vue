<template>
	<view class="content">
		<product-item v-for="(item,index) in cartList" :key="index" :cartItem="item"></product-item>
	</view>
</template>

<script>
	import productItem from "./childComponent/productItem.vue";
	export default {
		data() {
			return {
				cartList:[], 
			}
		},
		components:{
			productItem
		},
		methods: {
			
		},
		onLoad(){
			this.cartList = this.$store.state.cartList;
		}
	}
</script>

<style>
	
</style>
