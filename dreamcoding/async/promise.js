'use strict';

// Promise is a JavaScript object for asychrounous operation
// State: pending -> fulfiled or rejected
// Producer(promise object) vs Consumer


// 1. Producer 비동기적
// when new Promise is created, the executor runs automatically
// 최종데이터를 전달하는 resolve, 문제가 생기면  reject 콜백함수 생성 
// 네트워크나 파일을 불러오는 시간이 오래걸리는 일들은 프로미스를 써서 함.
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work(network, read files)
    console.log('doing something..');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'))
    }, 2000);
});

// 2. Counsumers: then, catch, finally
// promise 내부 resolve 를통해 전달된 값이 value를 통해 들어옴 
promise //
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

fetchNumber
 .then(num => num *2)
 .then(num => num *3)
 .then(num => {
     return new Promise((resolve, reject) => {
         setTimeout(() => resolve(num - 1), 1000);
     });
 })
 .then(num => console.log(num));