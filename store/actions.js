export default  {
		addOneCloth(context, payload) {
			return new Promise((resolve, reject) => {
				let isExist = context.state.cartList.find(item => item.iid == payload.iid);
				if (isExist) {
					isExist.count += 1;
					resolve("该商品数量加1")
				} else {
					payload.count = 1;
					context.commit("addOneCloth", payload);
					resolve("新增该商品");
				}
			})
		},

		clearHistory(context, payload) {
			return new Promise((resolve, reject) => {
				context.commit('clearHistory');
				resolve("浏览记录已清空!");
			})
		},
		addSaveGoods(context,payload){
			return new Promise((resolve,reject)=>{
				var product = context.state.saveGoods.find(item=>item.iid == payload.iid);
				if(product){
					resolve("已经收藏过该商品");
				}else{
					payload.price = "￥"+payload.price;
					context.commit('addSaveGoods',payload);
					resolve("收藏该商品");
				}
			})
		},
		findStore(context,payload){
			return new Promise((resolve,reject)=>{
				var storeInfo = context.state.enterStore.find(item=>item[2].shopId == payload);
				resolve(storeInfo);
				// console.log(storeInfo);
			})
		},
		toggleConcern(context,payload){
			return new Promise((resolve,reject)=>{
				var storeItem = context.state.enterStore.find(item=>item[2].shopId == payload);
				storeItem[2].isConcern = !storeItem[2].isConcern;
				if(storeItem[2].isConcern){
					resolve("关注成功");
				}else{
					resolve("取消关注");
				}
			})
		},
		getConcornShop(context){
			return new Promise((resolve,reject)=>{
				let storeConcornAll = [];
				let enterStore = context.state.enterStore;
				for(let i = 0; i< enterStore.length;i++){
					if(enterStore[i][2].isConcern){
						storeConcornAll.push(enterStore[i]);
					}
				}
				resolve(storeConcornAll);
			})
		},
		getCareShopLength(context){
			return new Promise((resolve,reject)=>{
				let count = 0;
				let enterStore = context.state.enterStore;
				for(let i = 0; i< enterStore.length;i++){
					if(enterStore[i][2].isConcern){
						count += 1;
					}
				}
				resolve(count);
			})
		},
		getshopLookAllList(context){
			return new Promise((resolve,reject)=>{
				let length = context.state.enterStore.length;
				resolve(length);
			})
		}
	}