import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

	// 放置初始状态

	count: 0
}

const mutations = {

	// 放置状态变更函数
	
	INCREMENT (state, amount) {
		state.count = state.count + amount
	}
}

export default new Vuex.Store({
	state,
	mutations
})