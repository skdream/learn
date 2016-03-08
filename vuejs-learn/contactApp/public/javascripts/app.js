var app = new Vue({
	el:'#app',
	data:{
		isConfirmModal:false,
		confirmId:"modal-contactDelete",
		viewId:"modal-view",
		addId:"modal-add",
		name:'',
		phone:'',
		email:'',
		qq:'',
		remark:'',
		contacts:[],
		form:{
			edit:{
			},
			add:{

			}
		},
		curContact:{name:'44'},
		searchKey:'',
		sortKey:'_id',
		order:-1,
		delId :'',

		allheaders : ["姓名", "手机", "邮箱", "QQ","备注"]
	},
	compiled:function(){
		//this.getAllContacts();

		$('#'+this.addId).modal({
			show:false
		});

		$('#'+this.addId).on('show.bs.modal', function () {
			this.clearHistory();
		}.bind(this));
	},
	beforeCompile:function(){
		this.getAllContacts();
	},
	methods:{
		clearHistory:function(){

			for (key in this.form.add){
				this.form.add[key] = '';
			}
			// this.name='';
			// this.phone='';
			// this.email='';
			// this.qq='';
			// this.remark='';
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

			this.resetCurContact(id);
			$('#modal-view').modal('show');

		},
		resetCurContact:function(id){
			this.contacts.forEach(function(contact){
				if(contact._id == id){

					this.curContact = contact;
					// this.curContact['name'] = contact.name;
					this.curContact['id'] = contact._id;
				}
			}.bind(this))
		},
		showDelModal:function(id){

			this.resetCurContact(id);
			this.isConfirmModal = true;
			$('#modal-contactDelete').modal('show');
			console.log(this.curContact);

			//curContact.id = id;
		},
		deleteContact:function(){

			
			var p =API.delContact(this.curContact.id);

			p.then(function(data){
				$('#modal-contactDelete').modal('hide');
				this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			});
			return true;
		},
		edit:function(id){

			this.resetCurContact(id);

			this.form.edit = this.curContact;


			$('#modal-edit').modal('show');
		},
		addContact:function(el){

			var p = API.saveContact(this.form.add);

			p.then(function(data){
				$('#'+el).modal('hide');
				this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));
		},
		editContact:function(el){

			var p = API.editContact(this.form.edit);

			p.then(function(data){
				$('#'+el).modal('hide');
				//this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));

		}
	}
})