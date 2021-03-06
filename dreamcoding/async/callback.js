'use strict';

// JavaScript is synchronous :동기
// Execute the code block in order after hoisting
// hoisting: var, function declaration -> go top

console.log(1);
// Web API 지정한 시간이 지나면 콜백함수 호출 
setTimeout(() => console.log(2), 1000);
console.log(3);

// Synchronous callback 언제 콜백되는지 정확히 안다.
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('printImmediately "Hello~!"'));

// Asynchronous callback
function printWithDelay(print, time){
    setTimeout(print, time);
}

printWithDelay(()=>console.log("이것은 딜레이콜백 프린트야"), 3000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream')||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);



