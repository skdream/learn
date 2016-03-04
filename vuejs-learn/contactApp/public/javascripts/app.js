var app = new Vue({
	el:'#app',
	data:{
		name:'',
		phone:'',
		email:'',
		qq:'',
		remark:'',
		contacts:[],
		searchKey:'',
		sortKey:'_id',
		order:-1,
		delId :'',
		curUser:{name:''}
	},
	created:function(){
		//this.getAllContacts();

		$('#modal-id').modal({
			show:false
		});

		$('#modal-id').on('show.bs.modal', function () {
			this.clearHistory();
		}.bind(this));
	},
	beforeCompile:function(){
		this.getAllContacts();
	},
	methods:{
		clearHistory:function(){
			this.name='';
			this.phone='';
			this.email='';
			this.qq='';
			this.remark='';
		},
		getAllContacts:function(){
			var p = API.getAllContacts();

			p.then(function(data){
				this.contacts = data;
			}.bind(this))
		},
		sort:function(key){
			this.sortKey = key;
			this.order = this.order*-1
		},
		view:function(id){
			console.log(id);
		},

		showDelModal:function(id){
			
			this.contacts.forEach(function(contact){
				if(contact._id == id){
					this.curUser['name'] = contact.name;
					this.curUser['id'] = contact._id;
				}
			}.bind(this))
			$('#modal-contactDelete').modal('show');
			console.log(this.curUser);

			//curUser.id = id;
		},
		deleteContact:function(){
			var p =API.delContact(this.curUser.id);

			p.then(function(data){
				$('#modal-contactDelete').modal('hide');
				this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			});
		},
		edit:function(){

		},
		saveContact:function(){
			var data = {
				name:this.name,
				phone:this.phone,
				email:this.email,
				qq:this.qq,
				remark:this.remark,
			}
			var p = API.saveContact(data);

			p.then(function(data){
				$('#modal-id').modal('hide');
				this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));
		}
	}
})