

let city = "pune"
let city2 = 'pune'
let city3 = `pune`

// collection of characters

console.log(city[0])

// Javascript -- Object 
// Human  -----> amol
// property - age , heigh , weight , color
// method - talk(), walk(), sleeping()

// Car ----->  audi
// property ----> color , regNo , model , type
// method - start()  stop()

// Bank ---ICICI account
// property --- bal accNo , accName , IFSC code ,branchName
// method - deposit() , withdrawl()


// string -- object --- property and method


let country = "India"
console.log(typeof country)

// 0 1 2 3 4
// I n d i a

console.log(country[0])
console.log(country[1])

// javascript --- string -- object --- property and method(action)
// method --- action and return type
// Gym--->   excercise ---- muscles


// javascript -- object ----> property and method
// method - action and return type

// 0 1 2 3 4
// A p p l e

let fruit = "Apple"
let a = fruit.length
console.log(a)


let vegetable = "potato"
let b =vegetable.length
console.log(b)
console.log(typeof b)

// String 5 methods
// action and return type

let firstName = "chinmay"

// method - toUpperCase()
// action covert every character to uppercase
// return new string

let c = firstName.toUpperCase()
console.log(c)
console.log(typeof c)

let lastName = "Deshpande"
// method - toLowerCase()
// action - convert every character to lower Case
// return one string 

let d = lastName.toLowerCase()
console.log(d)
console.log(typeof d)

// method - indexOf()
// action - search for the character in string 
// return if found return index else -1

let state = "maharashtra"
let o = state.indexOf('h')
console.log(o)


// includes()
// action - search for the character 
// return -- boolean else false


let district = "nagpur"
let g = district.includes('g')
console.log(g)
let j = district.includes('h')
console.log(j)

// length , toUpperCase() , toLowerCase(), indexOf() , includes()
// String stores the value by index
// Javascript - object --property and method
// method - action and return type


// javascript -- object - property and method

let  firstName2 = "chinmay"
let lastName2 = "deshpande"
let father =    `shirish`

let city4 = "pune"

// 0 1 2 3
// p u n e

// property 

let a2 = city4.length
console.log(a2)

// method  --- action and return type 

let city44 = "Nagpur"
let aa = city44.toUpperCase()
console.log(aa)

let bb = city44.toLowerCase()
console.log(bb)


let cc = city44.includes('Nag')
let dd = city44.includes('u')

console.log(cc)
console.log(dd)

//  0 1 2 3 4 5
//  w a r d h a

let city55 = "wardha"
let ff  =city55.indexOf('z')
console.log(ff)


// trim() , trimStart() , trimEnd()

let city66 = " jaipur"
let jj = city66.length
console.log(jj)

let rrr = city66.trimStart()
console.log(rrr)
console.log(rrr.length)


let city77 = " jaipur "
console.log(city77.length)
let qqq = city77.trimEnd()
console.log(qqq.length)

let city88 = " jaipur "
console.log(city88.length)
let www = city88.trim()
console.log(city88.length)

// trimStart() , trimEnd() , trim()


let city99 = "bhopal"
let kkk =city99.startsWith('b')
let kkk2 = city99.startsWith('bho')
console.log(kkk)
console.log(kkk2)


let city11 = "kanpur"
let qqq1 = city11.endsWith('r')
let qqq2 = city11.endsWith('Pur')

console.log(qqq1)
console.log(qqq2)


let city12 = "chandrapur"

//  0   1  2  3  4  5  6  7  8  9
//  c   h  a  n  d  r  a  p  u  r
// -10 -9 -8 -7 -6  -5 -4 -3 -2 -1

//city12.slice(startposition,endposition(not inclusive))

let e1 = city12.slice(5)
let e2 = city12.slice(5,8)
console.log(city12.slice(2,7))
console.log(city12.slice(-5))
console.log(city12.slice(-10,-5))
console.log(city12.slice(2,-5))
console.log(city12.slice(-9,5))
console.log(city12.slice(-1,-5))

// console.log(e1)
// console.log(e2)

let city13 = "amravati"
let e  = city13.charAt(2)
console.log(e)












