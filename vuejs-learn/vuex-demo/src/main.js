import Vue from 'vue'
import App from './App'



import { sync } from 'vuex-router-sync'

import store from './vuex/store'

import routerMap from './router'


var VueRouter = require('vue-router')
Vue.use(VueRouter);

var router = new VueRouter({
	//hashbang: true //hash路由
})

sync(store, router)


routerMap(router);




//注册路由切换后
router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
  
})

router.start(App,"#app")


// /* eslint-disable no-new */
// var vm = new Vue({
//   el: 'body',
//   components: { App }
// })
