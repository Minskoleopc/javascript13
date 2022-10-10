class Vehicle {
    constructor(wheel){
        this.wheel = wheel
    } 

    start(){
        console.log('I am starting .....')
    }
    stop(){
        console.log('I am stoping the vehicle')
    } 
}

class  TwoWheeler extends Vehicle {
    constructor(wheel,mirror){
        super(wheel)
        this.mirror = mirror
    }

}

// let activa = new TwoWheeler(2,2)

// console.log(activa.wheel)
// console.log(activa.mirror)
// activa.start()
// activa.stop()



// let scooty = new TwoWheeler(3)
// console.log(scooty.wheel)
// scooty.start()
// scooty.stop()


// let audi = new Vehicle(4)
// audi.start()
// audi.stop()
// console.log(audi.wheel)


// Polymorphism -- overloading 



// class Addition {
//     add(x,y){
//         console.log(x+y);
//     }
//     add(x,y,z){
//         console.log(x+y+z)
//     }

//     add(x,z,y,s){
//         console.log(x+z+y+s)
//     }
// }

// let a = new Addition()
// a.add(12,13,14)


class Addition{
    add(a , b , c , d){
        if(a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
        else if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if(a != undefined && b != undefined){
            console.log(a+b)
        }
    }
}

let a = new Addition()
a.add(12,13,13,44)
a.add(12,13,34)
a.add(12,13)

// overridng   
//----> inheritance 
// different class , same method name , same signature

// worldBank ---- loan(12) ----- save(6)
// sbi  --------  loan(8) ----- save(4)

class worldBank {
    loan(){
        console.log(`The loan percentage will be 12`)
    }
    save(){
        console.log(`The save percentage will be 6`) 
    }
}

class SBI extends worldBank{
    loan(){
        console.log(`The loan percentage will be 7 sbi`)
        super.loan()
    }
    save(){
        console.log(`The save percentage will be 3 sbi`) 
        super.save()
    }

}
class PNB extends worldBank{
    loan(){
        console.log(`The loan percentage will be 2 pnb`)
    }
    save(){
        console.log(`The save percentage will be 1 pnb`) 
    }
}

let pune = new SBI()
pune.loan()
pune.save()

let pune2 = new PNB()
pune2.loan()
pune2.save()

// 9pm ---- 8 am --- lexical scope , closures , difference of arrow and function expression