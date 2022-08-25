// // scope

// let x = 10 
// console.log(x)
// x = 200
// console.log(x)


// // scope --- let , const , var

// let r = 100
// const j = 200

// console.log(r)
// console.log(j)

// // let and const are blocked scope
// // program 1

// // {
// //     let y = 100
// // }

// // console.log(y)

// // program 2

// // let y = 1000

// // {
// //     let y = 900
// //     console.log(y) // 900
// // }

// // console.log(y) // 1000

// // program 3

// // let y = 900
// // {
// //     console.log(y) // 900
// //     y = 9 
// //     console.log(y) // 9
// // }
// // console.log(y) // 9

// // program 4 

// // {
// //     const yy = 100
// // }
// // console.log(yy)

// // program 5

// // const rrr = 1000
// // {
// //     const rrr = 9000
// //     console.log(rrr) // 9000
// // }
// // console.log(rrr) // 1000

// // Program 6
// // const eee = 1000

// // {
// //     console.log(eee) // 1000
// //     eee = 89999
// //     console.log(eee)
// // }
// // console.log(eee)

// // program7

// // {
// //     var jj = 1050
// // }
// // console.log(jj)


// //conclusion : let and const are blocked scope
// // var is function scoped


// // var numOne = 700

// // function display(){
// //     console.log(numOne) // 700
// //     numOne = 900
// //     console.log(numOne) // 900
// // }
// // console.log(numOne) // 700
// // display()
// // console.log(numOne) // 900

// // var is function scoped

// // function display(){
// //     var  numOne = 900
// //     console.log(numOne) 
// // }
// // display()
// // console.log(numOne)

// // var numOne = 9000

// // function display(){
// //     var numOne = 900
// //     console.log(numOne)  // 900
// // }
// // console.log(numOne) // 9000
// // display()
// // console.log(numOne)  // 900



// let ff = 10
// ff = 800
// console.log(ff)


// var ee = 9000
// ee = 89999
// console.log(ee)

// const u = 999
// u = 9999


// let and const are blocked scope
// var is functionced scope

//assignment
// we can assign new values for varaible declare let and var
// we cannot update value for varaible declare with const


//rp1
// let r  = 899

// {
//     console.log(r) // 899
//     {
//         r = 999
//     }
//     console.log(r) // 999
// }
 
// console.log(r) // 999



// rp2
// let r  = 899

// {
//     console.log(r) // 899
//     {
//         let r = 999
//         console.log(r) // 999
//     }
//     console.log(r) // 899
// }
 
// console.log(r) // 899


// rp3

// var j = 900
// function add(){
//     j = 900
//     {
//         let j = 999
//         console.log(j) //999
//     }
//     console.log(j)//900
//     j = 888
// }
// console.log(j) // 900
// add()
// console.log(j)//888


// lexical scope 




// closures 



// actual difference arrow function and function expression