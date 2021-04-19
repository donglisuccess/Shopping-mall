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
		}
	}