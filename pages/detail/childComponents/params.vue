<template>
	<view class="content">
		<!-- 这里设置tables -->
		<view class="tablesItem" v-for="(item,index) in paramsInfo.tables[0]" :key="index">
			<view class="" v-for="(it,ind) in item" :key="ind">
				{{it}}
			</view>
		</view>
		<!-- 这里设置set -->
		<view class="">
			<view class="setItem" v-for="(item,index) in paramsInfo.set" :key="index">
				<view class="">
					{{item.key}}
				</view>
				<view class="">
					{{item.value}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"params",
		data(){
			return {
				
			}
		},
		props:{
			paramsInfo:{
				type:Object,
				default(){
					return {};
				}
			}
		}
	}
</script>

<style scoped>
.content{
	padding:0upx 20upx;
	font-size: 16px;
}
.tablesItem{
	padding: 25upx 0upx;
	border-bottom: 1px solid #EFEFEF;
	color: #808080;
	display: flex;
	flex-direction: row;
}
.tablesItem :nth-child(1){
	flex: 2;
	text-align: left;
}
.tablesItem>view{
	flex: 1;
	text-align: center;
}
.setItem{
	display: flex;
	padding: 25upx 0upx;
	border-bottom: 1px solid #EFEFEF;
	align-items: center;
}
.setItem :nth-child(1){
	flex: 2;
	text-align: left;
	color: #808080;
}
.setItem :nth-child(2){
	flex: 3;
	text-align: left;
	color:  #ff8198;
}
</style>
