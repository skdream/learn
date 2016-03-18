import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import hotTopic from './views/hotTopic.vue'
/* eslint-disable no-new */

/*
new Vue({
  el: 'body',
  components: { App}
})

*/

Vue.use(VueRouter);

// let app = Vue.extend({});


var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});


router.map({
	'/':{
		name:'index',
		component:App
	},
    '/hot':{     //热门话题
        name:'hot',
        component:hotTopic
    }
})

router.start(hotTopic, "#app");