document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value
    const b = document.querySelector('#secont').value
    const r = document.querySelector('#result')


    if (a) {
        if (b) {
            r.textContent = a * b
        } else {
            r.textContent = '두 번째 값 입력해주세요'
        }
    } else {
        r.textContent = '첫 번째 값 입력해'
    }
});