<template>
	<view class="content">
		<!-- 头部信息 start -->
		<top-head :nickName="nickName" :avator="avatar" @login="login"></top-head> 
		<!-- 头部信息 end -->
		<record @enterbrowse="enterbrowse" :historyItemLength="historyItemLength"></record>
		<blue-text></blue-text>
		<!-- 代付款之类 -->
		<case-infomation></case-infomation>
		<!-- 登录start -->
		
		<!-- #ifdef H5 || APP-PLUS -->  
		<loginWay @login="login"></loginWay>
		<!-- #endif -->
		<!-- 登录end -->
	</view>
</template> 

<script>
	import topHead from "./childComponents/topHead.vue";
	import serve from "./childComponents/serve.vue";
	import record from "./childComponents/record.vue"
	import blueText from "./childComponents/blueText.vue";
	import caseInfomation from "./childComponents/caseInfomation.vue"
	import loginWay from "./childComponents/loginWay.vue"
	export default {
		data() {
			return {
				nickName:"未登录",
				avatar:"../../../static/self/jingdong.png",
				historyItemLength:0,
			}
		},
		components:{
			topHead,
			serve,
			blueText,
			record, 
			caseInfomation,
			loginWay
		},
		onLoad() {
			this.$bus.$on('toggleToset',()=>{
				uni.navigateTo({
					url:'../setting/setting'
				})
			})
		},
		activated(){
			 
		},
		methods: {
			
			login(product){
				var that = this;
				uni.login({
				  provider: product,
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: product,
				      success: function (infoRes) {
				        // console.log('用户昵称为：' + infoRes.userInfo.nickName);
						that.nickName = infoRes.userInfo.nickName;
						that.avatar = infoRes.userInfo.avatarUrl;
				      }
				    }); 
				  }
				});
			},
			enterbrowse(){
				uni.navigateTo({
					url:"../accessRecord/accessRecord"
				})
			}
			
			
		},
		activated(){
			this.historyItemLength = this.$store.getters.historyRecordLength;
			console.log("hhhhhhhhhhhhhhhhs")
		}
	}
</script>

<style scoped>
	.serveList{
		/* margin-top: 1000upx; */
	}
</style>
