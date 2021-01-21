'use strict'
// oObjects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'eliie', age: 4 };
print(ellie)

// with JavaScript magic(dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);
//  ------- above Syntax is hard to maintenance

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('duhan', 27);

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
console.log(person4);

//  5. in operator: property existence check(key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 , ...])
const user = { name: 'ellie', age: 20};
const user2 = user;
user2.name = 'duhan';
// shallow copy 얕은 복사 : 주소값을 복사하기때문에 user2의 내용을 변경하면 user의 내용도 변한다
console.log(user);
console.log(user2);

// old way 깊은 복사 내용을 일일이 카피하기때문에 내용변경해도 다른 오브젝트에 영향을 끼치지 않음
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
user3.name = 'user3'
console.log(user3);

// const user4 = {}
// Object.assign(user4, user);
// user4.name = 'user4';
// console.log(user4);

const user4 = Object.assign({}, user);
user4.name = 'user4';
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
// 뒤에 할당한 객체로 덮어씌워짐
console.log(mixed);














