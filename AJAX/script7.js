// // 

// // promise.all()
// // promise.allSettled()
// // promise.race()
// // promise.any()

// // Promise all with all resolve
// // async function getUser(){
// //     let data = await Promise.all([
// //         Promise.resolve("hello"),
// //         Promise.resolve("Bye"),
// //         Promise.resolve("Hi"),
// //     ])
// //     console.log(data)
// // }
// // getUser()

// // async function getUser(){
// //     let data = await Promise.all([
// //         Promise.resolve("hello"),
// //         Promise.reject("Bye"),
// //         Promise.resolve("Hi"),
// //     ])
// //     console.log(data)
// // }
// // getUser()


// // Promise.race()

// async function getUser() {
//     let data = await Promise.race([
//         Promise.resolve("Hello"),
//         Promise.reject("Bye"),
//         Promise.resolve("Hi"),
//     ])
//     console.log(data)
// }
// //getUser()


// async function getUser() {
//     let data = await Promise.race([
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('Hello 3')
//             }, 3000)
//         }),
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('Hello 1')
//             },1000)
//         }),
//         new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve('Hello 2')
//             },2000)
//        })

//     ])
//     console.log(data)
// }
// //getUser()
// // All settled

// async function getUser() {
//     let data = await Promise.allSettled([
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('Hello 3')
//             }, 3000)
//         }),
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('Hello 1')
//             },1000)
//         }),
//         new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve('Hello 2')
//             },2000)
//        })

//     ])
//     console.log(data)
// }
//getUser()

// Promise.any



async function getUser() {
    let data = await Promise.race([
        Promise.reject("bye"), // short circuit
        Promise.resolve("hello"),
        Promise.resolve("hi")
    ])
    console.log(data)
}
//getUser()


async function getUser() {
    let data = await Promise.any([
        Promise.reject("bye"), // short circuit
        Promise.resolve("hello"),
        Promise.resolve("hi")
    ])
    console.log(data)
}
//getUser()



// race -----> reject ----output
// any ----


async function getUser() {
    let data = await Promise.race([
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve('Hello 3')
            }, 3000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject('Hello 1')
            },1000)
        }),
        new Promise(function(resolve){
            setTimeout(function(){
                resolve('Hello 2')
            },2000)
       })

    ])
    console.log(data)
}
getUser()







