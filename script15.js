

//    ---------------------------------------------


// difference between let , const and var 
// scope and assignment



// let and const are blocked scope 

// program1
// {
//     let g = 100
// }
// console.log(g)

// program2

// let g = 100
// {
//     let g = 99
//     console.log(g) // 99
// }

// console.log(g) // 100

// program 3

// let g = 100
// {
//     console.log(g) // 100
//     g = 999
//     console.log(g) // 999
// }

// console.log(g)  // 999


// program 4

// {
//     const j = 800
// }

// console.log(j)

// program5
const j = 89
{
    const j = 800
    console.log(j) // 800
}
console.log(j)// 89
console.log(j)//89


// program 6 (error)

// const j1 = 89
// {
//     j1 = 800
//     console.log(j1) 
// }
// console.log(j1)


// program 7

// {
//     var ja = 1000
// }
// console.log(ja)

// program 8

// var h = 900
// function addition(){
//     var h = 100
//     console.log(h) // 100
// }

// addition()
// console.log(h) // 900


// var h = 900
// function addition(){
//     h = 100
//     console.log(h)  // 100
// }
// console.log(h) // 900
// addition()
// console.log(h)  // 100


// let and const are blocked scoped 
// var is functioned scope


// let a = 10
// a = 500
// console.log(a)

// var jv = 55
// jv = 900
// console.log(jv) 

// const gg = 600
// gg = 899











