<template>
	<div id="{{id}}" class="modal {{class || 'fade'}}" v-show="show">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-show="closable">&times;</button>
					<slot name="header">
					ee
					</slot>
				</div>
				<div class="modal-body">
					<slot name="body">
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
      props: {
				id:{
					type:String,
					required:true
				},
				show:{
					type:Boolean,
					required:true,
					twoWay:true,
					default:true
				},
				closable:{
					type:Boolean,
					required:true,
					default:true
				}
			},
			data() {
				return {
					// id:'s3344',
					// show:true,
					// closable:true
				}
			}
    }
</script>