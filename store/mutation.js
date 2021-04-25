export default{
		addOneCloth(state, payload) {
			state.cartList.push(payload);
		},
		addHistoryRecord(state, payload) {
			var product = state.historyRecord.find(item => {
				return item.iid == payload.iid;
			})
			if (product) return;
			state.historyRecord.push(payload);
		},
		clearHistory(state) {
			state.historyRecord = [];
		},
		addSaveGoods(state,payload){
			state.saveGoods.push(payload);
		},
		enterStore(state,payload){
			payload[2].isConcern = false;
			state.enterStore.push(payload);
		}
	}