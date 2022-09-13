// // object   --- > property and method

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.display()



// let a = amol.display

// // // let a = function(){
// // //     console.log(this.firstName + this.lastName)
// // // }

// a()


// program 

let amol2 = {
    firstName:"amol2",
    lastName:"rao2",
    age:23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
amol2.display()
let chinmay2  = {
    firstName:"chinmay2",
    lastName:"deshpande2",
    age:23
}

let prajakta = {
    firstName:"prajakta",
    lastName:"rajput",
    age:24
}

// bind
let fn = amol2.display
// let fn = function(){
//     console.log(this.firstName + this.lastName)
// }

//fn = fn.bind(prajakta)
//  fn = function(){
//     console.log(prajakta.firstName + prajakta.lastName)
// }

//fn()

// call()
fn.call(chinmay2)
fn.call(prajakta)

// apply()
fn.apply(chinmay2)
fn.apply(prajakta)

// bind() , call() , bind()



let audi = {
    model:'Q6',
    color:'black'
}

let bwm = {
    model:'sedane',
    color:'white'
}
let tata = {
    model:'Nexa',
    color:'red'
}

let printColor = function(greet){
    console.log(greet)
    console.log(this.color)
}

// call
printColor.call(bwm,"hello Good Morning!")
printColor.call(audi,"hello Good Evening")

printColor.apply(bwm,["hello Good Morning!"])
printColor.apply(audi,["hello Good Evening"])

let q1 = printColor.bind(tata)
q1('Bye !')

























// // //.dot notation and bracket notation

// // // retrive ---->  
// // console.log(amol.firstName)
// // console.log(amol['firstName'])
// // // update 
// // amol.firstName = "ram"
// // amol['firstName'] = "sham"

// // // add 
// // amol.city = "pune"
// // amol['lang'] = "hindi"

// // // delete

// // delete amol.city
// // delete amol['city']

// // amol.display()


