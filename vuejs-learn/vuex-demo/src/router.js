import Hello from './view/Hello'
import add from './view/add'

export default function(router){

	router.map({
		'/hello':{
			component:Hello
		},
		'/add':{
			component:add
		}
	})
}


