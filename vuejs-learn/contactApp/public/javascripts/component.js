Vue.component('modal',{
	template:"#modal-template",
	data:function(){
		return {

		};
	},
	props:{
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
	watch:{

	},
	computed:{

	},
	methods:{
		
	}
});


Vue.component('confirm-modal',{
	template:"#confirm-modal-template",
	data:function(){
		return {

		};
	},
	props:{
		id:{
			type:String,
			required:true
		},
		show:{
			type:Boolean,
			required:true,
			twoWay:true
		},
		deleteContact:{
			type:Function,
			required:true,
			twoWay:false
		},
		curContact:{
			type:Object,
			required:true,
			twoWay:true
		}
	},
	watch:{

	},
	computed:{

	},
	methods:{
		confirm:function(){
			this.show = !this.deleteContact();
		}
	}
});


Vue.component('view-modal',{
	template:"#view-modal-template",
	props:{
		id:{
			type:String,
			required:true
		},
		show:{
			type:Boolean,
			required:true,
			twoWay:true
		},
		curContact:{
			type:Object,
			required:true
		},
		headers:{
			type:Array,
			required:true
		}
	},
	watch:{

	},
	computed:{

	},
	methods:{

	}
});



Vue.component('add-modal',{
	template:"#add-modal-template",
	data:function(){
		return {
			form:{
				add:{

				}
			}
		};
	},
	props:{
		id:{
			type:String,
			required:true
		},
		show:{
			type:Boolean,
			required:true,
			twoWay:true,
			default:false
		},
		getAllContacts:{
			type:Function,
			required:true
		}
	},
	watch:{

	},
	computed:{

	},
	methods:{
		addContact:function(){
			var p = API.saveContact(this.form.add);

			p.then(function(data){
				$('#'+this.id).modal('hide');
				this.form= {}
				this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));
		}
	}
});

Vue.component('edit-modal',{
	template:"#edit-modal-template",
	data:function(){

	},
	props:{
		id:{
			type:String,
			required:true
		},
		name:{
			type:String,
			required:true
		},
		show:{
			type:Boolean,
			required:true,
			twoWay:true,
			default:false
		},
		getAllContacts:{
			type:Function,
			required:true
		},
		form:{
			type:Object,
			reqired:true
		}
	},

	watch:{

	},
	computed:{

	},
	methods:{
		saveEdit:function(){
			var p = API.editContact(this.form.edit);

			p.then(function(data){
				if(data){
					$('#'+this.id).modal('hide');
					this.getAllContacts();
				}
				
				//this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));
		}
	}
});