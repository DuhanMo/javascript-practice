// function delayP(sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('this is delayP function :)');
//         }, sec*1000)
//     });
// }

// // delayP(2)
// //     .then(console.log);


// async function asyncFunc() {
//     const result = await delayP(2);
//     return result;
// }

// console.log("1");
// asyncFunc().then(console.log);
// console.log("2");
// console.log("3");
// console.log("4");

// 3. useful Promise APIs

function delay(sec) {
    return new Promise(resolve=>setTimeout(resolve, sec*1000));
}

async function getApple() {
    await delay(2);
    return '사과';
}

async function getBanana() {
    await delay(2);
    return '바나나';
}

// function pickFruit() {
//     return getApple()
//         .then(apple => {
//             return getBanana()
//                 .then(banana => `${apple} + ${banana}`);
//         });
// }

async function pickFruit() {
    // await 두번해서 총 4초를 기다린다. (비효율)

    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

async function pickFruit() {
// 사과를 받아오는것과 바나나를 받아오는것 병렬해도됨 
// but this code dirty
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}


// 3. userful APIs 
function pickAllFruits() {
    return Promise
    .all([getApple(), getBanana()]
    .then(fruits => fruits.join(' + ')));
}
// pickFruit().then(console.log);
pickAllFruits().then(console.log);