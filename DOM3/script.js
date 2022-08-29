

//<h1 id = "one" class = "two"  name = "three">Heading</h1>
// byTagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// className
// let byClassName = document.querySelector('.two')
// console.log(byClassName)
// // id 
// let byId =document.querySelector('#one')
// console.log(byId)
// // commonF - tagName[attribute = "value"]
// let cF = document.querySelector('h1[name ="three"]')
// console.log(cF)


// program 1

byTagName.addEventListener('click',function(){
    byTagName.textContent = "poorva"
    byTagName.style.color = "red"
    byTagName.style.background = "yellow"
})


// let info = {
//     family:{
//         mother:"kanchan",
//         shirish:"shirish"
//     }
// }

// info.family.mother = "kanchan s"















// explaination
// console.log(byTagName.textContent)
// byTagName.textContent = "poorva"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(info.firstName)
// info.firstName = "gauri"