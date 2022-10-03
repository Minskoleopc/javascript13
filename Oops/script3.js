// // object literal 
// let amol = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     age: 23,
//     roll: 34,
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.display()

// // Templates 
// // function constructor

// function Person(fn, ln, rollNo, age) {
//     this.firstName = fn
//     this.lastName = ln
//     this.rollNo = rollNo
//     this.age = age
//     this.display = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol2 = new Person("amol2", "rao2", 23, 45)

// // es6 class 

// class Person2 {


//     constructor(fn, ln, age, rolNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age
//         this.rollNo = rolNo
//         this.display = function () {
//             console.log(this.firstName + this.lastName)
//         }

//     }
// }

// let amol3 = new Person2('amol3', "rao3", 23, 45)

// // Object.create 


// let obj = {
//     init: function (fn, ln, age, rolNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age
//         this.rollNo = rolNo
//         this.display = function () {
//             console.log(this.firstName + this.lastName)

//         }
//     }
// }
// let amol4 = Object.create(obj);
// amol4.init("amol4","rao4",23,455)
// console.log(amol4)

// function contructor 

// function Vehicle(color,type){
//     this.color = color
//     this.type = type 
//     // this.displayColor = function(){
//     //     console.log(this.color)
//     // }
// }

// let audi = new Vehicle('red','sedane')
// let bmw = new Vehicle('blue','SUV')
// console.log(audi)
// console.log(bmw)

// // __proto__   ====> every object has __proto__  inherits from Parent.Prototype
// console.log(audi.__proto__ === Vehicle.prototype)
// Vehicle.prototype.displayColor =function(){
//     console.log(this.color)
// }
// console.log(audi)
// console.log(bmw)

// console.log(Vehicle.prototype)
// audi.displayColor()
// bmw.displayColor()






// let audi = new Vehicle('red','sedane')
// let bmw = new Vehicle('blue','SUV')
// console.log(audi)
// console.log(bmw)

// place common things in Prototype

// every object has one  ====>  __proto__
// __proto__ ==  parent.Protoype

// console.log(audi.__proto__ === Vehicle.prototype)
// console.log(audi)

// Vehicle.prototype.display = function(){
//     console.log(this.color)
// }

// console.log(audi)
// console.log(bmw)

// audi.display()
// bmw.display()

// program

// Array.prototype.language = "pune"
// let names = ["poorva","ram","amol","sanket"]
// console.log(names)
// console.log(Array.prototype === names.__proto__)
// names.push()
// console.log(names.language)
// Array.prototype.hello = function(){
//     console.log("hello i am new method")
// }
// names.hello()

// program3

let animal = function(color,type){
    this.color = color
    this.type = type
}
animal.prototype.city = "chandrapur"
animal.prototype.displayHello = function(){
    console.log('hello')
}
let tiger = new animal("orange","danger")
console.log(tiger.city)
tiger.displayHello()
console.log(tiger.color)
console.log(tiger.type)

console.log(tiger.hasOwnProperty('color'))
console.log(tiger.hasOwnProperty('city'))

tiger.__proto__.city = "nagpur"
console.log(tiger.city)


