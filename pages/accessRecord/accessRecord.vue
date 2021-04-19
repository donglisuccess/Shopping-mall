<template>
	<view>
		<top-header @backTo="backTo" @clearHistory="clearHistory"></top-header>
		<view class="historyRecordList" v-if="historyAll">
			<history-item v-for="(item,index) in historyAll" 
			:key="index" 
			:item="item" 
			@enterDetail="enterDetail"></history-item>
		</view>
	</view>
</template>

<script>
	import topHeader from "./childComponent/topHeader.vue";
	import historyItem from "./childComponent/historyItem.vue"
	export default{
		name:"",
		data(){
			return {
				historyAll:[],
			}
		},
		components:{
			topHeader,
			historyItem
		},
		methods:{
			backTo(){
				uni.navigateBack({
				    delta: 1
				});
			},
			enterDetail(iid){
				uni.navigateTo({
					url:"../detail/detail?iid="+ iid,
				})
			},
			clearHistory(){
				console.log("hhhh")
				this.$store.dispatch("clearHistory").then(value=>{
					this.historyAll = this.$store.state.historyRecord;
				})
			}
		},
		onLoad(){
			this.historyAll = this.$store.state.historyRecord;
		}
	}
</script>

<style scoped>
	.historyRecordList{
		margin-top: 160upx; 
	}
</style>
