import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		cartList:[],
	},
	mutations:{
		addOneCloth(state,payload){
			state.cartList.push(payload);
		}
	},
	actions:{
		addOneCloth(context,payload){
			return new Promise((resolve,reject)=>{
				let isExist = context.state.cartList.find(item => item.iid == payload.iid);
				if(isExist){
					isExist.count += 1;
					resolve("该商品数量加1")
				}else{
					payload.count = 1;
					context.commit("addOneCloth",payload);
					resolve("新增该商品");
				}
			})
		}
	},
	getters:{
		
	}
})

export default store;