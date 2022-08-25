//lexical scope
function addition() {
    let a = 10
    let b = 20
    console.log(a + b)
    function additionB() {
        let c = 20
        let d = 15
        console.log(a + b + c + d)
        //console.log(x+y) // not accessible
        function additionC() {
            let x = 190
            let y = 200
            console.log(a + b + c + d + x + y)
            console.log(x + y)
        }
        additionC()
    }
    additionB()
}
//addition()


// closures

// function additionE(x, y) {
//     console.log('hello') // hello
//     return x + y
//     console.log('hello')
// }
// let qwerty = additionE(12, 6)
// console.log(qwerty) // 18

// clousures
function additionF() {
    let r = 100
    let t = 50

    return function () {
        console.log(r + t)
    }

}

let e = additionF()

// let e = function(){
//     console.log(r+t)
// }
//console.log(e)
//e()

// 10 lpa 2.5 , 7 lpa  , 6 lpa 1.5yearss--- cypress


// var x = 10
// console.log(x)
// console.log(window.x)

var fullName = "poorva vyas"

let person = {
    fullName: "chinmay deshpande",
    age: 23,
    rollNo: 23,
    display: function () {
        // this ====> person
        console.log(this.fullName) // "chinmay deshpande"
        function display2() {
            // this ====> person (not)
            // this ====> window
            console.log(this.fullName) // "chinmay deshpande"
        }
        display2()
    }
}
person.display()

// arrow function



