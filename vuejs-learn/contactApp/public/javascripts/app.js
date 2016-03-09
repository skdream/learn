var app = new Vue({
	el:'#app',
	data:{
		isConfirmModal:false,
		confirmId:"modal-contactDelete",
		viewId:"modal-view",
		addId:"modal-add",
		editId:'modal-edit',
		name:'',
		phone:'',
		email:'',
		qq:'',
		remark:'',
		contacts:[],
		form:{
			edit:{
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

	},
	beforeCompile:function(){
		this.getAllContacts();
	},
	methods:{
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

					//this.curContact = contact;
					 this.curContact['name'] = contact.name;
					 this.curContact['email'] = contact.email;
					 this.curContact['qq'] = contact.qq;
					 this.curContact['phone'] = contact.phone;
					 this.curContact['remark'] = contact.remark;
					this.curContact['id'] = contact._id;
					this.name = contact.name;
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
			console.log(id);
			// var contact = this.curContact;
			// for(key in contact){
			// 	this.form.edit[key] = contact[key];
			// }

			this.form.edit = this.curContact;


			$('#'+this.editId).modal('show');
		},
/*		addContact:function(el){

			var p = API.saveContact(this.form.add);

			p.then(function(data){
				$('#'+this.addId).modal('hide');
				this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));
		},*/
/*		editContact:function(el){

			var p = API.editContact(this.form.edit);

			p.then(function(data){
				if(data){
					$('#'+this.editId).modal('hide');
					this.getAllContacts();
				}
				
				//this.getAllContacts();
			}.bind(this));

			p.fail(function(err){
				console.log(err);
			}.bind(this));

		}*/
	}
})