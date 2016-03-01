Vue.component('modal',{
		template:'#modal-template',
		props:{
			show:{
				type:Boolean,
				required:true,
				twoWay:true
			},
			closable:{
				type:Boolean,
				required:true,
				twoWay:true,
				default:true
			}
		},
		watch:{
			show:function(){

			}
		},
		methods:{
			close:function(){
				this.show = false;
			}
		}
	})

	Vue.component('confirm-modal',{
		template:"#confirm-modal-template",
		props:{
			show:{
				type:Boolean,
				required:true,
				twoWay:true
			},
			onconfirm:{
				type:Function,
				required:true,
				twoWay:false
			}
		},
		methods:{
			confirm:function(){
				this.show = !this.onconfirm();
			},
			close:function(){
				this.show = false;
			}
		}
	})
