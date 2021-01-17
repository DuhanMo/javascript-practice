const numberInput = document.querySelector('#input');
const clearButton = document.querySelector('#clear');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const calcurateButton= document.querySelector('#calcurate');
const resultInput = document.querySelector('#result');

let temp;
let operator;


function numberToTemp(){
    temp = numberInput.value;
    numberInput.value = null;
    numberInput.focus();
}
//clear 버튼 클릭 시 계산 초기화
clearButton.addEventListener('click', ()=> {
    temp = null;
    numberInput.value = '';
    resultInput.value = '';
    numberInput.focus();

});
// plus 버튼 클릭 시 먼저 입력해서 temp로 들어간 값과 나중에 값이 plus 되어서 input에 들어감
plusButton.addEventListener('click', () => {
    if (numberInput.value) {
        numberToTemp();
        operator = '+';
    }
});

minusButton.addEventListener('click', () => {
    if (numberInput.value) {
        numberToTemp();
        operator = '-';
    }
});
divideButton.addEventListener('click', () => {
    if (numberInput.value) {
        numberToTemp();
        operator = '/';
    }
});
multiplyButton.addEventListener('click', () => {
    if (numberInput.value) {
        numberToTemp();
        operator = '*';
    }
});
calcurateButton.addEventListener('click', () => {
    if (operator === '+') {
        resultInput.value = Number(temp) + Number(numberInput.value);
    } else if(operator === '-') {
        resultInput.value = Number(temp) - Number(numberInput.value);
    } else if(operator === '/') {
        resultInput.value = Number(temp) / Number(numberInput.value);
    } else if(operator === '*') {
        resultInput.value = Number(temp) * Number(numberInput.value);
    } 

    numberInput.value = null;
    numberInput.focus();

});