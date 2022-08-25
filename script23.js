// object literal 
let amol = {
    fullName: "amol rao",
    age: 12,
    rollNo: 34,
    skills: ["python", "javascript", "html", "css"],
    city: "pune"

}
let chinmay = {
    fullName: "chinmay deshpande",
    age: 33,
    rollNo: 22,
    skills: ["python3", "reactjs", "html", "css"],
    city: "Nagpur"
}

// ese class 

// setting the value outside the class

// class Person {
//     fullName = undefined
//     age = undefined
//     rollNo = undefined
//     skills = []
//     city = undefined
// }

// let sarika = new Person()
// let poorva = new Person()
// console.log(sarika)
// console.log(poorva)

// sarika.fullName = "sarika pansare"
// sarika.age = 12
// sarika.rollNo = 23
// sarika.skills.push('html')
// sarika.city = "sangamner"
// sarika.language = "hindi"
// console.log(sarika)
// console.log(poorva)



// setting the object properties at time of object creation


class Person2 {
    constructor(fn,ag,rn,sk,cy){
        this.fullName = fn
        this.age = ag
        this.rollNo = rn
        this.skills = sk
        this.city = cy

    }

}

let amit = new Person2("amit bhure",32,43,["html"],"pune")
let rasika = new Person2("rasika kulkarni",30,43,["html","js"],"pune")
console.log(amit)
console.log(rasika)

// program 3

class Person4 {

    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    setCity(cy){
        this.city = cy
    }
    setSkills(arr){
        this.skills = arr  
    }
    setFullName(fn){
        this.fullName = fn
    }
}


let danish = new Person4()
console.log(danish)

danish.setRollNo(23)
danish.setCity("pune")
danish.setFullName("danish sharma")
danish.setAge(23)
danish.setSkills(["html","skills"])
console.log(danish)

// object literal 
// class and setting value outside the class
//  setting object property values at the time of object creation
// setting the value using setMethod

























// console.log(chinmay)
// console.log(amol)

// // retrive  
// console.log(chinmay.age)
// console.log(chinmay['age'])

// // add 
// chinmay.language = "hindi"
// chinmay['language'] = "marathi"
// // update 
// chinmay.age = 45
// chinmay['age'] = 300
// // delete
// delete chinmay.fullName
// delete chinmay['age']