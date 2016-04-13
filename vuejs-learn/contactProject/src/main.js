import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import routerMap from './routes'

// import App from './App.vue'
import hotTopic from './views/hotTopic.vue'
/* eslint-disable no-new */

/*
new Vue({
  el: 'body',
  components: { App}
})

*/

// Vue.use(VueRouter);

// // let app = Vue.extend({});

// /*

// {
//     hashbang: true,
//     history: false,
//     saveScrollPosition: true,
//     transitionOnLoad: true
// }

// */

// var router = new VueRouter();



// router.map({
// 	'/index':{
// 		//name:'index',
// 		component:App
// 	},
//     '/hot':{     //热门话题
//         name:'hot',
//         component:hotTopic
//     }
// })

// router.start(App, "#app");


var App = Vue.extend({})

// install router
Vue.use(VueRouter)

Vue.use(vueResource);

// routing
var router = new VueRouter()

routerMap(router);
router.start(App, '#app')
