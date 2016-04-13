
 import index from './App.vue'
 import hotTopic from "./views/hotTopic.vue"

export default function(router){

	router.map({
		'/index':{
			//name:'index',
			component:index
		},
	    '/hot':{     //热门话题
	        name:'hot',
	        component:hotTopic
	    }
	})

}