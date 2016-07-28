<template>
	<div id="note-editor">
	<textarea :value="activeNoteText" @input="editNote(notes)" class="form-control"></textarea>
</div>
</template>

<script>

	import { editNote } from '../vuex/actions'
	export default {
		vuex:{
			getters:{
				notes: state => state.notes,
				activeNoteText: state => state.activeNote.text
			},
			actions:{
				editNote
			}
		}
	}
</script>
