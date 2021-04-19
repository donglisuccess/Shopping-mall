import Vuex from "vuex";
import Vue from "vue";

import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutation.js";
Vue.use(Vuex);

const state =  {
		cartList: [],
		historyRecord: [],
	};
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})

export default store;
