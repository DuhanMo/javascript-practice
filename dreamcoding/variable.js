// Whole-script strict mode systax
// JavaScript is very flexible
// flexible === dangerous
// 'use stric';

// 1.Use strict
// added in ES 5
// use this for Vanila Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
let name = 'duhan';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (선언된 위치가 어디든지 가장위로 끌어올림)
// has no block scope
console.log(age);
age = 4
console.log(age);
var age;

// 3.Constants
// 한번 선언되면 절대 값이 바뀌지 않음
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

const duhan = {name: 'duhan', age: 27}
console.log(duhan);
console.log(object);