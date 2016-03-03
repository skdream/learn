var app = new Vue({
	el:'#app',
	data:{
		contacts:[]
	},
	created:function(){
		this.getAllContacts();
	},
	beforeCompile:function(){
		//this.getAllContacts();
	},
	methods:{
		getAllContacts:function(){
			var p = API.getAllContacts();

			p.then(function(data){
				this.contacts = data;
			}.bind(this))
		},
		view:function(id){
			console.log(id);
		},
		del:function(){

		},
		edit:function(){

		}
	}
})