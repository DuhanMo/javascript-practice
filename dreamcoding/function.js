/**
 * Function
 * - fundamental building block in the program
 * - subprogram can be used multiple times
 * - performs a task or calculates a value
 */

// 1개의 함수는 한가지 기능만!!
// 변수는 명사
// 함수는 doSomething , command, verb 형태로
// function is object in JS

function printHello(){
    console.log('hello');
}

function log(message){
    console.log(message);
}

log("hello@");
log('this is log function');
log(1234)

/**
 * 2. Parameter
 * primitive parameters: passed by value
 * object parameters: passed by reference
 */

 function changeName(obj){
     obj.name = 'coder';
 }
 const ellie = {name: 'ellie'};
 changeName(ellie);
 console.log(ellie);

 /**
  * 3. Default parameters (added in ES6)
  */

  function showMessage(message, from = 'unknown') {
      console.log(`${message} by ${from}`);

  }
  showMessage('hi!~!~!');

// 4. Rest parameters (added in SE6)

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);        
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream' , 'coding', 'duhan');
console.log('-----------');
// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function anotherMessage(){
        let childMessage = 'childeVariable!!';
    }
    // console.log(childMessage);
}

printMessage();
// console.log(message);

// 6. Return a Value
function sum(a, b){
    return a+b;
}
const result = sum(1,2);
console.log(result);
console.log(`sum : ${sum(1,2)}`);

// 7. Early return, early exit
// bad: if문 안에서 로직을 많이 짜면 가독성이 떨어짐
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic..
    }
}

// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    // long upgrade logic..
}

// 8. First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 9. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
}
// named function
// better debugging in debugger's stack trace
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); 
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint');
}
const simplePrint2 = () => console.log('simplePrint () = > ');
const add = (a, b) => a + b;
simplePrint2();
console.log(add(1,2)); 

// IIFE : Immediately InVoked Function Expression
// 함수를 선언과 동시에 호출!
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    if (command === '+'){
        return a + b;
    } else if (command === '-'){
        return a - b;
    } else if (command === '/'){
        return a / b;
    } else if (command === '-'){
        return a * b;
    } else if (command === '%'){
        return a % b;
    } else return 'Enter correct command';
}

console.log(calculate('+',3,4));
console.log(calculate('%',3,4));
let star = '';
for (let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++){
        star += '*';
    }
    star += '\n';
}
console.log(star);
