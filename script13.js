let x  = 10
let y = 5

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

let s = 40
let t = 20

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(23,10)
Calculator(200,10)

// function without parameter and without return 

function addA(){
    console.log(7+8)
}
addA()
addA()
addA()
addA()

// function with parameter and without return 

function addB(x,y){
    console.log(x+y)
}
addB(12,6)
addB(12,4)

// function with parameter and with return type


function addC(x,y){
    return x + y
}
let tt = addC(3,2)
console.log(tt)

// function  declartion 
function sub(e,t){
    console.log(e-t) // 50
    return e-t
}
let a1 = sub(100,50)
console.log(a1) // 50

// function expression 

let subB = function(e,t){
    console.log(e-t)
    return e- t
}
let a2 = subB(120,60)
console.log(a2)

// arrow function 
let subC = (e,t) =>{
    console.log(e-t)
    return e- t
}
let a3 = subC(120,60)
console.log(a3)

// 

// string as a parameter to function  and string as a return type

function Greeting(a){
    console.log(a + " Chinmay")
    return a + " Chinmay"
}
let z1 = Greeting("Good morning")
console.log(z1)

// number as a parameter to funnction  and number as return type from function
function mul(x,y){
    return x * y
}
let z2 = mul(12,3)
console.log(z2)
console.log(typeof z2)

// array as a parameter to function and array as return type from function 

let numbers = [11,22,33,44,11,33]
function addUp(arr){
    // let  arr = [11,22,33,44,11,33]
    //  sum of all elements
    let t = arr.reduce(function(acc,el){
        return acc + el
    },0)
    console.log(t)

    // return last 3 element
    return arr.slice(-3)
}
let z3 = addUp(numbers)
console.log(z3)

// object as a parameter and object as a return type
let info = {
    firstName:"amol",
    lastName:"rao",
    city:"nagpur"
}

// program 4
function updatCity(obj){
    // let obj = {
    //     firstName:"amol",
    //     lastName:"rao",
    //     city:"nagpur"
    
    // }

    obj.city = "pune"
    return obj
}

let z4 = updatCity(info)
console.log(z4)

// function as a parameter to another function

// let x1 = 10 
// console.log(x1)

// let addV = function(x,y){
//     console.log(x+y)
// }
// console.log(addV) // printing function definition
// addV(12,13) // calling the function




let subtraction = function(x,y){
    return x -y
}

// console.log(subtraction) // printing the definition
// subtraction(12,3) // call

function Sub(a,b,fn){
     //let a =11
     //let b = 5 
    // let fn = function(x,y){
    //     return x -y
    // }
    let s1 = fn(a,b)
    return  s1
}
let s2 = Sub(11,5,subtraction)
console.log(s2)



// function as a return type from another function
// function additionD(){
//     return function (){
//         console.log('hello')
//     }

// }
// let tty = additionD()
// // let tty = function (){
// //     console.log('hello')
// // }
// tty()


function additionE(){

    let a = function(){
        console.log("hello")
    }

    return a

}
let tt2 = additionE()
console.log(tt2)
tt2()


// let tt2 = unction(){
//     console.log("hello")
// }

function additionE(){
    return  function(){
        console.log("hello")
    }

}
let tt3 = additionE()
console.log(tt3)
tt3()


let  x11 = 10
console.log(x11)  // 10

let x33 = x11
console.log(x33) // 10

x33 = 800
console.log(x11) // 10
console.log(x33) // 800

let arr2 = [11,22,33,44]
console.log(arr2)

let arr3 = arr2
console.log(arr3)

arr3[2] = 990
console.log(arr3) //[11,22,990,44]
console.log(arr2) //[11,22,33,44]