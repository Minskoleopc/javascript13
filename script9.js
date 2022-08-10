

// conditional ---> single entity ------> output

/// numberOfTicket > 0 && numberOfTicket <= 5 ===> 10 %
/// numberOfTicket > 5 && numberOfTicket <= 10 ===> 20 %
//  numberOfTicket > 10 ===> 30%

// conditional statement


// if(condition){  // boolean true or false

//     // statement 1
//     // statement 2
// }
// else {
//     // statment
// }

// all if 
let numberOfTicket = 5

// if(numberOfTicket > 0 && numberOfTicket <= 5){
//     console.log('10 % discount')
// }
// if(numberOfTicket > 5 && numberOfTicket <= 10){
//     console.log("20 % discount")
// }
// if(numberOfTicket > 10){
//     console.log("30 % discount")
// }

// program 2
numberOfTicket = 8
if (numberOfTicket > 0 && numberOfTicket <= 5) {
    console.log('10 % discount')
}
else if (numberOfTicket > 5 && numberOfTicket <= 10) {
    console.log("20 % discount")
}
else if (numberOfTicket > 10) {
    console.log("30 % discount")
}
else {
    console.log('please provide correct input')
}

// program 3


// Truthy values  --

// Falsy values  - undefined , null , 0 , NaN , false , 8 !== 8 ,""

// if(3>2){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(0){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

let d
//console.log(d)
if (d) {
    console.log('hello')
}
else {
    console.log('bye')
}

console.log(undefined + undefined)

if (NaN) {
    console.log("hello")
}
else {
    console.log('bye')
}

if (4 !== 4) {
    console.log('hello')
}
else {
    console.log("bye")
}

if (null) {
    console.log('hello')
}
else {
    console.log("bye")
}
if ("") {
    console.log('hello')
}
else {
    console.log("bye")
}


// Truthy values  -- 8 , -4 , "a" , "dd" ,"&" , 9 == 9 , true


console.log('Truthy values -------------')

if (3) {
    console.log('hello')
}
else {
    console.log("bye")
}

if (-3) {
    console.log('hello')
}
else {
    console.log("bye")
}

if (3 == 3) {
    console.log('hello')
}
else {
    console.log("bye")
}


if ('A') {
    console.log('hello')
}
else {
    console.log("bye")
}

if ('chinmay') {
    console.log('hello')
}
else {
    console.log("bye")
}

if (true) {
    console.log('hello')
}
else {
    console.log("bye")
}

if ('@') {
    console.log('hello')
}
else {
    console.log("bye")
}
// switch operator


let city = "kanpur"
// switch (city) {
//     case 'pune':
//         console.log('MH')
//     case 'indore':
//         console.log('MP')
//     case 'lucknow':
//         console.log('UP')
//     default:
//         console.log('Incorrect city name')
// }

// switch (city) {
//     case 'pune':
//         console.log('MH')
//         break
//     case 'indore':
//         console.log('MP')
//         break
//     case 'lucknow':
//         console.log('UP')
//         break
//     default:
//         console.log('Incorrect city name')
// }


switch (city) {
    case 'pune':
    case 'nagpur':    
        console.log('MH')
        break
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break
    case 'lucknow':
    case 'kanpur':
        console.log('UP')
        break
    default:
        console.log('Incorrect city name')
}

// Ternary operator


let a = 100
let b = 55

// if(a > b){
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }


// a > b ? console.log('a is greater'):console.log('b is greater')
// let age = 19
// let q1 = age > 18 ? "can drive":"cannot drive"
// console.log(q1)


//  9:30:am





