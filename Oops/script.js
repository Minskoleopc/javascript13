// type 

// boolean ----> true or false
// number  ----> 2,0,-4
// string  ----> collection of character

// type ---- properties and methods
//  values

// type (user defined data type) --- property and method 
// objects


//template -----> objects
//object literal 
//function constructor
//es6 class 
//Object create method

// template -- firstclass
// encapsulation 
// inheritance 
// polymorphism 
// abstraction


// program 1 (Object literal)
// Object ---- property - values 
// method() -----> property 
// action and return type

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    skills:["html","css","javscript"],
    display:function(){
        console.log(this.firstName +" "+ this.lastName)
    }
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:27,
    skills:["html3","css3","javscript"],
    display:function(){
        console.log(this.firstName +" "+ this.lastName)
    }
}

// template ----> function construtor
// program one
function Person(fn,ln,age,skills){
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
    this.skills = skills;
    this.display = function(){
        console.log(this.firstName + " "+ this.lastName)
    }
}
let amol2 = new Person("amol","rao",23,["html","css"])
let chinmay2 = new Person("chinmay","deshpande",32,["html5","css3"])
amol2.display()
chinmay2.display()
console.log(amol2)
console.log(chinmay2)


// program  2


// vehicle  , color, type , modelNo 
// start() , stop()
//bwm , audi

function vehicle(color,type,modelNo){
    this.color = color;
    this.type = type ;
    this.modelNo = modelNo;
    this.start = function(){
        console.log('I am starting')
    };
    this.stop = function(){
        console.log('I am stopped')
    }
}

let audi = new vehicle('red',"sedane",123)
let bmw = new vehicle('black',"SUV",456)

// ES6 class

let  PersonB = class  {
    constructor(firstName,lastName ,age ,skills){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.skills = skills
        this.display = function(){
            console.log(this.firstName + " "+ this.lastName)
        }
    }
}

// class PersonC {
//     constructor(firstName,lastName ,age ,skills){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age 
//         this.skills = skills
//         this.display = function(){
//             console.log(this.firstName + " "+ this.lastName)
//         }
//     }
// }

let amol3 = new PersonB("amol","rao",23,["html","css"])
let chinmay3 = new PersonB("chinmay","deshpande",32,["html5","css3"])

console.log(amol3)
console.log(chinmay3)
class vehicleB {
    constructor(color,type,modelNo){
        this.color = color
        this.type = type
        this.modelNo  = modelNo
        this.country = "India"
        this.start = function(){
            console.log('i am starting ')
        },
        this.stop = function(){
            console.log('i am stop ')
        }
    }
}
let audiB = new vehicleB('red',"sedane",123)
let bmwB = new vehicleB('black',"SUV",456)
console.log(audiB,bmwB)

let numbers = [2,3,4,5,6,,7,8,9]
let names = ["chinmay","shirish","ram"]
let vehicles = [
    new vehicleB('red',"sedane",123),
    new vehicleB('black',"SUV",456),
    new vehicleB('blue',"sedane",789),
    new vehicleB('purple',"SUV",99,88,11)
]
vehicles.forEach(function(el){
    for(let key in el){
        console.log(key , el[key])
    }
})


let vehiclesC = {
    vA:new vehicleB('white',"sedane",123),
    vB:new vehicleB('red',"SUV",123),
    vC:new vehicleB('blue',"SUV",123),
    vD:new vehicleB('violet',"jeep",123),
    vE:new vehicleB('purple',"sedane",123)
}
for(let values of Object.values(vehiclesC)){
    for(let key in values){
        console.log(key , values[key])
    }
}

// for(let key in vehiclesC){
//     //console.log(key,vehiclesC[key])
//     for(let key in vehiclesC[key]){
//         console.log(key, vehiclesC[key][key])
//     }  
// }

// Object create
// -------------------------------------
// firstName lastName rollNo skills
// chinmay   deshpande 34     html , css
// ----------------------------------











// console.log(chinmay)
// console.log(amol)


// template --

// Encapsulation 

// Polymorphism 

// Inheritance 

// Abstraction 

//9pm - DOM  --- Nityanad   --- 8 am support
//8 am --- DOM Nityanad    ---- 10 am
//7:30 pm Map Nityanad0     ----- 8:30 pm









