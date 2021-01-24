'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 마지막 인덱스 찾기 

console.clear();
// 3. Looping over an array
// print fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// fruits.forEach(function (fruit, index){
//     console.log(fruit, index);
// });
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('딸기', '복숭아');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note !! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('딸기', '복숭아', '라임');
console.log(fruits);
// fruits.splice(1, 3);
// console.log(fruits);
fruits.splice(1, 2, '인덱스1자리', '인덱스2자리', '인덱스3자리');
console.log(fruits);

// combine two arrays
const fruits2 = ['모과', '용두'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('딸기')); // 없으면 -1 나옴
console.log(fruits.includes('사과'));

// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')); // indexOf 는 처음만난 녀석을 뽑아냄
console.log(fruits.lastIndexOf('사과')); // lastIndexOf 는 뒤에서부터 시작해 처음만난 녀석을 뽑아냄
fruits.splice(0, 0, '들어감?');
console.log(fruits);

console.log(fruits.toLocaleString());
console.log(fruits.push('푸쉬리턴값은?')); // 

console.log(fruits.join('&'));
console.log(fruits);
console.log(fruits.slice(0, 2));
console.log(fruits);
console.clear();
const fruitsNew = [1, 2, 3];
// fruitsNew.splice(1,0,'NEW인덱스0', 'NEW인덱스1','NEW인덱스2');
console.log(fruitsNew);
console.log(fruitsNew.lastIndexOf('인덱스1값'));
console.clear();
const isNumber = (element) => typeof element === 'number';
console.log(fruitsNew.every(isNumber));

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

array.forEach((value, index) => {
    value += 10;
    console.log(value, index);
});
