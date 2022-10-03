
// // Type - properties and methods
// // Type ---- Object ---properties and method


// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:23,
//     display:function(){
//         console.log(this.firstName,this.lastName)
//     }
// }
// chinmay.display()


// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     rollNo:34,
//     display:function(){
//         console.log(this.firstName,this.lastName)
//     }
// }

// amol.display()

// program2
// Template ---- object 
// // 1) function Constructor 
// function Person(fn,ln,ag,rn){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag
//     this.rollNo = rn
//     this.display = function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// let amol2 = new Person("amol2","rao2",12,33)
// let chinmay2 = new Person("chinmay2","deshpande2",33,44)
// let poorva2 = new Person("poorva","vyas",32,44)
// console.log(amol2)
// chinmay2.display()
// poorva2.city = "ujjain"
// console.log(poorva2)
// console.log(chinmay2)

// function contrcutor example 2

// let Vehicle  = function(color,type){
//     this.color = color
//     this.type = type
//     this.displayC = function(){
//         console.log(this.color)
//     }
// }
// let audi = new Vehicle("red","SUV")

// 2) Es6 class

// class Person {
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln 
//         this.age = ag
//         this.rollNo = rn
//         this.display  = function(){
//             console.log(this.firstName + this.lastName)
//         }
//     }
// }

// let amol3 = new Person("amol","rao",34,55)
// let chinmay3 = new Person("amol","rao",34,55)
// console.log(amol3)
// console.log(chinmay3)


// same as above
// let Person2  = class {
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln 
//         this.age = ag
//         this.rollNo = rn
//         this.display  = function(){
//             console.log(this.firstName + this.lastName)
//         }
//     }

// }

// let amol4 = new Person2("amol","rao",34,55)
// let chinmay4 = new Person2("amol","rao",34,55)
// console.log(amol4)
// console.log(chinmay4)




// // 3) Object.Create()
// let obj = {
//     init:function(fn,ln,rollNo ,age){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo = rollNo
//         this.age = age
//         this.display = function(){
//             console.log(this.firstName+ this.lastName)
//         }
//     }
// }

// let amol6 = Object.create(obj)
// amol6.init("amol6","rao6",34,56)
// console.log(amol6)

// class Person {
//     fullName = "chinmay";

//     display(){
//         console.log("hello")
//     }

// }

// let amol  = new Person()
// amol.display()









// Incorrect way
// let amol5 = Object.create({})
// amol5.firstName = "amol5"
// amol5.lastName = "rao5"
// amol5.rollNo = 44
// amol5.age = 34
// amol5.display = function(){
//     console.log(amol5.firstName + amol5.lastName)
// }
// console.log(amol5)













// // retrive 
//     console.log(amol.firstName)
//     console.log(amol['firstName'])
// // update 
//     amol.firstName = "ankit"
//     amol['firstName'] = "ninad"
// // add
//     amol.city = "nagpur"
//     amol['lang'] = "hindi" 
// // delete 
//     delete amol.age
//     delete amol['lang']
// console.log(chinmay)
// console.log(amol)