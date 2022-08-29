

let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')

console.log(headOne)
console.log(buttonA)
console.log(inputText)

buttonA.addEventListener('click',function(){
    let colorText = inputText.value
    headOne.style.color = colorText
    inputText.value = ""
})