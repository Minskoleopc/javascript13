// prgram 1
// function Vehicle(color, type) {
//     this.color = color
//     this.type = type
//     // this.display = function () {
//     //     console.log(this.color)
//     // }
// }

// let audi = new Vehicle("red", "SUV")
// let bmw = new Vehicle("blue", "sedane")

// console.log(bmw)
// console.log(audi)
// console.log(Vehicle.prototype === audi.__proto__)
// Vehicle.prototype.display = function(){
//     console.log(this.color)
// }
// audi.display()
// bmw.display()

// Es6 
// program2
// class Vehicle {
//     color = "red"
//     type = "sedane"
//     display(){
//         console.log(this.color)
//     }

// }
// let audi = new Vehicle()
// console.log(audi)
// audi.color = "blue"
// audi.type = "SUV"
// let bmw = new Vehicle()
// console.log(bmw)
// console.log(audi)


// program 3

// Method get attach with every problem
// class Vehicle {
//     constructor(type,color){
//         this.type = type
//         this.color = color
//         this.display = function(){
//             console.log(this.color)
//         }
//     }
// }
// let audi = new Vehicle("SUV","red")
// let bmw = new Vehicle("Sedane","blue")

// console.log(audi)
// console.log(bmw)

// audi.display()
// bmw.display()

// program 4
// class Vehicle {

//     constructor(type,color){
//         this.type = type
//         this.color = color
//     }

//     display(){
//         console.log(this.color)
//     }
// }
// let audi = new Vehicle("SUV","red")
// let bmw = new Vehicle("Sedane","blue")

// console.log(audi)
// console.log(bmw)

// audi.display()
// bmw.display()

// // setting the value using method
// class Person {

//     setFullName(fn){
//         this.fullName = fn
//     }
//     getFullName(){
//         return this.fullName
//     }
//     setAge(age){
//         this.age = age
//     }
//     getAge(){
//         return this.age
//     }
// }
// let ram = new Person()
// console.log(ram)
// ram.setAge(12)
// ram.setFullName("chinmay deshpande")
// console.log(ram)
// console.log(ram.getAge())
// console.log(ram.getFullName())

// program5
class Person{
    set fn(word){
        this.fullName = word
    }
    get fn(){
        return this.fullName
    }
    set ag(a){
        this.age = a
    }
    get ag(){
        return this.age
    }
}
let ram = new Person()
console.log(ram)
ram.fn = "ram dani"

console.log(ram)
console.log(ram.fn)
//console.log(ram.fullName)

ram.ag = 23
console.log(ram)
console.log(ram.ag)

















// setting the value using get and set method
