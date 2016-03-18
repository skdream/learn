<template>
<modal :id="id" :show.sync="show" :closable="false" :cur-Contact.sync="curContact">
	<h4 slot="header">提示</h4>
	<div slot="body">
		你确定要删除“ {{ curContact.name }} ”吗?
	</div>
	<div slot="footer">
		<button class="btn btn-danger ok" @click="confirm()">确定</button>
		<button class="btn btn-warning cancel" data-dismiss="modal">取消</button>
	</div>
</modal>
</template>
<script>
	import modal from './modal'
	export default {
			props : {
				id : {
					type : String,
					required : true
				},
				show : {
					type : Boolean,
					required : true,
					twoWay : true
				},
				deleteContact: {
					type: Function,
					required : true,
					twoWay : false
				},
				curContact : {
					type : Object,
					required : true,
					twoWay : true
				}
			},
			methods : {
				confirm  () {
					this.show = !this.deleteContact();
				}
			},
			data(){
				return {

				}
			},
			components : {
				modal
			}
	}
</script>