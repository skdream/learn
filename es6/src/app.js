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












/*

cats = require('./cats.js');

console.log(cats);

*/