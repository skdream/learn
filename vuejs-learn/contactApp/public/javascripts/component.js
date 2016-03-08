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
			required:true,
			twoWay:true
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
		form:{
			type:Object,
			required:true,
			twoWay:true
		},
		addContact:{
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
			this.addContact();
		}
	}
});