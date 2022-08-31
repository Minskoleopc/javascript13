//<h1 class = "one" id ="two" name ="nm">Heading1</h1>
// id  
let byId = document.querySelector('#two')
// className 
let byClassName = document.querySelector('.one')
// tagName 
let headOne = document.querySelector('h1')
// commonF  // tagName[attibute="value"]
let comF = document.querySelector('h1[name ="nm"]')
console.log(byId)
console.log(byClassName)
console.log(headOne)
console.log(comF)

//console.log(byId.textContent)
//byId.textContent = "Poorva"

//program 1
// byId.addEventListener('click',function(){
//     byId.textContent = "Poorva"
// })


// program2

let headTwo = document.querySelector('h2')
console.log(headTwo)
headTwo.addEventListener('click',function(){
    headTwo.style.color = "green"
    headTwo.style.background = "yellow"
})


// program 3
let headThree = document.querySelector('h3')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    headThree.textContent = "chinmay"
    headThree.style.color = "purple"
    headThree.style.background = "black"
})


// let info = {
//     parent:{
//         mother:"kanchan"
//     }
// }

// info.parent.mother = "kanchan s"

// // array
// let aa = [22,33]
// aa.findIndex()
// aa.length
// // string
// let c = "chinmay"
// c.toUpperCase()
// c.length
// // htmlElement
// let htmlE = document.querySelector('h1')
// htmlE.textContent
// htmlE.addEventListener


// Javascript -- Object -- property and method
// method action and return type