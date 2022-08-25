// call bind and apply


let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

let amol = {
    firstName: "amol",
    lastName: "rao"
}


let fn = chinmay.display
// let fn = function(){
//     console.log(this.firstName+this.lastName)
// }
fn()

// bind()
// let fn = function(){
//     console.log(amol.firstName+amol.lastName)
// }

let fn2 = fn.bind(amol)
fn2()

//----------------------------------


let amol2 = {
    firstName: "amol2",
    lastName: "rao2"
}
let chinmay2 = {
    firstName: "chinmay2",
    lastName: "deshpande2"
}
let poorva2 = {
    firstName: "poorva2",
    lastName: "vyas2"
}

let display = function () {
    console.log(this.firstName + this.lastName)
}

console.log('bind')
display.bind(amol2)()
display.bind(chinmay2)()
display.bind(poorva2)()


// apply()
console.log('apply')
display.apply(amol2)
display.apply(chinmay2)
display.apply(poorva2)

// call()
console.log('call')
display.call(amol2)
display.call(chinmay2)
display.call(poorva2)


let student1 = {
    firstName: "chinmay",
    lastName: "deshpande",

}
let student2 = {
    firstName: "chinmay2",
    lastName: "deshpande2",

}
let student3 = {
    firstName: "chinmay3",
    lastName: "deshpande3",
}

let greet = function (word) {
    console.log(`${word} ${this.firstName} ${this.lastName}`)
}
//student1.greet("hello")
greet.apply(student1,["hi"])
greet.apply(student2,["hello"])
greet.apply(student3,["bye"])

greet.call(student1,"hi")
greet.call(student2,"hello")
greet.call(student3,"bye")

// bind(),call(),apply()*array*