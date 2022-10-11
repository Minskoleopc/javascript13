// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }

// additionB()
// additionA()

// program2
// Async
// function additionC(){
//     // setTimeout in nature is async --- so non blocking natue
//     setTimeout(function(){
//         console.log('C')
//     },2000)
// }

// function additonD(){
//     console.log("D")
// }

// additionC()
// additonD()


// Program 3
// userCreate(API) -------getId (API)-------- userinfo(API


//Asyn ------------> sync
function getUserInfo() {
    setTimeout(() => {
        console.log('user created')
    }, 3000);

    setTimeout(() => {
        console.log('get id')
    }, 2000);

    setTimeout(() => {
        console.log('user info')
    }, 1000);
}
//getUserInfo()

// asyn ----- sync ---

// call back hell
function getUserInfo() {
    setTimeout(() => {
        console.log('user created')
        setTimeout(() => {
            console.log('get id')
            setTimeout(() => {
                console.log('user info')
            }, 1000);
        }, 2000);
    }, 3000);
}
//getUserInfo()

// Promises

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 1
//     if (a == b) {
//         resolve("Both are equal !")
//     }
//     else {
//         reject("Both are not equal !")
//     }
// })

// // consuming the promise

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// let pro2 = new Promise(function(resolve,reject){
//     let s = 10
//     let t = 10
//     if(s ==t ){
//         resolve([22,33,44])
//     }
//     else {
//         reject([-22,-33,-44])
//     }
// })

// pro2.then(function(a){
//     console.log(a[1])
// },function(b){
//     console.log(b[1])
// })

// with catch

let pro2 = new Promise(function (resolve, reject) {
    let s = 10
    let t = 10
    if (s == t) {
        resolve([22, 33, 44])
    }
    else {
        reject([-22, -33, -44])
    }
})

pro2.then(function (a) {
    console.log(a[1])
})
    .catch(function (b) {
        console.log(b[1])
    })
    .finally(function () {
        console.log('I will run always')
    })

// prathamesh 
// oops----7:30 pm / 8 am