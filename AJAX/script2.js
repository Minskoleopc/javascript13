
// sync ---- block in nature

// function addition(){
//     console.log('A')
// }
// function additonB(){
//     console.log('B')
// }
// additionB()
// addition()

// async --non blocking in nature
// function additionC(){
//     setTimeout(function(){
//         console.log('C')
//     },2000)
// }

// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()

// Multiple async

// user creation 
// getId
// userInfo

// function GetInfo(){
//     setTimeout(function(){
//         console.log("User create")
//     },3000)

//     setTimeout(function(){
//         console.log("Get id")
//     },2000)

//     setTimeout(function(){
//         console.log("Get info")
//     },1000)
// }
// GetInfo()

// call back hell




// function GetInfo() {
//     setTimeout(function () {
//         console.log("User create")
//         setTimeout(function () {
//             console.log("Get id")
//             setTimeout(function () {
//                 console.log("Get info")
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// GetInfo()

// Promises
// let pro = new Promise(function(resolve,reject){
//     let  a = 10
//     let b = 5
//     if(a == b){
//         resolve("Hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// consume
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
//     return [2,3,4]
// })
// .then(function(aa){
//     console.log(aa)
//     return aa[0]
// })
// .then(function(a){
//     console.log(a)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log(str)
// })


// function GetInfo() {
//     setTimeout(function () {
//         console.log("User create")
//         setTimeout(function () {
//             console.log("Get id")
//             setTimeout(function () {
//                 console.log("Get info")
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// GetInfo()

function CreateUser(){
    return  new Promise(function(resolve){
        setTimeout(function(){
            resolve('User create')
        },3000)
    }) 
}

function GetId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Get id')
        },2000)
    })
}

function GetInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Get Info')
        },1000)
    })
}

// CreateUser()
// .then(function(str){
//     console.log(str)
//     return GetId()
// })
// .then(function(str){
//     console.log(str)
//     return  GetInfo()
// })
// .then(function(str){
//     console.log(str)
// })

// async await 

async function getIinformation(){
    let a = await CreateUser()
    console.log(a)
    let b = await GetId()
    console.log(b)
    let c = await GetInfo()
    console.log(c)
    //return c

}
// let s = getIinformation()
// s.then(function(str){
//     console.log(str)
// })

