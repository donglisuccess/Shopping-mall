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
		}
	}