// program 1 
//              0         1        2        3        4
let names = ["poorva", "rasika", "abhsiha", "sarika", "ram"]

let a0 = names[0]
let a1 = names[1]
let a2 = names[2]
let a3 = names[3]
let a4 = names[4]

console.log(a0)
console.log(a4)

let [b0, b1, b2, b3, b4] = names
console.log(b0)

// program 2

//                0           1
//               0  1  2   0  1   2
let numbers = [[11, 22, 33], [44, 55, 66]]
let [[c0, c1, c2], [d0, d1, d2]] = numbers
console.log(d1, c2)

// program 3


let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 23
}

// let {firstName,lastName,age} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)

let { firstName: fn1, lastName: ln, age: ag } = info
console.log(fn1)
console.log(ln)
console.log(ag)


// program 4

let student = {
    parent: {
        mother: "kanchan",
        father: "shirish"
    },
    sibling: {
        sister: "gauri",
        brother: "ninad"
    }
}

let { parent: { mother: m11, father: f11 }, sibling: { sister: s11, brother: b22 } } = student
console.log(m11 + f11)

//program 5

let students = [
    {
        firstName: "sarika",
        lastName: "pansare"
    }
    ,
    {
        firstName: "amit",
        lastName: "bhure"
    }
]

let [{firstName:f111,lastName:l111},{firstName:f222,lastName:l222}] = students
console.log(f111)
console.log(l222)


// program6
let person = {
    fullName:"poorva vyas",
    skills:["python","djnago","angular","reactjs"]
}

let {fullName:f333,skills:[z0,z1,z2,z3]} = person
console.log(f333)
console.log(z2)


//let {parent:{mother:m1,father:f1},sibling:{sister:s1,brother:bb1}} = student
// console.log(parent)
// console.log(sibling)

// console.log(m1)
// console.log(f1)
// console.log(s1)
// console.log(bb1)