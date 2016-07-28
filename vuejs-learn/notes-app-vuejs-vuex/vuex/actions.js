

export const addNote = ({ dispatch },activeNote) => {

	let storedNotes = JSON.parse ( localStorage.getItem('stores') ) || [];
	storedNotes.push(activeNote);
	localStorage.setItem('stores', JSON.stringify( storedNotes ));
	dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch },notes) => {
	dispatch('EDIT_NOTE', event.target.value)
		localStorage.setItem('stores', JSON.stringify( notes ));
}

export const deleteNote = ({ dispatch }) => {
	dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({dispatch}, note) => {
	dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
	dispatch('TOGGLE_FAVORITE');
}

export const initStore = ({ dispatch }) =>{

	let stores = JSON.parse(localStorage.getItem('stores'))

	let notes = stores || []
	dispatch('INIT_STORE',notes)
}
