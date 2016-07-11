import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 状态对象

const state = {
	notes:[],
	activeNote:{}
}



const mutations = {

	ADD_NOTE (state) {

		const newNote = {
			text:'New note',
			favorite:false
		}
		// 只能 mutators 可以操作 state
		state.notes.push(newNote) 
		state.activeNote = newNote
	},

	EDIT_NOTE (state, text) {
		state.activeNote.text = text
	},

	DELETE_NOTE (state) {
		state.notes.$remote(state.activeNote)
		state.activeNote = state.notes[0]
	},

	TOGGLE_FAVORITE (state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},

	SET_ACTIVE_NOTE (state, note) {
		state.activeNote = note
	}
}


export default new Vuex.Store({
	state,
	mutations
})
