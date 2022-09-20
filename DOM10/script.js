// // element create
// // element update 
// // element delete 
// // element retrive

// // javascript 
// // element attrtibute -- retrive
// // element attribute -- add
// // element attribute -- update 
// // element attribute --- delete


// console.log(document)
// console.log(document.head) 
// console.log(document.body)
// console.log(document.documentElement)

// // <h1 id ="one" class = "two" name = "name">Heading One</h1>

// let tagName = document.querySelector('h1')
// let idValue = document.querySelector('#one')
// let byClass = document.querySelector('.two')
// let attribute = document.querySelector('h1[name ="name"]')
// let liList = document.querySelectorAll('li')
// console.log(liList)
// console.log(tagName)
// console.log(idValue)
// console.log(byClass)
// console.log(attribute)
// // selecting
// console.log('------------------------------------')


// program1
// let q1 = document.getElementById('one')
// console.log(q1)

// let q2 = document.getElementsByClassName('two')
// let q3 = document.getElementsByClassName('fruits')
// let q4 = document.getElementsByTagName('li')
// console.log(q2)
// console.log(q3)
// console.log(q4)

// querySelectorAll --- nodelist
// getElementsByClassName --- collection


// program2
// Difference between nodeList and htmlCollection
let q1 = document.querySelectorAll('li') // nodelist
console.log(q1.length)
let q2 = document.getElementsByTagName('li') // htmlcollection
console.log(q2.length)


// program 3
// create and insert
let co = document.querySelector('#container')
let newElement = document.createElement('li') // <li></li>
newElement.textContent ="chikoo" // <li>chikoo</li>
co.appendChild(newElement)

// adding class
newElement.className = "red"
console.log(newElement.className)
newElement.classList = ["red blue yellow"]
console.log(newElement.classList)
newElement.classList.add('purple')
newElement.classList.remove('yellow')
newElement.classList.toggle('yellow')
newElement.classList.forEach(function(el){
    console.log(el)
})
console.log(newElement)
/****************************************/

//<h1 class = "blue green yellow purple"> heading</h2>
document.querySelector('.green')
document.querySelector("h1[class = `blue green yellow purple`]")


