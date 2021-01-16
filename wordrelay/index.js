const btn = document.querySelector('#button');
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
btn.addEventListener('click', () => {
    let wordTag = document.querySelector('#word');
    let word = wordTag.textContent;
    // .  << 은  '~의' 를 의미한다.
    let inputTag = document.querySelector('#input');
    let input = inputTag.value;
    let errorTag = document.querySelector('#error')
    
    if (word[word.length - 1] === input[0]) {
        errorTag.textContent = '';
        wordTag.textContent = input
        inputTag.value = null
        inputTag.focus()
    } else {
        errorTag.textContent = '땡';
        document.querySelector('#input').value = null
        document.querySelector('#input').focus()
    } 
});
