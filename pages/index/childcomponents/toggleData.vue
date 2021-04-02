<template>
	<view class="content">
		<view  v-for="(item,index) in toggleData" :key="index" class="contentItem">
			<view :class="{setitem:current == index}" @click="toggleD(index)" class="currentstyle">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"toggleData",
		data(){
			return {
				current:this.currentIndex
			}
		},
		props:{
			toggleData:{
				type:Array,
				default(){
					return [];
				}
			},
			currentIndex:{
				type:Number,
				default:0,
			}
		},
		methods:{
			toggleD(index){
				this.current = index;
				this.$emit("toggleStyle",index);
			}
		}
	}
</script>

<style scoped>
.content{
	display: flex;
	flex-direction: row;
	background-color: white;
	height: 75upx;
}
.contentItem{
	flex: 1;
	text-align: center;
	align-items: center;
}
.setitem{
	border-bottom: 3px solid #ff8198;
	color: #ff8198;
}
.currentstyle{
	padding:5px;
	font-size: 14px;
	display: inline;
}
</style>
