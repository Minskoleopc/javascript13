// let and const

let x = 10
x = 20
console.log(x)

// const 


const u = 100
//u = 400
console.log(u)


let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b) // remainder

//  functions 
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(12,6)
Calculator(8,4)


// function 
// function without parameter and without return type


function add(){
    console.log(7+7)
}
add()
add()
add()

// function with parameter and without return type

function addB(x,y){
    console.log(x+y)
}
addB(12,3)
addB(34,55)


// function with parameter and with return type

function addC(x,y){
    return x + y
}
let a1 = addC(12,3)
console.log(a1)
console.log(a1+a1)
console.log(a1 * .10)


// type 

let h = 10
console.log(typeof h)

let n = "chinmay"
console.log(typeof n)

let m = true
console.log(typeof m)

console.log(typeof '10')
console.log(typeof 10)


// comparision operator



console.log(6 > 5)
console.log(6 < 9 )
console.log(6 == 6)
console.log(6  == '6') 
console.log(6 === '6') // value and type

console.log(4 !== '4')  // true
console.log(4 != '4') // false

console.log(3 === 3)
console.log(3 >= 8)
console.log(3 <= 3)


console.log(4 == '4') // value true
console.log( 4 != '4') 



// logical operation 

// AND &&

// True  True  ===> True
// False True  ===> False
// True  False ===> False
// False False ===> False


// OR ||

// True  True  ===> True
// False True  ===> True
// True  False ===> True
// False False ===> False

// NOT !

// True ==> False
// False ==> True

console.log(6 === 6  && 6 !== '6')
console.log( 6 == '6' && 6 <= 5)
console.log(6 > 7 && 6 == 6)
console.log(6 == 8 && 5 !== 5)

// OR

console.log(6 === 6  || 6 !== '6')
//              True || True
console.log( 6 == '6' || 6 <= 5)
//             True || False
console.log(6 > 7 || 6 == 6)
//           False || True 
console.log(6 == 8 || 5 !== 5)
//          False || False


// Not 

console.log(! (5 === '5')) // true
console.log(!(6 !== '6'))










