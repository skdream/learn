import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 状态对象

const state = {
	notes:[],
	activeNote:{}
}



const mutations = {

	INIT_STORE (state,notes) {
		state.notes = notes;
	},
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
		// localStorage.setItem('stores', JSON.stringify( state.notes ));
	},

	DELETE_NOTE (state) {
		state.notes.$remove(state.activeNote)
		if(state.notes[0]){
			state.activeNote = state.notes[0]
		}else{
			state.activeNote = false;
		}
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
