
console.log(document)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

// retrive or select 
// <p id = "one" class = "two" name = "nm">Para</p>
console.log(document.querySelector('#one'))
console.log(document.querySelector('.two'))
console.log(document.querySelector('p'))
console.log(document.querySelector('p[name="nm"]'))

console.log('-----------------------------------')
// id 
let elemId = document.getElementById('one')
console.log(elemId)
let liList = document.querySelectorAll('li') // nodeList
let liListHm = document.getElementsByTagName('li')
let EclasName = document.getElementsByClassName('vegetable')
console.log(liList)
console.log(liListHm)
console.log(EclasName)

// creating and updating the element 
let headingTwo = document.querySelector('h2')
console.log(headingTwo)
headingTwo.classList.add('four')
headingTwo.textContent = "headingTwo"

let para = document.createElement('p')
//console.log(para) // <p></p>
para.textContent = "i am moving"
console.log(para)
// headingTwo.prepend(para)
// headingTwo.append(para)
//headingTwo.before(para)
//headingTwo.after(para)
// deleting the element at the run tym 
document.querySelector('#del').addEventListener('click',function(){
    //para.remove()
    let parentElement = para.parentElement
    parentElement.removeChild(para)
})

// Style Attribute
// 2 pm ---- Oops




