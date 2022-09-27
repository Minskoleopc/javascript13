let headTwo = document.querySelector('h2')
let headOne = document.querySelector('h1')
let para = document.querySelector('p')
let linkA = document.querySelector('a')
let headThree =  document.querySelector('h3')
let headFour = document.querySelector('h4')

console.log(headTwo.style.color)
console.log(headTwo.style.backgroundColor)
console.log(headOne.style.color)
console.log(headOne.style.backgroundColor)

let a = getComputedStyle(headOne) // get css values from style.css
let a1 = document.querySelector('img')
let a2 = document.querySelector('input')

console.log(a1.alt)
console.log(a1.src)
console.log(a1.className)

console.log(a1.getAttribute('nl'));
a1.setAttribute('i','14');

console.log(linkA.getAttribute('href'))
console.log(linkA.href)
console.log(headThree.dataset.id)

headFour.classList.add('one','two','three')
headFour.classList.remove('two','three')
headFour.classList.toggle('two')
console.log(headFour.classList.contains('two'))
console.log(headFour.className) // retrive

/******************************************************************************/






