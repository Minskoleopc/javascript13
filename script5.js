// //             0      1      2       3
// let  names = ["amol","amit","ram","ramesh"]
// console.log(names[0])

// // Javascript -- object -- property and method
// // method -- action and return 
// // property
// let a = names.length
// console.log(a)

// // methods - 23

// let fruits = ["apple","mango","banana"]

// // push()
// // action -- adds the element at the last
// // return - new length of array
// let aa = fruits.push('papaya')
// console.log(aa)
// console.log(fruits)

// let vegetable = ["tomato","potato","brinjal"]

// // unshift()
// // method - adds the element at first
// // return new lenght of arrat

// let bb = vegetable.unshift("ladyfinger")
// console.log(bb)
// console.log(vegetable)

// let city = ["pune","mumbai","banglore"]
// // pop()
// // action - remove the last 
// // return the same element 

// let cc = city.pop()
// console.log(cc)
// console.log(city)


// // shift()
// // action - removes the firstElement 
// // return - same element 

// let country = ["India","Pakistan","Bangladesh"]
// let dd = country.shift()
// console.log(dd)
// console.log(country)


// // array -- property and method

// // length 
// // method --- push(''),unshift(''),pop(),unshift() 

// //includes()
// //          0      1      2       3
// let car = ["audi","bmw","tata","mercedes"]
// let qq =car.includes('Audi')
// console.log(qq)

// //indexof()

// let hh = car.indexOf('bmw')
// let gg = car.indexOf('BMW')
// console.log(hh)
// console.log(gg)

// sat - 9:30 pm


// Object --- property and method 
// method --- action and return type

//             0            1       2
let names  = ["chinmay","shirish","ram"]

console.log(names[0]) // chinmay


// property 
let a = names.length
console.log(a)


// method 

names  = ["chinmay","shirish","ram"]

let bb  =names.push('sarika')
console.log(bb)
console.log(names)

let cc  =names.unshift('poorva')
console.log(cc)
console.log(names)


let dd  =names.pop()
console.log(dd)
console.log(names)


let ee  =names.shift()
console.log(ee)
console.log(names)

let ff  =names.includes("chinmay")
console.log(ff)

let gg  =names.indexOf("ram")
let hh = names.indexOf('Ram')
console.log(gg)
console.log(hh)


//------------------------------------------------>

//             0          1       2       3
let fruits = ["apple","mango","banana","chikoo"]

console.log(fruits[0])
console.log(fruits[fruits.length-1])

// length - 1 is always index which will give you last element

for(let i = 0 ; i < 4; i++){ // 1 // 2 // 3 // 4
    console.log(i) // 0 // 1 // 2 // 3
}

for(let i = 1 ; i < 4 ; i++){  //1 //2 //3 // 4
    console.log(i) // 1 // 2 // 3
}

///                0         1         2        3
let vegetable = ["potato","tomato","brinjal","cabbage"]

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    console.log(vegetable[i])
   // console.log('hello')
    // i - 0
    // i - 1
    // i - 2
    // i - 3
}




// // program 1

// //            0     1    2    3
// let years = [1989,1990,1991,1992]
// let ages = [] 
// // [33,32,31,30]

// for(let i = 0 ; i < 4 ; i++){
//     //console.log(i)
//     //console.log(years[i])
//     //console.log(2022 - years[i])
//     let ag = 2022 - years[i]
//     ages.push(ag)

// }
// console.log(ages)

// // program2 
// //             0   1  2  3  4   5
// let numbers = [44,55,11,22,33,10]
// let above30 = []
// //[44,55,33]

// for(let i = 0 ; i < numbers.length ; i++){
//     //console.log(i)
//     //console.log(numbers[i])
//     if(numbers[i] > 30){
//         above30.push(numbers[i])
//     }
// }
// console.log(above30)

// // program 3
// //            0  1   2
// let marks  = [11,22,33]  // 66
// let sum = 0

// for(let i = 0 ; i < marks.length ; i++){
//     //console.log(i)
//    // console.log(marks[i])

//    sum = sum + marks[i]
//    //    0   +    11    ====> 11
//    //    11  +     22   =====> 33
//    //     33  +    33   =====>  66
// }

// console.log(sum)





///          0     1    2   3  
let year = [1989,1990,1991,1992]
let ages = []

for(let i = 0 ; i < year.length ; i++){
    // console.log(i)
    // console.log(year[i])
    //console.log(2022 - year[i])
    let ag = 2022 - year[i]
    ages.push(ag)
}
console.log(ages)

year = [1989,1990,1991,1992]
let aaa = year.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2022 - el
})
console.log(aaa)

let f = [11,22,33,44]
// [13,24,35,46]
let ooo = f.map(function(el,index,arr){
    return el + 2
})
console.log(ooo)


let numbers = [33,44,22,33,44,55]
let above30 = []

for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] > 30){
        above30.push(numbers[i])
    }
}
console.log(above30)

let bbb = numbers.filter(function(el,index,arr){
    //console.log(el,index,arr)
    return el > 30
})

console.log(bbb)

let nam = ["amol","amit","chinmay","jyoti"]
// ["chinmay","jyoti"]

let ccc = nam.filter(function(el,index,arr){
    return el.length > 4
})
console.log(ccc)



let iii =  [1,2,3,4,5,6,7,8,9,10]
let qqq = iii.map(function(el,index,arr){
    return el * 2
})
console.log(qqq)

let ddd = iii.filter(function(el,index,arr){
    return el > 5
})
console.log(ddd)

//             0         1     2
let city = ["nagpur","mumbai","pune","wardha"]

//console.log(city[2].length)
let qqqq = city.filter(function(el,index,arr){
    return el.length > 4
})
console.log(qqqq)


// program 3

let marks = [11,22,33]
let sum = 0

for(let i = 0 ; i < marks.length ; i++){
    sum = sum + marks[i]
    //     0   +  11 =====> 11
    //    11   +   22  =====> 33
    //    33   +   33   =====> 66
}
console.log(sum)

let aaaz = marks.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(aaaz)
























// method --- gym action - exercise 
// return --- muscles

// function add(x,y){
//     console.log(x+y) // 25
//     return "hello"
// }
// let r = add(12,13)
// console.log(r[0])
