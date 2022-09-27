// retrive 
// attribute and style

// setTimeOut
// IIFE
// setTimeout(function(){
//     console.log("hello")
// },2000)

// mouseover()

let q1 = document.querySelector('h1')
let alertButton = document.querySelector('#alert')
let confirmButton = document.querySelector('#confirm')
let promptButton = document.querySelector('#prompt')
let realoadButton = document.querySelector('#reload')
let headoOne = document.querySelector('#one')
let Sview = document.querySelector('#view')




q1.addEventListener('mouseover',function(){
    q1.style.color = "red";
})

// mouseout()
q1.addEventListener('mouseout',function(){
    q1.style.color = "black";
})
// dbClick()
q1.addEventListener('dblclick',function(){
    q1.style.background = "green"
})
// click()
q1.addEventListener('click',function(){
    q1.style.background = "purple"
})
// reload()
console.log(window)

///////////////////////////////////////////////////
alertButton.addEventListener('click',function(){
    alert('hello')
})

////////////////////////////////////////////////////

confirmButton.addEventListener('click',function(){
    confirm('Do you agree to terms and condition?')
})

//////////////////////////////////////////////////

promptButton.addEventListener('click',function(){
    prompt('please Guess the number between 1 to 10')
})
///////////////////////////////////////////////
realoadButton.addEventListener('click',function(){
    location.reload()
})

Sview.addEventListener('click',function(){
    headOne.scrollIntoView()
})

