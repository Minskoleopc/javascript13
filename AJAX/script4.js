// // sync 

// function addition() {
//     console.log("A")
// }

// function additonB() {
//     console.log('B')
// }

// addition()
// additionB()


// // async

// function addtionC() {
//     setTimeout(() => {
//         console.log('C')
//     }, 3000);
// }

// function addtionD() {
//     console.log("D")
// }

// addtionC()
// addtionD()

// // API --- userCreate ----- getUserId ---------UserInfo


// function GeUserInfo() {
//     setTimeout(function () {
//         console.log("user Create")
//     }, 3000)

//     setTimeout(function () {
//         console.log("get id")
//     }, 2000)

//     setTimeout(function () {
//         console.log("get info")
//     }, 1000)

// }
// GeUserInfo()


// // call back hell
// function GeUserInfo() {
//     setTimeout(function () {
//         console.log("user Create"),
//             setTimeout(function () {
//                 console.log("get id"),
//                     setTimeout(function () {
//                         console.log("get info")
//                     }, 1000)
//             }, 2000)
//     }, 3000)
// }
// GeUserInfo()


// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5

//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// // pro.then(function(str){
// //     console.log(str)
// // },function(str){
// //     console.log(str)
// // })

// // pro.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)  
// // })
// // .finally(function(){
// //     console.log("i will exeucute any time")
// // })


// // functions ------- promise 

// function createUser(){
    
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("user create")
//         },3000)
//     })
// }

// function getId(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("get User ID")
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("get User Info")
//         },1000)
//     })
// }

// 
//createUser().then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })


// async await
// async function userInfo(){
//     let a = await createUser()
//     console.log(a)
//     let b  = await getId()
//     console.log(b)
//     let c = await getInfo()
//     console.log(c)
// }
// userInfo()
