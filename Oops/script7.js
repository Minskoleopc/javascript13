//  over loading and overriding 
// overloading --- same class class method , different signature
// overriding ---  different class , same method name and same signture
class Addition {
    add(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
    }

}
let a = new Addition()
a.add(12, 13, 14, 15)
a.add(12, 13, 14)
a.add(12, 13)

// Overriding 

class WorldBank {
    save() {
        console.log('I am from save method  WB')
    }

    loan() {
        console.log('I am from loan method WB')
    }
}

class SBI extends WorldBank {
    save() {
        console.log('I am from save method SBI')
        super.save()
    }

    loan() {
        console.log('I am from loan method SBI')
        super.loan()
    }

}

let q1 = new SBI()
q1.save()
q1.loan()


// Encapsulation???
class Person2 {
    constructor(fn, ln) {
        let firstName = fn;
        let lastName = ln;
        this.displayName = function () {
            console.log(firstName + lastName)
        }
    }
}

let person = new Person2("chinmay", "deshpande")
// console.log(person.firstName)
// console.log(person.lastName)
person.displayName()


// Encapsulation
function addition(){
    let x = 10
    let y = 20
    return [x,y]
}
let q11 = addition()
console.log(q11[0])
console.log(q11[1])

class Vehicle {
  static color ="red"
  static displayColor = function(){
    console.log(Vehicle.color)
  }
}
Vehicle.displayColor()
console.log(Vehicle.color)
// count the number objects created via class

