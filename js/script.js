const input = document.querySelector('.input')
const amount = document.querySelector('.counter')
let maxLength = input.getAttribute('maxlength')


input.addEventListener('keyup',(event)=>{
    amount.innerHTML = maxLength - input.value.length

    









})