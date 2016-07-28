import 'babel-polyfill';
import {cats} from './cats';
import $ from 'jquery';

console.log(cats);

$('<h1>Cats</h1>').appendTo('body');

const ul=$('<ul></ul>').appendTo('body');

for (const cat of cats){
	$('<li></li>').text(cat).appendTo('ul');
}



function f1(){
	let n = 5;
	if(true){
		let n = 10;
	}
	console.log(n);
}


function timeout(ms){
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	})
}

timeout(100).then((value) => {
	console.log(value);
})



let promise = new Promise(function(resolve, reject){
	console.log('Promise');
	resolve();
});
promise.then(function(){
	console.log('Resolved');
});
console.log('Hi!');


function loadImageAsync(url){
	return new Promise(function(resolve, reject){
		var image = new Image();

		image.onload = function() {
			resolve(image);
		};

		image.onerror = function() {
			reject(new Error('Could not load image at ' + url));
		};
		image.src = url;
	})
}

loadImageAsync('http://phantom.snail.com/static/web201605/images/char-1.png');

var p1 = new Promise(function (resolve, reject){
	setTimeout(() => reject(new Error('fail')), 3000);
})

var p2 = new Promise(function(resolve, reject){
	setTimeout( ()=> resolve(p1),1000)
})

p2.then(result => console.log(result), result => console.log('fail'));

p2.catch(error => console.log(error))



/*

cats = require('./cats.js');

console.log(cats);

*/