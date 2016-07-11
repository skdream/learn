

<div id="note-editor">
	<textarea :value="activeNoteText" @input="editNote" class="form-control"></textarea>
</div>
<script>
	
	import { editNote } from '../vuex/actions'

	export default {
		vuex:{
			getters:{
				activeNoteText: state => state.activeNote.text
			},
			actions:{
				editNote
			}
		}
	}
</script>